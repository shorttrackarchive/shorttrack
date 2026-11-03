/* Shared search, scope labels and loading states. Raw sheet records remain unchanged. */
function archiveNameKey(value){
  return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .normalize('NFC').toLowerCase().replace(/ł/g,'l').replace(/[^a-z0-9가-힣]/g,'');
}

let archiveSearchAliases=new Map();
function archiveSupplementAliases(rows){
  // Explicit Korean aliases only; spelling guesses and athlete-ID migration require review.
  const aliases = [
    ['최민정','Choi Min-jeong'],['김길리','Kim Gil-li'],['심석희','Shim Suk-hee'],
    ['박지원','Park Ji-won'],['황대헌','Hwang Dae-heon'],['이준서','Lee June-seo']
  ];
  const existing=new Set(rows.map(row=>archiveNameKey(row.alias_name)));
  const combined=rows.concat(aliases.filter(([alias])=>!existing.has(archiveNameKey(alias)))
    .map(([alias_name,canonical_name])=>({alias_name,canonical_name,country:'KOR',note:'Reviewed Korean search alias'})));
  archiveSearchAliases=new Map();
  combined.forEach(row=>{
    const key=archiveNameKey(row.canonical_name);
    if(!archiveSearchAliases.has(key)) archiveSearchAliases.set(key,[]);
    archiveSearchAliases.get(key).push(row.alias_name);
  });
  return combined;
}
function archiveAliasesForName(name){
  const aliases=archiveSearchAliases.get(archiveNameKey(name))||[];
  const parts=String(name||'').split(/\s+/);
  return aliases.concat(parts.length>1 ? [parts.slice(1).concat(parts[0]).join(' ')] : []);
}

function archiveAthleteSearchText(item){
  if(item && typeof item.searchText === 'string') return item.searchText;
  const keys = new Set([archiveNameKey(item.name),archiveNameKey(item.local),archiveNameKey(item.country),archiveNameKey(item.gender),archiveNameKey(item.activity)]);
  archiveAliasesForName(item.name).forEach(alias=>keys.add(archiveNameKey(alias)));
  const parts=String(item.name).split(/\s+/);
  if(parts.length>1) keys.add(archiveNameKey(parts.slice(1).concat(parts[0]).join(' ')));
  return [...keys].join('|');
}

function archiveCountryCode(code){
  const raw=String(code||'').trim();
  return raw==='JAP'?'JPN':raw;
}
function archiveCountryLabel(code){
  const iso={KOR:'KR',JPN:'JP',CAN:'CA',CHN:'CN',NED:'NL',USA:'US',GBR:'GB',ITA:'IT',FRA:'FR',GER:'DE',RUS:'RU',HUN:'HU',AUS:'AU',AUT:'AT',BEL:'BE',BUL:'BG',CZE:'CZ',DPR:'KP',ISR:'IL',KAZ:'KZ',LAT:'LV',LTU:'LT',NOR:'NO',POL:'PL',SWE:'SE',TUR:'TR'};
  if(code==='ROC') return currentLang==='en'?'Russian Olympic Committee · ROC':'러시아 올림픽위원회 · ROC';
  try{return iso[code] ? `${new Intl.DisplayNames([currentLang==='en'?'en':'ko'],{type:'region'}).of(iso[code])} · ${code}` : code;}catch{return code;}
}

let archiveRecordState='idle';
function archiveRecordStateText(){
  const en=currentLang==='en';
  if(archiveRecordState==='error') return en?'Could not load records · Try again':'기록 조회 실패 · 다시 시도해 주세요';
  if(archiveRecordState==='idle' || archiveRecordState==='loading') return en?'Loading recorded times…':'수록 기록을 불러오는 중…';
  return en?'Not found in the currently collected records':'현재 수록 자료에서 확인되지 않음';
}
function archiveSetRecordState(state){
  archiveRecordState=state;
  if(typeof refreshActivePlayerPersonalBests==='function') refreshActivePlayerPersonalBests();
  window.dispatchEvent(new CustomEvent('shorttrack:records-state'));
}
function archiveSourceLabel(source){
  const text=String(source||'').trim();
  const translated={'기록자료':'Collected results','수동 입력':'Manually entered','기록 자료':'Collected results'};
  return currentLang==='en'?(translated[text]||text||'Collected results'):(text||'수록 경기 자료');
}
function archiveSourceHtml(row){
  const label=escapeHtml(archiveSourceLabel(row.source));
  const url=String(row.source_url||'');
  if(!/^https?:\/\//i.test(url)) return label;
  return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
}
function archivePlayerScopeHtml(name,individual){
  const distance=individual.filter(row=>['500m','1000m','1500m'].includes(normalizeBestTimeEvent(row.event)));
  const overall=individual.filter(isWorldChampionshipOverallRow);
  const other=individual.filter(row=>!distance.includes(row)&&!overall.includes(row));
  const current=getFilteredSkaterMedals().filter(row=>row.skater_name===name);
  const total=medalTotal(countMedalBucket(individual));
  const count=medalTotal(countMedalBucket(current));
  const text=stLang(
    `상세 개인전 합계 ${total}개 = 500·1000·1500m ${distance.length}개 + 세계선수권 종합 ${overall.length}개 + 기타 개인전 ${other.length}개. 계주·Super Final 제외. 전체 수록 시즌 기준입니다.`,
    `Profile individual total ${total} = 500/1000/1500m ${distance.length} + Worlds overall ${overall.length} + other individual ${other.length}. Excludes relays and Super Finals. Includes all recorded seasons.`);
  const ranking=stLang(`순위의 현재 조건에서는 ${count}개입니다. 검색어·시즌·성별·계주·종합·3000m 포함 설정이 적용됩니다.`,
    `The current ranking filters count ${count} medals. Search, season, gender, relay, overall and 3000m settings apply.`);
  return `<div class="archive-scope-note" id="playerScopeNote"><p>${escapeHtml(text)}</p><p>${escapeHtml(ranking)}</p>
    <p>${stLang('최고기록은 수집 기준을 통과한 수록 경기 안의 최솟값이며, 공인 개인 최고기록 전체를 보장하지 않습니다.','Best recorded times are minima within the collected qualifying results, not verified career-wide personal bests.')}</p>
    <button type="button" class="sort-btn" onclick="archiveComparePlayer('${escapeJs(name)}')">${stLang('이 선수와 비교','Compare this skater')}</button>
    ${archiveRecordState==='error'?`<button type="button" class="sort-btn" onclick="preloadEventRecordFilters()">${stLang('기록 다시 조회','Retry records')}</button>`:''}</div>`;
}
function archiveComparePlayer(name){
  // Expand the player pool when the current comparison filters exclude this athlete.
  const select=document.getElementById('comparePlayerA');
  setupComparePlayerSelects();
  if(![...select.options].some(option=>option.value===name)){
    select.add(new Option(name,name));
  }
  select.value=name;
  renderPlayerComparison();
  closePlayerPanel();
  scrollToSection('compareSection');
  document.getElementById('comparePlayerB')?.focus({preventScroll:true});
}
function archiveRecordConditionsHtml(){
  const ids=['recordGenderFilter','recordSeasonFilter','recordEventFilter','recordCompetitionFilter','recordFinalRankFilter','recordBestOnlyFilter'];
  const values=ids.map(id=>{const el=document.getElementById(id);return el?.selectedOptions[0]?.textContent||'';}).filter(Boolean);
  return `<p class="archive-scope-note" id="recordConditions">${escapeHtml(stLang('적용 조건: ','Filters: ')+values.join(' · '))}</p>`;
}
function archiveRefreshRankingNote(){
  const wrap=document.getElementById('skaterRankingWrap');
  if(!wrap) return;
  let note=document.getElementById('rankingScopeNote');
  if(!note){note=document.createElement('p');note.id='rankingScopeNote';note.className='archive-scope-note';wrap.before(note);}
  const scope=[skaterRankingMode==='individual'?tr('individual'):tr('relay'),skaterSeason||tr('allSeasons'),getSkaterRankingOptionSummary()];
  if(archiveCommittedSearch) scope.push(stLang('검색: ','Search: ')+archiveCommittedSearch);
  const generated=document.getElementById('loadingStatus')?.dataset.generatedAt;
  const version=generated ? stLang('메달 자료 조회 시각: ','Medal data fetched: ')+new Date(generated).toLocaleString(currentLang==='en'?'en-US':'ko-KR') : '';
  note.textContent=stLang('공식 ISU 순위가 아닌 아카이브 비교입니다. 적용 조건: ','Archive comparison, not official ISU rankings. Filters: ')+scope.join(' · ')+(version?' · '+version:'');
}
const archiveOriginalRenderRanking=renderSkaterRanking;
renderSkaterRanking=window.renderSkaterRanking=function(data){
  const result=archiveOriginalRenderRanking(data);
  archiveRefreshRankingNote();
  return result;
};

// Correct descriptions without changing the scoring policy or default order.
Object.assign(I18N.ko,{
  skaterScoreAutoNote:'공식 ISU 순위가 아닌 아카이브 비교 점수입니다. 가중치를 바꾼 뒤 ‘설정’을 눌러 적용하세요.',
  skaterScoreDesc:'가중치를 입력하고 ‘설정’을 누르면 점수순으로 정렬됩니다. 기본 금메달 비율은 올림픽:세계선수권:월드컵·월드투어 = 24:6:1입니다.'
});
Object.assign(I18N.en,{
  helpScoreText:'For the overall ranking, change weights and click Apply. Comparison weights update immediately. These are archive comparison scores, not official ISU rankings.',
  skaterScoreAutoNote:'Archive comparison scores, not official ISU rankings. Change weights and click Apply.',
  skaterScoreDesc:'Enter weights and click Apply to sort by score. Default gold-medal weights: Olympics : Worlds : World Cup/Tour = 24 : 6 : 1.'
});

function archiveRefreshUsabilityLabels(){
  document.querySelectorAll('.archive-weight-settings>summary').forEach(el=>{el.textContent=stLang('가중치 상세 설정','Detailed scoring weights');});
  const sheet=document.getElementById('mobileMoreSheet');
  if(sheet) sheet.setAttribute('aria-label',tr('bottomMore'));
  // A short interpretation note stays visible even when mobile notices are collapsed.
  let lap=document.getElementById('lapClassificationNote');
  if(!lap){lap=document.createElement('p');lap.id='lapClassificationNote';lap.className='archive-scope-note';document.getElementById('lapRankingWrap')?.before(lap);}
  lap.textContent=stLang('랩 분류는 랩 시작·종료 순위 변화 기준이며 영상 판독 전술 분류가 아닙니다. 계주 랩은 개별 주자의 실제 주행을 확정하지 않습니다.', 'Lap categories use start/end rank changes, not video-based tactical analysis. Relay laps do not establish an individual skater’s actual stint.');
}
document.addEventListener('DOMContentLoaded',()=>{
  const sheet=document.getElementById('mobileMoreSheet');
  if(sheet){document.body.append(sheet);sheet.setAttribute('role','dialog');sheet.setAttribute('aria-modal','true');}
  const toggle=document.querySelector('[data-mobile-nav-target="mobileMoreSheet"]');
  toggle?.setAttribute('aria-controls','mobileMoreSheet');toggle?.setAttribute('aria-expanded','false');
  document.querySelectorAll('.mobile-bottom-nav .mobile-nav-icon').forEach(el=>el.remove());
  document.getElementById('athleteDirectorySearch')?.setAttribute('aria-label',stLang('선수명 또는 별칭 검색','Search athlete names or aliases'));
  ['skaterScorePanel','compareScorePanel','eventScorePanel'].forEach(id=>{
    const panel=document.getElementById(id);if(!panel) return;
    const details=document.createElement('details');details.className='archive-weight-settings';
    const summary=document.createElement('summary');details.append(summary);panel.before(details);details.append(panel);
  });
  // Keep focus inside the modal sheet and support Escape on desktop keyboards.
  document.addEventListener('keydown',event=>{
    if(!sheet?.classList.contains('open')) return;
    if(event.key==='Escape'){closeMobileMoreMenu();event.preventDefault();return;}
    if(event.key!=='Tab') return;
    const buttons=[...sheet.querySelectorAll('button:not(:disabled)')].filter(el=>el.getClientRects().length);
    const first=buttons[0],last=buttons.at(-1);
    if(event.shiftKey && document.activeElement===first){event.preventDefault();last?.focus();}
    else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first?.focus();}
  });
  archiveRefreshUsabilityLabels();
});
const archivePreviousSetLanguage=setLanguage;
setLanguage=window.setLanguage=function(lang){
  const result=archivePreviousSetLanguage(lang);
  archiveRefreshUsabilityLabels();
  return result;
};
