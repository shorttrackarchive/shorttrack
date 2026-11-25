import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
const js=fs.readFileSync('palettes.js','utf8'),css=fs.readFileSync('palettes.css','utf8');
new vm.Script(js);
const declarations=js.slice(js.indexOf('const palettes='),js.indexOf('const valid='));
const context=vm.createContext({});
vm.runInContext(declarations+'globalThis.items=palettes',context);
assert.equal(context.items.length,4);
const names=new Set();
for(const palette of context.items){
  assert.equal(palette.colors.length,5);
  assert.equal(new Set(palette.colors).size,5);
  assert.ok(!names.has(palette.id));names.add(palette.id);
  palette.colors.forEach(color=>assert.match(color,/^#[A-F\d]{6}$/));
}
function luminance(hex){if(hex.length===4)hex='#'+[...hex.slice(1)].map(c=>c+c).join('');return hex.match(/[a-f\d]{2}/gi).map(c=>parseInt(c,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((sum,x,i)=>sum+x*[.2126,.7152,.0722][i],0);}
function contrast(a,b){const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
for(const id of ['fresh-ice','night-session','photo-finish']){
  const block=css.match(new RegExp(`html\\[data-palette=${id}\\]\\{([^}]+)\\}`))[1];
  const values=Object.fromEntries([...block.matchAll(/--palette-([\w-]+):(#\w+)/g)].map(m=>[m[1],m[2]]));
  for(const [fg,bg] of [['ink','bg'],['ink','surface'],['muted','surface'],['muted','soft'],['on-accent','accent'],['link','bg']])assert.ok(contrast(values[fg],values[bg])>=4.5,`${id}: ${fg}/${bg} must meet 4.5:1`);
}
assert.match(js,/bridge\.disabled=id==='ice-trace'/);
assert.match(js,/localStorage\.setItem\(storageKey,draft\)/);
assert.match(js,/dialog\.returnValue!=='apply'/);
console.log('PASS: four five-color palettes, text/control contrast, original-style isolation and explicit persistence/cancel paths');
