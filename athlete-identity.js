/* Deterministic identity resolution. No fuzzy spelling guesses or source edits. */
(function(root){
  const key=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').normalize('NFC').toLowerCase().replace(/ł/g,'l').replace(/[^a-z0-9가-힣]/g,'');
  const gender=value=>({men:'M',male:'M',m:'M',남:'M',women:'F',female:'F',f:'F',여:'F'}[String(value||'').toLowerCase()]||'');
  const country=value=>String(value||'').trim().toUpperCase().replace(/^JAP$/,'JPN');
  function create(master=[],aliases=[],history=[],referenceRows=[]){
    const entities=new Map(),byId=new Map(),direct=new Map(),reversed=new Map();
    const merges=[],uses=new Map();
    referenceRows.forEach(row=>{const k=key(row.skater_name);uses.set(k,(uses.get(k)||0)+1);});
    function add(index,name,entity){const k=key(name);if(!k)return;if(!index.has(k))index.set(k,new Set());index.get(k).add(entity);}
    function register(entity,name){
      add(direct,name,entity);
      // Rotate two name blocks only; do not sort tokens or guess compound surnames.
      const parts=String(name||'').trim().split(/\s+/);
      if(parts.length===2&&parts.every(part=>/^[\p{L}'’.-]+$/u.test(part)))add(reversed,parts[1]+' '+parts[0],entity);
    }
    for(const row of master){
      if(!row.athlete_id||!row.canonical_name)continue;
      const id=String(row.athlete_id),entity=entities.get(id)||{id,name:row.canonical_name,gender:gender(row.gender),countries:new Set(),row};
      entities.set(id,entity);byId.set(id,entity);
      String(row.country||'').split(/[|,;/]/).filter(Boolean).forEach(c=>entity.countries.add(country(c)));
      [row.canonical_name,row.korean_name,...String(row.aliases||'').split('|'),...String(row.previous_names||'').split('|')].filter(Boolean).forEach(name=>register(entity,name));
    }
    for(const row of aliases){
      const targets=direct.get(key(row.canonical_name));
      if(targets?.size===1){const entity=[...targets][0];register(entity,row.alias_name);}
    }
    for(const row of history){
      const matches=new Set([row.canonical_name,...(row.aliases||[])].flatMap(name=>[...(direct.get(key(name))||[])]));
      if(matches.size!==1)continue;
      const entity=[...matches][0];
      [row.canonical_name,...(row.aliases||[])].forEach(name=>register(entity,name));
      (row.country_periods||[]).forEach(period=>{if(period.country)entity.countries.add(country(period.country));});
    }
    function partner(entity){
      const own=direct.get(key(entity.name));
      if(own?.size!==1)return null; // Identical-name IDs may be true homonyms.
      const parts=entity.name.trim().split(/\s+/);if(parts.length!==2)return null;
      const candidates=[...(direct.get(key(parts[1]+' '+parts[0]))||[])].filter(other=>other!==entity&&other.gender&&other.gender===entity.gender&&[...other.countries].some(c=>entity.countries.has(c)));
      if(candidates.length!==1)return null;
      const other=candidates[0];
      for(const field of ['birth_date','date_of_birth','isu_id'])if(entity.row[field]&&other.row[field]&&String(entity.row[field])!==String(other.row[field]))return null;
      return other;
    }
    function preference(entity){return (entity.row.korean_name?1000000:0)+(entity.row.source_urls?100000:0)+(uses.get(key(entity.name))||0);}
    for(const entity of [...entities.values()]){
      if(!entities.has(entity.id))continue;
      const other=partner(entity);if(!other||partner(other)!==entity)continue;
      const [winner,loser]=[entity,other].sort((a,b)=>preference(b)-preference(a)||a.name.localeCompare(b.name)||a.id.localeCompare(b.id));
      for(const index of [direct,reversed])for(const bucket of index.values())if(bucket.delete(loser))bucket.add(winner);
      for(const [id,value]of byId)if(value===loser)byId.set(id,winner);
      loser.countries.forEach(c=>winner.countries.add(c));entities.delete(loser.id);
      merges.push({from_id:loser.id,to_id:winner.id,from_name:loser.name,canonical_name:winner.name,method:'master-name-order'});
    }
    function resolve(row,options={}){
      const name=String(row.skater_name||row.name||row.athlete||'').trim(),id=String(row.athlete_id||'');
      const sex=gender(row.gender),noc=country(row.country_at_event||row.country||row.noc);
      const sameGender=entity=>!sex||!entity.gender||entity.gender===sex;
      const sameCountry=entity=>!noc||!entity.countries.size||entity.countries.has(noc);
      const compatible=entity=>sameGender(entity)&&sameCountry(entity);
      const found=entity=>({status:'resolved',athlete_id:entity.id,canonical_name:entity.name,method:id?'id':'registered-name',warning:sameCountry(entity)?'':'country-history-review'});
      if(id){
        const entity=byId.get(id);
        if(!entity)return {status:'unknown-id',candidates:[]};
        // The explicit ID is authoritative, but contradictory metadata requires review.
        return sameGender(entity)?found(entity):{status:'metadata-conflict',candidates:[id]};
      }
      if(!name)return {status:'empty',candidates:[]};
      const exact=direct.get(key(name));
      let pool=[...(exact||reversed.get(key(name))||[])];
      if(!pool.length)return {status:'unmatched',candidates:[]};
      // A verified ID/name can span countries; the master country is not a complete
      // history. Country is mandatory corroboration only for new order inference.
      pool=pool.filter(exact&&exact.size===1?sameGender:compatible);
      if(!pool.length)return {status:'metadata-conflict',candidates:[...(exact||reversed.get(key(name)))].map(e=>e.id)};
      if(pool.length!==1)return {status:'ambiguous',candidates:pool.map(e=>e.id)};
      const entity=pool[0];
      if(!exact&&!options.lookup&&(!sex||!noc||!entity.gender||!entity.countries.size))return {status:'missing-metadata',candidates:[entity.id]};
      return {...found(entity),method:exact?'registered-name':'name-order'};
    }
    return {resolve,key,entityCount:entities.size,merges};
  }
  const api={create,key};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  else root.ArchiveIdentity=api;
})(globalThis);
