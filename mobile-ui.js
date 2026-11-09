(function(){
    const RECENT_PLAYERS_KEY = 'shorttrack_recent_players_v1';
    function mobileEscape(value){
      if(typeof escapeHtml === 'function') return escapeHtml(value);
      return String(value == null ? '' : value).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
    }
    function mobileJs(value){
      if(typeof escapeJs === 'function') return escapeJs(value);
      return String(value == null ? '' : value).replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,'\\n').replace(/\r/g,'');
    }
    function updatePlayerLocalAlias(){
      document.getElementById('playerLocalAlias')?.remove();
    }
    function readRecentPlayers(){
      try{
        const parsed = JSON.parse(localStorage.getItem(RECENT_PLAYERS_KEY) || '[]');
        return Array.isArray(parsed) ? parsed.filter(Boolean).slice(0, 8) : [];
      }catch(_e){
        return [];
      }
    }
    function saveRecentPlayer(name){
      const clean = String(name || '').trim();
      if(!clean) return;
      const next = [clean].concat(readRecentPlayers().filter(item => item !== clean)).slice(0, 8);
      try{ localStorage.setItem(RECENT_PLAYERS_KEY, JSON.stringify(next)); }catch(_e){}
    }
    function buildMobileShortcutMenu(){
      const grid = document.querySelector('#mobileMoreSheet .mobile-more-grid');
      if(!grid) return;
      const en = currentLang === 'en';
      const items = [
        {ko:'검색', en:'Search', descKo:'선수·국가·대회 통합 검색', descEn:'Unified skater, country, and competition search', run:()=>focusMobileSearch()},
        {ko:'도움말', en:'Help', descKo:'데이터 기준과 사용 안내', descEn:'Data notes and usage guide', run:()=>openHelpModal()},
        {ko:'쇼트트랙 아카데미', en:'Short Track Academy', descKo:'쇼트트랙 선수 육성 웹게임', descEn:'Short track skater development web game', run:()=>window.open('https://shorttrackarchive.github.io/shorttrackacademy/','_blank')},
        {ko:'시즌 목록', en:'Season directory', descKo:'시즌별 대회와 결과 탐색', descEn:'Browse competitions and results by season', run:()=>scrollToSection('seasonDirectorySection')},
        {ko:'대회 목록', en:'Competition directory', descKo:'대회 상세 페이지 찾기', descEn:'Find competition detail pages', run:()=>scrollToSection('competitionDirectorySection')},
        {ko:'선수 목록', en:'Athlete directory', descKo:'선수 상세 페이지 찾기', descEn:'Find athlete detail pages', run:()=>scrollToSection('athleteDirectorySection')},
        {ko:'선수별 종합 순위', en:'Overall skater ranking', descKo:'전체 선수 메달·점수 순위', descEn:'Overall skater medal and score ranking', run:()=>scrollToSection('skaterRankingSection')},
        {ko:'종목별 선수 순위', en:'Event skater ranking', descKo:'거리·종목 기준 선수 순위', descEn:'Skater ranking by distance and event', run:()=>scrollToSection('eventRankingSection')},
        {ko:'종목별 기록 순위', en:'Event record ranking', descKo:'500m·1000m·1500m 기록 순위', descEn:'500m, 1000m, and 1500m record ranking', run:()=>scrollToSection('recordRankingSection')},
        {ko:'랩타임 순위', en:'Lap time ranking', descKo:'빠른 랩 기록 확인', descEn:'Fastest lap time records', run:()=>scrollToSection('lapRankingSection')},
        {ko:'선수 비교', en:'Compare skaters', descKo:'두 선수 성과 비교', descEn:'Compare two skaters side by side', run:()=>scrollToSection('compareSection')},
        {ko:'국가별 메달 순위', en:'Country medal ranking', descKo:'국가 단위 메달 집계', descEn:'Medal totals by country', run:()=>scrollToSection('countryRankingSection')},
        {ko:'조편성 계산기', en:'Heat draw tool', descKo:'진출자와 다음 조 추정', descEn:'Estimate qualifiers and next heats', run:()=>scrollToSection('heatToolSection')},
        {ko:'명예의 전당', en:'Hall of Fame', descKo:'대표 기록 카드 모음', descEn:'Featured record cards', run:()=>scrollToSection('hallOfFameSection')},
        {ko:'선수 카드 만들기', en:'Card maker', descKo:'팬메이드 선수 카드 제작', descEn:'Create fan-made skater cards', run:()=>scrollToSection('cardMakerSection')},
        {ko:'티어메이커', en:'Tier maker', descKo:'선수 티어표 만들기', descEn:'Build a skater tier list', run:()=>{ scrollToSection('tierMakerSection'); initTierMaker(); }},
        {ko:'랜덤 퀴즈', en:'Random quiz', descKo:'기록 데이터 기반 퀴즈', descEn:'Quiz from archive records', run:()=>scrollToSection('quizSection')},
        {ko:'오류 신고 및 문의', en:'Report / Contact', descKo:'오류나 문의 보내기', descEn:'Send a report or question', run:()=>openReportModal()},
        {ko:'각종 기록', en:'Records', descKo:'아직 비활성화', descEn:'Coming soon', soon:true, run:()=>showPreparing()}
      ];
      grid.innerHTML = '';
      items.forEach(item=>{
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `mobile-quick-btn${item.soon ? ' is-soon' : ''}`;
        button.innerHTML = `<strong>${mobileEscape(en ? item.en : item.ko)}</strong><span>${mobileEscape(en ? item.descEn : item.descKo)}</span>`;
        button.addEventListener('click', ()=>{
          closeMobileMoreMenu();
          item.run();
        });
        grid.appendChild(button);
      });
    }
    window.openMobileMoreMenu = function(){
      const sheet = document.getElementById('mobileMoreSheet');
      if(!sheet) return;
      buildMobileShortcutMenu();
      sheet.classList.add('open');
      sheet.setAttribute('aria-hidden','false');
      document.querySelector('[data-mobile-nav-target="mobileMoreSheet"]')?.setAttribute('aria-expanded','true');
      document.body.classList.add('mobile-sheet-active');
      setMobileNavIntent('mobileMoreSheet');
      const close = sheet.querySelector('.mobile-more-head button');
      setTimeout(()=>close?.focus?.({preventScroll:true}), 0);
    };
    window.closeMobileMoreMenu = function(){
      const sheet = document.getElementById('mobileMoreSheet');
      if(!sheet) return;
      sheet.classList.remove('open');
      sheet.setAttribute('aria-hidden','true');
      document.querySelector('[data-mobile-nav-target="mobileMoreSheet"]')?.setAttribute('aria-expanded','false');
      if(!document.querySelector('.mobile-filter-open')) document.body.classList.remove('mobile-sheet-active');
      setTimeout(()=>document.querySelector('.mobile-bottom-nav [data-mobile-nav-target="mobileMoreSheet"]')?.focus?.({preventScroll:true}), 0);
    };
    window.toggleMobileMoreMenu = function(){
      const sheet = document.getElementById('mobileMoreSheet');
      if(sheet?.classList.contains('open')) closeMobileMoreMenu();
      else openMobileMoreMenu();
    };
    window.setMobileSearchType = function(type){
      const normalized = ['skater','country','competition','event','record'].includes(type) ? type : 'skater';
      const labels = {
        skater: currentLang === 'en' ? 'Search skaters' : '선수 검색',
        country: currentLang === 'en' ? 'Search countries' : '국가 검색',
        competition: currentLang === 'en' ? 'Search competitions' : '대회 검색',
        event: currentLang === 'en' ? 'Search events' : '종목 검색',
        record: currentLang === 'en' ? 'Search records' : '기록 검색'
      };
      document.querySelectorAll('[data-mobile-search-type]').forEach(btn=>btn.classList.toggle('active', btn.dataset.mobileSearchType === normalized));
      const input = document.getElementById('mobileSearchInput');
      if(input){
        input.placeholder = labels[normalized];
        input.focus({preventScroll:true});
      }
    };
    function renderRecentPlayers(){
      const wrap = document.getElementById('mobileRecentPlayers');
      if(!wrap) return;
      const items = readRecentPlayers();
      if(!items.length){
        wrap.innerHTML = '';
        return;
      }
      wrap.innerHTML = `<div class="mobile-recent-title">${mobileEscape(currentLang === 'en' ? 'Recently viewed athletes' : '최근 본 선수')}</div><div class="mobile-recent-list">${items.map(name => `<button type="button" class="mobile-recent-chip" onclick="openPlayerPanel('${mobileJs(name)}')">${mobileEscape(name)}</button>`).join('')}</div>`;
    }
    window.renderRecentPlayers = renderRecentPlayers;
    const mobileNavSections = [
      ['mobileHomeSection','mobileHomeSection'],
      ['homeFeatureSection','mobileMoreSheet'],
      ['seasonDirectorySection','mobileMoreSheet'],
      ['seasonPanel','seasonDirectorySection'],
      ['competitionDirectorySection','mobileMoreSheet'],
      ['competitionPanel','competitionDirectorySection'],
      ['athleteDirectorySection','athleteDirectorySection'],
      ['searchSection','mobileHomeSection'],
      ['stSearchResultView','mobileHomeSection'],
      ['playerPanel','athleteDirectorySection'],
      ['skaterRankingSection','skaterRankingSection'],
      ['eventRankingSection','skaterRankingSection'],
      ['recordRankingSection','recordRankingSection'],
      ['lapRankingSection','recordRankingSection'],
      ['compareSection','mobileMoreSheet'],
      ['countryRankingSection','skaterRankingSection'],
      ['heatToolSection','mobileMoreSheet'],
      ['hallOfFameSection','mobileMoreSheet'],
      ['cardMakerSection','mobileMoreSheet'],
      ['tierMakerSection','mobileMoreSheet'],
      ['quizSection','mobileMoreSheet']
    ];
    let mobileNavTicking = false;
    let mobileNavIntentTarget = '';
    let mobileNavIntentUntil = 0;
    function setMobileNavActive(target){
      document.querySelectorAll('.mobile-bottom-nav [data-mobile-nav-target]').forEach(btn=>{
        btn.classList.toggle('active', btn.dataset.mobileNavTarget === target);
      });
    }
    function setMobileNavIntent(target, duration=1800){
      if(!target) return;
      mobileNavIntentTarget = target;
      mobileNavIntentUntil = Date.now() + duration;
      setMobileNavActive(target);
    }
    function mobileNavTargetForSection(sectionId){
      const found = mobileNavSections.find(([id]) => id === sectionId);
      return found ? found[1] : '';
    }
    function updateMobileBottomNavActive(){
      if(!document.body.classList.contains('st-view-mobile')){
        setMobileNavActive('');
        return;
      }
      if(mobileNavIntentTarget && Date.now() < mobileNavIntentUntil){
        setMobileNavActive(mobileNavIntentTarget);
        return;
      }
      if(document.body.classList.contains('st-search-active')){
        setMobileNavActive('searchSection');
        return;
      }
      const anchorY = Math.min(window.innerHeight * 0.32, 260);
      let bestTarget = 'mobileHomeSection';
      let bestDistance = Infinity;
      mobileNavSections.forEach(([sectionId,target])=>{
        const el = document.getElementById(sectionId);
        if(!el) return;
        const rect = el.getBoundingClientRect();
        if(rect.height < 1 || rect.bottom < 72 || rect.top > window.innerHeight * 0.82) return;
        const distance = Math.abs(rect.top - anchorY);
        if(distance < bestDistance){
          bestDistance = distance;
          bestTarget = target;
        }
      });
      setMobileNavActive(bestTarget);
    }
    function scheduleMobileNavActive(){
      if(mobileNavTicking) return;
      mobileNavTicking = true;
      requestAnimationFrame(()=>{
        mobileNavTicking = false;
        updateMobileBottomNavActive();
      });
    }
    function mobileListLimitFor(list){
      if(list.classList.contains('search-mobile-row-cards')) return 4;
      if(list.classList.contains('country-mobile-cards')) return 10;
      if(list.classList.contains('rank-mobile-cards')) return 10;
      if(list.classList.contains('record-mobile-cards') || list.classList.contains('lap-mobile-cards')) return Number.POSITIVE_INFINITY;
      if(list.classList.contains('heat-mobile-result-list')) return 12;
      return 12;
    }
    function mobileListLabelFor(list){
      if(list.classList.contains('rank-mobile-cards')) return tr('showMoreSkaters');
      if(list.classList.contains('country-mobile-cards')) return tr('showMoreCountries');
      if(list.classList.contains('record-mobile-cards')) return tr('showMoreRecords');
      if(list.classList.contains('lap-mobile-cards')) return tr('showMoreLaps');
      if(list.classList.contains('search-mobile-row-cards')) return tr('showMoreRawRows');
      if(list.classList.contains('event-rank-mobile-cards')) return tr('showMoreEventRanks');
      if(list.classList.contains('mobile-table-cards')) return tr('showMoreTableRows');
      return tr('showMore');
    }
    let mobileListRefreshQueued = false;
    function refreshMobileCardListLimits(){
      const isMobile = document.body.classList.contains('st-view-mobile');
      document.querySelectorAll('.mobile-card-list').forEach(list=>{
        const cards = Array.from(list.children).filter(el=>el.classList.contains('mobile-data-card'));
        const existing = list.nextElementSibling?.classList?.contains('mobile-list-toggle') ? list.nextElementSibling : null;
        cards.forEach(card=>{
          card.hidden = false;
          card.style.display = '';
        });
        if(!isMobile || !cards.length){
          if(existing) existing.hidden = true;
          return;
        }
        const limit = mobileListLimitFor(list);
        if(cards.length <= limit){
          if(existing) existing.hidden = true;
          return;
        }
        if(!list.dataset.mobileListState) list.dataset.mobileListState = 'collapsed';
        const expanded = list.dataset.mobileListState === 'expanded';
        cards.forEach((card,idx)=>{
          card.style.display = !expanded && idx >= limit ? 'none' : '';
        });
        let button = existing;
        if(!button){
          button = document.createElement('button');
          button.type = 'button';
          button.className = 'mobile-list-toggle';
          button.addEventListener('click', ()=>{
            list.dataset.mobileListState = list.dataset.mobileListState === 'expanded' ? 'collapsed' : 'expanded';
            refreshMobileCardListLimits();
            if(list.dataset.mobileListState === 'collapsed') list.scrollIntoView({behavior:'smooth',block:'start'});
          });
          list.insertAdjacentElement('afterend', button);
        }
        button.hidden = false;
        const shown = expanded ? cards.length : Math.min(limit, cards.length);
        button.innerHTML = `${expanded ? (currentLang === 'en' ? 'Collapse' : '\uC811\uAE30') : mobileListLabelFor(list)} <span class="count">${shown}/${cards.length}</span>`;
      });
    }
    function scheduleMobileCardListRefresh(){
      if(mobileListRefreshQueued) return;
      mobileListRefreshQueued = true;
      requestAnimationFrame(()=>{
        mobileListRefreshQueued = false;
        refreshMobileCardListLimits();
      });
    }
    let mobileTableRefreshQueued = false;
    function cleanCellText(cell){
      return (cell?.textContent || '').replace(/\s+/g,' ').trim();
    }
    function shouldSkipMobileTable(table){
      if(!table || table.closest('#eventRankingWrap,#heatInputWrap,#heatOutputWrap,.desktop-data-table,.mobile-table-cards,.st-mobile-raw-details')) return true;
      if(table.querySelector('input,select,textarea')) return true;
      const rows = table.querySelectorAll('tbody tr');
      return rows.length === 0;
    }
    function tableSignature(table){
      const rows = table.querySelectorAll('tbody tr').length;
      const cols = table.querySelector('tbody tr')?.children.length || 0;
      return `${rows}:${cols}:${cleanCellText(table).slice(0,400)}`;
    }
    function tableHeaders(table){
      const headers = Array.from(table.querySelectorAll('thead th')).map(cleanCellText);
      if(headers.length) return headers;
      const first = table.querySelector('tbody tr');
      return first ? Array.from(first.children).map((_,idx)=>`${currentLang === 'en' ? 'Item' : '\uD56D\uBAA9'} ${idx+1}`) : [];
    }
    function convertTableToMobileCards(table){
      if(shouldSkipMobileTable(table)) return;
      const source = table.closest('.table-scroll') || table;
      const signature = tableSignature(table);
      if(source.dataset.mobileTableSignature === signature) return;
      source.dataset.mobileTableSignature = signature;
      source.classList.add('mobile-table-source');
      const old = source.nextElementSibling?.classList?.contains('mobile-table-cards') ? source.nextElementSibling : null;
      if(old) old.remove();
      const headers = tableHeaders(table);
      const rows = Array.from(table.querySelectorAll('tbody tr')).slice(0,120);
      if(!headers.length || !rows.length) return;
      const cards = rows.map(row=>{
        const cells = Array.from(row.children);
        const title = cells[0]?.innerHTML || '-';
        const side = cells[1]?.innerHTML || '';
        const details = cells.slice(2).map((cell,idx)=>{
          const label = headers[idx+2] || `${currentLang === 'en' ? 'Item' : '\uD56D\uBAA9'} ${idx+3}`;
          return `<div class="mobile-table-row"><span>${mobileEscape(label)}</span><strong>${cell.innerHTML || '-'}</strong></div>`;
        }).join('');
        return `<article class="mobile-data-card mobile-table-card">
          <div class="mobile-table-card-head"><strong>${title}</strong>${side ? `<span>${side}</span>` : ''}</div>
          ${details ? `<div class="mobile-table-row-list">${details}</div>` : ''}
        </article>`;
      }).join('');
      const hidden = Math.max(0, table.querySelectorAll('tbody tr').length - rows.length);
      source.insertAdjacentHTML('afterend', `<div class="mobile-card-list mobile-table-cards">${cards}${hidden ? `<div class="st-empty-small">${currentLang === 'en' ? `${hidden} more rows are available in table view.` : `\uC678 ${hidden}\uAC74\uC740 \uD45C \uBCF4\uAE30\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`}</div>` : ''}</div>`);
    }
    function refreshMobileTableCards(){
      document.querySelectorAll('.table-scroll table').forEach(convertTableToMobileCards);
      refreshMobileCardListLimits();
    }
    function scheduleMobileTableCardRefresh(){
      if(mobileTableRefreshQueued) return;
      mobileTableRefreshQueued = true;
      requestAnimationFrame(()=>{
        mobileTableRefreshQueued = false;
        refreshMobileTableCards();
      });
    }
    function heatMobileRows(){
      return Array.from(document.querySelectorAll('#heatInputWrap tbody tr'));
    }
    function heatMobileSourceValue(row, selector){
      return row?.querySelector(selector)?.value || '';
    }
    function heatMobileField(label, field, value, extra=''){
      return `<label class="heat-mobile-field ${extra.includes('wide') ? 'wide' : ''}">${mobileEscape(label)}
        <input data-heat-mobile-field="${field}" ${extra} value="${mobileEscape(value)}">
      </label>`;
    }
    function buildMobileHeatInputCards(){
      const wrap = document.getElementById('heatInputWrap');
      if(!wrap) return;
      const old = wrap.querySelector('.heat-mobile-input');
      const rows = heatMobileRows();
      if(!rows.length){
        if(old) old.remove();
        return;
      }
      const groups = [];
      rows.forEach((row,index)=>{
        const heat = Number(row.dataset.heatRow || 0) || 1;
        let group = groups.find(item => item.heat === heat);
        if(!group){
          group = {heat, rows:[]};
          groups.push(group);
        }
        group.rows.push({row,index});
      });
      const groupHtml = groups.map((group,groupIndex)=>{
        const cards = group.rows.map(({row,index},itemIndex)=>{
          const position = heatMobileSourceValue(row,'.heat-pos') || String(itemIndex + 1);
          const name = heatMobileSourceValue(row,'.heat-name');
          const country = heatMobileSourceValue(row,'.heat-country');
          const time = heatMobileSourceValue(row,'.heat-time');
          const status = heatMobileSourceValue(row,'.heat-status') || 'OK';
          return `<article class="heat-mobile-skater" data-heat-mobile-index="${index}">
            <div class="heat-mobile-skater-head"><strong>SP ${mobileEscape(position)}</strong><span>${currentLang === 'en' ? `Heat ${mobileEscape(group.heat)} #${itemIndex + 1}` : `${mobileEscape(group.heat)}조 ${itemIndex + 1}번`}</span></div>
            <div class="heat-mobile-skater-grid">
              ${heatMobileField(tr('heatPosition'),'position',position,'type="number" min="1" max="20"')}
              ${heatMobileField(tr('heatName'),'name',name,'type="text" class="wide" placeholder="Name"')}
              ${heatMobileField(tr('heatCountry'),'country',country,'type="text" maxlength="3" placeholder="KOR"')}
              ${heatMobileField(tr('heatTime'),'time',time,'type="text" placeholder="1:23.456"')}
              <label class="heat-mobile-field wide">${tr('heatStatus')}
                <select data-heat-mobile-field="status">
                  <option value="OK" ${status === 'OK' ? 'selected' : ''}>OK</option>
                  <option value="ADV" ${status === 'ADV' ? 'selected' : ''}>ADV</option>
                </select>
              </label>
            </div>
          </article>`;
        }).join('');
        return `<details class="heat-mobile-group" ${groupIndex === 0 ? 'open' : ''}>
          <summary><span>${currentLang === 'en' ? `Heat ${mobileEscape(group.heat)} input` : `${mobileEscape(group.heat)}조 입력`}</span><strong>${currentLang === 'en' ? `${group.rows.length} skaters` : `${group.rows.length}명`}</strong></summary>
          <div class="heat-mobile-skater-list">${cards}</div>
        </details>`;
      }).join('');
      const html = `<div class="heat-mobile-input">
        <div class="heat-mobile-action-row">
          <button type="button" onclick="calculateHeatDraw()">${tr('calculateHeatDraw')}</button>
          <button type="button" onclick="fillSampleHeatData()">${tr('sampleHeatData')}</button>
          <button type="button" onclick="clearHeatData()">${tr('clearHeatData')}</button>
        </div>
        ${groupHtml}
      </div>`;
      if(old) old.outerHTML = html;
      else wrap.insertAdjacentHTML('beforeend', html);

      const container = wrap.querySelector('.heat-mobile-input');
      if(!container || container.dataset.heatMobileBound) return;
      container.dataset.heatMobileBound = '1';
      const syncField = event => {
        const field = event.target?.closest?.('[data-heat-mobile-field]');
        const item = field?.closest?.('[data-heat-mobile-index]');
        if(!field || !item) return;
        const source = heatMobileRows()[Number(item.dataset.heatMobileIndex)];
        const selectors = {
          position:'.heat-pos',
          name:'.heat-name',
          country:'.heat-country',
          time:'.heat-time',
          status:'.heat-status'
        };
        const selector = selectors[field.dataset.heatMobileField];
        if(!selector) return;
        const sourceField = source?.querySelector(selector);
        if(!sourceField) return;
        let value = field.value;
        if(field.dataset.heatMobileField === 'country'){
          value = value.toUpperCase().slice(0,3);
          field.value = value;
        }
        sourceField.value = value;
        const head = item.querySelector('.heat-mobile-skater-head strong');
        if(head && field.dataset.heatMobileField === 'position') head.textContent = `SP ${value || '-'}`;
      };
      container.addEventListener('input', syncField);
      container.addEventListener('change', syncField);
    }
    function heatMobileTimeKey(value){
      const clean = String(value || '').trim();
      return clean || '-';
    }
    function heatMobileRowKey(row){
      return [row.name,row.country,row.heat,row.position,heatMobileTimeKey(row.time)].join('|');
    }
    function heatMobileQualifierKey(cells){
      const name = cleanCellText(cells[2]?.querySelector('strong') || cells[2]);
      return [name,cleanCellText(cells[3]),Number(cleanCellText(cells[1])) || '',Number(cleanCellText(cells[4])) || '',heatMobileTimeKey(cleanCellText(cells[5]))].join('|');
    }
    function heatMobileResultMeta(items){
      return `<div class="heat-mobile-result-meta">${items.filter(Boolean).map(item => `<span>${mobileEscape(item)}</span>`).join('')}</div>`;
    }
    window.stMobileSetHeatResultTab = function(tab){
      const root = document.querySelector('#heatOutputWrap .heat-mobile-results');
      if(!root) return;
      const next = root.querySelector(`[data-heat-mobile-result-panel="${tab}"]`) ? tab : 'qualifiers';
      root.querySelectorAll('[data-heat-mobile-result-tab]').forEach(btn=>btn.classList.toggle('active', btn.dataset.heatMobileResultTab === next));
      root.querySelectorAll('[data-heat-mobile-result-panel]').forEach(panel=>panel.classList.toggle('active', panel.dataset.heatMobileResultPanel === next));
      scheduleMobileCardListRefresh();
    };
    function buildMobileHeatResults(){
      const wrap = document.getElementById('heatOutputWrap');
      if(!wrap) return;
      wrap.querySelector('.heat-mobile-results')?.remove();
      Array.from(wrap.children).forEach(child=>child.classList.remove('heat-desktop-result-source'));
      const mainGrid = Array.from(wrap.children).find(child=>child.classList.contains('heat-result-grid'));
      if(!mainGrid) return;
      const boxes = Array.from(mainGrid.children).filter(child=>child.classList.contains('heat-output-box'));
      const qualifierTable = boxes[0]?.querySelector('table');
      const qualifierRows = Array.from(qualifierTable?.querySelectorAll('tbody tr') || []);
      const nextCards = Array.from(boxes[1]?.querySelectorAll('.heat-next-card') || []);
      if(!qualifierRows.length && !nextCards.length) return;

      const qualifierKeys = new Set();
      const qualifierCards = qualifierRows.map(row=>{
        const cells = Array.from(row.children);
        qualifierKeys.add(heatMobileQualifierKey(cells));
        const rank = cleanCellText(cells[0]) || '-';
        const heat = cleanCellText(cells[1]) || '-';
        const name = cells[2]?.innerHTML || '-';
        const country = cleanCellText(cells[3]) || '-';
        const position = cleanCellText(cells[4]) || '-';
        const time = cleanCellText(cells[5]) || '-';
        return `<article class="mobile-data-card heat-mobile-result-card">
          <div class="heat-mobile-result-head"><strong>#${mobileEscape(rank)}</strong><span>${currentLang === 'en' ? `Heat ${mobileEscape(heat)}` : `${mobileEscape(heat)}조`}</span></div>
          <div class="heat-mobile-result-name">${name}</div>
          ${heatMobileResultMeta([country, currentLang === 'en' ? `Place ${position}` : `${position}위`, time])}
        </article>`;
      }).join('');

      const nextGroups = nextCards.map((card,index)=>{
        const title = cleanCellText(card.querySelector('h4')) || (currentLang === 'en' ? `Next heat ${index + 1}` : `다음 조 ${index + 1}`);
        const rows = Array.from(card.querySelectorAll('tbody tr'));
        const cards = rows.map(row=>{
          const cells = Array.from(row.children);
          const sp = cleanCellText(cells[0]) || '-';
          const name = cells[1]?.innerHTML || '-';
          const country = cleanCellText(cells[2]) || '-';
          const time = cleanCellText(cells[3]) || '-';
          const seed = cleanCellText(cells[4]) || '-';
          return `<article class="heat-mobile-result-card">
            <div class="heat-mobile-result-head"><strong>SP ${mobileEscape(sp)}</strong><span>${mobileEscape(seed)}</span></div>
            <div class="heat-mobile-result-name">${name}</div>
            ${heatMobileResultMeta([country, time])}
          </article>`;
        }).join('');
        return `<details class="heat-mobile-next-group" ${index === 0 ? 'open' : ''}>
          <summary><span>${mobileEscape(title)}</span><strong>${currentLang === 'en' ? `${rows.length} skaters` : `${rows.length}명`}</strong></summary>
          <div class="heat-mobile-next-list">${cards || `<div class="empty">${mobileEscape(tr('heatNoAssigned'))}</div>`}</div>
        </details>`;
      }).join('');

      let eliminated = [];
      try{
        eliminated = typeof collectHeatRows === 'function' ? collectHeatRows().filter(row=>!qualifierKeys.has(heatMobileRowKey(row))) : [];
      }catch(_e){
        eliminated = [];
      }
      const eliminatedCards = eliminated.map(row=>`<article class="mobile-data-card heat-mobile-result-card">
        <div class="heat-mobile-result-head"><strong>${currentLang === 'en' ? `Heat ${mobileEscape(row.heat)}` : `${mobileEscape(row.heat)}조`}</strong><span>${currentLang === 'en' ? `Place ${mobileEscape(row.position)}` : `${mobileEscape(row.position)}위`}</span></div>
        <div class="heat-mobile-result-name"><strong>${mobileEscape(row.name)}</strong></div>
        ${heatMobileResultMeta([row.country || '-', row.time || '-'])}
      </article>`).join('');

      Array.from(wrap.children).forEach(child=>child.classList.add('heat-desktop-result-source'));
      wrap.insertAdjacentHTML('afterbegin', `<div class="heat-mobile-results">
        <div class="heat-mobile-result-tabs" role="tablist">
          <button type="button" class="active" data-heat-mobile-result-tab="qualifiers" onclick="stMobileSetHeatResultTab('qualifiers')">${tr('heatQualifiers')}</button>
          <button type="button" data-heat-mobile-result-tab="next" onclick="stMobileSetHeatResultTab('next')">${tr('heatNextDraw')}</button>
          <button type="button" data-heat-mobile-result-tab="eliminated" onclick="stMobileSetHeatResultTab('eliminated')">${tr('heatEliminated')}</button>
        </div>
        <div class="heat-mobile-result-panel active" data-heat-mobile-result-panel="qualifiers">
          <div class="mobile-card-list heat-mobile-result-list">${qualifierCards || `<div class="empty">${mobileEscape(tr('heatNoQualifiers'))}</div>`}</div>
        </div>
        <div class="heat-mobile-result-panel" data-heat-mobile-result-panel="next">${nextGroups || `<div class="empty">${mobileEscape(tr('heatNoNextDraw'))}</div>`}</div>
        <div class="heat-mobile-result-panel" data-heat-mobile-result-panel="eliminated">
          <div class="mobile-card-list heat-mobile-result-list">${eliminatedCards || `<div class="empty">${mobileEscape(tr('heatNoEliminated'))}</div>`}</div>
        </div>
      </div>`);
      scheduleMobileCardListRefresh();
    }
    window.buildMobileHeatInputCards = buildMobileHeatInputCards;
    window.buildMobileHeatResults = buildMobileHeatResults;
    function wrapMobileHeatToolFunctions(){
      if(window.__stMobileHeatToolWrapped) return;
      window.__stMobileHeatToolWrapped = true;
      const previousBuildHeatInputTable = window.buildHeatInputTable;
      if(typeof previousBuildHeatInputTable === 'function'){
        window.buildHeatInputTable = function(){
          const result = previousBuildHeatInputTable.apply(this, arguments);
          setTimeout(buildMobileHeatInputCards, 0);
          setTimeout(scheduleMobileNavActive, 80);
          return result;
        };
        try{ buildHeatInputTable = window.buildHeatInputTable; }catch(_e){}
      }
      const previousCalculateHeatDraw = window.calculateHeatDraw;
      if(typeof previousCalculateHeatDraw === 'function'){
        window.calculateHeatDraw = function(){
          const result = previousCalculateHeatDraw.apply(this, arguments);
          setTimeout(buildMobileHeatInputCards, 0);
          setTimeout(buildMobileHeatResults, 0);
          setTimeout(scheduleMobileNavActive, 80);
          return result;
        };
        try{ calculateHeatDraw = window.calculateHeatDraw; }catch(_e){}
      }
      const previousFillSampleHeatData = window.fillSampleHeatData;
      if(typeof previousFillSampleHeatData === 'function'){
        window.fillSampleHeatData = function(){
          const result = previousFillSampleHeatData.apply(this, arguments);
          setTimeout(buildMobileHeatInputCards, 0);
          setTimeout(buildMobileHeatResults, 0);
          return result;
        };
        try{ fillSampleHeatData = window.fillSampleHeatData; }catch(_e){}
      }
      const previousClearHeatData = window.clearHeatData;
      if(typeof previousClearHeatData === 'function'){
        window.clearHeatData = function(){
          const result = previousClearHeatData.apply(this, arguments);
          setTimeout(buildMobileHeatInputCards, 0);
          setTimeout(buildMobileHeatResults, 0);
          return result;
        };
        try{ clearHeatData = window.clearHeatData; }catch(_e){}
      }
    }
    function initMobileMutationObserver(){
      if(window.__stMobileMutationObserver) return;
      window.__stMobileMutationObserver = new MutationObserver(()=>{
        scheduleMobileCardListRefresh();
        scheduleMobileTableCardRefresh();
        scheduleMobileNavActive();
      });
      window.__stMobileMutationObserver.observe(document.body,{childList:true,subtree:true});
    }
    function ensurePlayerSnapshot(){
      const panel = document.getElementById('playerPanel');
      if(!panel) return null;
      let snapshot = document.getElementById('mobilePlayerSnapshot');
      if(!snapshot){
        snapshot = document.createElement('div');
        snapshot.id = 'mobilePlayerSnapshot';
        snapshot.className = 'mobile-player-snapshot';
        const header = panel.querySelector('.panel-header');
        if(header) header.insertAdjacentElement('afterend', snapshot);
      }
      return snapshot;
    }
    function ensurePlayerTabs(){
      const snapshot = ensurePlayerSnapshot();
      if(!snapshot) return null;
      let tabs = document.getElementById('mobilePlayerTabs');
      if(!tabs){
        tabs = document.createElement('div');
        tabs.id = 'mobilePlayerTabs';
        tabs.className = 'mobile-player-tabs';
        tabs.innerHTML = `
          <button type="button" data-mobile-player-tab="overview" onclick="stMobileSetPlayerTab('overview')">${currentLang === 'en' ? 'Summary' : '요약'}</button>
          <button type="button" data-mobile-player-tab="medals" onclick="stMobileSetPlayerTab('medals')">${currentLang === 'en' ? 'Medals' : '메달'}</button>
          <button type="button" data-mobile-player-tab="best" onclick="stMobileSetPlayerTab('best')">${currentLang === 'en' ? 'Best times' : '최고기록'}</button>
          <button type="button" data-mobile-player-tab="timeline" onclick="stMobileSetPlayerTab('timeline')">${currentLang === 'en' ? 'Timeline' : '타임라인'}</button>
        `;
        snapshot.insertAdjacentElement('afterend', tabs);
      }
      tabs.querySelector('[data-mobile-player-tab="overview"]').textContent = currentLang === 'en' ? 'Summary' : '요약';
      tabs.querySelector('[data-mobile-player-tab="medals"]').textContent = currentLang === 'en' ? 'Medals' : '메달';
      tabs.querySelector('[data-mobile-player-tab="best"]').textContent = currentLang === 'en' ? 'Best times' : '최고기록';
      tabs.querySelector('[data-mobile-player-tab="timeline"]').textContent = currentLang === 'en' ? 'Timeline' : '타임라인';
      return tabs;
    }
    function ensurePlayerBestPanel(){
      const tabs = ensurePlayerTabs();
      if(!tabs) return null;
      let panel = document.getElementById('mobilePlayerBestPanel');
      if(!panel){
        panel = document.createElement('div');
        panel.id = 'mobilePlayerBestPanel';
        panel.className = 'mobile-player-best-panel';
        tabs.insertAdjacentElement('afterend', panel);
      }
      return panel;
    }
    function ensurePlayerMedalsPanel(){
      const bestPanel = ensurePlayerBestPanel();
      if(!bestPanel) return null;
      let panel = document.getElementById('mobilePlayerMedalsPanel');
      if(!panel){
        panel = document.createElement('div');
        panel.id = 'mobilePlayerMedalsPanel';
        panel.className = 'mobile-player-medals-panel';
        bestPanel.insertAdjacentElement('afterend', panel);
      }
      return panel;
    }
    function medalBucketText(rows){
      let gold = 0, silver = 0, bronze = 0;
      rows.forEach(row=>{
        if(row.medal === 'Gold') gold += 1;
        else if(row.medal === 'Silver') silver += 1;
        else if(row.medal === 'Bronze') bronze += 1;
      });
      return currentLang === 'en'
        ? `G ${gold} / S ${silver} / B ${bronze} / Total ${rows.length}`
        : `\uAE08 ${gold} / \uC740 ${silver} / \uB3D9 ${bronze} / \uD569\uACC4 ${rows.length}`;
    }
    function medalGroupBucket(row){
      try{
        if(typeof competitionBucket === 'function') return competitionBucket(row.competition_type);
      }catch(_e){}
      const type = String(row.competition_type || '').toLowerCase();
      if(type.includes('olympic')) return 'olympic';
      if(type.includes('world championship')) return 'worlds';
      if(type.includes('world cup') || type.includes('world tour')) return 'worldcup';
      return 'other';
    }
    function mobileSortPlayerMedals(rows){
      return rows.slice().sort((a,b)=>{
        const seasonDiff = (typeof seasonSortValue === 'function' ? seasonSortValue(b.season,b.year) - seasonSortValue(a.season,a.year) : 0);
        if(seasonDiff) return seasonDiff;
        const yearDiff = Number(b.year || 0) - Number(a.year || 0);
        if(yearDiff) return yearDiff;
        const compDiff = typeof competitionOrderForPlayerDetail === 'function' ? competitionOrderForPlayerDetail(a) - competitionOrderForPlayerDetail(b) : 0;
        if(compDiff) return compDiff;
        const eventDiff = typeof playerDetailEventOrder === 'function' ? playerDetailEventOrder(a) - playerDetailEventOrder(b) : 0;
        if(eventDiff) return eventDiff;
        return typeof medalOrderForPlayerDetail === 'function' ? medalOrderForPlayerDetail(a.medal) - medalOrderForPlayerDetail(b.medal) : 0;
      });
    }
    function medalLabelEn(medal){
      const raw = String(medal || '').toLowerCase();
      if(raw.includes('gold')) return 'Gold';
      if(raw.includes('silver')) return 'Silver';
      if(raw.includes('bronze')) return 'Bronze';
      return medal || '-';
    }
    function mobileMedalCard(row){
      const medalText = currentLang === 'en' ? medalLabelEn(row.medal) : (typeof medalKorean === 'function' ? medalKorean(row.medal) : (row.medal || '-'));
      const medalClass = String(row.medal || '').toLowerCase();
      return `<article class="mobile-medal-card">
        <div class="mobile-medal-card-head"><span class="medal-pill ${mobileEscape(medalClass)}">${mobileEscape(medalText)}</span><strong>${mobileEscape(row.event || '-')}</strong></div>
      </article>`;
    }
    function mobileMedalGroup(label, rows, open){
      if(!rows.length) return '';
      const sorted = mobileSortPlayerMedals(rows);
      const hidden = Math.max(0, sorted.length - 80);
      return `<details class="mobile-medal-group" ${open ? 'open' : ''}>
        <summary><span>${mobileEscape(label)}</span><strong>${mobileEscape(medalBucketText(rows))}</strong></summary>
        <div class="mobile-medal-list">${sorted.slice(0,80).map(mobileMedalCard).join('')}${hidden ? `<div class="st-empty-small">${currentLang === 'en' ? `${hidden} more rows are available in the timeline.` : `외 ${hidden}건은 타임라인에서 더 볼 수 있습니다.`}</div>` : ''}</div>
      </details>`;
    }
    function buildMobilePlayerMedalsPanel(name){
      const panel = ensurePlayerMedalsPanel();
      if(!panel) return;
      const rows = (typeof skaterMedals !== 'undefined' ? skaterMedals : []).filter(row => row.skater_name === name);
      if(!rows.length){
        panel.innerHTML = `<div class="empty">${currentLang === 'en' ? 'No medal records to display.' : '표시할 메달 기록이 없습니다.'}</div>`;
        return;
      }
      const individual = rows.filter(row => row.medal_type === 'Individual' && !(typeof isWorldChampionshipSuperFinalRow === 'function' && isWorldChampionshipSuperFinalRow(row)));
      const relay = rows.filter(row => row.medal_type === 'Relay' || (typeof isRelayEvent === 'function' && isRelayEvent(row.event)));
      const superFinal = rows.filter(row => row.medal_type === 'SuperFinal' || (typeof isWorldChampionshipSuperFinalRow === 'function' && isWorldChampionshipSuperFinalRow(row)));
      const groups = [
        [currentLang === 'en' ? 'Olympic individual' : '올림픽 개인전', individual.filter(row => medalGroupBucket(row) === 'olympic')],
        [currentLang === 'en' ? 'World Championships individual' : '세계선수권 개인전', individual.filter(row => medalGroupBucket(row) === 'worlds')],
        [currentLang === 'en' ? 'World Cup & World Tour individual' : '월드컵·월드투어 개인전', individual.filter(row => medalGroupBucket(row) === 'worldcup')],
        [currentLang === 'en' ? 'Relay / team' : '계주·팀', relay],
        ['3000m S.F.', superFinal],
        [currentLang === 'en' ? 'Other individual' : '기타 개인전', individual.filter(row => !['olympic','worlds','worldcup'].includes(medalGroupBucket(row)))]
      ].filter(([,list]) => list.length);
      panel.innerHTML = groups.length ? groups.map((group, idx) => mobileMedalGroup(group[0], group[1], idx === 0)).join('') : `<div class="empty">${currentLang === 'en' ? 'No medal records to display.' : '표시할 메달 기록이 없습니다.'}</div>`;
    }
    function buildMobilePlayerBestPanel(name){
      const panel = ensurePlayerBestPanel();
      if(!panel) return;
      let bestMap = null;
      try{
        bestMap = typeof personalBestMapForPlayer === 'function' ? personalBestMapForPlayer(name) : null;
      }catch(_e){}
      const events = ['500m','1000m','1500m'];
      panel.innerHTML = events.map(event=>{
        const row = bestMap && bestMap.get ? bestMap.get(event) : null;
        const time = row ? (row.time || row.best_time || '-') : '-';
        const details = row ? [row.competition_name, row.round, row.season || row.year].filter(Boolean).join(' / ') : archiveRecordStateText();
        return `<article class="mobile-player-best-card"><strong>${mobileEscape(event)} / ${mobileEscape(time)}</strong><span>${mobileEscape(details)}</span></article>`;
      }).join('');
    }
    window.addEventListener('shorttrack:records-state',()=>{
      const panel=document.getElementById('playerPanel');
      if(panel?.classList.contains('active')) buildMobilePlayerBestPanel(panel.dataset.playerName);
    });
    window.addEventListener('shorttrack:detail-updated',()=>{
      const panel=document.getElementById('playerPanel');
      if(panel?.classList.contains('active')){
        buildMobilePlayerSnapshot();
        buildMobilePlayerMedalsPanel(panel.dataset.playerName);
        buildMobilePlayerBestPanel(panel.dataset.playerName);
      }
    });
    function buildMobilePlayerSnapshot(){
      const snapshot = ensurePlayerSnapshot();
      if(!snapshot) return;
      const name = document.getElementById('playerName')?.textContent || (currentLang === 'en' ? 'Skater' : '선수');
      const info = document.getElementById('playerInfo')?.textContent || '';
      const total = document.getElementById('playerTotal')?.textContent || '0';
      const gold = document.getElementById('playerGold')?.textContent || '0';
      const silver = document.getElementById('playerSilver')?.textContent || '0';
      const bronze = document.getElementById('playerBronze')?.textContent || '0';
      updatePlayerLocalAlias(name);
      snapshot.innerHTML = `
        <h3>${currentLang === 'en' ? 'Key summary' : '핵심 요약'}</h3>
        <p>${mobileEscape(info)}</p>

      `;
      ensurePlayerTabs();
      buildMobilePlayerBestPanel(name);
      buildMobilePlayerMedalsPanel(name);
      stMobileSetPlayerTab(document.getElementById('playerPanel')?.dataset.mobileTab || 'overview');
    }
    window.stMobileSetPlayerTab = function(tab){
      const panel = document.getElementById('playerPanel');
      const overview = document.getElementById('playerOverviewTable');
      const timeline = document.getElementById('playerTimeline');
      const timelineDetails = document.getElementById('playerTimelineDetails');
      const best = document.getElementById('mobilePlayerBestPanel');
      const medals = document.getElementById('mobilePlayerMedalsPanel');
      const overviewTitle = overview?.previousElementSibling;
      const oldBestWrap = document.getElementById('playerBestTimeTable');
      const oldBestTitle = oldBestWrap?.previousElementSibling;
      const oldBestSpacer = oldBestTitle?.previousElementSibling;
      const next = ['overview','medals','best','timeline'].includes(tab) ? tab : 'overview';
      if(panel) panel.dataset.mobileTab = next;
      if(!document.body.classList.contains('st-view-mobile')){
        if(overview) overview.style.display = '';
        if(timeline) timeline.style.display = '';
        if(timelineDetails) timelineDetails.style.display = '';
        if(best) best.style.display = 'none';
        if(medals) medals.style.display = 'none';
        if(overviewTitle?.classList?.contains('section-title')) overviewTitle.style.display = '';
        if(oldBestTitle?.classList?.contains('section-title')) oldBestTitle.style.display = '';
        if(oldBestSpacer?.classList?.contains('spacer')) oldBestSpacer.style.display = '';
        if(oldBestWrap) oldBestWrap.style.display = '';
        document.querySelectorAll('[data-mobile-player-tab]').forEach(btn=>btn.classList.remove('active'));
        return;
      }
      if(overview) overview.style.display = next === 'overview' ? '' : 'none';
      if(best) best.style.display = next === 'best' ? 'grid' : 'none';
      if(medals) medals.style.display = next === 'medals' ? 'block' : 'none';
      if(timeline) timeline.style.display = next === 'timeline' ? '' : 'none';
      if(timelineDetails) timelineDetails.style.display = next === 'timeline' ? '' : 'none';
      if(overviewTitle?.classList?.contains('section-title')) overviewTitle.style.display = next === 'overview' ? '' : 'none';
      if(oldBestTitle?.classList?.contains('section-title')) oldBestTitle.style.display = 'none';
      if(oldBestSpacer?.classList?.contains('spacer')) oldBestSpacer.style.display = 'none';
      if(oldBestWrap) oldBestWrap.style.display = 'none';
      document.querySelectorAll('[data-mobile-player-tab]').forEach(btn=>btn.classList.toggle('active', btn.dataset.mobilePlayerTab === next));
    };
    function closeMobileFilterSection(section){
      if(!section) return;
      section.classList.remove('mobile-filter-open');
      section.querySelector('.mobile-filter-toggle')?.setAttribute('aria-expanded','false');
      if(!document.querySelector('.mobile-filter-open')){
        document.body.classList.remove('mobile-sheet-active');
      }
      const focusTarget = mobileFilterLastFocus;
      mobileFilterLastFocus = null;
      if(focusTarget && typeof focusTarget.focus === 'function'){
        focusTarget.focus({preventScroll:true});
      }
    }
    function openMobileFilterSection(section, trigger){
      if(!section) return;
      mobileFilterLastFocus = trigger || document.activeElement;
      section.classList.add('mobile-filter-open');
      section.querySelector('.mobile-filter-toggle')?.setAttribute('aria-expanded','true');
      document.body.classList.add('mobile-sheet-active');
      const closeButton = section.querySelector('.mobile-filter-sheet-head button');
      if(closeButton && typeof closeButton.focus === 'function'){
        setTimeout(()=>closeButton.focus({preventScroll:true}), 0);
      }
    }
    function setupMobileFilter(sectionId, controlsSelector, titleKey){
      const section = document.getElementById(sectionId);
      const controls = section?.querySelector(controlsSelector);
      if(!section || !controls || section.dataset.mobileFilterReady) return;
      section.dataset.mobileFilterReady = '1';
      controls.classList.add('mobile-filter-panel');
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'mobile-filter-toggle';
      toggle.textContent = tr('filterSettings');
      toggle.dataset.i18n = 'filterSettings';
      toggle.setAttribute('aria-haspopup','dialog');
      toggle.setAttribute('aria-expanded','false');
      toggle.addEventListener('click', () => openMobileFilterSection(section, toggle));
      controls.insertAdjacentElement('beforebegin', toggle);

      const backdrop = document.createElement('button');
      backdrop.type = 'button';
      backdrop.className = 'mobile-filter-backdrop';
      backdrop.setAttribute('aria-label', tr('closeFilters'));
      backdrop.dataset.i18nAriaLabel = 'closeFilters';
      backdrop.addEventListener('click', () => closeMobileFilterSection(section));
      section.appendChild(backdrop);

      const head = document.createElement('div');
      head.className = 'mobile-filter-sheet-head';
      head.innerHTML = `<strong data-mobile-filter-title="${mobileEscape(titleKey)}">${mobileEscape(tr(titleKey))}</strong><button type="button" data-i18n="close">${tr('close')}</button>`;
      head.querySelector('button')?.addEventListener('click', () => closeMobileFilterSection(section));
      controls.prepend(head);
    }
    function setupMobileFilterGroup(sectionId, selectors, titleKey){
      const section = document.getElementById(sectionId);
      if(!section || section.dataset.mobileFilterGroupReady) return;
      const rawNodes = selectors.flatMap(selector=>Array.from(section.querySelectorAll(selector)))
        .filter((node,idx,list)=>node && !node.closest('.mobile-filter-panel') && list.indexOf(node) === idx);
      const nodes = rawNodes.filter(node=>!rawNodes.some(other=>other !== node && other.contains(node)));
      if(!nodes.length) return;
      section.dataset.mobileFilterGroupReady = '1';
      const panel = document.createElement('div');
      panel.className = 'mobile-filter-panel';
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'mobile-filter-toggle';
      toggle.textContent = tr('filterSettings');
      toggle.dataset.i18n = 'filterSettings';
      toggle.setAttribute('aria-haspopup','dialog');
      toggle.setAttribute('aria-expanded','false');
      toggle.addEventListener('click', () => openMobileFilterSection(section, toggle));

      const head = document.createElement('div');
      head.className = 'mobile-filter-sheet-head';
      head.innerHTML = `<strong data-mobile-filter-title="${mobileEscape(titleKey)}">${mobileEscape(tr(titleKey))}</strong><button type="button" data-i18n="close">${tr('close')}</button>`;
      head.querySelector('button')?.addEventListener('click', () => closeMobileFilterSection(section));
      panel.appendChild(head);

      const first = nodes[0];
      first.insertAdjacentElement('beforebegin', toggle);
      toggle.insertAdjacentElement('afterend', panel);
      nodes.forEach(node=>panel.appendChild(node));

      const backdrop = document.createElement('button');
      backdrop.type = 'button';
      backdrop.className = 'mobile-filter-backdrop';
      backdrop.setAttribute('aria-label', tr('closeFilters'));
      backdrop.dataset.i18nAriaLabel = 'closeFilters';
      backdrop.addEventListener('click', () => closeMobileFilterSection(section));
      section.appendChild(backdrop);
    }
    function initMobileEnhancements(){
      wrapMobileHeatToolFunctions();
      setupMobileFilterGroup('heatToolSection', ['.heat-tool-controls'], 'heatFilterTitle');
      setupMobileFilterGroup('skaterRankingSection', ['.ranking-filter-row','.era-controls','.score-actions','#skaterScorePanel'], 'skaterFilterTitle');
      setupMobileFilterGroup('countryRankingSection', ['.tabs','.era-controls'], 'countryFilterTitle');
      setupMobileFilterGroup('eventRankingSection', ['.tabs','.era-controls','.ranking-filter-row','#eventScorePanel'], 'eventFilterTitle');
      setupMobileFilterGroup('compareSection', ['.ranking-filter-row','.era-controls','#compareScorePanel','.compare-controls'], 'compareFilterTitle');
      setupMobileFilterGroup('quizSection', ['.quiz-controls'], 'quizFilterTitle');
      setupMobileFilter('recordRankingSection', '.record-ranking-controls', 'recordFilterTitle');
      setupMobileFilter('lapRankingSection', '.lap-ranking-controls', 'lapFilterTitle');
      document.querySelectorAll('.mobile-bottom-nav [data-mobile-nav-target]').forEach(btn=>{
        if(btn.dataset.mobileNavReady) return;
        btn.dataset.mobileNavReady = '1';
        btn.addEventListener('click', () => setMobileNavIntent(btn.dataset.mobileNavTarget));
      });
      renderRecentPlayers();
      buildMobileShortcutMenu();
      buildMobilePlayerSnapshot();
      buildMobileHeatInputCards();
      buildMobileHeatResults();
      initMobileMutationObserver();
      refreshMobileCardListLimits();
      refreshMobileTableCards();
      updateMobileBottomNavActive();
    }
    window.addEventListener('scroll', scheduleMobileNavActive, {passive:true});
    window.addEventListener('resize', ()=>{
      scheduleMobileNavActive();
      scheduleMobileCardListRefresh();
    }, {passive:true});
    document.addEventListener('keydown', event=>{
      if(event.key !== 'Escape') return;
      if(document.getElementById('mobileMoreSheet')?.classList.contains('open')) closeMobileMoreMenu();
      const openSection = document.querySelector('.mobile-filter-open');
      if(openSection) closeMobileFilterSection(openSection);
    });
    const previousScrollToSection = window.scrollToSection;
    if(typeof previousScrollToSection === 'function'){
      const wrappedScrollToSection = function(){
        const intendedTarget = mobileNavTargetForSection(arguments[0]);
        if(intendedTarget) setMobileNavIntent(intendedTarget);
        const result = previousScrollToSection.apply(this, arguments);
        scheduleMobileNavActive();
        setTimeout(scheduleMobileNavActive, 120);
        setTimeout(scheduleMobileCardListRefresh, 160);
        return result;
      };
      window.scrollToSection = wrappedScrollToSection;
      try{ scrollToSection = wrappedScrollToSection; }catch(_e){}
    }
    const previousOpenPlayerPanel = window.openPlayerPanel;
    if(typeof previousOpenPlayerPanel === 'function'){
      window.openPlayerPanel = function(){
        const playerName = arguments[0];
        const result = previousOpenPlayerPanel.apply(this, arguments);
        saveRecentPlayer(playerName);
        renderRecentPlayers();
        setTimeout(buildMobilePlayerSnapshot, 40);
        setTimeout(buildMobilePlayerSnapshot, 180);
        setTimeout(scheduleMobileNavActive, 220);
        return result;
      };
    }
    const previousSetLanguage = window.setLanguage;
    if(typeof previousSetLanguage === 'function'){
      window.setLanguage = function(){
        const result = previousSetLanguage.apply(this, arguments);
        buildMobileShortcutMenu();
        setTimeout(buildMobilePlayerSnapshot, 0);
        return result;
      };
      try{ setLanguage = window.setLanguage; }catch(_e){}
    }
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initMobileEnhancements);
    else initMobileEnhancements();
  })();
