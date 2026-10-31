/* Archive v2: stable athlete IDs and coherent public snapshots. */
const ARCHIVE_MASTER_HEADERS = ['athlete_id','canonical_name','korean_name','aliases','previous_names','country','gender','source_urls','match_rule'];
const ARCHIVE_REVIEWED_ALIASES = [
  ['Maxime Loaun','Maxime Laoun','https://speedskating.ca/fr/le-relais-feminin-3000m-rafle-lor-a-loccasion-du-retour-tres-attendu-du-patinage-de-vitesse-courte-piste-a-vancouver/'],
  ['Min-Kyung Choi','Choi Min-kyung','https://digital.la84.org/digital/api/collection/p17103coll8/id/62843/download'],
  ['최민정','Choi Min-jeong',''],['김길리','Kim Gil-li',''],['심석희','Shim Suk-hee',''],
  ['박지원','Park Ji-won',''],['황대헌','Hwang Dae-heon',''],['이준서','Lee June-seo','']
];
function archiveIdentityKey_(name){
  return String(name||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').normalize('NFC').toLowerCase().replace(/ł/g,'l').replace(/[^a-z0-9가-힣]/g,'');
}
function archiveHash_(text){
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,text,Utilities.Charset.UTF_8)
    .map(b=>('0'+((b+256)%256).toString(16)).slice(-2)).join('');
}
function archiveAliases_(rows){
  const map={};
  rows.forEach(r=>{if(r.alias_name && r.canonical_name) map[archiveIdentityKey_(r.alias_name)]=r.canonical_name;});
  ARCHIVE_REVIEWED_ALIASES.forEach(r=>{map[archiveIdentityKey_(r[0])]=r[1];});
  return map;
}
function archiveResolve_(name,map){
  let value=String(name||'').trim(),seen={};
  for(let i=0;i<10;i++){
    const key=archiveIdentityKey_(value), next=map[key];
    if(!next || seen[key] || archiveIdentityKey_(next)===key) return next||value;
    seen[key]=true;value=next;
  }
  return value;
}
function archiveReadMaster_(){return readSheetSlim_('athlete_master',ARCHIVE_MASTER_HEADERS);}
function archiveReadPublic_(){
  const core=readInitialData_();delete core.generated_at;
  core.event_records=readEventRecordsCache_();
  core.lap_rankings=getLapRankingRows_({limit:50000,includeRelay:1,includeAllEvents:1}).map(toPublicLapRankingRow_);
  core.athlete_master=archiveReadMaster_();
  return core;
}
function archiveRegistry_(data){
  const aliases=archiveAliases_(data.skater_aliases||[]),byKey={},byId={},names=[];
  (data.athlete_master||[]).forEach(row=>{
    if(!row.athlete_id || !row.canonical_name) return;
    byId[row.athlete_id]=Object.assign({},row);
    [row.canonical_name,row.korean_name].concat(String(row.aliases||'').split('|'),String(row.previous_names||'').split('|')).filter(Boolean).forEach(name=>{
      aliases[archiveIdentityKey_(name)]=row.canonical_name;byKey[archiveIdentityKey_(name)]=byId[row.athlete_id];
    });
  });
  const relatedByKey={},reviewedByKey={};
  (data.skater_aliases||[]).forEach(row=>{
    const key=archiveIdentityKey_(archiveResolve_(row.canonical_name,aliases));
    if(!relatedByKey[key]) relatedByKey[key]=[];relatedByKey[key].push(row.alias_name);
  });
  ARCHIVE_REVIEWED_ALIASES.forEach(row=>{
    const key=archiveIdentityKey_(row[1]);if(!reviewedByKey[key])reviewedByKey[key]=[];reviewedByKey[key].push(row);
  });
  const groups=[data.medals||[],data.relay_members||[],data.best_times||[],data.event_records||[],data.lap_rankings||[]];
  groups.forEach((rows,index)=>rows.forEach(row=>{
    if(index!==1 && /relay|계주/i.test(String(row.event||''))) return;
    if(!row.skater_name || isInvalidEventRecordSkaterName_(row.skater_name)) return;
    const raw=String(row.skater_name).trim(),canonical=archiveResolve_(raw,aliases),key=archiveIdentityKey_(canonical);
    if(!key) return;
    let athlete=byKey[key];
    if(!athlete){
      athlete={athlete_id:'STA-'+archiveHash_(key).slice(0,20),canonical_name:canonical,korean_name:'',aliases:'',previous_names:'',country:row.country||'',gender:row.gender||'',source_urls:'',match_rule:'existing aliases / typography'};
      byKey[key]=athlete;byId[athlete.athlete_id]=athlete;
    }
    byKey[archiveIdentityKey_(raw)]=athlete;
    const related=relatedByKey[key]||[];
    const reviewed=reviewedByKey[key]||[];
    const list=String(athlete.aliases||'').split('|').concat(raw,related,reviewed.map(r=>r[0])).filter(Boolean);
    athlete.aliases=Array.from(new Set(list)).join('|');
    athlete.korean_name=athlete.korean_name||list.find(n=>/[가-힣]/.test(n))||'';
    athlete.source_urls=Array.from(new Set(String(athlete.source_urls||'').split('|').concat(reviewed.map(r=>r[2])).filter(Boolean))).join('|');
    if(reviewed.some(r=>r[2])) athlete.match_rule='source-verified spelling / name order';
  }));
  Object.keys(byId).forEach(id=>{const r=byId[id];String(r.aliases||'').split('|').filter(Boolean).forEach(n=>byKey[archiveIdentityKey_(n)]=r);});
  return {aliases:aliases,byKey:byKey,rows:Object.keys(byId).map(id=>byId[id]).sort((a,b)=>a.canonical_name.localeCompare(b.canonical_name))};
}
function archiveAttachIds_(data){
  const registry=archiveRegistry_(data);
  const knownIds=new Set((data.athlete_master||[]).map(row=>row.athlete_id));
  const additions=registry.rows.filter(row=>!knownIds.has(row.athlete_id));
  if(additions.length){
    const sheet=ensureSheetWithHeaders_(getSpreadsheet_(),'athlete_master',ARCHIVE_MASTER_HEADERS);
    const start=sheet.getLastRow()+1;
    if(sheet.getMaxRows()<start+additions.length-1)sheet.insertRowsAfter(sheet.getMaxRows(),start+additions.length-1-sheet.getMaxRows());
    sheet.getRange(start,1,additions.length,ARCHIVE_MASTER_HEADERS.length).setNumberFormat('@')
      .setValues(additions.map(row=>ARCHIVE_MASTER_HEADERS.map(header=>String(row[header]||''))));
  }
  ['medals','relay_members','best_times','event_records','lap_rankings'].forEach(group=>{
    data[group]=(data[group]||[]).map(row=>{
      if(group!=='relay_members' && /relay|계주/i.test(String(row.event||''))) return row;
      const athlete=registry.byKey[archiveIdentityKey_(row.skater_name)];
      if(!athlete) return row;
      return Object.assign({},row,{athlete_id:athlete.athlete_id,original_skater_name:row.original_skater_name||row.skater_name,name_at_event:row.name_at_event||row.skater_name,skater_name:athlete.canonical_name});
    });
  });
  data.athlete_master=registry.rows;
  data.skater_aliases=(data.skater_aliases||[]).concat(registry.rows.flatMap(r=>String(r.aliases||'').split('|').filter(Boolean).map(alias=>({alias_name:alias,canonical_name:r.canonical_name,country:r.country,note:'athlete_id: '+r.athlete_id}))));
  return data;
}
function archiveLiveSnapshot_(params){
  const lock=LockService.getScriptLock();lock.waitLock(15000);
  try{
    // Two complete reads detect edits during collection; partial bundles never escape.
    let first=archiveReadPublic_();
    for(let attempt=0;attempt<3;attempt++){
      const second=archiveReadPublic_();
      const a=archiveHash_(JSON.stringify(first)),b=archiveHash_(JSON.stringify(second));
      if(a===b){
        const data=archiveAttachIds_(second);
        const version='v2-'+archiveHash_(JSON.stringify(data));
        if(params.known_version===version) return {ok:true,schema_version:2,unchanged:true,data_version:version,generated_at:new Date().toISOString()};
        return Object.assign(data,{ok:true,schema_version:2,data_version:version,generated_at:new Date().toISOString()});
      }
      first=second;
    }
    throw new Error('Results changed during collection; retry the complete snapshot.');
  }finally{lock.releaseLock();}
}
function syncAthleteMaster(){
  const lock=LockService.getScriptLock();lock.waitLock(15000);
  try{
    const ss=getSpreadsheet_(),data=archiveReadPublic_(),registry=archiveRegistry_(data);
    const sheet=ensureSheetWithHeaders_(ss,'athlete_master',ARCHIVE_MASTER_HEADERS);
    const rows=registry.rows.map(r=>ARCHIVE_MASTER_HEADERS.map(h=>String(r[h]||'')));
    if(sheet.getMaxRows()<rows.length+1) sheet.insertRowsAfter(sheet.getMaxRows(),rows.length+1-sheet.getMaxRows());
    sheet.getRange(1,1,rows.length+1,ARCHIVE_MASTER_HEADERS.length).setNumberFormat('@');
    if(rows.length) sheet.getRange(2,1,rows.length,ARCHIVE_MASTER_HEADERS.length).setValues(rows);
    sheet.setFrozenRows(1);
    sheet.getRange(1,1,1,ARCHIVE_MASTER_HEADERS.length).setBackground('#eeeeee').setFontWeight('bold');
    [220,200,120,400,160,100,100,400,240].forEach((width,i)=>sheet.setColumnWidth(i+1,width));
    sheet.getRange(1,1,rows.length+1,ARCHIVE_MASTER_HEADERS.length).setVerticalAlignment('top').setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);
    if(!sheet.getFilter()) sheet.getRange(1,1,rows.length+1,ARCHIVE_MASTER_HEADERS.length).createFilter();
    console.log('athlete_master: '+rows.length+' stable IDs; source results unchanged.');
    return {ok:true,athletes:rows.length};
  }finally{lock.releaseLock();}
}
