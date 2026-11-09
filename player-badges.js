/* Final robust player achievement badges override */
(function(){
  function norm(v){
    return String(v || '')
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g,'')
      .toLowerCase()
      .replace(/\s+/g,' ');
  }
  function normName(v){
    return norm(v).replace(/[^a-z0-9가-힣 ]/g,'').replace(/\s+/g,' ').trim();
  }
  function escapeBadgeHtml(v){
    return String(v || '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }
  function ensureBadgeWrap(){
    const title = document.getElementById('playerName');
    if(!title) return null;
    let wrap = document.getElementById('playerAchievementBadges');
    if(!wrap){
      wrap = document.createElement('div');
      wrap.id = 'playerAchievementBadges';
      wrap.className = 'player-achievement-badges';
      wrap.setAttribute('aria-label','선수 주요 업적');
      if(title.parentElement){
        title.parentElement.classList.add('player-title-row');
        title.insertAdjacentElement('afterend', wrap);
      }
    }
    return wrap;
  }
  function gold(row){
    const m = norm(row && row.medal);
    return m === 'gold' || m === 'g' || m === '금' || m === '금메달' || m === '1' || m === '1위' || m.includes('gold');
  }
  function compText(row){
    return norm([row && row.competition_type, row && row.competition_name, row && row.note].join(' '));
  }
  function eventText(row){
    return norm(row && row.event);
  }
  function isOlympic(row){ return compText(row).includes('olympic'); }
  function isWorlds(row){
    const c = compText(row);
    return c.includes('world championship') || c.includes('world championships') || c.includes('world short track');
  }
  function isWorldCupTour(row){
    const c = compText(row);
    return c.includes('world cup') || c.includes('world tour');
  }
  function isOverall(row){
    const e = eventText(row);
    return e.includes('overall') || e.includes('allround') || e.includes('classification') || e.includes('종합');
  }
  function isRelay(row){
    const e = eventText(row);
    const mt = norm(row && row.medal_type);
    return mt === 'relay' || e.includes('relay') || e.includes('계주') || e.includes('3000m relay') || e.includes('5000m relay') || e.includes('mixed');
  }
  function isIndividual(row){
    const mt = norm(row && row.medal_type);
    const e = eventText(row);
    return mt !== 'superfinal' && !e.includes('super final') && !e.includes('superfinal') && !e.includes('3000') && !isRelay(row);
  }
  function playerRows(name){
    const target = normName(name);
    const rows = [];
    try{
      (medals || []).forEach(r => rows.push(Object.assign({_source_sheet:'medals', medal_type:r.medal_type || 'Individual'}, r)));
    }catch(e){}
    try{
      (relayMembers || []).forEach(r => rows.push(Object.assign({_source_sheet:'relay_members', medal_type:r.medal_type || 'Relay'}, r)));
    }catch(e){}
    try{
      (skaterMedals || []).forEach(r => rows.push(Object.assign({_source_sheet:'skaterMedals'}, r)));
    }catch(e){}
    return rows.filter(r => {
      const names = [r.skater_name, r.original_skater_name, r.name].map(normName);
      return names.includes(target);
    });
  }
  function badgesFor(name){
    const rows = playerRows(name).filter(gold);
    const label=(ko,en)=>currentLang==='en'?en:ko;
    const olympicIndividualGold = rows.some(r => isOlympic(r) && isIndividual(r));
    const olympicRelayGold = rows.some(r => isOlympic(r) && isRelay(r));
    const worldsOverallGold = rows.some(r => isWorlds(r) && isOverall(r));
    const worldsIndividualGold = rows.some(r => isWorlds(r) && isIndividual(r) && !isOverall(r));
    const worldCupTourIndividualGold = rows.some(r => isWorldCupTour(r) && isIndividual(r));
    const grandSlam = olympicIndividualGold && olympicRelayGold && worldsIndividualGold && worldCupTourIndividualGold;

    const out = [];
    if(olympicIndividualGold) out.push([label('\uC62C\uB9BC\uD53D \uAC1C\uC778\uC804 \uAE08\uBA54\uB2EC','Olympic individual gold medal'),'']);
    if(olympicRelayGold) out.push([label('\uC62C\uB9BC\uD53D \uACC4\uC8FC \uAE08\uBA54\uB2EC','Olympic relay gold medal'),'']);
    if(worldsOverallGold) out.push([label('\uC138\uACC4\uC120\uC218\uAD8C \uC885\uD569 \uC6B0\uC2B9','World Championships overall title'),'']);
    if(worldsIndividualGold) out.push([label('\uC138\uACC4\uC120\uC218\uAD8C \uAC1C\uC778\uC804 \uAE08\uBA54\uB2EC','World Championships individual gold medal'),'']);
    if(worldCupTourIndividualGold) out.push([label('\uC6D4\uB4DC\uCEF5\u00B7\uC6D4\uB4DC\uD22C\uC5B4 \uAC1C\uC778\uC804 \uAE08\uBA54\uB2EC','World Cup & World Tour individual gold medal'),'']);
    if(grandSlam) out.push([label('\uADF8\uB79C\uB4DC\uC2AC\uB7A8','Grand Slam'),'grand-slam']);
    return out;
  }
  window.renderPlayerAchievementBadgesForce = function(name){
    const duplicateLine = document.getElementById('playerAchievementBadgesLine');
    if(duplicateLine) duplicateLine.remove();
    const wrap = ensureBadgeWrap();
    if(!wrap) return;
    const playerName = name || (document.getElementById('playerName') ? document.getElementById('playerName').textContent : '');
    const badges = badgesFor(playerName);
    wrap.innerHTML = badges.map(([label, cls]) => `<span class="achievement-badge ${cls}">${escapeBadgeHtml(label)}</span>`).join('');
  };

  const oldOpen = window.openPlayerPanel;
  if(typeof oldOpen === 'function'){
    window.openPlayerPanel = function(name){
      const result = oldOpen.apply(this, arguments);
      setTimeout(() => window.renderPlayerAchievementBadgesForce(name), 0);
      setTimeout(() => window.renderPlayerAchievementBadgesForce(name), 120);
      setTimeout(() => window.renderPlayerAchievementBadgesForce(name), 500);
      return result;
    };
  }

  document.addEventListener('DOMContentLoaded', function(){
    const title = document.getElementById('playerName');
    if(!title) return;
    const observer = new MutationObserver(function(){
      window.renderPlayerAchievementBadgesForce(title.textContent);
    });
    observer.observe(title, {childList:true, characterData:true, subtree:true});
  });
})();
