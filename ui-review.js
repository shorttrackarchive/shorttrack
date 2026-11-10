/* Local, reversible presentation review. No scoring or source-data changes. */
(()=>{
  const enabled=document.body.classList.contains('ui-review');
  const local=['localhost','127.0.0.1'].includes(location.hostname);
  const text=(ko,en)=>currentLang==='en'?en:ko;
  const sameText=(node,value)=>{if(node&&node.textContent!==value)node.textContent=value;};
  function comparisonSwitch(){
    if(!local)return;
    const nav=document.createElement('nav');nav.className='review-switch';nav.setAttribute('aria-label','UI comparison');
    for(const [value,label] of [['review','수정안'],['previous','기존안']]){
      const link=document.createElement('a'),url=new URL(location.href);url.searchParams.set('ui',value);
      link.href=url;link.textContent=label;if((value==='review')===enabled)link.setAttribute('aria-current','page');nav.append(link);
    }
    document.body.prepend(nav);
  }
  if(!enabled){document.addEventListener('DOMContentLoaded',comparisonSwitch);return;}
  const defaultValues=new Map();
  const stateWraps=['seasonDirectoryWrap','competitionDirectoryWrap','athleteDirectoryWrap','skaterRankingTableWrap','countryRankingWrap','eventRankingWrap','tableWrap'];
  function refreshStates(){
    const state=document.getElementById('loadingStatus')?.dataset.state||'loading';
    const ready=!!window.shorttrackDataReady||!!window.archiveCurrentSnapshot;
    for(const id of stateWraps){
      const wrap=document.getElementById(id);if(!wrap)continue;
      const empty=wrap.querySelector(':scope > .empty');if(!empty)continue;
      empty.setAttribute('role','status');empty.setAttribute('aria-live','polite');
      if(!ready){
        empty.dataset.reviewLoading='1';empty.removeAttribute('data-i18n');
        const message=state==='error'?text('불러오기 실패','Could not load data'):text('데이터를 불러오는 중','Loading data');
        if(empty.dataset.reviewMessage!==message){
          empty.dataset.reviewMessage=message;empty.replaceChildren(document.createTextNode(message));
          if(state==='error'){
            const retry=document.createElement('button');retry.className='review-retry';retry.type='button';retry.textContent=text('재시도','Retry');
            retry.onclick=()=>{retry.disabled=true;refreshLiveResults().finally(()=>{retry.disabled=false;});};empty.append(retry);
          }
        }
      }else if(empty.dataset.reviewLoading){
        delete empty.dataset.reviewLoading;delete empty.dataset.reviewMessage;
        sameText(empty,text('조건을 선택해 결과를 확인하세요.','Choose filters to show results.'));
      }
    }
  }
  function refreshHome(){
    document.getElementById('searchSection')?.classList.toggle('review-search-idle',!archiveCommittedSearch);
    const recent=document.getElementById('approvedRecentCompetitions');
    const title=document.getElementById('approvedRecentTitle');
    const hasRecent=!!recent?.children.length;
    if(recent)recent.hidden=!hasRecent;if(title)title.hidden=!hasRecent;
    const section=document.getElementById('archiveQuickStart');
    if(section)section.classList.toggle('review-no-recent',!hasRecent);
    const names={skater:['선수','Skater'],country:['국가','Country'],competition:['대회','Competition'],event:['종목','Event'],record:['기록','Record']};
    document.querySelectorAll('[data-mobile-search-type]').forEach(button=>{
      sameText(button,text(...names[button.dataset.mobileSearchType]));
      button.setAttribute('aria-pressed',String(button.classList.contains('active')));
    });
  }
  function enhanceTables(root){
    root.querySelectorAll('table thead tr:last-child th').forEach(th=>{if(!th.hasAttribute('scope'))th.setAttribute('scope','col');});
    root.querySelectorAll('#playerScopeNote,#rankingScopeNote,#lapClassificationNote').forEach(note=>{
      if(note.parentElement.classList.contains('review-scope'))return;
      const details=document.createElement('details');details.className='review-scope';
      const summary=document.createElement('summary');summary.dataset.reviewScope='1';summary.textContent=text('집계 기준·자료 범위','Counting rules and coverage');
      note.before(details);details.append(summary,note);
    });
    root.querySelectorAll('[data-review-scope]').forEach(node=>sameText(node,text('집계 기준·자료 범위','Counting rules and coverage')));
  }
  function enhanceSearch(){
    const view=document.getElementById('stSearchResultView');if(!view)return;
    view.querySelectorAll('.st-result-item .st-result-meta').forEach(meta=>{
      if(meta.closest('.review-search-details'))return;
      const details=document.createElement('details');details.className='review-search-details';
      const summary=document.createElement('summary');summary.textContent=text('부가 통계','More statistics');
      const country=meta.textContent.match(/^([A-Z]{3})\s/);
      if(country){const label=document.createElement('span');label.className='review-result-country';label.textContent=country[1];meta.before(label);}
      meta.before(details);details.append(summary,meta);
    });
    view.querySelectorAll('.st-result-section').forEach(section=>{
      const heading=section.querySelector('h3');
      if(!heading||!['관련 원자료 일부','Sample source rows'].includes(heading.textContent.trim())||section.querySelector('.review-source-rows'))return;
      const details=document.createElement('details');details.className='review-source-rows';
      const summary=document.createElement('summary');summary.textContent=heading.textContent;
      const children=[...section.children].filter(el=>el!==heading);details.append(summary,...children);heading.replaceWith(details);
    });
    enhanceTables(view);
  }
  function selectedControls(section){
    return [...section.querySelectorAll('.mobile-filter-panel select,.mobile-filter-panel input:not([type=number]),.archive-explorer-toolbar select,.archive-explorer-toolbar input')]
      .filter(el=>el.id&&!el.closest('.score-panel')&&el.type!=='hidden');
  }
  function refreshConditions(section){
    if(section.dataset.reviewDraft==='1')return;
    const controls=selectedControls(section);
    if(!controls.length)return;
    const changed=controls.filter(el=>{
      const value=el.type==='checkbox'?el.checked:el.value;
      return defaultValues.has(el.id)&&defaultValues.get(el.id)!==value;
    });
    section.querySelector('.archive-explorer-toolbar')?.classList.toggle('review-filtered',changed.length>0);
    const toggle=section.querySelector('.mobile-filter-toggle');
    if(toggle){toggle.removeAttribute('data-i18n');sameText(toggle,text('필터','Filters')+(changed.length?' · '+changed.length:''));}
    let summary=section.querySelector('.review-conditions');
    if(!summary){summary=document.createElement('div');summary.className='review-conditions';summary.setAttribute('aria-label',text('현재 조건','Current filters'));const anchor=toggle||section.querySelector('.archive-explorer-toolbar');anchor?.after(summary);}
    const signature=JSON.stringify([currentLang,...changed.map(el=>[el.id,el.type==='checkbox'?el.checked:el.value])]);
    if(summary.dataset.signature===signature)return;summary.dataset.signature=signature;summary.replaceChildren();
    for(const el of changed){
      const button=document.createElement('button');button.type='button';button.className='review-condition';
      const label=el.tagName==='SELECT'?el.selectedOptions[0]?.textContent:el.type==='checkbox'?el.closest('label')?.textContent:el.value;
      button.append(document.createTextNode(String(label||el.value).trim()));
      const cross=document.createElement('span');cross.textContent='×';cross.setAttribute('aria-hidden','true');button.append(cross);
      button.setAttribute('aria-label',text('조건 해제: ','Remove filter: ')+String(label||el.value));
      button.onclick=()=>{const value=defaultValues.get(el.id);if(el.type==='checkbox')el.checked=value;else el.value=value;el.dispatchEvent(new Event(el.tagName==='INPUT'&&el.type!=='checkbox'?'input':'change',{bubbles:true}));queueRefresh();};summary.append(button);
    }
  }
  function refresh(){refreshStates();refreshHome();enhanceTables(document);document.querySelectorAll('main>section').forEach(refreshConditions);}
  let queued=false;
  function queueRefresh(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;refresh();});}
  function setupRecordDraft(section){
    const panel=section?.querySelector('.mobile-filter-panel');if(!panel)return;
    const toggle=section.querySelector('.mobile-filter-toggle');
    let initial=null;
    const controls=()=>[...panel.querySelectorAll('select,input')];
    toggle?.addEventListener('click',()=>{initial=controls().map(el=>[el,el.value]);section.dataset.reviewDraft='1';});
    function cancel(){
      if(initial){
        const gender=initial.find(([el])=>el.id==='recordGenderFilter');
        if(gender){gender[0].value=gender[1];handleRecordGenderChange();}
        initial.forEach(([el,value])=>{el.value=value;});
      }
      initial=null;delete section.dataset.reviewDraft;queueRefresh();
    }
    // Records already have an explicit Load action; selection changes stay drafts on mobile.
    for(const type of ['change','input'])panel.addEventListener(type,event=>{
      if(!document.body.classList.contains('st-view-mobile')||!initial)return;
      if(event.target.id==='recordGenderFilter')handleRecordGenderChange();
      event.stopImmediatePropagation();
    },true);
    const actions=document.createElement('div');actions.className='review-filter-actions';
    const cancelButton=document.createElement('button');cancelButton.type='button';cancelButton.dataset.reviewCancel='1';
    const apply=document.createElement('button');apply.type='button';apply.className='review-primary';apply.dataset.reviewApply='1';
    cancelButton.onclick=()=>{cancel();panel.querySelector('.mobile-filter-sheet-head button')?.click();};
    apply.onclick=()=>{initial=null;delete section.dataset.reviewDraft;panel.querySelector('.primary-score-btn')?.click();panel.querySelector('.mobile-filter-sheet-head button')?.click();queueRefresh();};
    actions.append(cancelButton,apply);panel.append(actions);
    panel.querySelector('.mobile-filter-sheet-head button')?.addEventListener('click',cancel,true);
    section.querySelector('.mobile-filter-backdrop')?.addEventListener('click',cancel,true);
    panel.addEventListener('click',event=>{if(event.target.closest('.primary-score-btn')){initial=null;delete section.dataset.reviewDraft;}},true);
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&section.classList.contains('mobile-filter-open'))cancel();},true);
    section.addEventListener('change',queueRefresh);
  }
  document.addEventListener('DOMContentLoaded',()=>{
    comparisonSwitch();
    const skip=document.createElement('a');skip.href='#archiveHomeSearch';skip.className='review-skip';skip.textContent=text('검색으로 건너뛰기','Skip to search');
    skip.onclick=event=>{event.preventDefault();document.getElementById(document.body.classList.contains('st-view-mobile')?'mobileSearchInput':'archiveHomeSearch')?.focus();};document.body.prepend(skip);
    const footer=document.createElement('footer');footer.className='review-footer';document.querySelector('main')?.after(footer);
    const visitors=document.querySelector('.visitor-widget');if(visitors)footer.append(visitors);
    const groupStarts=['navSkaterRank','navCompare','navHeatTool'];
    groupStarts.forEach(key=>document.querySelector(`.side-nav [data-i18n="${key}"]`)?.setAttribute('data-review-group-start','1'));
    document.querySelectorAll('main select[id],main input[id]').forEach(el=>defaultValues.set(el.id,el.type==='checkbox'?el.checked:el.value));
    document.querySelectorAll('.archive-explorer-toolbar').forEach(toolbar=>toolbar.classList.add('archive-directory-controls'));
    for(const id of ['recordRankingSection','lapRankingSection'])setupRecordDraft(document.getElementById(id));
    const advancedControls=['recordCompetitionFilter','recordFinalRankFilter','recordBestOnlyFilter'];
    const recordGrid=document.querySelector('.record-ranking-grid');
    if(recordGrid){
      const details=document.createElement('details');details.className='review-advanced';
      const summary=document.createElement('summary');summary.dataset.reviewAdvanced='1';
      const grid=document.createElement('div');grid.className='review-advanced-grid';
      advancedControls.forEach(id=>{const node=document.getElementById(id)?.parentElement;if(node)grid.append(node);});
      details.append(summary,grid);recordGrid.append(details);
    }
    const home=document.getElementById('archiveQuickStart');if(home)new MutationObserver(queueRefresh).observe(home,{childList:true,subtree:true});
    const status=document.getElementById('loadingStatus');if(status)new MutationObserver(queueRefresh).observe(status,{attributes:true,childList:true});
    ['playerOverviewTable','skaterRankingWrap','lapRankingWrap',...stateWraps].forEach(id=>{const node=document.getElementById(id);if(node)new MutationObserver(queueRefresh).observe(node,{childList:true,subtree:true});});
    document.addEventListener('change',queueRefresh);document.addEventListener('input',queueRefresh);
    document.addEventListener('click',()=>queueMicrotask(queueRefresh));
    document.addEventListener('keydown',event=>{
      if(event.key!=='Tab'||!document.body.classList.contains('st-view-mobile'))return;
      const panel=document.querySelector('.mobile-filter-open .mobile-filter-panel');if(!panel)return;
      const items=[...panel.querySelectorAll('button,input,select,summary,a[href]')].filter(el=>!el.disabled&&el.getClientRects().length&&!el.closest('details:not([open]) :not(summary)'));
      const first=items[0],last=items.at(-1);
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
    });
    ['shorttrack:data-ready','shorttrack:data-updated','shorttrack:snapshot-committed'].forEach(type=>window.addEventListener(type,queueRefresh));
    const previous=setLanguage;
    setLanguage=window.setLanguage=function(...args){const result=previous.apply(this,args);queueRefresh();return result;};
    const previousSearch=renderSearchResultView;
    renderSearchResultView=window.renderSearchResultView=function(...args){const result=previousSearch.apply(this,args);enhanceSearch();return result;};
    enhanceSearch();
    refresh();
  });
  const originalRefresh=refresh;
  refresh=function(){
    originalRefresh();
    document.querySelectorAll('[data-review-cancel]').forEach(el=>sameText(el,text('취소','Cancel')));
    document.querySelectorAll('[data-review-apply]').forEach(el=>sameText(el,text('적용·불러오기','Apply and load')));
    document.querySelectorAll('[data-review-advanced]').forEach(el=>sameText(el,text('고급 필터','Advanced filters')));
  };
})();
