/* Approved archive features. Identity comes from the source athlete master. */
let archiveMasterByName=new Map(),archiveMasterById=new Map();
function archiveInstallMaster(rows){
  archiveMasterByName=new Map();archiveMasterById=new Map();
  rows.forEach(row=>{
    if(!row.athlete_id||!row.canonical_name)return;
    archiveMasterById.set(row.athlete_id,row);
    [row.canonical_name,row.korean_name,...String(row.aliases||'').split('|'),...String(row.previous_names||'').split('|')].filter(Boolean)
      .forEach(name=>archiveMasterByName.set(archiveNameKey(name),row));
  });
}
function archiveAthleteId(name){return archiveMasterByName.get(archiveNameKey(name))?.athlete_id||'';}
const approvedSupplementAliases=archiveSupplementAliases;
archiveSupplementAliases=function(rows){
  const master=[];
  archiveMasterById.forEach(row=>[row.canonical_name,row.korean_name,...String(row.aliases||'').split('|'),...String(row.previous_names||'').split('|')]
    .filter(Boolean).forEach(alias=>master.push({alias_name:alias,canonical_name:row.canonical_name,country:row.country,note:'athlete_id: '+row.athlete_id})));
  return approvedSupplementAliases(rows.concat(master));
};
function archiveIsDistanceMedal(row){
  return row.medal_type==='Individual' && !isWorldChampionshipSuperFinalRow(row) &&
    !isRelayEvent(row.event) && ['500m','1000m','1500m'].includes(normalizeBestTimeEvent(row.event));
}
function approvedPlayerRows(name){
  const id=archiveAthleteId(name);
  return skaterMedals.filter(row=>id&&row.athlete_id?row.athlete_id===id:row.skater_name===canonicalSkaterName(name));
}
archivePlayerScopeHtml=function(name,individual){
  const rows=approvedPlayerRows(name),distance=rows.filter(archiveIsDistanceMedal);
  const overall=individual.filter(isWorldChampionshipOverallRow);
  const other=individual.filter(row=>!archiveIsDistanceMedal(row)&&!isWorldChampionshipOverallRow(row));
  const relay=rows.filter(r=>r.medal_type==='Relay'),sf=rows.filter(r=>r.medal_type==='SuperFinal');
  const counts=[
    [stLang('세계선수권 종합','Worlds overall'),overall.length],[tr('relay'),relay.length],
    ['Super Final',sf.length],[stLang('기타 개인전','Other individual'),other.length]
  ];
  const current=getFilteredSkaterMedals().filter(row=>row.skater_name===name),count=medalTotal(countMedalBucket(current));
  return `<div class="archive-scope-note" id="playerScopeNote"><p>${stLang(`대표 합계 ${distance.length}개는 500·1000·1500m 거리별 개인전 메달입니다. 종합·계주·Super Final·기타 개인전은 별도 표시합니다.`,
    `The headline ${distance.length} medals covers individual 500m/1000m/1500m events. Overall, relays, Super Finals and other events are separate.`)}</p>
    <div class="approved-separate-counts">${counts.map(([label,value])=>`<span>${escapeHtml(label)} <strong>${value}</strong></span>`).join('')}</div>
    <p>${stLang(`현재 순위 조건에서는 ${count}개입니다. 순위의 검색·시즌·성별·포함 조건은 상세 대표 합계와 다를 수 있습니다.`,
      `Current ranking filters count ${count} medals. Their search, season, gender and inclusion settings may differ from this profile headline.`)}</p>
    <p>${stLang('최고기록은 수록 경기 안의 최솟값입니다. 공인 PB나 실제 데뷔·은퇴 정보는 별도로 추가하지 않습니다.','Best times are minima within collected results. No verified career PB or debut/retirement claims are inferred.')}</p>
    <div class="approved-player-actions"><button class="sort-btn" onclick="archiveComparePlayer('${escapeJs(name)}')">${stLang('이 선수와 비교','Compare this skater')}</button>
    <button class="sort-btn" onclick="approvedMakeCard('${escapeJs(name)}')">${stLang('이 선수 카드 만들기','Make this skater’s card')}</button>
    <button class="sort-btn" onclick="approvedStartTier('${escapeJs(name)}')">${stLang('이 선수로 티어메이커 시작','Start tier maker with this skater')}</button></div></div>`;
};
function approvedMakeCard(name){
  document.getElementById('fanCardName').value=canonicalSkaterName(name);updateFanCard();closePlayerPanel();scrollToSection('cardMakerSection');
}
function approvedStartTier(name){
  if(!window.archiveSeedTierAthlete?.(canonicalSkaterName(name)))return;
  closePlayerPanel();scrollToSection('tierMakerSection');
}
archiveComparePlayer=function(name){
  const select=document.getElementById('comparePlayerA');setupComparePlayerSelects();
  if(![...select.options].some(option=>option.value===name)){
    compareGender='all';compareSeason='';compareEraStart='';compareEraEnd='';
    ['compareSeasonFilter','compareEraStart','compareEraEnd'].forEach(id=>{document.getElementById(id).value='';});
    document.querySelectorAll('.compare-gender-tab').forEach(btn=>btn.classList.toggle('active',btn.dataset.compareGender==='all'));
    setupComparePlayerSelects();
  }
  select.value=name;select.dispatchEvent(new Event('change',{bubbles:true}));
  closePlayerPanel();scrollToSection('compareSection');document.getElementById('comparePlayerBSearch')?.focus({preventScroll:true});
};
function approvedSeasonTrend(name){
  const rows=approvedPlayerRows(name).filter(archiveIsDistanceMedal),map=new Map();
  rows.forEach(row=>{if(!map.has(row.season))map.set(row.season,[]);map.get(row.season).push(row);});
  const seasons=[...map.keys()].sort((a,b)=>seasonSortValue(a,a)-seasonSortValue(b,b));
  const max=Math.max(1,...seasons.map(season=>map.get(season).length));
  return `<figure class="approved-trend" id="playerSeasonTrend" data-athlete-id="${escapeHtml(archiveAthleteId(name))}">
    <figcaption><strong>${stLang('시즌별 거리별 개인전 메달 추이','Distance-event medals by recorded season')}</strong><p>${stLang('수록 메달이 있는 시즌만 표시합니다. 종합·계주·Super Final·기타 개인전 제외.','Only seasons with recorded medals are shown. Excludes overall, relays, Super Finals and other events.')}</p></figcaption>
    <div class="approved-chart-legend"><span class="approved-gold">${tr('gold')}</span><span class="approved-silver">${tr('silver')}</span><span class="approved-bronze">${tr('bronze')}</span></div>
    <div class="approved-trend-scroll"><div class="approved-trend-bars">${seasons.map(season=>{const b=countMedalBucket(map.get(season));const title=`${season} · ${tr('gold')} ${b.gold} · ${tr('silver')} ${b.silver} · ${tr('bronze')} ${b.bronze}`;
      return `<button class="approved-season-bar" onclick="openSeasonPage('${escapeJs(season)}')" aria-label="${escapeHtml(title)}" title="${escapeHtml(title)}"><span class="approved-stack" aria-hidden="true"><i class="approved-bronze" style="height:${b.bronze/max*140}px"></i><i class="approved-silver" style="height:${b.silver/max*140}px"></i><i class="approved-gold" style="height:${b.gold/max*140}px"></i></span><strong>${map.get(season).length}</strong><span>${escapeHtml(season)}</span></button>`;}).join('')}</div></div>
    <details><summary>${stLang('정확한 수치를 표로 보기','View exact counts as a table')}</summary><table><thead><tr><th>${tr('season')}</th><th>${tr('gold')}</th><th>${tr('silver')}</th><th>${tr('bronze')}</th><th>${tr('total')}</th></tr></thead><tbody>${seasons.map(season=>{const b=countMedalBucket(map.get(season));return `<tr><th>${escapeHtml(season)}</th><td>${b.gold}</td><td>${b.silver}</td><td>${b.bronze}</td><td>${map.get(season).length}</td></tr>`;}).join('')}</tbody></table></details></figure>`;
}
const approvedOriginalOverview=renderPlayerOverview;
renderPlayerOverview=window.renderPlayerOverview=function(name){
  const result=approvedOriginalOverview(name);
  document.getElementById('playerOverviewTable')?.insertAdjacentHTML('beforeend',approvedSeasonTrend(name));return result;
};
function approvedComparisonChoices(select,query){
  const key=archiveNameKey(query);
  return [...select.options].filter(option=>option.value).filter(option=>{
    const name=option.value,local=koreanAliasForSkater(name);
    return !key||archiveAthleteSearchText({name,local,country:'',gender:'',activity:''}).includes(key);
  }).slice(0,16);
}
function approvedSetupComparisonSearch(){
  ['comparePlayerA','comparePlayerB'].forEach(id=>{
    const select=document.getElementById(id);if(!select||document.getElementById(id+'Search'))return;
    const field=document.createElement('div');field.className='approved-combobox';
    const label=document.createElement('label');label.htmlFor=id+'Search';label.dataset.compareLabel=id;
    const input=document.createElement('input');input.id=id+'Search';input.type='search';input.autocomplete='off';
    input.setAttribute('role','combobox');input.setAttribute('aria-autocomplete','list');input.setAttribute('aria-expanded','false');input.setAttribute('aria-controls',id+'Options');
    const list=document.createElement('div');list.id=id+'Options';list.className='approved-comparison-options';list.setAttribute('role','listbox');list.hidden=true;
    field.append(label,input,list);select.before(field);select.hidden=true;
    let active=-1,choices=[];
    const close=()=>{list.hidden=true;input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');active=-1;};
    const choose=option=>{select.value=option.value;input.value=option.value;delete input.dataset.dirty;close();select.dispatchEvent(new Event('change',{bubbles:true}));};
    const open=()=>{
      choices=approvedComparisonChoices(select,input.value);list.replaceChildren();active=-1;
      choices.forEach((option,index)=>{
        const button=document.createElement('button');button.type='button';button.id=id+'Option'+index;button.setAttribute('role','option');button.setAttribute('aria-selected','false');
        button.textContent=option.value;
        button.addEventListener('mousedown',e=>e.preventDefault());button.addEventListener('click',()=>choose(option));list.append(button);
      });
      if(!choices.length){const empty=document.createElement('p');empty.textContent=tr('noSearchResults');list.append(empty);}
      list.hidden=false;input.setAttribute('aria-expanded','true');
    };
    input.addEventListener('input',()=>{input.dataset.dirty='1';close();});
    input.addEventListener('blur',()=>setTimeout(close,120));
    input.addEventListener('keydown',event=>{
      if(event.isComposing)return;
      if(event.key==='Escape'){close();return;}
      if(['ArrowDown','ArrowUp'].includes(event.key)){
        if(list.hidden)return;event.preventDefault();if(!choices.length)return;
        active=(active+(event.key==='ArrowDown'?1:-1)+choices.length)%choices.length;
        [...list.children].forEach((el,i)=>el.setAttribute('aria-selected',String(i===active)));
        input.setAttribute('aria-activedescendant',id+'Option'+active);list.children[active].scrollIntoView({block:'nearest'});
      }else if(event.key==='Enter'){event.preventDefault();if(list.hidden){open();return;}if(choices[active>=0?active:0])choose(choices[active>=0?active:0]);}
    });
    select.addEventListener('change',()=>{delete input.dataset.dirty;if(select.value)input.value=select.value;else input.value='';});
  });approvedSyncComparisonSearch();
}
function approvedSyncComparisonSearch(){
  ['comparePlayerA','comparePlayerB'].forEach(id=>{
    const input=document.getElementById(id+'Search'),select=document.getElementById(id);if(!input)return;
    input.placeholder=stLang('선수 이름 검색','Search skater names');
    document.querySelector(`[data-compare-label="${id}"]`).textContent=tr(id==='comparePlayerA'?'selectPlayerA':'selectPlayerB');
    if(select.value&&!input.dataset.dirty)input.value=select.value;
  });
}
const approvedOriginalCompareSetup=setupComparePlayerSelects;
setupComparePlayerSelects=window.setupComparePlayerSelects=function(){const result=approvedOriginalCompareSetup();approvedSyncComparisonSearch();return result;};
function approvedRenderHome(){
  let section=document.getElementById('archiveQuickStart');
  if(!section){
    section=document.createElement('section');section.id='archiveQuickStart';section.className='card anchor-section';
    section.innerHTML='<div class="approved-home-search"><label for="archiveHomeSearch"></label><input type="search" id="archiveHomeSearch" autocomplete="off"></div><h2 id="approvedRecentTitle"></h2><div id="approvedRecentCompetitions" class="approved-recent-grid"></div><button class="sort-btn approved-share-current" type="button"></button>';
    document.querySelector('main').prepend(section);
    const input=section.querySelector('input');input.addEventListener('input',()=>{searchInput.value=input.value;document.getElementById('mobileSearchInput').value=input.value;});
    input.addEventListener('keydown',event=>{if(event.key==='Enter'&&!event.isComposing){event.preventDefault();commitSearchAndScrollToResults();}});
    section.querySelector('.approved-share-current').addEventListener('click',()=>approvedShareLink());
  }
  section.querySelector('label').textContent=stLang('선수·국가·대회 통합 검색','Search skaters, countries and competitions');
  section.querySelector('input').placeholder=stLang('선수명, 국가 코드, 시즌…','Skater name, country code, season…');
  section.querySelector('.approved-share-current').textContent=stLang('현재 조건으로 링크 복사','Copy link with current settings');
  section.querySelector('#approvedRecentTitle').textContent=stLang('최근 시즌 대회 바로 보기','Explore recent-season competitions');
  const map=new Map();medals.forEach(row=>{const key=[row.competition_name,row.season].join('|');if(!map.has(key))map.set(key,row);});
  const rows=[...map.values()].sort((a,b)=>seasonSortValue(b.season,b.year)-seasonSortValue(a.season,a.year)||a.competition_name.localeCompare(b.competition_name)).slice(0,6);
  section.querySelector('#approvedRecentCompetitions').innerHTML=rows.map(row=>`<a href="?competition=${encodeURIComponent(row.competition_name)}" onclick="event.preventDefault();openCompetitionPanel('${escapeJs(row.competition_name)}')"><strong>${escapeHtml(row.competition_name)}</strong><span>${escapeHtml(row.season)} · ${escapeHtml(translateCompetitionType(row.competition_type))}</span></a>`).join('');
}
function approvedRenderFeatures(){window.archiveRefreshTierSource?.();approvedSetupComparisonSearch();approvedSyncComparisonSearch();approvedRenderHome();approvedRenderHallEvidence();}
document.addEventListener('DOMContentLoaded',()=>{approvedSetupComparisonSearch();approvedRenderHome();approvedRenderHallEvidence();});
window.addEventListener('shorttrack:data-ready',approvedRenderFeatures);
window.addEventListener('shorttrack:snapshot-committed',approvedRenderFeatures);
const approvedPreviousLanguage=setLanguage;
setLanguage=window.setLanguage=function(lang){const result=approvedPreviousLanguage(lang);approvedRenderFeatures();return result;};

// Menu navigation must leave search/detail views before their sections can be shown.
document.addEventListener('click',event=>{
  const nav=event.target.closest('.top-explorer-nav a,.side-nav button,.brand-lockup,.mobile-bottom-nav button:not([data-mobile-nav-target="mobileMoreSheet"]),#mobileMoreSheet .mobile-quick-btn');
  if(!nav)return;
  document.querySelectorAll('main > .panel.active').forEach(panel=>panel.classList.remove('active'));
  archiveCommittedSearch='';
  ['searchInput','mobileSearchInput','archiveHomeSearch'].forEach(id=>{const input=document.getElementById(id);if(input)input.value='';});
  window.clearTimeout(__filterTimer);
  stSetSearchHomeVisible(true);applyFilters();
  document.querySelectorAll('.mobile-filter-open').forEach(section=>window.closeMobileFilterSection?.(section));
},true);

// Header height changes with view mode, language, visitor status and viewport width.
document.addEventListener('DOMContentLoaded',()=>{
  const header=document.querySelector('header'),submenu=document.querySelector('nav.side-nav');
  if(!header||!submenu)return;
  let frame=0;
  const measure=()=>{
    frame=0;
    const headerHeight=Math.ceil(header.getBoundingClientRect().height);
    const submenuHeight=submenu.getClientRects().length?Math.ceil(submenu.getBoundingClientRect().height):0;
    document.documentElement.style.setProperty('--archive-header-height',headerHeight+'px');
    document.documentElement.style.setProperty('--archive-sticky-height',(headerHeight+submenuHeight)+'px');
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(measure);};
  if(window.ResizeObserver){const observer=new ResizeObserver(schedule);observer.observe(header);observer.observe(submenu);}
  window.addEventListener('resize',schedule,{passive:true});
  measure();
});
