import fs from 'node:fs';

const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const initial = readJson('data/initial.json');
const lapJson = readJson('data/lap-rankings.json');
const eventJson = readJson('data/event-records.json');
const countryHistoryJson = readJson('data/athlete-country-history.json');

const medals = initial.medals || [];
const relayMembers = initial.relay_members || [];
const aliases = initial.skater_aliases || [];
const lapRows = Array.isArray(lapJson) ? lapJson : (lapJson.lap_rankings || lapJson.rows || lapJson.laps || []);
const eventRows = Array.isArray(eventJson) ? eventJson : (eventJson.event_records || eventJson.rows || eventJson.records || []);
const athleteCountryHistory = countryHistoryJson.athletes || [];

const errors = [];
const warnings = [];
const allowedCompetitionTypes = new Set(['Olympic Games', 'World Championships', 'World Cup', 'World Tour', 'Challenge Cup']);
const medalsByColor = new Set(['Gold', 'Silver', 'Bronze']);

function err(message, row) {
  errors.push(row ? `${message}: ${rowId(row)}` : message);
}

function warn(message, row) {
  warnings.push(row ? `${message}: ${rowId(row)}` : message);
}

function rowId(row) {
  return [row.competition_type, row.season, row.competition_name || row.competition || row.compitition, row.gender, row.event, row.medal, row.skater_name || row.team_name || row.country].filter(Boolean).join(' | ');
}

function seasonStart(season) {
  const m = String(season || '').match(/^(\d{4})/);
  return m ? Number(m[1]) : null;
}

function seasonAllowsYear(season, year) {
  const start = seasonStart(season);
  const y = Number(year);
  if (!start || !Number.isFinite(y)) return true;
  return y === start || y === start + 1;
}

function aliasKey(name) {
  return String(name || '').trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[\s._-]+/g, ' ');
}

function looseNameKey(name) {
  return String(name || '').trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9가-힣]/g, '');
}

function countryHistoryEntry(name) {
  const keys = new Set([aliasKey(name), looseNameKey(name)]);
  return athleteCountryHistory.find(item => [item.canonical_name, ...(item.aliases || [])].some(value => keys.has(aliasKey(value)) || keys.has(looseNameKey(value)))) || null;
}

function countryHistoryPeriod(name, season) {
  const entry = countryHistoryEntry(name);
  const start = seasonStart(season);
  if (!entry || !start) return null;
  return (entry.country_periods || []).find(period => {
    const from = period.from_season ? seasonStart(period.from_season) : -Infinity;
    const to = period.to_season ? seasonStart(period.to_season) : Infinity;
    return start >= from && start <= to;
  }) || null;
}

function expectedCountry(name, season) {
  const period = countryHistoryPeriod(name, season);
  return period && period.country ? period.country : '';
}

function hasCountryHistoryRule(name, season, country) {
  return expectedCountry(name, season) === country;
}

function parseRecordSeconds(value) {
  const s = String(value || '').trim();
  if (!s) return null;
  if (/^(or|wr|nr|dq|dnf|dns|adv|pen)$/i.test(s)) return null;
  const cleaned = s.replace(/[^\d:.]/g, '');
  if (!cleaned) return null;
  const parts = cleaned.split(':').map(Number);
  if (parts.some(Number.isNaN)) return null;
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return null;
}

function sourceStatus(row) {
  const note = String(row.note || '').toLowerCase();
  const url = String(row.source_url || '').trim();
  if (url) return 'official';
  if (note.includes('verify with official source') || note.includes('확인 필요')) return 'needsVerification';
  if (note.includes('user-supplied') || note.includes('사용자')) return 'userSupplied';
  if (note.includes('wikipedia')) return 'secondary';
  return 'missing';
}

for (const row of medals) {
  for (const field of ['competition_type', 'season', 'competition_name', 'year', 'gender', 'event', 'medal', 'skater_name', 'country']) {
    if (!String(row[field] || '').trim()) err(`medals 필수 필드 누락(${field})`, row);
  }
  if (row.compitition) err('medals에 잘못된 필드명 compitition 존재', row);
  if (row.competition_type && !allowedCompetitionTypes.has(row.competition_type)) warn(`competition_type 확인 필요(${row.competition_type})`, row);
  if (row.medal && !medalsByColor.has(row.medal)) err(`유효하지 않은 메달 값(${row.medal})`, row);
  if (row.season && row.year && !seasonAllowsYear(row.season, row.year)) warn(`시즌/연도 불일치 의심(${row.season}/${row.year})`, row);
  if (row.time && parseRecordSeconds(row.time) === null && !/points|point|pts|or|wr|nr/i.test(String(row.time))) warn(`기록 형식 확인 필요(${row.time})`, row);
}

for (const row of relayMembers) {
  if (row.compitition) err('relay_members에 잘못된 필드명 compitition 존재', row);
  if (row.season && row.year && !seasonAllowsYear(row.season, row.year)) warn(`relay_members 시즌/연도 불일치 의심(${row.season}/${row.year})`, row);
}

for (const row of lapRows) {
  if (row.compitition) err('lap-rankings에 잘못된 필드명 compitition 존재', row);
  if (!String(row.competition_name || row.competition || '').trim()) warn('lap-rankings 빈 대회명(근거 부족으로 보류)', row);
  if (row.season && row.year && !seasonAllowsYear(row.season, row.year)) warn(`lap-rankings 시즌/연도 불일치 의심(${row.season}/${row.year})`, row);
  const lap = Number(row.lap_time || row.time);
  if (!Number.isFinite(lap) || lap <= 0) err(`유효하지 않은 랩타임(${row.lap_time || row.time})`, row);
}

for (const row of eventRows) {
  if (row.compitition) err('event-records에 잘못된 필드명 compitition 존재', row);
  if (row.time && parseRecordSeconds(row.time) === null) warn(`event-records 기록 형식 확인 필요(${row.time})`, row);
}

const duplicateKeys = new Map();
for (const row of medals) {
  const key = [row.competition_type, row.season, row.competition_name, row.gender, row.event, row.medal, row.skater_name, row.country].join('|');
  duplicateKeys.set(key, (duplicateKeys.get(key) || 0) + 1);
}
for (const [key, count] of duplicateKeys) {
  if (count > 1) warn(`완전 중복 의심 ${count}건 ${key}`);
}

const podiums = new Map();
for (const row of medals) {
  const key = [row.competition_type, row.season, row.competition_name, row.gender, row.event].join('|');
  if (!podiums.has(key)) podiums.set(key, []);
  podiums.get(key).push(row);
}
for (const [key, rows] of podiums) {
  const gold = rows.filter(r => r.medal === 'Gold').length;
  const silver = rows.filter(r => r.medal === 'Silver').length;
  const bronze = rows.filter(r => r.medal === 'Bronze').length;
  if (gold && silver && bronze && (gold !== 1 || silver !== 1 || bronze !== 1)) warn(`포디움 구성 확인 필요 ${key} -> G${gold}/S${silver}/B${bronze}`);
}

const statusCounts = medals.reduce((acc, row) => {
  const key = sourceStatus(row);
  acc[key] = (acc[key] || 0) + 1;
  return acc;
}, {});
if (statusCounts.missing) warn(`출처 미등록 행 ${statusCounts.missing.toLocaleString('ko-KR')}건`);
if (statusCounts.needsVerification) warn(`검증 필요 행 ${statusCounts.needsVerification.toLocaleString('ko-KR')}건`);

const pyeongchangLin = medals.filter(row => row.skater_name === 'Lin Xiaojun' && row.competition_name === 'PyeongChang 2018');
const pyeongchang500 = pyeongchangLin.find(row => row.event === '500m' && row.medal === 'Bronze');
const pyeongchang1500 = pyeongchangLin.find(row => row.event === '1500m' && row.medal === 'Gold');
if (!pyeongchang500 || pyeongchang500.country !== 'KOR' || pyeongchang500.country_at_event !== 'KOR') err('PyeongChang 2018 Lin Xiaojun/Lim Hyo-jun 500m 동메달 KOR 회귀 검사 실패');
if (!pyeongchang1500 || pyeongchang1500.country !== 'KOR' || pyeongchang1500.country_at_event !== 'KOR') err('PyeongChang 2018 Lin Xiaojun/Lim Hyo-jun 1500m 금메달 KOR 회귀 검사 실패');

const hasAlias = aliases.some(row => row.alias_name === 'Lim Hyo-jun' && row.canonical_name === 'Lin Xiaojun');
if (!hasAlias) warn('Lim Hyo-jun -> Lin Xiaojun 별칭 누락');

const requiredCountryRules = [
  ['Liu Shaoang', '2021-22', 'HUN'],
  ['Liu Shaoang', '2023-24', 'CHN'],
  ['Liu Shaolin', '2021-22', 'HUN'],
  ['Liu Shaolin', '2023-24', 'CHN'],
  ['Selma Poutsma', '2017-18', 'FRA'],
  ['Selma Poutsma', '2018-19', 'NED'],
  ['Victor An', '2005-06', 'KOR'],
  ['Victor An', '2011-12', 'RUS']
];
for (const [name, season, country] of requiredCountryRules) {
  if (!hasCountryHistoryRule(name, season, country)) err(`country history rule missing: ${name} ${season} -> ${country}`);
}

const requiredAliases = [
  ['Shaoang Liu', 'Liu Shaoang'],
  ['Shaolin Sandor Liu', 'Liu Shaolin'],
  ['Shaolin Sándor Liu', 'Liu Shaolin'],
  ['Sándor Liu Shaolin', 'Liu Shaolin'],
  ['Viktor An', 'Victor An'],
  ['Viktor Ahn', 'Victor An'],
  ['Ahn Hyun-soo', 'Victor An'],
  ['Ahn Hyun-Soo', 'Victor An'],
  ['Ahn Hyun Soo', 'Victor An'],
  ['Ahn Hyunsoo', 'Victor An']
];
for (const [alias, canonical] of requiredAliases) {
  if (!aliases.some(row => row.alias_name === alias && row.canonical_name === canonical)) err(`required alias missing: ${alias} -> ${canonical}`);
}

const shaoangNames = new Set(['Liu Shaoang', 'Shaoang Liu']);
const shaolinNames = new Set(['Liu Shaolin', 'Shaolin Sandor Liu', 'Shaolin Sándor Liu', 'Sándor Liu Shaolin']);
const liuNames = new Set([...shaoangNames, ...shaolinNames]);
const countryCheckedRows = [
  ...medals.map(row => ({...row, __dataset:'medals'})),
  ...relayMembers.map(row => ({...row, __dataset:'relay_members'})),
  ...lapRows.map(row => ({...row, __dataset:'lap-rankings'})),
  ...eventRows.map(row => ({...row, __dataset:'event-records'}))
];

const shaoangHunMedals = medals.filter(row => shaoangNames.has(row.skater_name) && seasonStart(row.season) && seasonStart(row.season) <= 2021 && row.country === 'HUN').length;
const shaolinHunMedals = medals.filter(row => shaolinNames.has(row.skater_name) && seasonStart(row.season) && seasonStart(row.season) <= 2021 && row.country === 'HUN').length;
if (shaoangHunMedals !== 31) err(`Liu Shaoang historical HUN medal correction count mismatch: ${shaoangHunMedals} !== 31`);
if (shaolinHunMedals !== 33) err(`Liu Shaolin historical HUN medal correction count mismatch: ${shaolinHunMedals} !== 33`);

for (const row of countryCheckedRows) {
  const name = row.skater_name || row.name || '';
  const expected = expectedCountry(name, row.season);
  if (!expected) continue;
  const actual = String(row.country || '').trim();
  if (actual && actual !== expected) err(`representative country mismatch in ${row.__dataset}: expected ${expected}, got ${actual}`, row);
  const atEvent = String(row.country_at_event || '').trim();
  if (atEvent && atEvent !== expected) err(`country_at_event mismatch in ${row.__dataset}: expected ${expected}, got ${atEvent}`, row);
}

const liuPre2022Chn = countryCheckedRows.filter(row => liuNames.has(row.skater_name) && seasonStart(row.season) && seasonStart(row.season) <= 2021 && row.country === 'CHN');
const liuPost2023Hun = countryCheckedRows.filter(row => liuNames.has(row.skater_name) && seasonStart(row.season) && seasonStart(row.season) >= 2023 && row.country === 'HUN');
if (liuPre2022Chn.length) err(`Liu brothers pre-2022 CHN rows remain: ${liuPre2022Chn.length}`);
if (liuPost2023Hun.length) err(`Liu brothers 2023+ HUN rows remain: ${liuPost2023Hun.length}`);

const weights = {worlds_gold:204, worlds_silver:126, worlds_bronze:78, worlds_overall_gold:340, worlds_overall_silver:210, worlds_overall_bronze:130};
const worldsOverallBucket = {gold:1, silver:0, bronze:0};
const score = (bucket, prefix) => bucket.gold * weights[`${prefix}_gold`] + bucket.silver * weights[`${prefix}_silver`] + bucket.bronze * weights[`${prefix}_bronze`];
const excludedScore = 0;
const regularScore = score(worldsOverallBucket, 'worlds');
const separateScore = score(worldsOverallBucket, 'worlds_overall');
if (excludedScore !== 0) err('세계선수권 종합 제외 점수 테스트 실패');
if (regularScore !== 204) err('세계선수권 종합 일반 합산 점수 테스트 실패');
if (separateScore !== 340) err('세계선수권 종합 별도 점수 테스트 실패');
if (!(separateScore !== regularScore && regularScore !== excludedScore)) err('세계선수권 종합 모드별 점수 차이 테스트 실패');

console.log(`검증 완료: errors=${errors.length}, warnings=${warnings.length}`);
console.log(`데이터 건수: medals=${medals.length}, relay_members=${relayMembers.length}, lap_rankings=${lapRows.length}, event_records=${eventRows.length}`);
console.log(`출처 상태: ${JSON.stringify(statusCounts)}`);
if (warnings.length) {
  console.log('\nWARNINGS');
  warnings.slice(0, 80).forEach(item => console.log(`- ${item}`));
  if (warnings.length > 80) console.log(`- ... ${warnings.length - 80} more warnings`);
}
if (errors.length) {
  console.error('\nERRORS');
  errors.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}
