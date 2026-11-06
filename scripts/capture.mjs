import {chromium} from '@playwright/test';
import {mkdir,writeFile} from 'node:fs/promises';
await mkdir('output/screenshots',{recursive:true});
const browser=await chromium.launch();
for(const [name,width,height] of [['desktop',1440,1100],['mobile',390,844]]){
 const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});await page.goto('http://127.0.0.1:4173/change/');await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:`output/screenshots/${name}.png`});await page.screenshot({path:`output/screenshots/${name}-full.png`,fullPage:true});await page.evaluate(()=>document.querySelector('#history').scrollIntoView({block:'start',behavior:'instant'}));await page.screenshot({path:`output/screenshots/${name}-history.png`});await page.goto('http://127.0.0.1:4173/change/#flash');await page.screenshot({path:`output/screenshots/${name}-detail.png`});await page.close();
}
const page=await browser.newPage({viewport:{width:320,height:800}});await page.goto('http://127.0.0.1:4173/change/');await page.addStyleTag({content:':root{font-size:32px!important}'});console.log(await page.evaluate(()=>[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1&&e.getBoundingClientRect().width>0).map(e=>({tag:e.tagName,class:e.className,right:e.getBoundingClientRect().right,text:e.textContent.slice(0,60)})).slice(0,30)));await browser.close();
