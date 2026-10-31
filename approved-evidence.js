/* Evidence is drawn from the currently committed snapshot, never invented. */
let approvedHallModels=[],approvedEvidenceReturnFocus=null;
function approvedEvidenceTable(rows){
  if(!rows.length)return `<p>${stLang('현재 수록 자료에서 카드 수치와 일치하는 원문 기록을 확인하지 못했습니다. 이 화면은 공식 기록의 검증 완료를 의미하지 않습니다.',
    'No matching source row for this card value was found in the current collection. This view does not certify the official record.')}</p>`;
  return `<div class="table-scroll"><table><thead><tr><th>${tr('skater')}</th><th>${tr('season')}</th><th>${tr('competition')}</th><th>${tr('event')}</th><th>${tr('medal')}</th><th>${tr('record')}</th><th>${tr('source')}</th></tr></thead><tbody>${rows.map(row=>{
    const url=String(row.source_url||'');return `<tr><td>${displaySkaterNameHtml(row.skater_name||row.country||'-')}</td><td>${escapeHtml(row.season||row.year||'-')}</td><td>${escapeHtml(row.competition_name||row.competition||row.compitition||'-')}</td><td>${escapeHtml(row.event||'-')}</td><td>${escapeHtml(row.medal?medalKorean(row.medal):'-')}</td><td>${escapeHtml(row.time||row.best_time||row.lap_time||'-')}</td><td>${/^https?:\/\//i.test(url)?`<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${stLang('수록 출처 보기','View collected source')}</a>`:stLang('원문 링크 미등록','No source link registered')}</td></tr>`;}).join('')}</tbody></table></div>`;
}
function approvedShowEvidence(title,description,rows,extra=''){
  let dialog=document.getElementById('approvedEvidenceDialog');
  if(!dialog){
    dialog=document.createElement('dialog');dialog.id='approvedEvidenceDialog';dialog.setAttribute('aria-labelledby','approvedEvidenceTitle');
    dialog.innerHTML='<div class="approved-dialog-head"><h2 id="approvedEvidenceTitle"></h2><button type="button" class="sort-btn"></button></div><div id="approvedEvidenceContent"></div>';
    document.body.append(dialog);dialog.querySelector('button').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('close',()=>approvedEvidenceReturnFocus?.focus?.({preventScroll:true}));
  }
  approvedEvidenceReturnFocus=document.activeElement;
  dialog.querySelector('h2').textContent=title;dialog.querySelector('button').textContent=tr('close');
  const fetched=window.archiveCurrentSnapshot?.generated_at;
  dialog.querySelector('#approvedEvidenceContent').innerHTML=`<p class="archive-scope-note">${escapeHtml(description)}</p><p>${escapeHtml(stLang('자료 조회 시각: ','Data fetched: ')+(fetched?new Date(fetched).toLocaleString(currentLang==='en'?'en-US':'ko-KR'):'-'))}</p>${extra}${approvedEvidenceTable(rows)}`;
  if(!dialog.open)dialog.showModal();
}
function approvedHallMedalModels(){
  const distance=skaterMedals.filter(row=>archiveIsDistanceMedal(row)&&!isOlympicDemonstrationRow(row));
  const overall=skaterMedals.filter(row=>isWorldChampionshipOverallRow(row)&&row.medal==='Gold');
  const specs=[
    [distance.filter(r=>competitionBucket(r.competition_type)==='olympic'&&r.medal==='Gold'),stLang('거리별 개인전·올림픽 금메달. 계주·시범종목·종합·Super Final 제외.','Olympic distance-event gold medals. Excludes relays, demonstrations, overall and Super Finals.')],
    [distance.filter(r=>competitionBucket(r.competition_type)==='worlds'&&r.medal==='Gold'),stLang('거리별 개인전·세계선수권 금메달. 종합·3000m·계주 제외.','World Championships distance-event gold medals. Excludes overall, 3000m and relays.')],
    [distance.filter(r=>competitionBucket(r.competition_type)==='worldcup'&&r.medal==='Gold'),stLang('월드컵·월드투어 500·1000·1500m 계열 금메달. 같은 거리의 추가 경기 포함.','World Cup/Tour distance-event gold medals, including additional races over the same distance.')],
    [distance.filter(r=>r.medal==='Gold'),stLang('수록 대회의 500·1000·1500m 개인전 금메달 합계.','Recorded 500m/1000m/1500m individual gold medals.')],
    [distance,stLang('수록 대회의 500·1000·1500m 개인전 금·은·동 합계.','Recorded 500m/1000m/1500m individual gold, silver and bronze medals.')],
    ...['500m','1000m','1500m'].map(event=>[distance.filter(r=>normalizeBestTimeEvent(r.event)===event&&r.medal==='Gold'),stLang(`${event} 계열 개인전 금메달. 동일 거리의 추가 경기 포함.`,`${event} individual gold medals, including additional races over the same distance.`)]),
    [overall.filter(r=>r.gender==='Women'),stLang('여자 세계선수권 종합 Overall 금메달. 거리별 메달과 별도.','Women’s World Championships Overall titles, separate from distance-event medals.')],
    [overall.filter(r=>r.gender==='Men'),stLang('남자 세계선수권 종합 Overall 금메달. 거리별 메달과 별도.','Men’s World Championships Overall titles, separate from distance-event medals.')]
  ];
  return specs.map(([rows,description])=>{
    const map=new Map();rows.forEach(row=>{const key=row.athlete_id||row.skater_name;if(!map.has(key))map.set(key,{name:row.skater_name,rows:[]});map.get(key).rows.push(row);});
    const max=Math.max(0,...[...map.values()].map(item=>item.rows.length)),winners=[...map.values()].filter(item=>item.rows.length===max);
    return {description,count:max,winners,rows:winners.flatMap(item=>item.rows)};
  });
}
function approvedRenderHallEvidence(){
  const cards=[...document.querySelectorAll('#hallOfFameSection .hof-card')];
  if(medals.length)approvedHallModels=approvedHallMedalModels();
  cards.forEach((card,index)=>{
    if(index<10&&approvedHallModels[index]){
      const model=approvedHallModels[index];card.querySelector('.hof-number').textContent=model.count;
      card.querySelector('.hof-name').textContent=model.winners.map(item=>item.name).join(' / ');
      card.querySelector('.hof-name').classList.toggle('approved-hall-tie',model.winners.length>1);
      card.querySelector('.hof-note')?.removeAttribute('data-ko');card.querySelector('.hof-note')?.removeAttribute('data-en');
      if(card.querySelector('.hof-note'))card.querySelector('.hof-note').textContent=stLang('수록 자료 기준 · 근거 목록에서 조건 확인','Recorded data · View evidence for filters');
    }
    let button=card.querySelector('.approved-hall-evidence');
    if(!button){button=document.createElement('button');button.type='button';button.className='sort-btn approved-hall-evidence';button.addEventListener('click',()=>approvedOpenHallEvidence(index));card.querySelector('.hof-body').append(button);}
    button.textContent=stLang('근거와 집계 조건','Evidence and counting rules');
  });
}
function approvedOpenHallEvidence(index){
  const card=document.querySelectorAll('#hallOfFameSection .hof-card')[index];if(!card)return;
  const title=card.querySelector('.hof-title').textContent;
  if(index<10){const model=approvedHallModels[index];if(model)approvedShowEvidence(title,model.description+stLang(` 공동 1위 포함 ${model.winners.length}명 · 각 ${model.count}개.`,` ${model.winners.length} tied leader(s), ${model.count} each.`),model.rows);return;}
  const name=card.querySelector('.hof-name').textContent.trim(),time=card.querySelector('.hof-number').textContent.trim();
  const expected=parseBestSeconds(time),key=archiveNameKey(name),country={Netherlands:'NED',Hungary:'HUN'}[name];
  let rows=[];
  if(index>=19){
    rows=(window.archiveCurrentSnapshot?.lap_rankings||[]).filter(row=>archiveNameKey(row.skater_name)===key&&Math.abs(Number(row.lap_time)-Number(time))<0.0005);
  }else{
    rows=(window.archiveCurrentSnapshot?.event_records||[]).filter(row=>
      (archiveNameKey(canonicalSkaterName(row.skater_name))===archiveNameKey(canonicalSkaterName(name))||country&&row.country===country)&&
      Math.abs((Number(row.seconds_float)||parseBestSeconds(row.time))-expected)<0.0005);
  }
  approvedShowEvidence(title,stLang(`카드 기준값: ${name} · ${time}. 이 값에 일치하는 수록 경기만 표시합니다. 원문이 없으면 공식 기록 검증 완료로 간주하지 않습니다.`,
    `Card value: ${name} · ${time}. Only matching collected rows are shown. Missing source evidence does not certify an official record.`),rows);
}
function archiveQuizEvidenceHtml(question){
  const row=question.sourceRows?.[0];if(!row?.competition_name)return '';
  const params=new URLSearchParams({competition:row.competition_name,resultSeason:row.season||'',resultGender:row.gender||'',resultEvent:row.event||''});
  return `<div class="quiz-meta"><a href="?${escapeHtml(params.toString())}" onclick="event.preventDefault();approvedQuizResult('${escapeJs(row.competition_name)}','${escapeJs(row.season||'')}','${escapeJs(row.gender||'')}','${escapeJs(row.event||'')}')">${stLang('해당 대회의 경기 결과 보기','View this competition’s event results')} ↗</a></div>`;
}
function approvedQuizResult(competition,season,gender,event){
  const rows=medals.filter(row=>row.competition_name===competition&&(!season||row.season===season)&&(!gender||row.gender===gender)&&(!event||row.event===event));
  const full=`<p><a href="?competition=${encodeURIComponent(competition)}" onclick="event.preventDefault();document.getElementById('approvedEvidenceDialog').close();openCompetitionPanel('${escapeJs(competition)}')">${stLang('대회 전체 결과 보기','View all competition results')}</a></p>`;
  approvedShowEvidence(competition,[season,genderKorean(gender),event].filter(Boolean).join(' · '),rows,full);
}
window.addEventListener('shorttrack:data-ready',()=>setTimeout(()=>{
  const p=new URLSearchParams(location.search);if(p.get('resultEvent')&&p.get('competition'))approvedQuizResult(p.get('competition'),p.get('resultSeason')||'',p.get('resultGender')||'',p.get('resultEvent'));
},240));
