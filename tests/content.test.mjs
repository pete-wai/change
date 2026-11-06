import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
const events=JSON.parse(await readFile('data/events.json'));
const exhibits=JSON.parse(await readFile('data/exhibits.json'));
test('published records carry a complete, source-backed account',()=>{
 assert.equal(events.length,46); assert.equal(new Set(events.map(e=>e.id)).size,events.length);
 let last=1980;
 for(const e of events){assert.match(e.id,/^[a-z0-9-]+$/);assert.ok(e.year>=last&&e.year<=2026,e.id);last=e.year;for(const field of ['title','summary','dateLabel','before','pressure','response','outcome','scope','origin','prevalence'])assert.ok(typeof e[field]==='string'&&e[field].length>0,`${e.id}: ${field}`);assert.ok(['retired','default','defense','ongoing'].includes(e.status));assert.ok(e.milestones.length);assert.ok(new Set(e.sources.map(s=>s.url)).size>=2);for(const s of e.sources){assert.match(s.url,/^https?:\/\//);assert.ok(s.supports&&s.title);}}
});
test('comparisons point to real entries and have both states',()=>{for(const x of exhibits){assert.ok(events.some(e=>e.id===x.id));assert.ok(x.before&&x.after&&x.beforeAction&&x.afterAction);}});
test('build contains every entry and no unpublished research files',async()=>{const html=await readFile('dist/index.html','utf8');for(const e of events)assert.ok(html.includes(`id="${e.id}"`));assert.ok(!html.includes('data-search="undefined'));const files=await readdir('dist');assert.ok(!files.includes('research'));assert.ok(!files.includes('reviews'));assert.ok(!/https?:[^"']+\.(?:js|css)["']/.test(html));});
