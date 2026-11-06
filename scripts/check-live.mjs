import {chromium,expect} from '@playwright/test';
import {mkdir,writeFile} from 'node:fs/promises';
const url=process.env.SITE_URL || 'https://pete-wai.github.io/change/';
const browser=await chromium.launch();
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 const failures=[];page.on('pageerror',e=>failures.push(e.message));page.on('response',r=>{if(new URL(r.url()).origin===new URL(url).origin&&r.status()>=400)failures.push(`${r.status()} ${r.url()}`);});
 const response=await page.goto(url,{waitUntil:'networkidle'});expect(response.status()).toBe(200);await expect(page.locator('.event')).toHaveCount(46);await expect(page.locator('#case-choice')).toBeVisible();await page.evaluate(()=>document.fonts.ready);
 await page.locator('#show-before').click();await expect(page.locator('.flow')).toHaveAttribute('data-mode','before');await page.locator('#search').fill('passkeys');await expect(page.locator('.event:visible')).toHaveCount(1);await page.getByRole('button',{name:'Reset',exact:true}).click();await expect(page.locator('.event:visible')).toHaveCount(46);
 await page.goto(new URL('#flash',url).href);await expect(page.locator('#flash details')).toHaveAttribute('open','');expect(failures).toEqual([]);
 await mkdir('output',{recursive:true});const report={checkedAt:new Date().toISOString(),url,entries:46,errors:failures,checks:['HTTP 200','local assets loaded','comparison control','filter and reset','deep link and native details']};await writeFile('output/live-check.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
}finally{await browser.close();}
