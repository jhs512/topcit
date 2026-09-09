import {chromium} from 'playwright';
import {createServer} from 'node:http';
import {stat,readFile,mkdir} from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url);
const server=createServer(async(req,res)=>{try{const file=new URL('.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname),root);if(!file.href.startsWith(root.href))throw Error();const s=await stat(file);res.setHeader('Content-Type',({html:'text/html',mjs:'text/javascript',css:'text/css',pdf:'application/pdf'})[file.pathname.split('.').at(-1)]||'application/octet-stream');res.setHeader('Accept-Ranges','bytes');const range=req.headers.range?.match(/bytes=(\d+)-(\d*)/);if(range){const start=Number(range[1]),end=Math.min(range[2]?Number(range[2]):s.size-1,s.size-1);res.writeHead(206,{'Content-Range':`bytes ${start}-${end}/${s.size}`,'Content-Length':end-start+1});createReadStream(file,{start,end}).pipe(res)}else{res.setHeader('Content-Length',s.size);createReadStream(file).pipe(res)}}catch{res.writeHead(404);res.end()}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const browser=await chromium.launch();const page=await browser.newPage({viewport:{width:1440,height:900}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
const rendered=async(first,count)=>{await page.waitForFunction(({first,count})=>{const c=[...document.querySelectorAll('#pages canvas')];return c.length===count&&c[0].getAttribute('aria-label')===`PDF ${first}쪽`},{first,count},{timeout:60000});};
try{
 await page.goto(`http://127.0.0.1:${server.address().port}/viewer/index.html?book=05&page=25`);await rendered(25,2);
 await mkdir(new URL('test-results/',root),{recursive:true});await page.screenshot({path:new URL('test-results/viewer-landscape.png',root).pathname.replace(/^\/([A-Za-z]:)/,'$1')});
 await page.locator('#next').click();await rendered(27,2);assert.match(page.url(),/page=27/);
 await page.setViewportSize({width:390,height:844});await rendered(27,1);await page.screenshot({path:new URL('test-results/viewer-portrait.png',root).pathname.replace(/^\/([A-Za-z]:)/,'$1')});
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 await page.locator('#next').click();await rendered(28,1);
 await page.locator('#layout').selectOption('spread');await rendered(28,2);
 await page.locator('#page').fill('213');await page.locator('#go').click();await rendered(213,1);assert.equal(await page.locator('#next').isDisabled(),true);
 await page.locator('#page').fill('1');await page.locator('#go').click();await rendered(1,2);assert.equal(await page.locator('#prev').isDisabled(),true);
 await page.setViewportSize({width:844,height:390});await page.locator('#layout').selectOption('auto');await rendered(1,2);
 await page.waitForTimeout(500);const fit=await page.evaluate(()=>{const w=document.querySelector('#canvas-wrap');return w.scrollWidth<=w.clientWidth+1&&w.scrollHeight<=w.clientHeight+1});assert.ok(fit,'Landscape phone fit stays within reading area');
 assert.deepEqual(errors,[]);console.log('Viewer passed: landscape spread, portrait single, manual mode, exact links, navigation, final page, mobile fit, no JS errors');
}finally{await browser.close();await new Promise(r=>server.close(r));}
