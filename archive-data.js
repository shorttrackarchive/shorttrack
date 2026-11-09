/* Core data first; record and lap datasets are requested independently on demand. */
const archiveDatasetCache=new Map(),archiveDatasetRequests=new Map();
let archiveMasterRequest=null;
async function archivePublicMaster(){
  if(archiveMasterRequest)return archiveMasterRequest;
  archiveMasterRequest=(async()=>{
    const response=await fetch('https://docs.google.com/spreadsheets/d/13k_1b5jg62-ciQSLWgZUAa_07dhUFTHEqcuQZOODgYQ/gviz/tq?tqx=out:json&sheet=athlete_master',{signal:AbortSignal.timeout(30000)});
    if(!response.ok)throw new Error('Athlete master request failed');
    const raw=await response.text(),marker='google.visualization.Query.setResponse(';
    const start=raw.indexOf(marker),end=raw.lastIndexOf(');');
    if(start<0||end<start)throw new Error('Invalid athlete master response');
    const json=JSON.parse(raw.slice(start+marker.length,end));
    if(json.status!=='ok')throw new Error('Athlete master unavailable');
    const values=json.table.rows.map(row=>row.c.map(cell=>cell?.v??''));
    const headers=values.shift();
    if(!headers.includes('athlete_id'))throw new Error('Athlete master headers missing');
    return values.map(row=>Object.fromEntries(headers.map((h,i)=>[h,row[i]??'']))).filter(row=>row.athlete_id&&row.canonical_name);
  })().catch(error=>{archiveMasterRequest=null;throw error;});
  return archiveMasterRequest;
}
async function archiveCoreVersion(json){
  const text=JSON.stringify([json.medals,json.relay_members,json.best_times,json.skater_aliases,json.athlete_master,json.athlete_country_history]);
  const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text));
  return 'core3-'+Array.from(new Uint8Array(digest),v=>v.toString(16).padStart(2,'0')).join('');
}
async function archiveFetchCoreData(){
  const [json,master,history]=await Promise.all([
    fetchLiveJson(buildApiUrl({action:'initialData'})),archivePublicMaster(),fetchAthleteCountryHistory()
  ]);
  if(!['medals','relay_members','best_times','skater_aliases'].every(key=>Array.isArray(json[key])))throw new Error('Incomplete core data');
  json.athlete_master=master;json.athlete_country_history=history;json.schema_version=3;
  json.data_version=await archiveCoreVersion(json);
  return json.data_version===window.archiveSnapshotVersion?{ok:true,unchanged:true,data_version:json.data_version}:json;
}
function archivePrepareRankingFilterOptions(json){
  const seasons=[...new Set((json.medals||[]).map(row=>normalizeSeasonLabel(row.season,row.year)).filter(Boolean))];
  const events=['Women 500 m','Men 500 m','Women 1000 m','Men 1000 m','Women 1500 m','Men 1500 m','Women 3000 m Relay','Men 5000 m Relay','Mixed Team Relay'];
  const options=seasons.flatMap(season=>events.map(event=>({season,event})));
  if(!eventRecordsCache.length)window.archivePrepareEventFilterOptions?.(options);
  if(!lapRankingRows.length)populateLapFilters(options);
}
async function archiveLoadDataset(key,force=false){
  if(!['event_records','lap_rankings'].includes(key))throw new Error('Unknown dataset');
  if(archiveDatasetRequests.has(key))return archiveDatasetRequests.get(key);
  const cached=archiveDatasetCache.get(key);
  if(!force&&cached&&Date.now()-cached.checkedAt<30000)return cached.json;
  const request=(async()=>{
    const params=key==='event_records'?{action:'eventRecords',limit:'50000'}:{action:'lapRankings',limit:'50000',includeRelay:'1',includeRelays:'1',includeAllEvents:'1'};
    const data=await fetchLiveJson(buildApiUrl(params));
    if(key==='event_records'&&!Array.isArray(data.event_records))throw new Error('Invalid record response');
    if(key==='lap_rankings'&&!Array.isArray(data.rows)&&!Array.isArray(data.lap_rankings))throw new Error('Invalid lap response');
    const rows=key==='event_records'?extractEventRecordsFromJson(data):extractLapRowsFromJson(data);
    if(!Array.isArray(rows))throw new Error('Invalid dataset');
    const json={ok:true,[key]:rows,rows:key==='lap_rankings'?rows:undefined};
    archiveDatasetCache.set(key,{json,checkedAt:Date.now()});
    if(window.archiveCurrentSnapshot)window.archiveCurrentSnapshot[key]=rows;
    return json;
  })().finally(()=>archiveDatasetRequests.delete(key));
  archiveDatasetRequests.set(key,request);return request;
}
async function archiveRefreshRequestedDatasets(){
  const tasks=[];
  if(archiveDatasetCache.has('event_records'))tasks.push(archiveLoadDataset('event_records').then(json=>window.archiveApplyEventSnapshot?.(json)));
  if(archiveDatasetCache.has('lap_rankings'))tasks.push(archiveLoadDataset('lap_rankings').then(json=>applyLoadedLapRankingsJson(json,lapRankingLoaded)));
  await Promise.all(tasks.map(task=>task.catch(error=>console.warn('Dataset refresh failed; keeping displayed results',error))));
}
