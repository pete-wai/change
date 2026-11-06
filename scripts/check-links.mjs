import fs from 'node:fs/promises';
const events=JSON.parse(await fs.readFile('data/events.json','utf8'));
const urls=[...new Set(events.flatMap(e=>e.sources.map(s=>s.url)))];
const results=[];let next=0;
await Promise.all(Array.from({length:5},async()=>{while(next<urls.length){const url=urls[next++];try{const r=await fetch(url,{signal:AbortSignal.timeout(20000),headers:{'User-Agent':'ChangeHistorySourceCheck/1.0 (link availability check)'}}); results.push({url,status:r.status,finalUrl:r.url});await r.body?.cancel();}catch(e){results.push({url,error:e.message});}}}));
results.sort((a,b)=>a.url.localeCompare(b.url));await fs.mkdir('output',{recursive:true});await fs.writeFile('output/source-links.json',JSON.stringify({checkedAt:new Date().toISOString(),results},null,2));
console.log(`${results.filter(r=>r.status>=200&&r.status<400).length}/${urls.length} reachable through direct HTTP; others require browser/source review.`);
console.log(JSON.stringify(results.filter(r=>!r.status||r.status>=400),null,2));
