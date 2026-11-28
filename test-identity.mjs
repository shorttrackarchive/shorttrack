import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),{create}=require('./athlete-identity.js');
const master=[
  {athlete_id:'choi',canonical_name:'Choi Min-jeong',korean_name:'최민정',gender:'Women',country:'KOR'},
  {athlete_id:'choi-reversed',canonical_name:'Minjeong Choi',gender:'Women',country:'KOR'},
  {athlete_id:'hamelin',canonical_name:'Francois Hamelin',gender:'Men',country:'CAN'},
  {athlete_id:'an',canonical_name:'Victor An',gender:'Men',country:'RUS',aliases:'Viktor An|Ahn Hyun-soo'},
  {athlete_id:'same1',canonical_name:'Alex Kim',gender:'Men',country:'CAN'},
  {athlete_id:'same2',canonical_name:'Alex Kim',gender:'Men',country:'CAN'}
];
const registry=create(master,[],[{canonical_name:'Victor An',aliases:['Ahn Hyun Soo'],country_periods:[{country:'KOR'},{country:'RUS'}]}]);
for(const skater_name of ['Choi Min-jeong','CHOI MIN JEONG','Choi Minjeong','최민정','Minjeong Choi','Min-jeong Choi']){
  const result=registry.resolve({skater_name,gender:'Women',country:'KOR'});assert.equal(result.athlete_id,'choi',skater_name);
}
assert.equal(registry.resolve({skater_name:'François Hamelin',country:'CAN',gender:'Men'}).athlete_id,'hamelin');
assert.equal(registry.resolve({skater_name:'Ahn Hyun Soo',country:'KOR',gender:'Men'}).athlete_id,'an');
assert.equal(registry.resolve({skater_name:'Victor An',country:'RUS',gender:'Men'}).athlete_id,'an');
assert.equal(registry.resolve({skater_name:'Alex Kim',country:'CAN',gender:'Men'}).status,'ambiguous');
assert.equal(registry.resolve({skater_name:'Choi Min-jeong',country:'CAN',gender:'Women'}).warning,'country-history-review');
assert.equal(registry.resolve({skater_name:'Hamelin Francois',country:'USA',gender:'Men'}).status,'metadata-conflict');
assert.equal(registry.resolve({skater_name:'Choi Min-jeong',country:'KOR',gender:'Men'}).status,'metadata-conflict');
assert.equal(registry.resolve({skater_name:'Min-jeong Choi'}).athlete_id,'choi');
assert.equal(registry.resolve({athlete_id:'choi-reversed'}).athlete_id,'choi');
assert.equal(registry.resolve({skater_name:'Hamelin Francois'}).status,'missing-metadata');
assert.equal(registry.resolve({skater_name:'Minjeong Choi'},{lookup:true}).athlete_id,'choi');
assert.equal(registry.resolve({skater_name:'Chio Minjeong',country:'KOR',gender:'Women'}).status,'unmatched');
assert.equal(registry.resolve({athlete_id:'missing',skater_name:'Choi Min-jeong'}).status,'unknown-id');
assert.equal(registry.resolve({athlete_id:'choi',skater_name:'different name'}).athlete_id,'choi');
const compound=create([{athlete_id:'liu',canonical_name:'Liu Shaolin Sandor',country:'HUN',gender:'Men'}]);
assert.equal(compound.resolve({skater_name:'Sandor Shaolin Liu',country:'HUN',gender:'Men'}).status,'unmatched');
const different=create([{athlete_id:'a',canonical_name:'Lee Kim',country:'KOR',gender:'Men',isu_id:'1'},{athlete_id:'b',canonical_name:'Kim Lee',country:'KOR',gender:'Men',isu_id:'2'}]);
assert.equal(different.merges.length,0,'Conflicting official IDs must prevent name-order merging');
console.log('PASS: normalization, aliases, two-block name order, stable IDs, nationality history, ambiguity, metadata conflict and no fuzzy/compound-name guessing');
