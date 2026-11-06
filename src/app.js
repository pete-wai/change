const $ = s => document.querySelector(s);
const exhibits = JSON.parse($('#exhibit-data').textContent);
const form = $('.filters');
const fields = { q: $('#search'), topic: $('#topic'), outcome: $('#outcome') };
const entries = [...document.querySelectorAll('.event')];
const eras = [...document.querySelectorAll('.era')];
const params = new URLSearchParams(location.search);
for (const [key, field] of Object.entries(fields)) field.value = params.get(key) || '';
function filter({save = true} = {}) {
 const terms = fields.q.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
 let count = 0;
 for (const entry of entries) {
  const match = terms.every(term => entry.dataset.search.includes(term)) && (!fields.topic.value || fields.topic.value === entry.dataset.category) && (!fields.outcome.value || fields.outcome.value === entry.dataset.status);
  entry.hidden = !match; if (match) count++;
 }
 for (const era of eras) era.hidden = !era.querySelector('.event:not([hidden])');
 $('#result-count').textContent = count === entries.length ? `Showing all ${count} entries` : `${count} of ${entries.length} entries`;
 $('#empty').hidden = count > 0;
 if (save) {
  const url = new URL(location.href);
  for (const [key, field] of Object.entries(fields)) field.value ? url.searchParams.set(key,field.value) : url.searchParams.delete(key);
  history.replaceState(null,'',url);
 }
}
function clearFilters() { for (const f of Object.values(fields)) f.value = ''; filter(); }
form.addEventListener('submit',e=>{e.preventDefault();filter();});
form.addEventListener('input',()=>filter());
form.addEventListener('change',()=>filter());
form.addEventListener('reset',e=>{e.preventDefault();clearFilters();});
$('#clear-empty').addEventListener('click',()=>{clearFilters();fields.q.focus();});
$('#collapse-all').addEventListener('click',()=>document.querySelectorAll('.event details[open]').forEach(d=>d.open=false));
function revealAnchor() {
 let id; try { id=decodeURIComponent(location.hash.slice(1)); } catch { return; }
 const target = document.getElementById(id);
 if (!target) return;
 if ((target.classList.contains('event') || target.classList.contains('era')) && target.hidden) clearFilters();
 if (target.classList.contains('event')) target.querySelector('details').open=true;
 requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'instant'}));
}
window.addEventListener('hashchange',revealAnchor);
window.addEventListener('popstate',()=>{const p=new URLSearchParams(location.search);for(const [k,f] of Object.entries(fields))f.value=p.get(k)||'';filter({save:false});revealAnchor();});
let before = false;
function renderExhibit() {
 const item = exhibits.find(x=>x.id===$('#case-choice').value) || exhibits[0];
 $('#exhibit-date').textContent=item.date;
 $('#flow-input').textContent=item.input;
 $('#flow-target').textContent=item.target;
 $('#flow-action').textContent=before?item.beforeAction:item.afterAction;
 $('#exhibit-copy').textContent=before?item.before:item.after;
 $('.flow').dataset.mode=before?'before':item.change;
 $('#show-before').setAttribute('aria-pressed',String(before));
 $('#show-after').setAttribute('aria-pressed',String(!before));
 $('#exhibit-link').href=`#${item.id}`;
}
$('#show-before').addEventListener('click',()=>{before=true;renderExhibit();});
$('#show-after').addEventListener('click',()=>{before=false;renderExhibit();});
$('#case-choice').addEventListener('change',renderExhibit);
filter({save:false}); renderExhibit(); document.documentElement.classList.add('enhanced');
if (location.hash) revealAnchor();
