/* Versioned, bounded share state. Only known UI controls and numeric weights are accepted. */
const APPROVED_SHARE_IDS=['searchInput','searchSortSelect','searchIndividualOnly','searchRelayOnly','searchGoldOnly','searchExcludeWorldsOverall','searchExclude3000',
  'skaterSeasonFilter','skaterEraStart','skaterEraEnd','countrySeasonFilter','countryEraStart','countryEraEnd','eventSeasonFilter','eventEraStart','eventEraEnd','compareSeasonFilter','compareEraStart','compareEraEnd','comparePlayerA','comparePlayerB',
  'recordGenderFilter','recordSeasonFilter','recordEventFilter','recordCompetitionFilter','recordFinalRankFilter','recordBestOnlyFilter','recordLimitFilter',
  'lapGenderFilter','lapSeasonFilter','lapEventFilter','lapContextFilter','lapLimitFilter',
  'seasonDirectorySeason','seasonDirectoryType','seasonDirectoryKeyword','competitionDirectorySeason','competitionDirectoryType','competitionDirectoryCity','athleteDirectorySearch','athleteDirectoryCountry','athleteDirectoryGender','athleteDirectorySeason'];
function approvedReadInputWeights(selector){
  const out={};document.querySelectorAll(selector).forEach(input=>{const value=Number(input.value);if(Number.isFinite(value)&&value>=0&&value<=1e9)out[input.dataset.scoreKey]=value;});return out;
}
function approvedShareState(){
  const ui={};APPROVED_SHARE_IDS.forEach(id=>{const el=document.getElementById(id);if(el)ui[id]=el.type==='checkbox'?el.checked:el.value;});
  return {v:1,lang:currentLang,ui,model:{currentMedalFilter,countryRankingGroup,eventRankingEvent,eventRankingGender,compareGender,skaterRankingMode,skaterRankingGender,
    skaterSortKey,skaterSortDir,eventSortKey,eventSortDir,skaterCustomScoreEnabled,skaterRankingOptions:{...skaterRankingOptions},eventRankingOptions:{...eventRankingOptions},compareOptions:{...compareOptions},seasonFilterModes:{...seasonFilterModes},currentLapContext},
    weights:{ranking:{...getAppliedSkaterScoreWeights()},comparison:approvedReadInputWeights('.compare-score-input'),event:approvedReadInputWeights('.event-score-input')}};
}
function approvedBuildShareUrl(params){
  const url=new URL(location.href);
  if(params && Object.keys(params).length){
    ['player','competition','country','season','section'].forEach(key=>url.searchParams.delete(key));
    Object.entries(params).forEach(([key,value])=>{if(['player','competition','country','season','section','q'].includes(key)&&value)url.searchParams.set(key,String(value));});
  }
  url.searchParams.set('state',JSON.stringify(approvedShareState()));url.hash='';return url.href;
}
async function approvedShareLink(params){
  const url=approvedBuildShareUrl(params);
  try{await navigator.clipboard.writeText(url);approvedShareNotice(stLang('현재 조건을 포함한 링크를 복사했습니다.','Copied link with current settings.'));}
  catch{
    const field=document.createElement('textarea');field.value=url;field.setAttribute('readonly','');field.style.cssText='position:fixed;left:-9999px';document.body.append(field);field.select();
    const copied=document.execCommand('copy');field.remove();approvedShareNotice(copied?stLang('링크를 복사했습니다.','Link copied.'):stLang('복사하지 못했습니다. 브라우저의 클립보드 권한을 확인해 주세요.','Could not copy the link. Check browser clipboard permission.'));
  }
  return url;
}
function approvedShareNotice(message){
  let note=document.getElementById('approvedShareNotice');if(!note){note=document.createElement('div');note.id='approvedShareNotice';note.setAttribute('role','status');document.body.append(note);}note.textContent=message;note.hidden=false;setTimeout(()=>note.hidden=true,3500);
}
function approvedApplyInput(id,value){
  const el=document.getElementById(id);if(!el||!APPROVED_SHARE_IDS.includes(id))return;
  if(el.type==='checkbox'){if(typeof value==='boolean')el.checked=value;return;}
  if(typeof value!=='string'||value.length>500)return;
  if(el.tagName==='SELECT'&&![...el.options].some(option=>option.value===value))return;
  if(el.type==='number'&&(!Number.isFinite(Number(value))||Math.abs(Number(value))>1e9))return;
  el.value=value;
}
function approvedRestoreWeights(selector,values){
  document.querySelectorAll(selector).forEach(input=>{const value=values?.[input.dataset.scoreKey];if(typeof value==='number'&&Number.isFinite(value)&&value>=0&&value<=1e9)input.value=String(value);});
}
function approvedEnum(value,allowed,fallback){return allowed.includes(value)?value:fallback;}
let approvedRestoringShare=false;
async function approvedRestoreShareState(){
  const raw=new URLSearchParams(location.search).get('state');if(!raw||raw.length>24000||approvedRestoringShare)return;
  let state;try{state=JSON.parse(raw);}catch{return;}
  if(!state||state.v!==1||!state.ui||typeof state.ui!=='object')return;
  approvedRestoringShare=true;
  try{
    const m=state.model||{};
    skaterRankingGender=approvedEnum(m.skaterRankingGender,['all','men','women'],skaterRankingGender);
    skaterRankingMode=approvedEnum(m.skaterRankingMode,['individual','all'],skaterRankingMode);
    countryRankingGroup=approvedEnum(m.countryRankingGroup,['all','olympics','worlds','worldcup'],countryRankingGroup);
    eventRankingGender=approvedEnum(m.eventRankingGender,['all','men','women','mixed'],eventRankingGender);
    eventRankingEvent=approvedEnum(m.eventRankingEvent,[...document.querySelectorAll('[data-event-rank]')].map(el=>el.dataset.eventRank),eventRankingEvent);
    compareGender=approvedEnum(m.compareGender,['all','men','women'],compareGender);
    currentMedalFilter=approvedEnum(m.currentMedalFilter,['','Gold','Silver','Bronze'],currentMedalFilter);
    currentLapContext=approvedEnum(m.currentLapContext,['all','lead','pass','follow','passed','unknown'],currentLapContext);
    ['includeOlympicDemo','includeWorldsOverall','separateWorldsOverall','includeIndividual3000m'].forEach(key=>{if(typeof m.skaterRankingOptions?.[key]==='boolean')skaterRankingOptions[key]=m.skaterRankingOptions[key];});
    if(typeof m.eventRankingOptions?.includeOlympicDemo==='boolean')eventRankingOptions.includeOlympicDemo=m.eventRankingOptions.includeOlympicDemo;
    if(typeof m.compareOptions?.includeWorldsOverall==='boolean')compareOptions.includeWorldsOverall=m.compareOptions.includeWorldsOverall;
    ['skater','compare','country','event'].forEach(key=>{seasonFilterModes[key]=approvedEnum(m.seasonFilterModes?.[key],['single','range'],seasonFilterModes[key]);});
    // Populate lazy record controls from this same snapshot before restoring their values.
    await window.preloadEventRecordFilters?.();
    if(window.archiveCurrentSnapshot)applyLoadedLapRankingsJson({ok:true,rows:window.archiveCurrentSnapshot.lap_rankings},false);
    Object.entries(state.ui).filter(([id])=>!['comparePlayerA','comparePlayerB'].includes(id)).forEach(([id,value])=>approvedApplyInput(id,value));
    skaterSeason=skaterSeasonFilter.value;compareSeason=compareSeasonFilter.value;countrySeason=countrySeasonFilter.value;eventSeason=eventSeasonFilter.value;
    skaterEraStart=skaterEraStartSelect.value;skaterEraEnd=skaterEraEndSelect.value;compareEraStart=compareEraStartSelect.value;compareEraEnd=compareEraEndSelect.value;
    countryEraStart=countryEraStartSelect.value;countryEraEnd=countryEraEndSelect.value;eventEraStart=eventEraStartSelect.value;eventEraEnd=eventEraEndSelect.value;
    setupComparePlayerSelects();['comparePlayerA','comparePlayerB'].forEach(id=>approvedApplyInput(id,state.ui[id]));
    approvedRestoreWeights('.score-input',state.weights?.ranking);scoreWeights={...SKATER_SCORE_DEFAULTS,...readScoreWeights()};lastAppliedSkaterScoreWeights={...scoreWeights};
    approvedRestoreWeights('.compare-score-input',state.weights?.comparison);approvedRestoreWeights('.event-score-input',state.weights?.event);
    if(typeof m.skaterCustomScoreEnabled==='boolean')skaterCustomScoreEnabled=m.skaterCustomScoreEnabled;
    const sortPattern=/^(default|name|country|custom_score|score|total_(gold|silver|bronze|count|group)|olympic_(gold|silver|bronze|total|group)|worlds_(gold|silver|bronze|total|group)|worlds_overall_(gold|silver|bronze|total|group)|worldcup_(gold|silver|bronze|total|group))$/;
    if(sortPattern.test(m.skaterSortKey||''))skaterSortKey=m.skaterSortKey;if(sortPattern.test(m.eventSortKey||''))eventSortKey=m.eventSortKey;
    skaterSortDir=approvedEnum(m.skaterSortDir,['asc','desc'],skaterSortDir);eventSortDir=approvedEnum(m.eventSortDir,['asc','desc'],eventSortDir);
    document.querySelectorAll('.skater-mode-tab').forEach(el=>el.classList.toggle('active',el.dataset.mode===skaterRankingMode));
    document.querySelectorAll('.skater-rank-gender-tab').forEach(el=>el.classList.toggle('active',el.dataset.rankGender===skaterRankingGender));
    document.querySelectorAll('.compare-gender-tab').forEach(el=>el.classList.toggle('active',el.dataset.compareGender===compareGender));
    document.querySelectorAll('.country-ranking-tab').forEach(el=>el.classList.toggle('active',el.dataset.countryGroup===countryRankingGroup));
    document.querySelectorAll('.event-ranking-tab').forEach(el=>el.classList.toggle('active',el.dataset.eventRank===eventRankingEvent));
    document.querySelectorAll('.ranking-option-tab[data-option]').forEach(el=>el.classList.toggle('active',!!skaterRankingOptions[el.dataset.option]));
    document.querySelectorAll('.medal-tab').forEach(el=>el.classList.toggle('active',el.dataset.medal===currentMedalFilter));
    document.querySelectorAll('.lap-context-tab').forEach(el=>el.classList.toggle('active',el.dataset.lapContext===currentLapContext));
    document.getElementById('mobileSearchInput').value=searchInput.value;
    document.getElementById('archiveHomeSearch').value=searchInput.value;
    updateAllSeasonModeControls();updateCompareOptionTabs();updateEventGenderTabs();updateWorldsOverallScoreFields();updateSkaterScoreStatus('applied');
    if(state.lang==='ko'||state.lang==='en')setLanguage(state.lang);
    applyFilters();renderPlayerComparison();approvedSyncComparisonSearch();refreshLiveDetailPanels();
    window.dispatchEvent(new CustomEvent('shorttrack:data-updated'));
    // Opening shared record sections also reproduces the actual result view.
    const section=new URLSearchParams(location.search).get('section');
    if(section==='recordRankingSection')await loadEventRecords(false);
    if(section==='lapRankingSection')await loadLapRankings(false);
  }finally{approvedRestoringShare=false;}
}
function approvedInstallShareButtons(){
  ['skaterRankingSection','eventRankingSection','countryRankingSection','compareSection','recordRankingSection','lapRankingSection'].forEach(id=>{
    const section=document.getElementById(id);if(!section)return;
    let button=section.querySelector('.approved-share-settings');
    if(!button){button=document.createElement('button');button.type='button';button.className='sort-btn approved-share-settings';button.addEventListener('click',()=>approvedShareLink({section:id}));section.querySelector('.section-title')?.after(button);}
    button.textContent=stLang('이 조건으로 링크 복사','Copy link with these settings');
  });
  window.copyPlayerLink=()=>approvedShareLink({player:document.getElementById('playerPanel').dataset.playerName});
  window.copyCurrentShorttrackLink=params=>approvedShareLink(params);
}
document.addEventListener('DOMContentLoaded',approvedInstallShareButtons);
window.addEventListener('shorttrack:data-ready',()=>{approvedInstallShareButtons();setTimeout(approvedRestoreShareState,220);});
window.addEventListener('popstate',()=>setTimeout(approvedRestoreShareState,180));
document.addEventListener('click',event=>{if(event.target.closest('.lang-btn'))queueMicrotask(approvedInstallShareButtons);});
