(function(){
    const sectionAliases = {
      search: 'searchSection',
      home: 'homeFeatureSection',
      seasons: 'seasonDirectorySection',
      competitions: 'competitionDirectorySection',
      athletes: 'athleteDirectorySection',
      skaters: 'skaterRankingSection',
      skaterRank: 'skaterRankingSection',
      eventRank: 'eventRankingSection',
      recordRank: 'recordRankingSection',
      records: 'recordRankingSection',
      lapRank: 'lapRankingSection',
      laps: 'lapRankingSection',
      compare: 'compareSection',
      countryRank: 'countryRankingSection',
      heat: 'heatToolSection',
      hall: 'hallOfFameSection',
      card: 'cardMakerSection',
      tier: 'tierMakerSection',
      quiz: 'quizSection'
    };
    let restoringRoute = false;

    function routeSectionId(value){
      const raw = String(value || '').replace(/^#/, '').trim();
      if(!raw) return '';
      return sectionAliases[raw] || raw;
    }

    function buildShorttrackUrl(params){
      const url = new URL(location.href);
      const query = new URLSearchParams();
      Object.entries(params || {}).forEach(([key, value]) => {
        const text = String(value || '').trim();
        if(text) query.set(key, text);
      });
      url.search = query.toString();
      url.hash = '';
      return url.toString();
    }

    function updateRoute(params, replace){
      if(restoringRoute || !history || typeof history.pushState !== 'function') return;
      const next = buildShorttrackUrl(params);
      if(next === location.href) return;
      history[replace ? 'replaceState' : 'pushState']({shorttrack:true}, '', next);
    }

    function syncSearchQuery(query){
      const text = String(query || '').trim();
      if(!text) return;
      const search = document.getElementById('searchInput');
      const mobile = document.getElementById('mobileSearchInput');
      if(search) search.value = text;
      if(mobile) mobile.value = text;
      if(typeof scheduleApplyFilters === 'function') scheduleApplyFilters();
      else if(typeof applyFilters === 'function') applyFilters();
    }

    function scrollToRouteSection(section){
      const id = routeSectionId(section);
      if(!id || !document.getElementById(id)) return false;
      if(typeof window.scrollToSection === 'function') window.scrollToSection(id);
      else document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'});
      return true;
    }

    function applyRoute(){
      const params = new URLSearchParams(location.search);
      const query = params.get('q') || params.get('search') || '';
      const player = params.get('player') || params.get('skater') || '';
      const competition = params.get('competition') || params.get('eventPage') || '';
      const country = params.get('country') || '';
      const season = params.get('season') || '';
      const section = params.get('section') || location.hash.replace(/^#/, '');
      restoringRoute = true;
      try{
        if(query) syncSearchQuery(query);
        if(player && typeof window.openPlayerPanel === 'function'){
          const resolved = typeof canonicalSkaterName === 'function' ? canonicalSkaterName(player) : player;
          window.openPlayerPanel(resolved);
          return;
        }
        if(competition && typeof window.openCompetitionPanel === 'function'){
          window.openCompetitionPanel(competition);
          return;
        }
        if(country && typeof window.openCountryPage === 'function'){
          window.openCountryPage(country);
          return;
        }
        if(season && typeof window.openSeasonPage === 'function'){
          window.openSeasonPage(season);
          return;
        }
        scrollToRouteSection(section || (query ? 'searchSection' : ''));
      }finally{
        setTimeout(() => { restoringRoute = false; }, 0);
      }
    }

    async function copyText(text){
      if(navigator.clipboard && window.isSecureContext){
        try{ await navigator.clipboard.writeText(text); return true; }catch(_e){}
      }
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.left = '-9999px';
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand('copy');
      area.remove();
      return ok;
    }

    async function copyShorttrackLink(params){
      const ok = await copyText(buildShorttrackUrl(params));
      alert(ok ? '링크를 복사했습니다.' : '링크 복사에 실패했습니다.');
    }

    window.copyPlayerLink = function(){
      const name = String(document.getElementById('playerName')?.textContent || '').trim();
      if(!name) return;
      copyShorttrackLink({player:name});
    };
    window.copyCurrentShorttrackLink = copyShorttrackLink;

    function wrapRouteWriters(){
      const previousScroll = window.scrollToSection;
      if(typeof previousScroll === 'function' && !previousScroll.__routeWrapped){
        const wrapped = function(id){
          const result = previousScroll.apply(this, arguments);
          if(routeSectionId(id)) updateRoute({section:routeSectionId(id)});
          return result;
        };
        wrapped.__routeWrapped = true;
        window.scrollToSection = wrapped;
        try{ scrollToSection = wrapped; }catch(_e){}
      }

      const previousOpenPlayer = window.openPlayerPanel;
      if(typeof previousOpenPlayer === 'function' && !previousOpenPlayer.__routeWrapped){
        const wrapped = function(name){
          const result = previousOpenPlayer.apply(this, arguments);
          if(document.getElementById('playerPanel')?.classList.contains('active')) updateRoute({player:name});
          return result;
        };
        wrapped.__routeWrapped = true;
        window.openPlayerPanel = wrapped;
        try{ openPlayerPanel = wrapped; }catch(_e){}
      }

      const previousCountry = window.openCountryPage;
      if(typeof previousCountry === 'function' && !previousCountry.__routeWrapped){
        const wrapped = function(country){
          const result = previousCountry.apply(this, arguments);
          if(document.getElementById('countryPanel')?.classList.contains('active')) updateRoute({country});
          return result;
        };
        wrapped.__routeWrapped = true;
        window.openCountryPage = wrapped;
      }

      const previousSeason = window.openSeasonPage;
      if(typeof previousSeason === 'function' && !previousSeason.__routeWrapped){
        const wrapped = function(season){
          const result = previousSeason.apply(this, arguments);
          if(document.getElementById('seasonPanel')?.classList.contains('active')) updateRoute({season});
          return result;
        };
        wrapped.__routeWrapped = true;
        window.openSeasonPage = wrapped;
      }

      const previousCompetition = window.openCompetitionPanel;
      if(typeof previousCompetition === 'function' && !previousCompetition.__routeWrapped){
        const wrapped = function(name){
          const result = previousCompetition.apply(this, arguments);
          if(document.getElementById('competitionPanel')?.classList.contains('active')) updateRoute({competition:name});
          return result;
        };
        wrapped.__routeWrapped = true;
        window.openCompetitionPanel = wrapped;
        try{ openCompetitionPanel = wrapped; }catch(_e){}
      }
    }

    function initRouteState(){
      wrapRouteWriters();
      setTimeout(applyRoute, 80);
    }

    window.addEventListener('popstate', () => {
      restoringRoute = true;
      setTimeout(() => {
        restoringRoute = false;
        applyRoute();
      }, 0);
    });
    if(window.shorttrackDataReady) initRouteState();
    else window.addEventListener('shorttrack:data-ready', initRouteState, {once:true});
  })();
