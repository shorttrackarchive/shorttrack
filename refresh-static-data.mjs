import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';

if (process.platform === 'win32' && !process.execArgv.includes('--use-system-ca') && process.env.STATIC_DATA_SYSTEM_CA !== '1') {
  const child = spawnSync(process.execPath, ['--use-system-ca', ...process.argv.slice(1)], {
    stdio:'inherit',
    env:{...process.env, STATIC_DATA_SYSTEM_CA:'1'}
  });
  process.exit(child.status ?? 1);
}

const root = process.cwd();
const dataDir = path.join(root, 'data');
const apiBase = 'https://script.google.com/macros/s/AKfycbxkNr8yBRI_ok8aFZd623RmHhNCpyHFKuTvdwxYiczFi_LFff5olScBXSPGPd_-QWepKg/exec';
const generatedAt = new Date().toISOString();
const lapKeys = [
  'competition_type', 'season', 'competition_name', 'city', 'year',
  'gender', 'event', 'round', 'heat', 'skater_name', 'country', 'lap_no',
  'lap_number', 'lap_time', 'split_time', 'split_rank', 'prev_split_rank',
  'auto_context', 'manual_context', 'context_basis'
];

async function fetchJson(params) {
  const url = new URL(apiBase);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 90000);
  try {
    const response = await fetch(url, {signal: controller.signal, headers:{accept:'application/json'}});
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const json = await response.json();
    if (!json || json.ok === false) throw new Error(json?.error || 'API returned an invalid response');
    return json;
  } finally {
    clearTimeout(timer);
  }
}

function assertRows(name, rows, minimum) {
  if (!Array.isArray(rows) || rows.length < minimum) {
    throw new Error(`${name}: expected at least ${minimum} rows, received ${Array.isArray(rows) ? rows.length : 'non-array'}`);
  }
}

function pickRows(rows, keys) {
  return rows.map(row => Object.fromEntries(keys.map(key => [key, row[key] == null ? '' : row[key]])));
}

function preserveEquivalentTypes(rows, baselineRows) {
  return rows.map((row, index) => Object.fromEntries(Object.entries(row).map(([key, value]) => {
    const previous = baselineRows[index]?.[key];
    return [key, String(previous ?? '') === String(value ?? '') ? previous : value];
  })));
}

function writeAtomic(fileName, value) {
  const target = path.join(dataDir, fileName);
  const temporary = `${target}.next`;
  fs.writeFileSync(temporary, JSON.stringify(value));
  JSON.parse(fs.readFileSync(temporary, 'utf8'));
  fs.renameSync(temporary, target);
}

function updateBuildId() {
  const indexPath = path.join(root, 'archive-core.js');
  const buildId = generatedAt.replace(/\D/g, '').slice(0, 14);
  const source = fs.readFileSync(indexPath, 'utf8');
  const next = source.replace(/const STATIC_DATA_BUILD_ID = '[^']+';/, `const STATIC_DATA_BUILD_ID = '${buildId}';`);
  if (next === source) throw new Error('STATIC_DATA_BUILD_ID marker was not found in archive-core.js');
  fs.writeFileSync(indexPath, next);
  const htmlPath=path.join(root,'index.html');
  const html=fs.readFileSync(htmlPath,'utf8');
  fs.writeFileSync(htmlPath,html.replace(/archive-core\.js\?v=[^"\s]+/g,`archive-core.js?v=${buildId}`));
}

const [initial, eventRecords, lapRankings] = await Promise.all([
  fetchJson({action:'initialData'}),
  fetchJson({action:'eventRecords', limit:'50000'}),
  fetchJson({action:'lapRankings', limit:'50000', includeRelay:'1', includeRelays:'1', includeAllEvents:'1'})
]);

assertRows('medals', initial.medals, 6000);
assertRows('relay_members', initial.relay_members, 300);
assertRows('skater_aliases', initial.skater_aliases, 200);
assertRows('event_records', eventRecords.event_records, 4000);
assertRows('lap_rankings', lapRankings.rows, 1500);

const currentLapRows = JSON.parse(fs.readFileSync(path.join(dataDir, 'lap-rankings.json'), 'utf8')).rows || [];
const normalizedLapRows = preserveEquivalentTypes(pickRows(lapRankings.rows, lapKeys), currentLapRows);
const replacements = {
  'event-records.json': {ok:true, generated_at:generatedAt, event_records:eventRecords.event_records},
  'lap-rankings.json': {ok:true, generated_at:generatedAt, rows:normalizedLapRows}
};
const originals = Object.fromEntries(Object.keys(replacements).map(name => [name, fs.readFileSync(path.join(dataDir, name))]));

try {
  Object.entries(replacements).forEach(([name, value]) => writeAtomic(name, value));
  const validation = spawnSync(process.execPath, ['validate-data.mjs'], {cwd:root, stdio:'inherit'});
  if (validation.status !== 0) throw new Error(`Validation failed with exit code ${validation.status}`);
  updateBuildId();
} catch (error) {
  Object.entries(originals).forEach(([name, value]) => fs.writeFileSync(path.join(dataDir, name), value));
  throw error;
}

console.log(`Static data refreshed at ${generatedAt}`);
console.log(`Initial data was checked but preserved for manual review: local medals are curated; API medals=${initial.medals.length}`);
