/* Attach identity decisions after existing field/record validation, before aggregation. */
let archiveIdentity=null;
const archiveIdentityDecisions=new Map();
function archivePrepareIdentity(json){
  archiveIdentity=ArchiveIdentity.create(json.athlete_master||[],skaterAliases,athleteCountryHistory,[...(json.medals||[]),...(json.relay_members||[]),...(json.best_times||[])]);
  archiveIdentityDecisions.clear();
  for(const merge of archiveIdentity.merges){
    const target=archiveNameKey(merge.canonical_name);
    const values=[...(archiveSearchAliases.get(target)||[]),merge.from_name,...(archiveSearchAliases.get(archiveNameKey(merge.from_name))||[])];
    archiveSearchAliases.set(target,[...new Set(values)]);
  }
}
function archiveFinalizeIdentityRow(normalized,raw,representativeCountry=false){
  if(!archiveIdentity)return normalized;
  const original=String(raw.original_skater_name||raw.skater_name||raw.name||raw.athlete||'').trim();
  const query={...raw,skater_name:original||normalized.skater_name,gender:raw.gender||normalized.gender};
  const decision=archiveIdentity.resolve(query);
  if(decision.status==='empty')return normalized;
  const result={...normalized,original_skater_name:original||query.skater_name,original_athlete_id:raw.original_athlete_id||raw.athlete_id||'',identity_status:decision.status,identity_method:decision.method||'',identity_warning:decision.warning||'',athlete_id:decision.status==='resolved'?decision.athlete_id:'',skater_name:decision.status==='resolved'?decision.canonical_name:query.skater_name};
  result.original_country=raw.original_country||raw.country||raw.noc||'';
  result.country_at_event=raw.country_at_event||'';
  // Never replace source country using a name that has been held for review.
  if(raw.country||raw.noc)result.country=archiveCountryCode(raw.country||raw.noc);
  if(representativeCountry&&decision.status==='resolved')Object.assign(result,applyRepresentativeCountry(result,result.skater_name));
  if(decision.status!=='resolved'||decision.warning||original!==result.skater_name){
    const signature=JSON.stringify([original,raw.athlete_id||'',query.gender,raw.country||raw.noc||'']);
    archiveIdentityDecisions.set(signature,{original_name:original,athlete_id:result.athlete_id,canonical_name:result.skater_name,country:raw.country||raw.noc||'',gender:query.gender,status:decision.status,method:decision.method||'',warning:decision.warning||'',candidates:decision.candidates||[]});
  }
  return result;
}
window.archiveIdentityReview=()=>[...archiveIdentityDecisions.values()];
window.archiveIdentityMerges=()=>archiveIdentity?.merges||[];
for(const name of ['normalizeMedalRow','normalizeRelayRow','normalizeBestTimeRow','normalizeEventRecordCacheRow','normalizeLapRow']){
  const previous=window[name];
  if(typeof previous==='function')window[name]=function(row){return archiveFinalizeIdentityRow(previous(row),row,['normalizeMedalRow','normalizeRelayRow'].includes(name));};
}
