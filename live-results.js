/* Live Google Sheets results: instant previous response, then network verification. */
const LIVE_RESULTS_INTERVAL_MS = 30000;
const LIVE_SNAPSHOT_KEY = 'shorttrack_live_initial_v1';
let liveResultsBusy = null;
let liveResultsTimer = 0;
let liveResultsFingerprint = '';
let liveResultsCheckedAt = 0;
let liveResultsState = 'syncing';

function liveResultsStatus(state){
  liveResultsState = state;
  let bar = document.getElementById('liveResultsStatus');
  if(!bar){
    bar = document.createElement('div');
    bar.id = 'liveResultsStatus';
    bar.style.cssText = 'display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:12px;margin:8px 0';
    const label = document.createElement('span');
    label.setAttribute('role','status');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'sort-btn';
    button.addEventListener('click',()=>refreshLiveResults());
    bar.append(label, button);
    document.getElementById('loadingStatus')?.after(bar);
  }
  const en = currentLang === 'en';
  const time = liveResultsCheckedAt ? new Date(liveResultsCheckedAt).toLocaleTimeString(en?'en-US':'ko-KR') : '';
  const messages = {
    syncing: en?'Checking Google Sheets…':'구글 시트 최신 결과 확인 중…',
    cached: en?'Showing previous results · Checking Google Sheets…':'이전 조회 결과 표시 중 · 구글 시트 확인 중…',
    live: en?`Live Sheets · Checked ${time} · Every 30 seconds`:`시트 실시간 연동 · ${time} 확인 · 30초마다 갱신`,
    error: en?'Sync failed · Keeping previous results · Retrying automatically':'동기화 실패 · 이전 결과 유지 · 자동 재시도 중'
  };
  bar.firstElementChild.textContent = messages[state];
  const button = bar.lastElementChild;
  button.textContent = en?'Refresh now':'지금 새로고침';
  button.disabled = state === 'syncing' || state === 'cached';
}

function liveInitialFingerprint(json){
  // generated_at changes on every API call, even when the results are identical.
  return JSON.stringify([json.medals,json.relay_members,json.best_times,json.skater_aliases,json.athlete_country_history]);
}

function scheduleLiveResults(){
  clearTimeout(liveResultsTimer);
  liveResultsTimer = setTimeout(()=>{
    if(!document.hidden) refreshLiveResults();
    else scheduleLiveResults();
  }, LIVE_RESULTS_INTERVAL_MS);
}

function refreshLiveResults(){
  if(liveResultsBusy) return liveResultsBusy;
  liveResultsBusy = (async()=>{
    liveResultsStatus(liveResultsFingerprint ? 'cached' : 'syncing');
    try{
      const json = await fetchInitialData();
      const fingerprint = liveInitialFingerprint(json);
      if(fingerprint !== liveResultsFingerprint){
        if(!await loadData(json)) throw new Error('Could not render live results');
        liveResultsFingerprint = fingerprint;
        if(!window.shorttrackDataReady){
          window.shorttrackDataReady = true;
          window.dispatchEvent(new CustomEvent('shorttrack:data-ready'));
        }
        window.dispatchEvent(new CustomEvent('shorttrack:data-updated'));
        if(window.shorttrackDataReady) refreshLiveDetailPanels();
      }
      liveResultsCheckedAt = Date.now();
      try{localStorage.setItem(LIVE_SNAPSHOT_KEY, JSON.stringify({savedAt:liveResultsCheckedAt, value:json}));}catch(_quotaError){}
      liveResultsStatus('live');
      // Large record datasets are only requested when the visitor has used them.
      const records = [];
      if(window.refreshLiveEventRecords) records.push(window.refreshLiveEventRecords());
      if(lapRankingLoaded || lapRankingRows.length) records.push((async()=>{
        const json = await fetchLiveJson(buildApiUrl({action:'lapRankings', limit:50000, includeRelay:1, includeRelays:1, includeAllEvents:1}));
        applyLoadedLapRankingsJson(json, lapRankingLoaded);
      })());
      const results = await Promise.allSettled(records);
      if(results.some(result=>result.status === 'rejected')) liveResultsStatus('error');
      return true;
    }catch(error){
      console.warn('Live results sync failed', error);
      liveResultsStatus('error');
      return !!liveResultsFingerprint;
    }finally{
      liveResultsBusy = null;
      scheduleLiveResults();
    }
  })();
  return liveResultsBusy;
}

async function startLiveResults(){
  let restored = false;
  try{
    // Retire six-hour result caches so the verified live snapshot has storage space.
    ['shorttrack_initial_data_v3','shorttrack_medals_v3','shorttrack_relay_members_v3',
      'shorttrack_best_times_v4','shorttrack_skater_aliases_v3','shorttrack_event_records_v3',
      'shorttrack_lap_rankings_v3','shorttrack_static_event_records_v1',
      'shorttrack_static_event_records_v2','shorttrack_static_lap_rankings_v2'
    ].forEach(key=>localStorage.removeItem(key));
    const snapshot = JSON.parse(localStorage.getItem(LIVE_SNAPSHOT_KEY) || 'null');
    if(snapshot?.value?.ok && Array.isArray(snapshot.value.medals)){
      restored = await loadData(snapshot.value);
      if(restored) liveResultsFingerprint = liveInitialFingerprint(snapshot.value);
    }
  }catch(_invalidSnapshot){}
  const request = refreshLiveResults();
  return restored || await request;
}

document.addEventListener('visibilitychange',()=>{
  if(!document.hidden && Date.now()-liveResultsCheckedAt >= LIVE_RESULTS_INTERVAL_MS) refreshLiveResults();
});
window.addEventListener('online',()=>refreshLiveResults());
document.addEventListener('click',event=>{
  if(event.target.closest('.lang-btn')) queueMicrotask(()=>liveResultsStatus(liveResultsState));
});

function refreshLiveDetailPanels(){
  window.shorttrackRefreshingResults = true;
  try{
    if(document.getElementById('playerPanel')?.classList.contains('active')){
      const timeline = document.getElementById('playerTimelineDetails');
      const expanded = timeline?.open;
      const name = document.getElementById('playerPanel').dataset.playerName;
      window.liveDetailRenderers.PlayerPanel(name);
      if(expanded){timeline.open=true; renderPlayerTimeline(name);}
    }
    if(document.getElementById('competitionPanel')?.classList.contains('active')){
      window.liveDetailRenderers.CompetitionPanel(document.getElementById('competitionPanel').dataset.liveName);
    }
    if(document.getElementById('countryPanel')?.classList.contains('active')){
      window.liveDetailRenderers.CountryPage(document.getElementById('countryPanelName').textContent);
    }
    if(document.getElementById('seasonPanel')?.classList.contains('active')){
      window.liveDetailRenderers.SeasonPage(document.getElementById('seasonPanelName').textContent);
    }
    renderPlayerComparison();
  }finally{window.shorttrackRefreshingResults = false;}
}
