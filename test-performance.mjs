import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const html=fs.readFileSync('index.html','utf8');
let checked=0;
for(const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)){
  if(/application\/ld\+json|\bsrc=/.test(match[1])||!match[2].trim())continue;
  new vm.Script(match[2]);checked++;
}
const block=html.slice(html.indexOf('  let tierSummarySource'),html.indexOf('  function tierEscape'));
const source=[{skater_name:'A',medal:'Gold',gender:'Women'},{skater_name:'A',medal:'Silver',gender:'Women'},{skater_name:'B',medal:'Bronze',gender:'Men'}];
const context=vm.createContext({skaterMedals:source});
vm.runInContext(block,context);
assert.equal(vm.runInContext("tierSummary('A').gold",context),1);
assert.equal(vm.runInContext("tierSummary('A').total",context),2);
assert.equal(vm.runInContext("tierSummary('missing').total",context),0);
context.skaterMedals=[{skater_name:'A',medal:'Bronze',gender:'Women'}];
assert.equal(vm.runInContext("tierSummary('A').gold",context),0);
assert.equal(vm.runInContext("tierSummary('A').bronze",context),1);
assert.match(html,/if\(!tierMakerInitialized\) return;\s+const q = tierNorm/);
const refresh=fs.readFileSync('refresh-static-data.mjs','utf8');
assert.ok(!refresh.includes('return [key, previous];'),'Must not substitute historical data by array position');
console.log(`PASS: ${checked} inline scripts; medal cache, invalidation, lazy tier rendering and source-year preservation`);

const eventApply=html.match(/window\.archiveApplyEventSnapshot = function\(json\)\{([\s\S]*?)\n  \};/)[1];
let prepared=0,rendered=0;
const filters=vm.createContext({eventRecordsLoaded:false,eventRecordRows:[],
  prepareEventRecordRows:rows=>rows,extractRecordRowsFromJson:json=>json.event_records,
  populateEventRecordFilters:rows=>{prepared=rows.length;},syncPersonalBestRecordCache:()=>{},
  finishEventRecordLoadFromRows:()=>{rendered++;}});
vm.runInContext(`function applySnapshot(json){${eventApply}}`,filters);
vm.runInContext('applySnapshot({event_records:[{season:"2026-27"}]})',filters);
assert.equal(prepared,1,'Cold-start event filters must be populated before Load');
assert.equal(rendered,0,'Preparing filters must not display results');
vm.runInContext('eventRecordsLoaded=true; applySnapshot({event_records:[]})',filters);
assert.equal(rendered,1,'Loaded results must still refresh');
const live=fs.readFileSync('live-results.js','utf8');
const commit=live.slice(live.indexOf('async function archiveCommitSnapshot'),live.indexOf('function refreshLiveResults'));
let lapPrepared=0,lapRendered=null;
const boot=vm.createContext({window:{archiveApplyEventSnapshot:()=>{},dispatchEvent:()=>{}},
  archiveValidateSnapshot:()=>true,loadData:async()=>true,archiveRecordState:'idle',lapRankingLoaded:false,lapRankingRows:[],
  applyLoadedLapRankingsJson:(json,render)=>{lapPrepared=json.rows.length;lapRendered=render;},
  refreshLiveDetailPanels:()=>{},CustomEvent:class{}});
vm.runInContext(commit,boot);
await vm.runInContext('archiveCommitSnapshot({data_version:"test",lap_rankings:[{season:"2026-27"}]})',boot);
assert.equal(lapPrepared,1,'Cold-start lap filters must be populated before Load');
assert.equal(lapRendered,false,'Cold-start lap preparation must not render results');
console.log('PASS: cold-start record/lap filters prepare options without showing results; loaded results refresh');
