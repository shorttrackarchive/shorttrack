import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {webcrypto} from 'node:crypto';
const calls=[],core={ok:true,generated_at:'2026-11-09T00:00:00Z',medals:[{season:'2026-27'}],relay_members:[],best_times:[],skater_aliases:[]};
let fail=false,eventOptions=[],lapOptions=[];
const context=vm.createContext({window:{},crypto:webcrypto,TextEncoder,AbortSignal,Date,console,
  fetch:async()=>({ok:true,text:async()=>`google.visualization.Query.setResponse(${JSON.stringify({status:'ok',table:{rows:[{c:[{v:'athlete_id'},{v:'canonical_name'}]},{c:[{v:'STA-1'},{v:'Athlete'}]}]}})});`}),
  buildApiUrl:params=>new URLSearchParams(params).toString(),fetchAthleteCountryHistory:async()=>[],
  fetchLiveJson:async url=>{calls.push(url);if(fail)throw new Error('network');if(url.includes('initialData'))return structuredClone(core);if(url.includes('eventRecords'))return {event_records:[{season:'2026-27'}]};return {rows:[{season:'2026-27'}]};},
  extractEventRecordsFromJson:json=>json.event_records,extractLapRowsFromJson:json=>json.rows,
  eventRecordsCache:[],lapRankingRows:[],normalizeSeasonLabel:season=>season,populateLapFilters:rows=>{lapOptions=rows;}});
context.window.archivePrepareEventFilterOptions=rows=>{eventOptions=rows;};
vm.runInContext(fs.readFileSync('archive-data.js','utf8'),context);
const snapshot=await vm.runInContext('archiveFetchCoreData()',context);
assert.equal(snapshot.schema_version,3);assert.equal(snapshot.athlete_master[0].athlete_id,'STA-1');
assert.ok(!('event_records' in snapshot)&&!('lap_rankings' in snapshot));
assert.equal(calls.length,1);assert.match(calls[0],/initialData/);
context.window.archiveSnapshotVersion=snapshot.data_version;
assert.equal((await vm.runInContext('archiveFetchCoreData()',context)).unchanged,true);
vm.runInContext('archivePrepareRankingFilterOptions({medals:[{season:"2026-27"}]})',context);
assert.equal(eventOptions.length,9);assert.equal(lapOptions.length,9);
const before=calls.length;
await vm.runInContext('Promise.all([archiveLoadDataset("event_records"),archiveLoadDataset("event_records")])',context);
assert.equal(calls.length,before+1,'Concurrent optional requests must be shared');
await vm.runInContext('archiveLoadDataset("event_records")',context);assert.equal(calls.length,before+1);
fail=true;await assert.rejects(vm.runInContext('archiveLoadDataset("lap_rankings",true)',context));
fail=false;await vm.runInContext('archiveLoadDataset("lap_rankings",true)',context);
console.log('PASS: core-only bootstrap, stable identity/version, initial filter metadata, lazy/deduplicated datasets and error retry');
