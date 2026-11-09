(function(){
    let archiveDirectoryCache = null;
    let competitionDirectoryVisible = 40;
    let athleteDirectoryIndex = 'all';
    let athleteDirectorySearchTimer = 0;
    let athleteDirectoryCommittedSearch = '';
    window.archiveCommitAthleteSearch=()=>{athleteDirectoryCommittedSearch=String(document.getElementById('athleteDirectorySearch')?.value||'').trim();};
    window.archiveAthleteSearchQuery=()=>athleteDirectoryCommittedSearch;
    let archiveDirectoryReady = false;

    function archiveText(ko,en){return currentLang === 'en' ? en : ko;}
    function archiveHtml(value){return typeof escapeHtml === 'function' ? escapeHtml(value) : String(value ?? '');}
    function archiveJs(value){return typeof escapeJs === 'function' ? escapeJs(value) : String(value ?? '').replace(/'/g,"\\'");}
    function archiveUrl(params){
      const query = new URLSearchParams();
      Object.entries(params || {}).forEach(([key,value])=>{
        const text = String(value || '').trim();
        if(text) query.set(key,text);
      });
      return `?${query.toString()}`;
    }
    function archiveEmpty(messageKey='dataNone'){
      return `<div class="empty">${archiveHtml(tr(messageKey))}</div>`;
    }
    function archiveCompetitionTypeLabel(type){
      const value = String(type || '').toLowerCase();
      if(value.includes('olympic')) return archiveText('올림픽','Olympics');
      if(value.includes('world championship')) return archiveText('세계선수권','World Championships');
      if(value.includes('world cup')) return archiveText('월드컵','World Cup');
      if(value.includes('world tour')) return archiveText('월드투어','World Tour');
      if(value.includes('european')) return archiveText('유럽선수권','European Championships');
      if(value.includes('four continents')) return archiveText('사대륙선수권','Four Continents Championships');
      if(value.includes('junior')) return archiveText('세계주니어선수권','World Junior Championships');
      return type || archiveText('기타 국제대회','Other international events');
    }
    function archiveCompetitionBadge(type){
      const raw = String(type || '').toLowerCase();
      const cls = raw.includes('olympic') ? 'olympic' : raw.includes('world championship') ? 'worlds' : raw.includes('world cup') ? 'worldcup' : raw.includes('world tour') ? 'worldtour' : '';
      return `<span class="competition-type-badge ${cls}">${archiveHtml(archiveCompetitionTypeLabel(type))}</span>`;
    }
    function archiveBreadcrumbHtml(items){
      const allItems = [{label:archiveText('홈','Home'), action:"scrollToSection('homeFeatureSection')"}].concat(items || []);
      return allItems.map((item,index)=>{
        const text = archiveHtml(item.label);
        const body = item.action && index < allItems.length - 1
          ? `<button type="button" onclick="${item.action}">${text}</button>`
          : `<span>${text}</span>`;
        return index ? `<span aria-hidden="true">&gt;</span>${body}` : body;
      }).join('');
    }
    function setArchiveBreadcrumb(id, items){
      const el = document.getElementById(id);
      if(el) el.innerHTML = archiveBreadcrumbHtml(items);
    }
    window.stArchiveSetBreadcrumb = setArchiveBreadcrumb;
    function archiveSeasonLabel(row){
      return typeof normalizeSeasonLabel === 'function' ? normalizeSeasonLabel(row?.season,row?.year) : (row?.season || row?.year || '');
    }
    function archiveSeasonValue(season){
      return typeof seasonSortValue === 'function' ? seasonSortValue(season,season) : Number(String(season).slice(0,4)) || 0;
    }
    function archiveCompetitionKey(row){
      return [row.competition_name || '', archiveSeasonLabel(row), row.year || ''].join('|');
    }
    function archivePlayerKeys(name){
      if(typeof buildSkaterNameKeySet === 'function') return buildSkaterNameKeySet(name);
      return new Set([String(name || '').toLowerCase()]);
    }
    function archiveSamePlayer(row,name){
      const keys = archivePlayerKeys(name);
      if(typeof sameSkaterByAlias === 'function') return sameSkaterByAlias(row.skater_name || row.original_skater_name, keys);
      return String(row.skater_name || row.original_skater_name || '').trim() === String(name || '').trim();
    }
    function archiveDistinct(rows, getter){
      return new Set(rows.map(getter).map(value=>String(value || '').trim()).filter(Boolean)).size;
    }
    function archiveBuildCache(){
      if(archiveDirectoryCache) return archiveDirectoryCache;
      const medalRows = Array.isArray(medals) ? medals : [];
      const skaterRows = Array.isArray(skaterMedals) ? skaterMedals : [];
      const lapRows = Array.isArray(bestTimes) ? bestTimes : [];
      const recordRows = Array.isArray(eventRecordsCache) ? eventRecordsCache : [];

      const seasonMap = new Map();
      medalRows.forEach(row=>{
        const season = archiveSeasonLabel(row);
        if(!season) return;
        if(!seasonMap.has(season)) seasonMap.set(season,{season,rows:[],competitions:new Map(),types:new Set(),olympic:false});
        const item = seasonMap.get(season);
        item.rows.push(row);
        if(row.competition_name) item.competitions.set(archiveCompetitionKey(row), row);
        if(row.competition_type) item.types.add(archiveCompetitionTypeLabel(row.competition_type));
        if(String(row.competition_type || '').toLowerCase().includes('olympic')) item.olympic = true;
      });
      const seasons = [...seasonMap.values()]
        .map(item=>({...item,competitionCount:item.competitions.size,recordCount:item.rows.length,types:[...item.types].slice(0,3)}))
        .sort((a,b)=>archiveSeasonValue(b.season)-archiveSeasonValue(a.season));

      const competitionMap = new Map();
      medalRows.forEach(row=>{
        if(!row.competition_name) return;
        const key = archiveCompetitionKey(row);
        if(!competitionMap.has(key)) competitionMap.set(key,{key,name:row.competition_name,season:archiveSeasonLabel(row),year:row.year || '',city:row.city || '',type:row.competition_type || '',rows:[]});
        const item = competitionMap.get(key);
        item.rows.push(row);
        if(!item.city && row.city) item.city = row.city;
        if(!item.type && row.competition_type) item.type = row.competition_type;
      });
      const competitions = [...competitionMap.values()]
        .map(item=>({...item,recordCount:item.rows.length,eventCount:archiveDistinct(item.rows,row=>row.event),athleteCount:archiveDistinct(item.rows,row=>row.skater_name),countryCount:archiveDistinct(item.rows,row=>row.country)}))
        .sort((a,b)=>archiveSeasonValue(b.season)-archiveSeasonValue(a.season)||String(b.year||'').localeCompare(String(a.year||''),'ko')||a.name.localeCompare(b.name,'ko'));

      const athleteMap = new Map();
      const addAthleteRow = (row, bucket)=>{
        const name = String(row.skater_name || row.original_skater_name || '').trim();
        if(!name || (typeof isRelayEvent === 'function' && isRelayEvent(row.event))) return;
        if(!athleteMap.has(name)) athleteMap.set(name,{name,rows:[],laps:[],records:[]});
        athleteMap.get(name)[bucket].push(row);
      };
      skaterRows.forEach(row=>addAthleteRow(row,'rows'));
      lapRows.forEach(row=>addAthleteRow(row,'laps'));
      recordRows.forEach(row=>addAthleteRow(row,'records'));
      const athletes = [...athleteMap.values()].map(item=>{
        const allRows = item.rows.concat(item.laps,item.records);
        const country = typeof currentRepresentativeCountry === 'function' ? currentRepresentativeCountry(item.name, allRows) : (allRows.find(row=>row.country)?.country || '');
        const gender = allRows.find(row=>row.gender)?.gender || '';
        const local = typeof koreanAliasForSkater === 'function' ? koreanAliasForSkater(item.name) : '';
        const seasonsForAthlete = [...new Set(allRows.map(row=>archiveSeasonLabel(row) || row.year).filter(Boolean))].sort((a,b)=>archiveSeasonValue(b)-archiveSeasonValue(a));
        const activity = seasonsForAthlete.length > 1 ? `${seasonsForAthlete[seasonsForAthlete.length-1]} ~ ${seasonsForAthlete[0]}` : (seasonsForAthlete[0] || '-');
        const athlete = {name:item.name,local,country,gender,seasons:seasonsForAthlete,activity,rowCount:allRows.length,medalCount:item.rows.length};
        athlete.searchText = archiveAthleteSearchText(athlete);
        return athlete;
      }).sort((a,b)=>a.name.localeCompare(b.name,'ko'));

      archiveDirectoryCache = {seasons,competitions,athletes,latestSeason:seasons[0]?.season || ''};
      return archiveDirectoryCache;
    }
    function archiveFillSelect(id, values, labelKey){
      const el = document.getElementById(id);
      if(!el) return;
      const current = el.value;
      el.innerHTML = `<option value="">${archiveHtml(tr(labelKey))}</option>`;
      values.forEach(value=>{
        const opt = document.createElement('option');
        opt.value = value;
        opt.textContent = id==='athleteDirectoryCountry' ? archiveCountryLabel(value) : value;
        el.appendChild(opt);
      });
      if(current && values.includes(current)) el.value = current;
    }
    function archiveDecadeLabel(season){
      const year = archiveSeasonValue(season);
      if(!year) return archiveText('기타','Other');
      const decade = Math.floor(year / 10) * 10;
      return currentLang === 'en' ? `${decade}s` : `${decade}년대`;
    }
    function renderSeasonDirectory(){
      const {seasons,latestSeason} = archiveBuildCache();
      const wrap = document.getElementById('seasonDirectoryWrap');
      const summary = document.getElementById('seasonDirectorySummary');
      if(!wrap) return;
      const seasonValue = document.getElementById('seasonDirectorySeason')?.value || '';
      const type = document.getElementById('seasonDirectoryType')?.value || '';
      const keyword = String(document.getElementById('seasonDirectoryKeyword')?.value || '').trim().toLowerCase();
      const hasCriteria = !!(seasonValue || type || keyword);
      let rows = seasons.filter(item=>{
        const haystack = [item.season,...item.types].join(' ').toLowerCase();
        return (!seasonValue || item.season === seasonValue) &&
          (!type || item.types.includes(type)) &&
          (!keyword || haystack.includes(keyword));
      });
      if(!hasCriteria) rows=rows.slice(0,5);
      if(summary) summary.textContent = hasCriteria ? archiveText(`총 ${rows.length}개 시즌 표시`, `Showing ${rows.length} seasons`) : archiveText('최근 5개 수록 시즌 · 조건을 선택하면 더 찾을 수 있습니다.', 'Latest 5 recorded seasons · Use filters to explore more.');
      if(!rows.length){wrap.innerHTML = archiveEmpty(); return;}
      const groups = new Map();
      rows.forEach(item=>{
        const label = archiveDecadeLabel(item.season);
        if(!groups.has(label)) groups.set(label,[]);
        groups.get(label).push(item);
      });
      wrap.innerHTML = [...groups.entries()].map(([label,items],idx)=>`
        <details class="archive-era-group" ${idx === 0 ? 'open' : ''}>
          <summary><span>${archiveHtml(label)}</span><span>${items.length}</span></summary>
          <div class="archive-directory-grid">${items.map(item=>`
            <article class="archive-directory-card ${item.season === latestSeason ? 'is-featured' : ''}">
              <a href="${archiveUrl({season:item.season})}" onclick="event.preventDefault(); openSeasonPage('${archiveJs(item.season)}')">
                <div class="archive-directory-title">${archiveHtml(item.season)}</div>
              </a>
              <div class="archive-directory-meta">
                ${item.season === latestSeason ? `${archiveHtml(tr('latestSeason'))} · ` : ''}${archiveText('대회','Competitions')} ${item.competitionCount} · ${archiveText('기록','Records')} ${item.recordCount}
                ${item.types.length ? `<br>${archiveHtml(item.types.join(' · '))}` : ''}
                ${item.olympic ? `<br>${archiveText('올림픽 시즌','Olympic season')}` : ''}
              </div>
              <div class="archive-directory-actions"><a class="archive-directory-link" href="${archiveUrl({season:item.season})}" onclick="event.preventDefault(); openSeasonPage('${archiveJs(item.season)}')">${archiveHtml(tr('viewSeason'))}</a></div>
            </article>`).join('')}</div>
        </details>`).join('');
    }
    function renderCompetitionDirectory(){
      const cache = archiveBuildCache();
      const wrap = document.getElementById('competitionDirectoryWrap');
      const summary = document.getElementById('competitionDirectorySummary');
      if(!wrap) return;
      const season = document.getElementById('competitionDirectorySeason')?.value || '';
      const type = document.getElementById('competitionDirectoryType')?.value || '';
      const city = String(document.getElementById('competitionDirectoryCity')?.value || '').trim().toLowerCase();
      const hasCriteria = !!(season || type || city);
      let rows = cache.competitions.filter(item=>
        (!season || item.season === season) &&
        (!type || archiveCompetitionTypeLabel(item.type) === type) &&
        (!city || [item.city,item.name,item.type].join(' ').toLowerCase().includes(city))
      );
      const total = rows.length;
      rows = rows.slice(0, hasCriteria ? competitionDirectoryVisible : 6);
      if(summary) summary.textContent = archiveText(`총 ${total}개 대회 중 ${rows.length}개 표시`, `Showing ${rows.length} of ${total} competitions`);
      if(!rows.length){wrap.innerHTML = archiveEmpty(); return;}
      wrap.innerHTML = `<div class="archive-directory-grid">${rows.map(item=>`
        <article class="archive-directory-card">
          <a href="${archiveUrl({competition:item.name})}" onclick="event.preventDefault(); openCompetitionPanel('${archiveJs(item.name)}')">
            <div class="archive-directory-title">${archiveHtml(item.name)}</div>
          </a>
          <div class="archive-directory-meta">${archiveCompetitionBadge(item.type)} ${archiveHtml(item.season || '-')}<br>${archiveHtml(item.city || '-')} · ${archiveText('종목','Events')} ${item.eventCount} · ${archiveText('선수/팀','Athletes/teams')} ${item.athleteCount}</div>
          <div class="archive-directory-actions"><a class="archive-directory-link" href="${archiveUrl({competition:item.name})}" onclick="event.preventDefault(); openCompetitionPanel('${archiveJs(item.name)}')">${archiveHtml(tr('viewCompetition'))}</a></div>
        </article>`).join('')}</div>${archiveMoreControls('competition',rows.length,total)}`;
    }
    function athleteIndexValue(name, local){
      const text = String(local || name || '').trim();
      const first = text.charAt(0).toUpperCase();
      if(/[A-Z]/.test(first)) return first;
      if(/[가-힣]/.test(first)) return first;
      return '#';
    }
    function renderAthleteDirectoryIndex(){
      const wrap = document.getElementById('athleteDirectoryIndex');
      if(!wrap) return;
      wrap.innerHTML = '';
    }
    function renderAthleteDirectory(){
      const cache = archiveBuildCache();
      const wrap = document.getElementById('athleteDirectoryWrap');
      const summary = document.getElementById('athleteDirectorySummary');
      if(!wrap) return;
      const q = archiveNameKey(athleteDirectoryCommittedSearch);
      const country = document.getElementById('athleteDirectoryCountry')?.value || '';
      const gender = document.getElementById('athleteDirectoryGender')?.value || '';
      const season = document.getElementById('athleteDirectorySeason')?.value || '';
      const hasCriteria = !!(q || country || gender || season);
      athleteDirectoryIndex = 'all';
      renderAthleteDirectoryIndex();
      let rows = cache.athletes.filter(item=>{
        return (!q || item.searchText.includes(q)) &&
          (!country || item.country === country) &&
          (!gender || item.gender === gender) &&
          (!season || item.seasons.includes(season));
      });
      if(!hasCriteria) rows=rows.sort((a,b)=>archiveSeasonValue(b.seasons[0])-archiveSeasonValue(a.seasons[0]) || b.medalCount-a.medalCount || a.name.localeCompare(b.name)).slice(0,12);
      const total = rows.length;
      if(summary) summary.textContent = hasCriteria ? archiveText(`총 ${total}명 표시`, `Showing ${total} athletes`) : archiveText('최근 수록 시즌의 메달리스트 12명 · 검색으로 더 찾아보세요.', '12 medalists from recent recorded seasons · Search to explore more.');
      if(!rows.length){wrap.innerHTML = archiveEmpty(); return;}
      wrap.innerHTML = `<div class="archive-directory-grid">${rows.map(item=>`
        <article class="archive-directory-card">
          <a href="${archiveUrl({player:item.name})}" onclick="event.preventDefault(); openPlayerPanel('${archiveJs(item.name)}')">
            <div class="archive-directory-title">${archiveHtml(item.name)}</div>
          </a>
          <div class="archive-directory-meta">${archiveHtml(item.country || '-')} · ${archiveHtml(genderKorean(item.gender) || '-')}<br>${archiveText('수록 기록 시즌','Recorded seasons')}: ${archiveHtml(item.activity)} · ${archiveText('기록','Records')} ${item.rowCount}</div>
          <div class="archive-directory-actions"><a class="archive-directory-link" href="${archiveUrl({player:item.name})}" onclick="event.preventDefault(); openPlayerPanel('${archiveJs(item.name)}')">${archiveHtml(tr('viewAthlete'))}</a></div>
        </article>`).join('')}</div>`;
    }
    function archiveMoreControls(kind, shown, total){
      const showMore = shown < total ? `<button type="button" class="sort-btn" onclick="showMore${kind === 'competition' ? 'Competition' : 'Athlete'}Directory()">${archiveHtml(tr('showMore'))}</button>` : '';
      const collapse = shown > (kind === 'competition' ? 40 : 60) ? `<button type="button" class="sort-btn" onclick="collapse${kind === 'competition' ? 'Competition' : 'Athlete'}Directory()">${archiveHtml(tr('collapse'))}</button>` : '';
      return showMore || collapse ? `<div class="ranking-more-actions"><span class="score-mini">${archiveText(`총 ${total}개`, `${total} total`)}</span>${showMore}${collapse}</div>` : '';
    }
    function populateArchiveDirectoryFilters(){
      const cache = archiveBuildCache();
      const seasons = cache.seasons.map(item=>item.season);
      const types = [...new Set(cache.competitions.map(item=>archiveCompetitionTypeLabel(item.type)).filter(Boolean))].sort((a,b)=>a.localeCompare(b,currentLang === 'en' ? 'en' : 'ko'));
      const countries = [...new Set(cache.athletes.map(item=>item.country).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'ko'));
      const genders = [...new Set(cache.athletes.map(item=>item.gender).filter(Boolean))];
      archiveFillSelect('seasonDirectorySeason', seasons, 'filterSeason');
      archiveFillSelect('seasonDirectoryType', types, 'allTypes');
      archiveFillSelect('competitionDirectorySeason', seasons, 'filterSeason');
      archiveFillSelect('competitionDirectoryType', types, 'allTypes');
      archiveFillSelect('athleteDirectoryCountry', countries, 'allCountries');
      archiveFillSelect('athleteDirectoryGender', genders.map(gender=>genderKorean(gender)), 'allGenders');
      const genderSelect = document.getElementById('athleteDirectoryGender');
      if(genderSelect){
        [...genderSelect.options].forEach(option=>{
          const raw = genders.find(gender=>genderKorean(gender) === option.value);
          if(raw) option.value = raw;
        });
      }
      archiveFillSelect('athleteDirectorySeason', seasons, 'filterActiveSeason');
    }
    function renderArchiveDirectories(){
      if(!archiveDirectoryReady) return;
      renderSeasonDirectory();
      renderCompetitionDirectory();
      renderAthleteDirectory();
      updateExplorerActiveNav();
    }
    function archiveRelatedLink(label, params, action){
      return `<a class="archive-directory-link" href="${archiveUrl(params)}" onclick="event.preventDefault(); ${action}">${archiveHtml(label)}</a>`;
    }
    function ensureArchiveRelatedLinks(anchorId, id){
      let el = document.getElementById(id);
      if(el) return el;
      const anchor = document.getElementById(anchorId);
      if(!anchor) return null;
      el = document.createElement('div');
      el.id = id;
      el.className = 'archive-directory-actions';
      anchor.insertAdjacentElement('afterend', el);
      return el;
    }
    function renderPlayerRelatedLinks(name){
      const el = ensureArchiveRelatedLinks('playerInfo','playerRelatedLinks');
      if(!el) return;
      const rows = (Array.isArray(skaterMedals) ? skaterMedals : []).filter(row=>row.skater_name === name);
      const seasons = [...new Set(rows.map(row=>archiveSeasonLabel(row)).filter(Boolean))].sort((a,b)=>archiveSeasonValue(b)-archiveSeasonValue(a)).slice(0,4);
      const competitions = [...new Map(rows.filter(row=>row.competition_name).map(row=>[row.competition_name,row])).values()]
        .sort((a,b)=>archiveSeasonValue(archiveSeasonLabel(b))-archiveSeasonValue(archiveSeasonLabel(a))).slice(0,4);
      el.innerHTML = [
        archiveRelatedLink(tr('navAthletes'), {section:'athleteDirectorySection'}, "scrollToSection('athleteDirectorySection')"),
        ...seasons.map(season=>archiveRelatedLink(season, {season}, `openSeasonPage('${archiveJs(season)}')`)),
        ...competitions.map(row=>archiveRelatedLink(row.competition_name, {competition:row.competition_name}, `openCompetitionPanel('${archiveJs(row.competition_name)}')`))
      ].join('');
    }
    function renderCompetitionRelatedLinks(name){
      const el = ensureArchiveRelatedLinks('competitionInfo','competitionRelatedLinks');
      if(!el) return;
      const rows = (Array.isArray(medals) ? medals : []).filter(row=>row.competition_name === name);
      const first = rows[0] || {};
      const season = archiveSeasonLabel(first);
      el.innerHTML = [
        archiveRelatedLink(tr('navCompetitions'), {section:'competitionDirectorySection'}, "scrollToSection('competitionDirectorySection')"),
        season ? archiveRelatedLink(season, {season}, `openSeasonPage('${archiveJs(season)}')`) : '',
        ...[...new Set(rows.filter(row=>row.skater_name && !(typeof isRelayEvent === 'function' && isRelayEvent(row.event))).map(row=>row.skater_name))].slice(0,5)
          .map(player=>archiveRelatedLink(player, {player}, `openPlayerPanel('${archiveJs(player)}')`))
      ].join('');
    }
    function renderSeasonRelatedLinks(season){
      const el = ensureArchiveRelatedLinks('seasonPanelInfo','seasonRelatedLinks');
      if(!el) return;
      el.innerHTML = [
        archiveRelatedLink(tr('navSeasons'), {section:'seasonDirectorySection',seasonDirSeason:season}, `openSeasonDirectoryForSeason('${archiveJs(season)}')`),
        archiveRelatedLink(tr('navCompetitions'), {section:'competitionDirectorySection',dirSeason:season}, `openCompetitionDirectoryForSeason('${archiveJs(season)}')`)
      ].join('');
    }
    function wrapArchiveDetailPanels(){
      if(window.openPlayerPanel && !window.openPlayerPanel.__archiveDirectoryWrapped){
        const previous = window.openPlayerPanel;
        const wrapped = function(name){
          const result = previous.apply(this, arguments);
          setArchiveBreadcrumb('playerBreadcrumb', [
            {label:tr('navAthletes'), action:"scrollToSection('athleteDirectorySection')"},
            {label:name}
          ]);
          renderPlayerRelatedLinks(name);
          return result;
        };
        wrapped.__archiveDirectoryWrapped = true;
        window.openPlayerPanel = wrapped;
        try{ openPlayerPanel = wrapped; }catch(_e){}
      }
      if(window.openCompetitionPanel && !window.openCompetitionPanel.__archiveDirectoryWrapped){
        const previous = window.openCompetitionPanel;
        const wrapped = function(name){
          const result = previous.apply(this, arguments);
          const rows = (Array.isArray(medals) ? medals : []).filter(row=>row.competition_name === name);
          const season = archiveSeasonLabel(rows[0] || {});
          setArchiveBreadcrumb('competitionBreadcrumb', [
            {label:tr('navCompetitions'), action:"scrollToSection('competitionDirectorySection')"},
            ...(season ? [{label:season, action:`openSeasonPage('${archiveJs(season)}')`}] : []),
            {label:name}
          ]);
          renderCompetitionRelatedLinks(name);
          return result;
        };
        wrapped.__archiveDirectoryWrapped = true;
        window.openCompetitionPanel = wrapped;
        try{ openCompetitionPanel = wrapped; }catch(_e){}
      }
      if(window.openSeasonPage && !window.openSeasonPage.__archiveDirectoryWrapped){
        const previous = window.openSeasonPage;
        const wrapped = function(season){
          const result = previous.apply(this, arguments);
          const normalized = typeof normalizeSeasonLabel === 'function' ? normalizeSeasonLabel(season,season) || season : season;
          setArchiveBreadcrumb('seasonBreadcrumb', [
            {label:tr('navSeasons'), action:"scrollToSection('seasonDirectorySection')"},
            {label:normalized}
          ]);
          renderSeasonRelatedLinks(normalized);
          return result;
        };
        wrapped.__archiveDirectoryWrapped = true;
        window.openSeasonPage = wrapped;
      }
    }
    function attachArchiveDirectoryEvents(){
      ['seasonDirectorySeason','seasonDirectoryType','seasonDirectoryKeyword'].forEach(id=>{
        document.getElementById(id)?.addEventListener(id === 'seasonDirectoryKeyword' ? 'input' : 'change',()=>{
          renderSeasonDirectory();
          updateDirectoryQuery('season');
        });
      });
      ['competitionDirectorySeason','competitionDirectoryType','competitionDirectoryCity'].forEach(id=>{
        document.getElementById(id)?.addEventListener(id === 'competitionDirectoryCity' ? 'input' : 'change',()=>{
          competitionDirectoryVisible = 40;
          renderCompetitionDirectory();
          updateDirectoryQuery('competition');
        });
      });
      const athleteSearch = document.getElementById('athleteDirectorySearch');
      const commitAthleteSearch = ()=>{
        window.archiveCommitAthleteSearch();
        window.clearTimeout(athleteDirectorySearchTimer);
        renderAthleteDirectory();
        updateDirectoryQuery('athlete');
      };
      athleteSearch?.addEventListener('keydown',event=>{
        if(event.key === 'Enter' && !event.isComposing){event.preventDefault();commitAthleteSearch();}
      });
      ['athleteDirectoryCountry','athleteDirectoryGender','athleteDirectorySeason'].forEach(id=>{
        document.getElementById(id)?.addEventListener('change',()=>{
          renderAthleteDirectory();
          updateDirectoryQuery('athlete');
        });
      });
    }
    function updateDirectoryQuery(kind){
      if(!history || typeof history.replaceState !== 'function') return;
      const params = {};
      if(kind === 'season'){
        params.section = 'seasonDirectorySection';
        params.seasonDirSeason = document.getElementById('seasonDirectorySeason')?.value || '';
        params.seasonDirType = document.getElementById('seasonDirectoryType')?.value || '';
        params.seasonDirKeyword = document.getElementById('seasonDirectoryKeyword')?.value || '';
      }else if(kind === 'competition'){
        params.section = 'competitionDirectorySection';
        params.dirSeason = document.getElementById('competitionDirectorySeason')?.value || '';
        params.dirType = document.getElementById('competitionDirectoryType')?.value || '';
        params.dirCity = document.getElementById('competitionDirectoryCity')?.value || '';
      }else if(kind === 'athlete'){
        params.section = 'athleteDirectorySection';
        params.athleteQ = athleteDirectoryCommittedSearch;
        params.athleteCountry = document.getElementById('athleteDirectoryCountry')?.value || '';
        params.athleteGender = document.getElementById('athleteDirectoryGender')?.value || '';
        params.athleteSeason = document.getElementById('athleteDirectorySeason')?.value || '';
      }
      const url = new URL(location.href);
      const query = new URLSearchParams();
      Object.entries(params).forEach(([key,value])=>{if(String(value || '').trim()) query.set(key,value);});
      url.search = query.toString();
      url.hash = '';
      history.replaceState({shorttrack:true},'',url.toString());
    }
    function applyArchiveDirectoryQuery(){
      const params = new URLSearchParams(location.search);
      const setValue = (id,value)=>{const el=document.getElementById(id); if(el && value !== null) el.value = value || '';};
      setValue('seasonDirectorySeason', params.get('seasonDirSeason'));
      setValue('seasonDirectoryType', params.get('seasonDirType'));
      setValue('seasonDirectoryKeyword', params.get('seasonDirKeyword'));
      setValue('competitionDirectorySeason', params.get('dirSeason'));
      setValue('competitionDirectoryType', params.get('dirType'));
      setValue('competitionDirectoryCity', params.get('dirCity'));
      setValue('athleteDirectorySearch', params.get('athleteQ'));
      if(params.has('athleteQ'))window.archiveCommitAthleteSearch();
      setValue('athleteDirectoryCountry', params.get('athleteCountry'));
      setValue('athleteDirectoryGender', params.get('athleteGender'));
      setValue('athleteDirectorySeason', params.get('athleteSeason'));
      athleteDirectoryIndex = 'all';
    }
    function updateExplorerActiveNav(){
      const sections = ['homeFeatureSection','seasonDirectorySection','competitionDirectorySection','athleteDirectorySection','searchSection'];
      let active = sections[0];
      sections.forEach(id=>{
        const el = document.getElementById(id);
        if(el && el.getBoundingClientRect().top <= 140) active = id;
      });
      document.querySelectorAll('.top-explorer-nav [data-explorer-nav]').forEach(link=>link.classList.toggle('active', link.dataset.explorerNav === active));
    }
    function initArchiveDirectories(){
      archiveDirectoryCache = null;
      archiveDirectoryReady = true;
      wrapArchiveDetailPanels();
      populateArchiveDirectoryFilters();
      applyArchiveDirectoryQuery();
      attachArchiveDirectoryEvents();
      renderArchiveDirectories();
    }
    function renderArchiveDirectoryDeferredPrompts(){
      const set = (summaryId, wrapId, summaryKo, summaryEn, emptyKo, emptyEn)=>{
        const summary=document.getElementById(summaryId);
        const wrap=document.getElementById(wrapId);
        if(summary) summary.textContent = archiveText(summaryKo, summaryEn);
        if(wrap) wrap.innerHTML = `<div class="empty">${archiveHtml(archiveText(emptyKo, emptyEn))}</div>`;
      };
      set('seasonDirectorySummary','seasonDirectoryWrap',
        '시즌, 대회 종류, 검색어 중 하나를 선택하면 시즌 결과가 표시됩니다.',
        'Choose a season, competition type, or search term to show season results.',
        '시즌 조건을 먼저 선택해 주세요.',
        'Choose season filters first.'
      );
      set('competitionDirectorySummary','competitionDirectoryWrap',
        '시즌, 대회 종류, 개최지 중 하나를 선택하면 대회 결과가 표시됩니다.',
        'Choose a season, competition type, or host keyword to show competition results.',
        '대회 조건을 먼저 선택해 주세요.',
        'Choose competition filters first.'
      );
      set('athleteDirectorySummary','athleteDirectoryWrap',
        '빠른 검색어를 입력하거나 국가·성별·시즌을 선택하면 선수 결과가 표시됩니다.',
        'Enter a quick search or choose a country, gender, or season to show athlete results.',
        '선수 조건을 먼저 선택해 주세요.',
        'Choose athlete filters first.'
      );
    }
    window.openSeasonDirectoryForSeason = function(season){
      if(!archiveDirectoryReady) initArchiveDirectories();
      const select = document.getElementById('seasonDirectorySeason');
      if(select) select.value = season || '';
      const type = document.getElementById('seasonDirectoryType');
      if(type) type.value = '';
      const keyword = document.getElementById('seasonDirectoryKeyword');
      if(keyword) keyword.value = '';
      renderSeasonDirectory();
      updateDirectoryQuery('season');
      scrollToSection('seasonDirectorySection');
    };
    window.openCompetitionDirectoryForSeason = function(season){
      if(!archiveDirectoryReady) initArchiveDirectories();
      const select = document.getElementById('competitionDirectorySeason');
      if(select) select.value = season || '';
      const type = document.getElementById('competitionDirectoryType');
      if(type) type.value = '';
      const city = document.getElementById('competitionDirectoryCity');
      if(city) city.value = '';
      competitionDirectoryVisible = 40;
      renderCompetitionDirectory();
      updateDirectoryQuery('competition');
      scrollToSection('competitionDirectorySection');
    };
    window.resetSeasonDirectoryFilters = function(){
      ['seasonDirectorySeason','seasonDirectoryType','seasonDirectoryKeyword'].forEach(id=>{const el=document.getElementById(id); if(el) el.value='';});
      renderSeasonDirectory();
      updateDirectoryQuery('season');
    };
    window.resetCompetitionDirectoryFilters = function(){
      ['competitionDirectorySeason','competitionDirectoryType','competitionDirectoryCity'].forEach(id=>{const el=document.getElementById(id); if(el) el.value='';});
      competitionDirectoryVisible = 40;
      renderCompetitionDirectory();
      updateDirectoryQuery('competition');
    };
    window.resetAthleteDirectoryFilters = function(){
      athleteDirectoryCommittedSearch='';
      ['athleteDirectorySearch','athleteDirectoryCountry','athleteDirectoryGender','athleteDirectorySeason'].forEach(id=>{const el=document.getElementById(id); if(el) el.value='';});
      athleteDirectoryIndex = 'all';
      renderAthleteDirectory();
      updateDirectoryQuery('athlete');
    };
    window.showMoreCompetitionDirectory = function(){competitionDirectoryVisible += 40; renderCompetitionDirectory();};
    window.collapseCompetitionDirectory = function(){competitionDirectoryVisible = 40; renderCompetitionDirectory();};
    window.showMoreAthleteDirectory = function(){renderAthleteDirectory();};
    window.collapseAthleteDirectory = function(){renderAthleteDirectory();};
    window.setAthleteDirectoryIndex = function(){athleteDirectoryIndex = 'all'; renderAthleteDirectory(); updateDirectoryQuery('athlete');};

    const previousSetLanguageForArchive = window.setLanguage;
    if(typeof previousSetLanguageForArchive === 'function' && !previousSetLanguageForArchive.__archiveDirectoryWrapped){
      const wrapped = function(){
        const result = previousSetLanguageForArchive.apply(this, arguments);
        archiveDirectoryCache = null;
        if(archiveDirectoryReady){
          populateArchiveDirectoryFilters();
          renderArchiveDirectories();
        }
        return result;
      };
      wrapped.__archiveDirectoryWrapped = true;
      window.setLanguage = wrapped;
      try{ setLanguage = wrapped; }catch(_e){}
    }
    window.addEventListener('shorttrack:data-updated',()=>{
      archiveDirectoryCache = null;
      if(archiveDirectoryReady){populateArchiveDirectoryFilters(); renderArchiveDirectories();}
    });
    window.addEventListener('shorttrack:records-updated',()=>{
      archiveDirectoryCache=null;
      if(archiveDirectoryReady){populateArchiveDirectoryFilters();renderArchiveDirectories();}
    });
    document.getElementById('athleteDirectorySection')?.addEventListener('focusin',()=>{
      if(window.shorttrackDataReady)window.preloadEventRecordFilters?.();
    },{once:true});
    window.addEventListener('scroll',()=>window.requestAnimationFrame(updateExplorerActiveNav),{passive:true});
    window.addEventListener('popstate',()=>{if(archiveDirectoryReady){applyArchiveDirectoryQuery(); renderArchiveDirectories();}});
    function shouldInitArchiveDirectoriesNow(){
      const params = new URLSearchParams(location.search);
      const section = params.get('section') || '';
      return ['seasonDirectorySection','competitionDirectorySection','athleteDirectorySection'].includes(section) ||
        ['seasonDirSeason','seasonDirType','seasonDirKeyword','dirSeason','dirType','dirCity','athleteQ','athleteCountry','athleteGender','athleteSeason'].some(key=>params.has(key));
    }
    function scheduleArchiveDirectoryInit(){
      if(!archiveDirectoryReady) initArchiveDirectories();
    }
    if(window.shorttrackDataReady) scheduleArchiveDirectoryInit();
    else window.addEventListener('shorttrack:data-ready', scheduleArchiveDirectoryInit, {once:true});
  })();
