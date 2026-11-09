/* Event record ranking integration */
/* UPDATED_RECORD_THRESHOLDS_2026_06_06: Men 1000 m <= 83.999, Men 1500 m <= 132.999, Men 5000 m Relay <= 398.999, final-rank default = 1 */
(function(){
  let eventRecordRows = [];
  let eventRecordsLoaded = false;
  let eventRecordVisibleLimit = 0;
  let eventRecordVisibleBaseLimit = 0;
  let eventRecordVisibleSignature = '';
  let eventRecordPreloadPromise = null;

  function recordEscape(v){
    if(typeof escapeHtml === 'function') return escapeHtml(v);
    return String(v || '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }

  function recordSeconds(value){
    const s = String(value || '').trim();
    if(!s || /^(nan|null|undefined)$/i.test(s)) return null;
    const n = Number(s);
    if(Number.isFinite(n)) return n;
    if(s.includes(':')){
      const parts = s.split(':').map(x => x.trim());
      if(parts.length === 2){
        const sec = Number(parts[0]) * 60 + Number(parts[1]);
        return Number.isFinite(sec) ? sec : null;
      }
      if(parts.length === 3){
        const sec = Number(parts[0]) * 3600 + Number(parts[1]) * 60 + Number(parts[2]);
        return Number.isFinite(sec) ? sec : null;
      }
    }
    return null;
  }

  function normalizeRecordText(value){
    return String(value || '').replace(/\r/g,' ').replace(/\n/g,' ').replace(/\s+/g,' ').trim();
  }

  function cleanRecordEventText(value){
    return normalizeRecordText(value).replace(/^\d{1,2}\s+[A-Za-z]{3}\s+\d{4},\s*\d{1,2}:\d{2}\s*/,'').trim();
  }

  function inferRecordGender(gender, event){
    const g = normalizeRecordText(gender);
    const e = normalizeRecordText(event).toLowerCase();
    if(/^women$/i.test(g) || /women|female|ladies|여/.test(g.toLowerCase())) return 'Women';
    if(/^men$/i.test(g) || /(^|[^a-z])men([^a-z]|$)|male|남/.test(g.toLowerCase())) return 'Men';
    if(/^mixed$/i.test(g) || /mixed|혼성/.test(g.toLowerCase())) return 'Mixed';
    if(/women|ladies/.test(e)) return 'Women';
    if(/(^|[^a-z])men([^a-z]|$)/.test(e)) return 'Men';
    if(/mixed/.test(e)) return 'Mixed';
    return g || '';
  }

  function normalizeRecordEvent(row){
    const gender = inferRecordGender(row.gender, row.event);
    const raw = cleanRecordEventText(row.event || row.distance || row.discipline || '');
    let e = raw.toLowerCase();
    e = e.replace(/metres|metre|meters|meter/g,'m').replace(/\s+/g,' ');
    e = e.replace(/(\d+)\s*m\b/g,'$1m');

    if(/mixed/.test(e) && /relay/.test(e)) return 'Mixed Team Relay';
    if((gender === 'Women' || /women|ladies/.test(e)) && /relay/.test(e) && (/3000/.test(e) || /relay/.test(e))) return 'Women 3000 m Relay';
    if((gender === 'Men' || /(^|[^a-z])men([^a-z]|$)/.test(e)) && /relay/.test(e) && (/5000/.test(e) || /relay/.test(e))) return 'Men 5000 m Relay';

    if((gender === 'Women' || /women|ladies/.test(e)) && /\b500m\b/.test(e) && !/1500/.test(e)) return 'Women 500 m';
    if((gender === 'Men' || /(^|[^a-z])men([^a-z]|$)/.test(e)) && /\b500m\b/.test(e) && !/1500/.test(e)) return 'Men 500 m';
    if((gender === 'Women' || /women|ladies/.test(e)) && /\b1000m\b/.test(e)) return 'Women 1000 m';
    if((gender === 'Men' || /(^|[^a-z])men([^a-z]|$)/.test(e)) && /\b1000m\b/.test(e)) return 'Men 1000 m';
    if((gender === 'Women' || /women|ladies/.test(e)) && /\b1500m\b/.test(e)) return 'Women 1500 m';
    if((gender === 'Men' || /(^|[^a-z])men([^a-z]|$)/.test(e)) && /\b1500m\b/.test(e)) return 'Men 1500 m';

    return raw;
  }

  function recordThreshold(event){
    return {
      'Women 500 m':42.999,
      'Men 500 m':40.999,
      'Women 1000 m':88.999,
      'Men 1000 m':83.999,
      'Women 1500 m':138.999,
      'Men 1500 m':132.999,
      'Mixed Team Relay':158.999,
      'Women 3000 m Relay':247.999,
      'Men 5000 m Relay':398.999
    }[event] ?? null;
  }

  function recordEventOrder(event){
    return {
      'Women 500 m':1,
      'Men 500 m':2,
      'Women 1000 m':3,
      'Men 1000 m':4,
      'Women 1500 m':5,
      'Men 1500 m':6,
      'Mixed Team Relay':7,
      'Women 3000 m Relay':8,
      'Men 5000 m Relay':9
    }[event] ?? 99;
  }

  function recordIsRelay(event){
    return /Relay/i.test(String(event || ''));
  }

  function recordEventLabel(event){
    if(currentLang === 'en') return event || '';
    return {
      'Women 500 m':'여자 500m',
      'Men 500 m':'남자 500m',
      'Women 1000 m':'여자 1000m',
      'Men 1000 m':'남자 1000m',
      'Women 1500 m':'여자 1500m',
      'Men 1500 m':'남자 1500m',
      'Mixed Team Relay':'혼성계주',
      'Women 3000 m Relay':'여자계주',
      'Men 5000 m Relay':'남자계주'
    }[event] || event || '';
  }

  function recordEventsForGender(gender, rows){
    const allEvents = [...new Set((rows || eventRecordRows || []).map(r => r.event).filter(Boolean))]
      .sort((a,b) => recordEventOrder(a) - recordEventOrder(b) || String(a).localeCompare(String(b),'ko'));
    if(gender === 'Women') return allEvents.filter(e => e === 'Women 500 m' || e === 'Women 1000 m' || e === 'Women 1500 m' || e === 'Women 3000 m Relay');
    if(gender === 'Men') return allEvents.filter(e => e === 'Men 500 m' || e === 'Men 1000 m' || e === 'Men 1500 m' || e === 'Men 5000 m Relay');
    if(gender === 'Mixed') return allEvents.filter(e => e === 'Mixed Team Relay');
    return allEvents;
  }

  function defaultRecordEventForGender(gender, rows){
    const events = recordEventsForGender(gender, rows);
    if(gender === 'Women' && events.includes('Women 500 m')) return 'Women 500 m';
    if(gender === 'Men' && events.includes('Men 500 m')) return 'Men 500 m';
    if(gender === 'Mixed' && events.includes('Mixed Team Relay')) return 'Mixed Team Relay';
    return events[0] || '';
  }

  function normalizeRecordBestKey(value){
    return String(value || '')
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g,'')
      .toLowerCase()
      .replace(/\s+/g,' ');
  }

  function bestRecordPerSkater(rows){
    const best = new Map();

    rows.forEach(row => {
      const key = [
        row.event,
        normalizeRecordBestKey(row.skater_name),
        normalizeRecordBestKey(row.country)
      ].join('|');

      const prev = best.get(key);
      if(!prev || Number(row.seconds_float || 999999) < Number(prev.seconds_float || 999999)){
        best.set(key, row);
      }
    });

    return [...best.values()];
  }

  window.handleRecordGenderChange = function(){
    const gender = document.getElementById('recordGenderFilter')?.value || 'Women';
    const eventSel = document.getElementById('recordEventFilter');
    if(!eventSel) return;
    const events = recordEventsForGender(gender, eventRecordRows);
    eventSel.innerHTML = events.map(e => `<option value="${recordEscape(e)}">${recordEscape(recordEventLabel(e))}</option>`).join('');
    eventSel.value = defaultRecordEventForGender(gender, eventRecordRows);
  };

  function recordCompetitionBucket(value){
    const v = String(value || '').toLowerCase();
    if(v.includes('olympic')) return 'Olympics';
    if(v.includes('world championship')) return 'World Championships';
    if(v.includes('world tour')) return 'World Tour';
    if(v.includes('world cup')) return 'World Cup';
    return value || '';
  }

  function normalizeRecordFinalRank(value){
    const s = String(value || '').trim();
    if(!s) return '';
    const m = s.match(/^\s*(\d+)/);
    return m ? m[1] : s.toLowerCase();
  }

  function isConsentRecordRow(row){
    return String(row && row.round || '').trim().toLowerCase() === 'consent';
  }

  function invalidRecordName(name){
    return /^(HEAT|QUARTER\s*FINAL|QUARTERFINAL|SEMI\s*FINAL|SEMIFINAL|FINAL|PRELIMINARY|PRELIMINARIES|ROUND)\b/i.test(String(name || '').trim());
  }

  function fixRecordName(row){
    let name = normalizeRecordText(row.skater_name || row.name || row.athlete || row.team_name || '');
    if(!invalidRecordName(name)) return name;
    const raw = String(row.raw_data || '');
    const parts = raw.split('|').map(x => x.trim()).filter(Boolean);
    const country = normalizeRecordText(row.country || row.noc || '');
    if(country && parts.includes(country)){
      const idx = parts.indexOf(country);
      if(idx > 0) return parts[idx - 1];
    }
    return '';
  }

  function extractRecordDate(row){
    const direct = normalizeRecordText(row.date || '');
    if(direct) return direct;
    const raw = normalizeRecordText(row.event || '');
    const m = raw.match(/(\d{1,2}\s+[A-Za-z]{3}\s+\d{4})/);
    return m ? m[1] : '';
  }

  function extractRecordRowsFromJson(json){
    if(!json) return [];
    if(Array.isArray(json)) return json;

    // action=eventRecords 또는 기본 doGet 응답에서 event_records 계열을 최대한 넓게 찾는다.
    const directKeys = [
      'event_records',
      'event_records_raw',
      'eventRecords',
      'eventRecordsRaw',
      'record_rankings',
      'recordRankings',
      'event_records_all',
      'records_raw',
      'records'
    ];

    let out = [];
    directKeys.forEach(key => {
      if(Array.isArray(json[key])) out = out.concat(json[key]);
    });

    // {sheets:{event_records:[...]}} 또는 {data:{event_records:[...]}} 구조도 대응
    ['sheets','data','payload'].forEach(parentKey => {
      const parent = json[parentKey];
      if(parent && typeof parent === 'object'){
        directKeys.forEach(key => {
          if(Array.isArray(parent[key])) out = out.concat(parent[key]);
        });
      }
    });

    // 단, 일반 rows는 medals 검색 응답 등과 충돌할 수 있으므로 event record 형태일 때만 사용
    if(!out.length && Array.isArray(json.rows)){
      const sample = json.rows[0] || {};
      const keys = Object.keys(sample).map(k => String(k).toLowerCase());
      const looksLikeEventRecords = keys.includes('seconds_float') && keys.includes('event') && (keys.includes('time') || keys.includes('record'));
      if(looksLikeEventRecords) out = out.concat(json.rows);
    }

    return out;
  }

  function normalizeEventRecordRow(row){
    const event = normalizeRecordEvent(row);
    const gender = inferRecordGender(row.gender || '', event);
    const sec = recordSeconds(row.seconds_float || row.time || row.record || row.best_time);
    const competitionType = recordCompetitionBucket(row.competition_type || row.type || '');
    return {
      rank: normalizeRecordText(row.rank || row.final_rank || ''),
      skater_name: fixRecordName(row),
      country: normalizeRecordText(row.country || row.noc || ''),
      time: normalizeRecordText(row.time || row.record || row.best_time || ''),
      seconds_float: sec,
      status: normalizeRecordText(row.status || ''),
      gender,
      event,
      final_rank: normalizeRecordText(row.final_rank || row.rank || ''),
      city: normalizeRecordText(row.city || ''),
      date: extractRecordDate(row),
      season: normalizeRecordText(row.season || ''),
      competition_type: competitionType,
      competition_name: normalizeRecordText(row.competition_name || row.competition || ''),
      round: normalizeRecordText(row.round || ''),
      heat: normalizeRecordText(row.heat || ''),
      source_url: normalizeRecordText(row.source_url || row.url || ''),
      raw_data: normalizeRecordText(row.raw_data || '')
    };
  }

  function normalizedRecordNameKey(name){
    return String(name || '')
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g,'')
      .toLowerCase()
      .replace(/\s+/g,' ');
  }

  function normalizedRecordTimeKey(value){
    const sec = recordSeconds(value);
    if(sec === null || !Number.isFinite(sec)) return String(value || '').trim().toLowerCase();
    return sec.toFixed(3).replace(/0+$/,'').replace(/\.$/,'');
  }

  function recordRawLooksLikeGroupHeader(row){
    return /^(HEAT|QUARTER\s*FINAL|QUARTERFINAL|SEMI\s*FINAL|SEMIFINAL|FINAL)\b/i.test(String(row.raw_data || '').trim());
  }

  function recordNameAllCaps(row){
    const letters = String(row.skater_name || '').replace(/[^A-Za-z]/g,'');
    return !!letters && letters === letters.toUpperCase();
  }

  function recordRowQuality(row){
    let score = 0;
    if(row.skater_name && !invalidRecordName(row.skater_name)) score += 100;
    // 같은 기록이 2번 들어올 때는 HEAT 1 | ... 형 raw_data 행보다
    // 일반 결과표 행(예: 1 | 1 | 2 | Xandra ... | Q)을 우선 유지한다.
    if(!recordRawLooksLikeGroupHeader(row)) score += 30;
    if(!recordNameAllCaps(row)) score += 10;
    if(row.status) score += 2;
    if(row.raw_data) score += 1;
    return score;
  }

  function dedupeEventRecords(rows){
    const bestByKey = new Map();

    rows.forEach(row => {
      // HEAT/SEMIFINAL/QUARTERFINAL 등이 선수명 칸에 들어간 행은 표시하지 않는다.
      if(invalidRecordName(row.skater_name)) return;

      // 같은 선수의 같은 라운드 기록이
      // ① HEAT 1 | ... 형 행과 ② 일반 결과표 행으로 중복 수집되는 경우가 있어
      // heat/raw_data 차이는 중복 판단에서 제외한다.
      const key = [
        row.season,
        String(row.competition_type || '').toLowerCase(),
        String(row.competition_name || '').toLowerCase(),
        row.event,
        String(row.round || '').toLowerCase(),
        String(row.source_url || '').split('#')[0],
        normalizedRecordNameKey(row.skater_name),
        String(row.country || '').toLowerCase(),
        normalizedRecordTimeKey(row.seconds_float || row.time),
        String(row.final_rank || '').toLowerCase()
      ].map(v => String(v || '').trim()).join('||');

      const prev = bestByKey.get(key);
      if(!prev || recordRowQuality(row) > recordRowQuality(prev)){
        bestByKey.set(key, row);
      }
    });

    return [...bestByKey.values()];
  }


  function getRecordApiUrl(){
    return (typeof RECORD_API_URL !== 'undefined' && RECORD_API_URL) ? RECORD_API_URL : APPS_SCRIPT_URL;
  }

  function populateEventRecordFilters(rows){
    const seasonSel = document.getElementById('recordSeasonFilter');
    const eventSel = document.getElementById('recordEventFilter');
    const genderSel = document.getElementById('recordGenderFilter');
    if(!seasonSel || !eventSel) return;

    const oldSeason = seasonSel.value || 'all';
    const oldEvent = eventSel.value || '';
    const preferredGender = ['Women','Men','Mixed'].includes(genderSel?.value) ? genderSel.value : 'Women';

    const seasons = [...new Set(rows.map(r => r.season).filter(Boolean))].sort().reverse();
    seasonSel.innerHTML = `<option value="all">${recordEscape(tr('allSeasons'))}</option>` + seasons.map(s => `<option value="${recordEscape(s)}">${recordEscape(s)}</option>`).join('');
    seasonSel.value = seasons.includes(oldSeason) ? oldSeason : 'all';

    if(genderSel) genderSel.value = preferredGender;

    const events = recordEventsForGender(preferredGender, rows);
    eventSel.innerHTML = events.map(e => `<option value="${recordEscape(e)}">${recordEscape(recordEventLabel(e))}</option>`).join('');
    eventSel.value = events.includes(oldEvent)
      ? oldEvent
      : defaultRecordEventForGender(preferredGender, rows);

    seasonSel.disabled = false;
    eventSel.disabled = false;
  }
  window.archivePrepareEventFilterOptions = populateEventRecordFilters;
  function unlockEventRecordFilterControls(){
    ['recordSeasonFilter','recordEventFilter'].forEach(id => {
      const el = document.getElementById(id);
      if(el) el.disabled = false;
    });
  }
  function prepareEventRecordRows(sourceRows){
    return dedupeEventRecords(sourceRows.map(normalizeEventRecordRow).filter(row => {
      if(!row.skater_name || invalidRecordName(row.skater_name)) return false;
      if(isConsentRecordRow(row)) return false;
      if(row.seconds_float === null || !Number.isFinite(row.seconds_float)) return false;
      const threshold = recordThreshold(row.event);
      if(threshold === null) return false;
      return row.seconds_float <= threshold;
    }));
  }
  function syncPersonalBestRecordCache(rows){
    if(typeof normalizeEventRecordCacheRow !== 'function') return;
    eventRecordsCache = (rows || []).map(normalizeEventRecordCacheRow).filter(row=>row.skater_name && row.personal_best_event);
    window.eventRecordsCache = eventRecordsCache;
    window.dispatchEvent(new CustomEvent('shorttrack:records-updated'));
    const loadingStatus=document.getElementById('loadingStatus');
    if(loadingStatus){
      loadingStatus.dataset.eventRecords=String(eventRecordsCache.length);
      if(typeof refreshLoadingStatusText === 'function') refreshLoadingStatusText();
    }
    if(typeof refreshActivePlayerPersonalBests === 'function') refreshActivePlayerPersonalBests();
  }
  function finishEventRecordLoadFromRows(){
    eventRecordsLoaded = true;
    populateEventRecordFilters(eventRecordRows);
    try{ syncPersonalBestRecordCache(eventRecordRows); }catch(_syncError){}
    const total = eventRecordRows.length;
    document.getElementById('recordKpiTotal').textContent = total.toLocaleString('ko-KR');
    document.getElementById('recordKpiIndividual').textContent = eventRecordRows.filter(r => !recordIsRelay(r.event)).length.toLocaleString('ko-KR');
    document.getElementById('recordKpiRelay').textContent = eventRecordRows.filter(r => recordIsRelay(r.event)).length.toLocaleString('ko-KR');
    renderEventRecords();
  }
  window.archiveApplyEventSnapshot = function(json){
    eventRecordRows=prepareEventRecordRows(extractRecordRowsFromJson(json));
    if(eventRecordsLoaded) finishEventRecordLoadFromRows();
    else{populateEventRecordFilters(eventRecordRows);syncPersonalBestRecordCache(eventRecordRows);}
  };
  let lastLiveEventFingerprint='';
  window.refreshLiveEventRecords = async function(){
    if(!eventRecordsLoaded && !eventRecordRows.length) return;
    const json = await archiveSnapshotDataset('event_records');
    const fingerprint=JSON.stringify(extractRecordRowsFromJson(json));
    if(fingerprint===lastLiveEventFingerprint) return;
    lastLiveEventFingerprint=fingerprint;
    const rows = prepareEventRecordRows(extractRecordRowsFromJson(json));
    eventRecordRows = rows;
    if(eventRecordsLoaded) finishEventRecordLoadFromRows();
    else{
      populateEventRecordFilters(rows);
      syncPersonalBestRecordCache(rows);
    }
  };
  window.preloadEventRecordFilters = function(){
    if(eventRecordRows.length){
      populateEventRecordFilters(eventRecordRows);
      unlockEventRecordFilterControls();
      try{ syncPersonalBestRecordCache(eventRecordRows); }catch(_syncError){}
      return Promise.resolve(eventRecordRows);
    }
    if(eventRecordPreloadPromise) return eventRecordPreloadPromise;
    archiveSetRecordState('loading');
    eventRecordPreloadPromise=(async()=>{
      try{
        const json = await archiveSnapshotDataset('event_records');
        eventRecordRows = prepareEventRecordRows(extractRecordRowsFromJson(json));
        archiveSetRecordState('ready');
        try{ syncPersonalBestRecordCache(eventRecordRows); }catch(_syncError){}
        populateEventRecordFilters(eventRecordRows);
        unlockEventRecordFilterControls();
        return eventRecordRows;
      }catch(error){
        unlockEventRecordFilterControls();
        archiveSetRecordState('error');
        console.warn('종목별 기록 필터 사전 준비 실패', error);
        return [];
      }finally{
        eventRecordPreloadPromise=null;
      }
    })();
    return eventRecordPreloadPromise;
  };

  window.loadEventRecords = async function(force){
    const wrap = document.getElementById('recordRankingWrap');
    if(!wrap) return;
    if(eventRecordsLoaded && !force){ renderEventRecords(); return; }
    if(eventRecordRows.length && !eventRecordsLoaded && !force){
      finishEventRecordLoadFromRows();
      return;
    }

    const api = getRecordApiUrl();
    if(!api || api.includes('여기에')){
      wrap.innerHTML = `<div class="empty"><strong>${recordEscape(tr('recordDataNotReady'))}</strong><br>${recordEscape(tr('tryAgainLater'))}</div>`;
      return;
    }

    archiveSetRecordState('loading');
    wrap.innerHTML = `<div class="empty">${recordEscape(tr('recordLoading'))}</div>`;
    ['recordSeasonFilter','recordEventFilter'].forEach(id => { const el = document.getElementById(id); if(el) el.disabled = false; });

    try{
      let sourceRows = [];
      const sep = api.includes('?') ? '&' : '?';

      const json = await archiveSnapshotDataset('event_records', !!force);
      sourceRows = extractRecordRowsFromJson(json);

      eventRecordRows = dedupeEventRecords(sourceRows.map(normalizeEventRecordRow).filter(row => {
        if(!row.skater_name || invalidRecordName(row.skater_name)) return false;
        if(isConsentRecordRow(row)) return false;
        if(row.seconds_float === null || !Number.isFinite(row.seconds_float)) return false;
        const threshold = recordThreshold(row.event);
        if(threshold === null) return false;
        return row.seconds_float <= threshold;
      }));

      try{ syncPersonalBestRecordCache(eventRecordRows); }catch(_syncError){}

      if(!eventRecordRows.length && !sourceRows.length){
      archiveSetRecordState('ready');
      wrap.innerHTML = `<div class="empty"><strong>${recordEscape(tr('recordDataNotFound'))}</strong><br>${recordEscape(tr('tryAgainLater'))}</div>`;
        ['recordSeasonFilter','recordEventFilter'].forEach(id => { const el = document.getElementById(id); if(el) el.disabled = false; });
        return;
      }

      archiveSetRecordState('ready');
      eventRecordsLoaded = true;
      populateEventRecordFilters(eventRecordRows);
      const total = eventRecordRows.length;
      document.getElementById('recordKpiTotal').textContent = total.toLocaleString('ko-KR');
      document.getElementById('recordKpiIndividual').textContent = eventRecordRows.filter(r => !recordIsRelay(r.event)).length.toLocaleString('ko-KR');
      document.getElementById('recordKpiRelay').textContent = eventRecordRows.filter(r => recordIsRelay(r.event)).length.toLocaleString('ko-KR');
      renderEventRecords();
    }catch(err){
      ['recordSeasonFilter','recordEventFilter'].forEach(id => { const el = document.getElementById(id); if(el) el.disabled = false; });
      archiveSetRecordState('error');
      console.error('Event records load failed', err);
      wrap.innerHTML = `<div class="empty"><strong>${recordEscape(tr('recordLoadFailed'))}</strong><br>${recordEscape(tr('tryAgainLater'))}</div>`;
    }
  };

  window.renderEventRecords = function(){
    const wrap = document.getElementById('recordRankingWrap');
    if(!wrap) return;

    if(!eventRecordsLoaded){
      wrap.innerHTML = `<div class="empty">${tr('recordNotLoaded')}</div>`;
      return;
    }

    const gender = document.getElementById('recordGenderFilter')?.value || 'all';
    const season = document.getElementById('recordSeasonFilter')?.value || 'all';
    const event = document.getElementById('recordEventFilter')?.value || 'all';
    const competition = document.getElementById('recordCompetitionFilter')?.value || 'all';
    const finalRank = document.getElementById('recordFinalRankFilter')?.value || 'all';
    const bestOnly = document.getElementById('recordBestOnlyFilter')?.value || 'all';
    const baseLimit = Math.max(1, Number(document.getElementById('recordLimitFilter')?.value || 20));
    const signature = [gender, season, event, competition, finalRank, bestOnly, baseLimit].join('|');
    if(signature !== eventRecordVisibleSignature){
      eventRecordVisibleSignature = signature;
      eventRecordVisibleBaseLimit = baseLimit;
      eventRecordVisibleLimit = baseLimit;
    }

    let rows = eventRecordRows.slice().filter(row => {
      if(row.gender !== gender) return false;
      if(season !== 'all' && row.season !== season) return false;
      if(row.event !== event) return false;
      if(competition !== 'all' && row.competition_type !== competition) return false;
      if(finalRank === '1' && normalizeRecordFinalRank(row.final_rank) !== '1') return false;
      return true;
    });

    if(bestOnly === 'best'){
      rows = bestRecordPerSkater(rows);
    }

    rows.sort((a,b) =>
      recordEventOrder(a.event) - recordEventOrder(b.event) ||
      a.seconds_float - b.seconds_float ||
      String(a.skater_name).localeCompare(String(b.skater_name),'ko')
    );

    const currentLimit = Math.max(eventRecordVisibleLimit || baseLimit, baseLimit);
    const visible = rows.slice(0, currentLimit);
    const visibleKpi = document.getElementById('recordKpiVisible');
    if(visibleKpi) visibleKpi.textContent = `${visible.length.toLocaleString('ko-KR')}/${rows.length.toLocaleString('ko-KR')}`;

    if(!visible.length){
      wrap.innerHTML = `<div class="empty"><strong>${recordEscape(tr('recordNoMatch'))}</strong><br>${recordEscape(tr('adjustRecordFilters'))}</div>`;
      return;
    }

    let currentEvent = '';
    let rankInEvent = 0;
    const body = visible.map(row => {
      if(row.event !== currentEvent){
        currentEvent = row.event;
        rankInEvent = 0;
      }
      rankInEvent += 1;
      const source = row.source_url ? `<a class="record-source-link" href="${recordEscape(row.source_url)}" target="_blank" rel="noopener">${recordEscape(tr('view'))}</a>` : '';
      return `<tr>
        <td>${rankInEvent}</td>
        <td><strong>${recordEscape(row.time)}</strong></td>
        <td>${recordEscape(row.skater_name)}</td>
        <td>${recordEscape(row.country)}</td>
        <td>${recordEscape(row.final_rank)}</td>
        <td>${recordEscape(row.competition_name)}</td>
        <td>${recordEscape(row.season)}</td>
        <td>${source}</td>
      </tr>`;
    }).join('');

    const cards = `<div class="mobile-card-list record-mobile-cards">${visible.map((row, idx) => {
      const source = row.source_url ? `<a class="record-source-link" href="${recordEscape(row.source_url)}" target="_blank" rel="noopener">${recordEscape(tr('viewSource'))}</a>` : '';
      return `<article class="mobile-data-card record-mobile-card">
        <div class="mobile-card-topline"><span class="mobile-rank-badge">#${idx + 1}</span><strong class="mobile-record-time">${recordEscape(row.time)}</strong></div>
        <div class="mobile-card-title">${recordEscape(row.skater_name)}</div>
        <div class="mobile-card-meta">${recordEscape(row.country || '-')} · ${recordEscape(recordEventLabel(row.event))} · ${recordEscape(row.season || '-')}</div>
        <details class="mobile-card-more">
          <summary>${recordEscape(tr('details'))}</summary>
          <div class="mobile-card-detail"><span>${recordEscape(tr('competition'))}</span><strong>${recordEscape(row.competition_name || '-')}</strong></div>
          <div class="mobile-card-detail"><span>${recordEscape(tr('recordFinalRank'))}</span><strong>${recordEscape(row.final_rank || '-')}</strong></div>
          ${source ? `<div class="mobile-card-action">${source}</div>` : ''}
        </details>
      </article>`;
    }).join('')}</div>`;

    const summaryText = currentLang === 'en'
      ? `${tr('recordShownSummary')}: ${visible.length.toLocaleString('en-US')} ${tr('shownCount')} ${tr('ofCount')} ${rows.length.toLocaleString('en-US')}`
      : `${tr('recordShownSummary')} ${rows.length.toLocaleString('ko-KR')}${tr('ofCount')} ${visible.length.toLocaleString('ko-KR')}${tr('shownCount')}`;
    const moreControls = eventRecordMoreControls(visible.length, rows.length);
    wrap.innerHTML = `${archiveRecordConditionsHtml()}${cards}<div class="desktop-data-table table-scroll"><table>
      <thead><tr>
        <th>${recordEscape(tr('rank'))}</th><th>${recordEscape(tr('record'))}</th><th>${recordEscape(tr('skaterTeam'))}</th><th>${recordEscape(tr('country'))}</th><th>${recordEscape(tr('recordFinalRank'))}</th><th>${recordEscape(tr('competition'))}</th><th>${recordEscape(tr('season'))}</th><th>${recordEscape(tr('source'))}</th>
      </tr></thead>
      <tbody>${body}</tbody>
    </table></div>
    <div class="subnote">${recordEscape(summaryText)}</div>${moreControls}`;
  };
  function eventRecordMoreControls(shown,total){
    const showMore = shown < total ? `<button type="button" class="sort-btn" onclick="showMoreEventRecords()">${recordEscape(tr('showMoreRecords'))}</button>` : '';
    const collapse = shown > (eventRecordVisibleBaseLimit||Number(document.getElementById('recordLimitFilter')?.value||20)) ? `<button type="button" class="sort-btn" onclick="collapseEventRecords()">${recordEscape(tr('collapse'))}</button>` : '';
    return showMore || collapse ? `<div class="ranking-more-actions"><span class="score-mini">${currentLang==='en' ? `${total.toLocaleString('en-US')} total` : `총 ${total.toLocaleString('ko-KR')}개`}</span>${showMore}${collapse}</div>` : '';
  }
  window.showMoreEventRecords = function(){
    const step = eventRecordVisibleBaseLimit || Math.max(1, Number(document.getElementById('recordLimitFilter')?.value || 20));
    eventRecordVisibleLimit += step;
    renderEventRecords();
  };
  window.collapseEventRecords = function(){
    eventRecordVisibleLimit = eventRecordVisibleBaseLimit || Math.max(1, Number(document.getElementById('recordLimitFilter')?.value || 20));
    renderEventRecords();
  };
})();
