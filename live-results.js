/* Versioned core snapshots; optional datasets retain independent refresh lifecycles. */
const LIVE_RESULTS_INTERVAL_MS=30000;
const LIVE_SNAPSHOT_KEY='shorttrack_core_snapshot_v3';
let liveResultsBusy=null,liveResultsTimer=0,liveResultsFingerprint='',liveResultsCheckedAt=0,liveResultsState='syncing';
let liveResultsLastChangedAt=0;
function liveResultsStatus(state){
  liveResultsState=state;
  const bar=document.getElementById('liveResultsStatus');
  if(bar)bar.hidden=true;
  const status=document.getElementById('loadingStatus');
  if(state==='error'&&!window.archiveCurrentSnapshot&&status){status.dataset.state='error';}
  refreshLoadingStatusText();
}
function liveInitialFingerprint(json){return json.data_version||'';}
function scheduleLiveResults(){
  clearTimeout(liveResultsTimer);
  liveResultsTimer=setTimeout(()=>document.hidden?scheduleLiveResults():refreshLiveResults(),LIVE_RESULTS_INTERVAL_MS);
}
function archiveSnapshotDB(){
  return new Promise((resolve,reject)=>{
    if(!window.indexedDB){reject(new Error('IndexedDB unavailable'));return;}
    const request=indexedDB.open('shorttrack-coherent-snapshots',1);
    request.onupgradeneeded=()=>request.result.createObjectStore('snapshots');
    request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);
  });
}
async function archiveStoredSnapshot(write){
  if(write){const {event_records,lap_rankings,...core}=write;write=core;}
  try{
    const db=await archiveSnapshotDB();
    try{return await new Promise((resolve,reject)=>{
      const tx=db.transaction('snapshots',write?'readwrite':'readonly'),store=tx.objectStore('snapshots');
      const request=write?store.put(write,'latest'):store.get('latest');
      request.onerror=()=>reject(request.error);tx.oncomplete=()=>resolve(write||request.result);tx.onerror=()=>reject(tx.error);
    });}finally{db.close();}
  }catch(_storageError){
    try{if(write)localStorage.setItem(LIVE_SNAPSHOT_KEY,JSON.stringify(write));return write||JSON.parse(localStorage.getItem(LIVE_SNAPSHOT_KEY)||'null');}catch{return null;}
  }
}
function archiveValidateSnapshot(json){
  return json?.ok && json.schema_version===3 && typeof json.data_version==='string' &&
    ['medals','relay_members','best_times','skater_aliases','athlete_master'].every(key=>Array.isArray(json[key]));
}
async function archiveCommitSnapshot(json){
  if(!archiveValidateSnapshot(json)) throw new Error('Incomplete coherent snapshot');
  const previous=window.archiveCurrentSnapshot;
  window.shorttrackRefreshingResults=true;window.archiveCurrentSnapshot=json;
  try{
    if(!await loadData(json)) throw new Error('Could not render snapshot');
    window.archiveSnapshotVersion=json.data_version;archiveRecordState='ready';
    if(Array.isArray(json.event_records))window.archiveApplyEventSnapshot?.(json);
    if(Array.isArray(json.lap_rankings))applyLoadedLapRankingsJson({ok:true,rows:json.lap_rankings},lapRankingLoaded);
    archivePrepareRankingFilterOptions(json);
    refreshLiveDetailPanels();
    window.dispatchEvent(new CustomEvent('shorttrack:data-updated'));
    window.dispatchEvent(new CustomEvent('shorttrack:snapshot-committed',{detail:{version:json.data_version}}));
  }catch(error){
    window.archiveCurrentSnapshot=previous;
    if(previous){await loadData(previous);window.archiveSnapshotVersion=previous.data_version;}
    throw error;
  }finally{window.shorttrackRefreshingResults=false;}
}
function refreshLiveResults(){
  if(liveResultsBusy) return liveResultsBusy;
  liveResultsBusy=(async()=>{
    liveResultsStatus(liveResultsFingerprint?'cached':'syncing');
    try{
      const json=await fetchInitialData();
      if(json.unchanged){
        if(!window.archiveCurrentSnapshot||json.data_version!==window.archiveSnapshotVersion) throw new Error('Unmatched unchanged version');
      }else if(json.data_version!==liveResultsFingerprint){
        await archiveCommitSnapshot(json);liveResultsFingerprint=json.data_version;liveResultsLastChangedAt=Date.now();void archiveStoredSnapshot(json);
      }
      liveResultsCheckedAt=Date.now();liveResultsStatus('live');
      if(!window.shorttrackDataReady){window.shorttrackDataReady=true;window.dispatchEvent(new CustomEvent('shorttrack:data-ready'));}
      await archiveRefreshRequestedDatasets();
      return true;
    }catch(error){console.warn('Live snapshot sync failed',error);liveResultsStatus('error');return !!window.archiveCurrentSnapshot;}
    finally{liveResultsBusy=null;scheduleLiveResults();}
  })();return liveResultsBusy;
}
async function startLiveResults(){
  const snapshot=await archiveStoredSnapshot();let restored=false;
  if(archiveValidateSnapshot(snapshot)){
    try{await archiveCommitSnapshot(snapshot);liveResultsFingerprint=snapshot.data_version;restored=true;}catch(_invalidCache){}
  }
  const request=refreshLiveResults();return restored||await request;
}
async function archiveSnapshotDataset(key,force=false){
  return archiveLoadDataset(key,force);
}
function refreshLiveDetailPanels(){
  const before=window.shorttrackRefreshingResults;window.shorttrackRefreshingResults=true;
  try{
    const player=document.getElementById('playerPanel');
    if(player?.classList.contains('active')){
      const timeline=document.getElementById('playerTimelineDetails'),expanded=timeline?.open,name=player.dataset.playerName;
      window.liveDetailRenderers.PlayerPanel(name);if(expanded){timeline.open=true;renderPlayerTimeline(name);}
    }
    if(document.getElementById('competitionPanel')?.classList.contains('active')) window.liveDetailRenderers.CompetitionPanel(document.getElementById('competitionPanel').dataset.liveName);
    if(document.getElementById('countryPanel')?.classList.contains('active')) window.liveDetailRenderers.CountryPage(document.getElementById('countryPanelName').textContent);
    if(document.getElementById('seasonPanel')?.classList.contains('active')) window.liveDetailRenderers.SeasonPage(document.getElementById('seasonPanelName').textContent);
    renderPlayerComparison();
  }finally{window.shorttrackRefreshingResults=before;}
  window.dispatchEvent(new CustomEvent('shorttrack:detail-updated'));
}
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&Date.now()-liveResultsCheckedAt>=LIVE_RESULTS_INTERVAL_MS)refreshLiveResults();});
window.addEventListener('online',()=>refreshLiveResults());
document.addEventListener('click',event=>{if(event.target.closest('.lang-btn'))queueMicrotask(()=>liveResultsStatus(liveResultsState));});
