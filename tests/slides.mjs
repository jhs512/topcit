import {chromium} from 'playwright';
import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import assert from 'node:assert/strict';

const root=new URL('../',import.meta.url);
const catalog=JSON.parse(await readFile(new URL('slides/catalog.json',root),'utf8'));
assert.equal(catalog.length,6,'Six subject groups are required');
assert.equal(new Set(catalog.map(g=>g.id)).size,6,'Group IDs must be distinct');
for(const group of catalog) assert.equal(group.items.length,10,`${group.id}: ten decks required`);
const items=catalog.flatMap(g=>g.items);
for(const key of ['file','source']) assert.equal(new Set(items.map(i=>i[key])).size,60,`${key}: sixty distinct paths required`);
const readme=await readFile(new URL('README.md',root),'utf8');
const links=[...readme.matchAll(/\]\(([^)]+)\)/g)].map(m=>m[1]);
for(const item of items){
  for(const key of ['file','source']){
    assert.match(item[key],/^[a-z0-9-]+\.(?:html|md)$/);
    assert.ok((await stat(new URL(`slides/${item[key]}`,root))).isFile(),`${item[key]} exists`);
    assert.ok(links.some(link=>new URL(link,'https://jhs512.github.io/topcit/').pathname===`/topcit/slides/${item[key]}`),`README link missing: ${item[key]}`);
  }
}
const decks=[...items.map(i=>i.file),'exam-guide.html'];
const types={html:'text/html; charset=utf-8',mjs:'text/javascript',js:'text/javascript',json:'application/json',css:'text/css'};
const server=createServer(async(req,res)=>{
  try{
    const path=new URL(req.url,'http://localhost').pathname;
    const file=new URL('.'+path,root);
    if(!file.href.startsWith(root.href)) throw Error('Outside workspace');
    res.setHeader('Content-Type',types[file.pathname.split('.').at(-1)]||'text/plain');
    res.end(await readFile(file));
  }catch{res.writeHead(404);res.end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const base=`http://127.0.0.1:${server.address().port}/slides/`;
let browser;
const failures=[];
let checkedSlides=0;
try{
  browser=await chromium.launch({headless:true});
  for(const viewport of [{width:1440,height:900},{width:390,height:844}]){
    const context=await browser.newContext({viewport});
    const page=await context.newPage();
    page.setDefaultTimeout(5000);
    let currentDeck='';
    page.on('pageerror',error=>failures.push(`${viewport.width} ${currentDeck}: pageerror: ${error.message}`));
    for(const file of decks){
      currentDeck=file;
      const label=`${viewport.width} ${file}`;
      try{
        const response=await page.goto(base+file);
        assert.equal(response.status(),200);
        await page.evaluate(()=>document.fonts.ready);
        const count=await page.locator('main section').count();
        assert.ok(count>0,'At least one slide required');
        for(let index=0;index<count;index++){
          assert.equal(await page.locator('main section.active').count(),1,'One active slide');
          assert.equal(await page.locator('#counter').innerText(),`${index+1} / ${count}`);
          assert.equal(await page.locator('#prev').isDisabled(),index===0);
          assert.equal(await page.locator('#next').isDisabled(),index===count-1);
          const bounds=await page.evaluate(()=>{
            const active=document.querySelector('main section.active');
            const rect=active.getBoundingClientRect();
            const nav=document.querySelector('nav').getBoundingClientRect();
            return {text:active.textContent.trim().length,left:rect.left,right:rect.right,bottom:rect.bottom,navTop:nav.top,width:innerWidth,scrollWidth:document.documentElement.scrollWidth};
          });
          assert.ok(bounds.text>0,'Active slide has content');
          if(bounds.scrollWidth>bounds.width+1||bounds.left< -1||bounds.right>bounds.width+1)
            failures.push(`${label} slide ${index+1}: horizontal overflow (${bounds.scrollWidth}px / ${bounds.width}px)`);
          if(viewport.width===1440&&bounds.bottom>bounds.navTop+1)
            failures.push(`${label} slide ${index+1}: bottom ${bounds.bottom.toFixed(1)} exceeds nav top ${bounds.navTop.toFixed(1)}`);
          checkedSlides++;
          if(index<count-1) await page.locator('#next').click();
        }
        if(file==='critical-path.html'){
          for(const [duration,total] of [[3,9],[5,9],[6,10]]){
            await page.locator('#duration').fill(String(duration));
            assert.equal(await page.locator('#total').innerText(),String(total),`C=${duration} total`);
            assert.equal(await page.locator('#days').innerText(),String(duration));
          }
          assert.match(await page.locator('#path').innerText(),/A → C → D/);
        }
        for(let index=count-2;index>=0;index--){
          await page.locator('#prev').click();
          assert.equal(await page.locator('#counter').innerText(),`${index+1} / ${count}`);
        }
        // Keyboard navigation must also work when the page, not a control, has focus.
        if(count>1){
          await page.evaluate(()=>document.activeElement.blur());
          await page.keyboard.press('ArrowRight');
          assert.equal(await page.locator('#counter').innerText(),`2 / ${count}`);
          await page.keyboard.press('ArrowLeft');
          assert.equal(await page.locator('#counter').innerText(),`1 / ${count}`);
        }
      }catch(error){failures.push(`${label}: ${error.message}`);}
    }
    await context.close();
  }
}finally{
  await browser?.close();
  await new Promise(resolve=>server.close(resolve));
}
console.log(`Checked 6 subjects, 60 distinct Markdown/HTML pairs and README links; ${decks.length} decks at two viewports, ${checkedSlides} slide views.`);
assert.equal(failures.length,0,`Slide checks failed:\n${failures.join('\n')}`);
console.log('All slide navigation, runtime, layout and critical-path calculations passed.');
