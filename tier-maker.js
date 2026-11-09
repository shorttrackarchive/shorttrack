/* Tier maker 1차 구현 */
(function(){
  const DEFAULT_TIER_LABELS = ['S','A','B','C','D','보류'];
  let tierMakerInitialized = false;
  let tierSkaters = [];
  let tierAssignments = {};
  let tierDraggedName = '';
  let tierSummarySource = null;
  let tierSummaryCache = new Map();

  function tierSummary(name){
    if(tierSummarySource !== skaterMedals){
      tierSummarySource = skaterMedals;
      tierSummaryCache = new Map();
      skaterMedals.forEach(row=>{
        const value=tierSummaryCache.get(row.skater_name)||{gold:0,silver:0,bronze:0,total:0,genders:new Set()};
        const medal=String(row.medal||'').toLowerCase();
        if(['gold','silver','bronze'].includes(medal)) value[medal]++;
        value.total++;
        value.genders.add(row.gender);
        tierSummaryCache.set(row.skater_name,value);
      });
    }
    return tierSummaryCache.get(name)||{gold:0,silver:0,bronze:0,total:0,genders:new Set()};
  }

  function tierEscape(v){
    if(typeof escapeHtml === 'function') return escapeHtml(v);
    return String(v || '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }

  function tierNorm(v){
    return String(v || '').trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ');
  }

  function tierPrimaryGender(name){
    const genders = tierSummary(name).genders;
    if(genders.has('Women')) return 'Women';
    if(genders.has('Men')) return 'Men';
    if(genders.has('Mixed')) return 'Mixed';
    return '';
  }

  function tierMedalSummary(name){
    const {gold,silver,bronze,total} = tierSummary(name);
    if(total) return currentLang === 'en' ? `G ${gold} · S ${silver} · B ${bronze}` : `금 ${gold} · 은 ${silver} · 동 ${bronze}`;
    return tr('noRecord');
  }

  function tierBuildSkaters(){
    const sourceRows = (typeof skaterMedals !== 'undefined' ? skaterMedals : []);
    const map = new Map();

    sourceRows.forEach(row => {
      const name = row.skater_name;
      if(!name) return;
      const key = tierNorm(name);
      const prev = map.get(key) || {
        name,
        country: row.country || '',
        gender: row.gender || '',
        count: 0
      };
      if(!prev.country && row.country) prev.country = row.country;
      if(!prev.gender && row.gender) prev.gender = row.gender;
      prev.count += 1;
      map.set(key, prev);
    });

    return [...map.values()].sort((a,b) => a.name.localeCompare(b.name,'ko'));
  }

  function tierAssignedSet(){
    const set = new Set();
    Object.values(tierAssignments).forEach(list => list.forEach(name => set.add(name)));
    return set;
  }

  function tierCreateCard(skater){
    return `<div class="tier-skater-card" draggable="true" data-name="${tierEscape(skater.name)}" ondragstart="tierDragStart(event)">
      <div class="tier-skater-name">${tierEscape(skater.name)}</div>
      <div class="tier-skater-meta">${tierEscape(skater.country || '-')} · ${tierEscape(skater.gender || tierPrimaryGender(skater.name) || '-')}</div>
      <div class="tier-skater-meta">${tierEscape(tierMedalSummary(skater.name))}</div>
    </div>`;
  }

  window.initTierMaker = function(force){
    const board = document.getElementById('tierBoard');
    if(!board) return;

    if(force || !tierMakerInitialized){
      tierSkaters = tierBuildSkaters();
      DEFAULT_TIER_LABELS.forEach(label => {
        if(!tierAssignments[label]) tierAssignments[label] = [];
      });

      board.innerHTML = DEFAULT_TIER_LABELS.map(label => `<div class="tier-row" data-tier="${tierEscape(label)}">
        <div class="tier-label" contenteditable="true" oninput="syncTierLabels()">${tierEscape(label)}</div>
        <div class="tier-dropzone" data-tier="${tierEscape(label)}" ondragover="tierDragOver(event)" ondragleave="tierDragLeave(event)" ondrop="tierDropToTier(event)"></div>
      </div>`).join('');

      populateTierCountryFilter();
      tierMakerInitialized = true;
    }

    renderTierPool();
    renderTierBoard();
  };

  window.populateTierCountryFilter = function(){
    const select = document.getElementById('tierCountryFilter');
    if(!select) return;
    const current = select.value || 'all';
    const countries = [...new Set(tierSkaters.map(s => s.country).filter(Boolean))].sort();
    select.innerHTML = `<option value="all">${tierEscape(tr('allCountries'))}</option>` + countries.map(c => `<option value="${tierEscape(c)}">${tierEscape(c)}</option>`).join('');
    select.value = countries.includes(current) ? current : 'all';
    select.disabled = false;
  };

  window.renderTierPool = function(){
    const pool = document.getElementById('tierPool');
    const count = document.getElementById('tierPoolCount');
    if(!pool) return;

    if(!tierMakerInitialized) return;

    const q = tierNorm(document.getElementById('tierSearchInput')?.value || '');
    const gender = document.getElementById('tierGenderFilter')?.value || 'all';
    const country = document.getElementById('tierCountryFilter')?.value || 'all';
    const assigned = tierAssignedSet();

    let list = tierSkaters.filter(skater => !assigned.has(skater.name));
    list = list.filter(skater => {
      const text = tierNorm([skater.name, skater.country, skater.gender].join(' '));
      if(q && !text.includes(q)) return false;
      if(gender !== 'all' && skater.gender !== gender) return false;
      if(country !== 'all' && skater.country !== country) return false;
      return true;
    });

    if(count) count.textContent = currentLang === 'en' ? list.length.toLocaleString('en-US') : `${list.length.toLocaleString('ko-KR')}명`;
    pool.innerHTML = list.length ? list.slice(0, 200).map(tierCreateCard).join('') : `<div class="tier-empty">${tierEscape(tr('tierNoSkater'))}</div>`;
  };

  window.renderTierBoard = function(){
    if(!tierMakerInitialized) return;
    const rows = [...document.querySelectorAll('#tierBoard .tier-row')];

    rows.forEach(row => {
      const label = row.querySelector('.tier-label')?.textContent.trim() || row.dataset.tier;
      const zone = row.querySelector('.tier-dropzone');
      const names = tierAssignments[label] || [];
      if(zone){
        zone.dataset.tier = label;
        zone.innerHTML = names.length
          ? names.map(name => {
              const skater = tierSkaters.find(s => s.name === name) || {name, country:'', gender:''};
              return tierCreateCard(skater);
            }).join('')
          : `<div class="tier-empty">${tierEscape(tr('tierDragHere'))}</div>`;
      }
      row.dataset.tier = label;
    });
  };

  window.syncTierLabels = function(){
    const newAssignments = {};
    [...document.querySelectorAll('#tierBoard .tier-row')].forEach(row => {
      const oldLabel = row.dataset.tier;
      const newLabel = row.querySelector('.tier-label')?.textContent.trim() || oldLabel;
      newAssignments[newLabel] = tierAssignments[oldLabel] || tierAssignments[newLabel] || [];
      row.dataset.tier = newLabel;
      const zone = row.querySelector('.tier-dropzone');
      if(zone) zone.dataset.tier = newLabel;
    });
    tierAssignments = newAssignments;
  };

  window.tierDragStart = function(event){
    tierDraggedName = event.currentTarget.dataset.name || '';
    event.dataTransfer.setData('text/plain', tierDraggedName);
    event.dataTransfer.effectAllowed = 'move';
  };

  window.tierDragOver = function(event){
    event.preventDefault();
    event.currentTarget.classList.add('drag-over');
  };

  window.tierDragLeave = function(event){
    event.currentTarget.classList.remove('drag-over');
  };

  function removeFromAllTiers(name){
    Object.keys(tierAssignments).forEach(label => {
      tierAssignments[label] = (tierAssignments[label] || []).filter(item => item !== name);
    });
  }

  window.tierDropToTier = function(event){
    event.preventDefault();
    event.currentTarget.classList.remove('drag-over');
    const name = event.dataTransfer.getData('text/plain') || tierDraggedName;
    const tier = event.currentTarget.dataset.tier;
    if(!name || !tier) return;

    removeFromAllTiers(name);
    tierAssignments[tier] = tierAssignments[tier] || [];
    if(!tierAssignments[tier].includes(name)) tierAssignments[tier].push(name);

    renderTierPool();
    renderTierBoard();
  };

  window.tierDropToPool = function(event){
    event.preventDefault();
    event.currentTarget.classList.remove('drag-over');
    const name = event.dataTransfer.getData('text/plain') || tierDraggedName;
    if(!name) return;
    removeFromAllTiers(name);
    renderTierPool();
    renderTierBoard();
  };

  window.archiveRefreshTierSource = function(){
    if(!tierMakerInitialized) return;
    tierSkaters=tierBuildSkaters();
    if(tierMakerInitialized){populateTierCountryFilter();renderTierPool();renderTierBoard();}
  };
  window.archiveSeedTierAthlete = function(name){
    tierSkaters=tierBuildSkaters();
    initTierMaker();
    const athlete=tierSkaters.find(row=>row.name===name);
    if(!athlete) return false;
    const assigned=Object.values(tierAssignments).some(list=>list.includes(name));
    if(!assigned){
      const hold=document.querySelector('#tierBoard .tier-row:last-child .tier-label')?.textContent.trim()||DEFAULT_TIER_LABELS[DEFAULT_TIER_LABELS.length-1];
      tierAssignments[hold]=tierAssignments[hold]||[];
      tierAssignments[hold].push(name);
    }
    document.getElementById('tierSearchInput').value=name;
    renderTierPool();renderTierBoard();return true;
  };
  window.resetTierMaker = function(){
    if(!confirm(tr('tierResetConfirm'))) return;
    tierAssignments = {};
    DEFAULT_TIER_LABELS.forEach(label => tierAssignments[label] = []);
    tierMakerInitialized = false;
    const text = document.getElementById('tierCopyText');
    if(text) text.value = '';
    initTierMaker(true);
  };

  window.generateTierMakerText = function(){
    syncTierLabels();
    const lines = [];
    [...document.querySelectorAll('#tierBoard .tier-row')].forEach(row => {
      const label = row.querySelector('.tier-label')?.textContent.trim() || row.dataset.tier;
      const names = tierAssignments[label] || [];
      lines.push(`[${label}] ${names.length ? names.join(', ') : '-'}`);
    });
    const box = document.getElementById('tierCopyText');
    if(box) box.value = lines.join('\n');
    return lines.join('\n');
  };

  window.copyTierMakerText = async function(){
    const text = generateTierMakerText();
    try{
      await navigator.clipboard.writeText(text);
      alert(tr('tierCopied'));
    }catch(_e){
      const box = document.getElementById('tierCopyText');
      if(box){ box.focus(); box.select(); }
      alert(tr('tierCopyManual'));
    }
  };

  function tierDownloadDataUrl(dataUrl, filename){
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function buildTierExportElement(){
    syncTierLabels();

    const exportEl = document.createElement('div');
    exportEl.className = 'tier-export-canvas';

    const date = new Date();
    const dateText = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
    const rows = [...document.querySelectorAll('#tierBoard .tier-row')];

    exportEl.innerHTML = `
      <h1 class="tier-export-title">${tierEscape(tr('tierExportTitle'))}</h1>
      <p class="tier-export-subtitle">Short Track Archive Tier Maker · ${tierEscape(dateText)}</p>
      <div class="tier-export-board">
        ${rows.map(row => {
          const label = row.querySelector('.tier-label')?.textContent.trim() || row.dataset.tier;
          const names = tierAssignments[label] || [];
          return `<div class="tier-export-row">
            <div class="tier-export-label">${tierEscape(label)}</div>
            <div class="tier-export-cards">
              ${names.length ? names.map(name => {
                const skater = tierSkaters.find(s => s.name === name) || {name, country:'', gender:''};
                return `<div class="tier-export-card">
                  <div class="tier-export-name">${tierEscape(skater.name)}</div>
                  <div class="tier-export-meta">${tierEscape(skater.country || '-')} · ${tierEscape(skater.gender || tierPrimaryGender(skater.name) || '-')}</div>
                  <div class="tier-export-meta">${tierEscape(tierMedalSummary(skater.name))}</div>
                </div>`;
              }).join('') : '<div class="tier-empty">-</div>'}
            </div>
          </div>`;
        }).join('')}
      </div>
      <div class="tier-export-footer">short-track archive fan tier maker</div>
    `;

    document.body.appendChild(exportEl);
    return exportEl;
  }

  window.saveTierMakerImage = async function(){
    if(!tierMakerInitialized) initTierMaker();

    const exportEl = buildTierExportElement();

    try{
      try{ await ensureHtml2Canvas(); }catch(_loadError){}
      // html2canvas가 있으면 가장 안정적으로 저장한다.
      if(typeof html2canvas === 'function'){
        const canvas = await html2canvas(exportEl, {
          backgroundColor: '#ffffff',
          scale: 2,
          useCORS: true
        });
        tierDownloadDataUrl(canvas.toDataURL('image/png'), 'shorttrack-tier-maker.png');
        exportEl.remove();
        return;
      }

      // 외부 라이브러리를 추가하지 않은 경우를 위한 순수 SVG foreignObject 방식.
      const width = 1200;
      const height = Math.max(700, exportEl.scrollHeight + 20);
      const serialized = new XMLSerializer().serializeToString(exportEl);
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <foreignObject width="100%" height="100%">${serialized}</foreignObject>
      </svg>`;

      const svgBlob = new Blob([svg], {type:'image/svg+xml;charset=utf-8'});
      const url = URL.createObjectURL(svgBlob);
      const img = new Image();

      img.onload = function(){
        const canvas = document.createElement('canvas');
        canvas.width = width * 2;
        canvas.height = height * 2;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.scale(2,2);
        ctx.drawImage(img,0,0);
        URL.revokeObjectURL(url);
        tierDownloadDataUrl(canvas.toDataURL('image/png'), 'shorttrack-tier-maker.png');
        exportEl.remove();
      };

      img.onerror = function(){
        URL.revokeObjectURL(url);
        exportEl.remove();
        alert(tr('tierImageFail'));
      };

      img.src = url;
    }catch(err){
      console.error(err);
      exportEl.remove();
      alert(tr('tierImageRetry'));
    }
  };


})();
