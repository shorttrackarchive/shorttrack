import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const html=fs.readFileSync('index.html','utf8');
let checked=0;
for(const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)){
  if(/application\/ld\+json|\bsrc=/.test(match[1])||!match[2].trim())continue;
  new vm.Script(match[2]);checked++;
}
const block=html.slice(html.indexOf('  let tierSummarySource'),html.indexOf('  function tierEscape'));
const source=[{skater_name:'A',medal:'Gold',gender:'Women'},{skater_name:'A',medal:'Silver',gender:'Women'},{skater_name:'B',medal:'Bronze',gender:'Men'}];
const context=vm.createContext({skaterMedals:source});
vm.runInContext(block,context);
assert.equal(vm.runInContext("tierSummary('A').gold",context),1);
assert.equal(vm.runInContext("tierSummary('A').total",context),2);
assert.equal(vm.runInContext("tierSummary('missing').total",context),0);
context.skaterMedals=[{skater_name:'A',medal:'Bronze',gender:'Women'}];
assert.equal(vm.runInContext("tierSummary('A').gold",context),0);
assert.equal(vm.runInContext("tierSummary('A').bronze",context),1);
assert.match(html,/if\(!tierMakerInitialized\) return;\s+const q = tierNorm/);
const refresh=fs.readFileSync('refresh-static-data.mjs','utf8');
assert.ok(!refresh.includes('return [key, previous];'),'Must not substitute historical data by array position');
console.log(`PASS: ${checked} inline scripts; medal cache, invalidation, lazy tier rendering and source-year preservation`);
