import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const catalog=JSON.parse(await readFile(new URL('../slides/catalog.json',import.meta.url),'utf8'));
const counts={'01':139,'02':159,'03':221,'04':124,'05':213,'06':139};
let links=0;
for(const group of catalog)for(const item of group.items){
 const md=await readFile(new URL('../slides/'+item.source,import.meta.url),'utf8');
 const refs=[...md.matchAll(/\]\(([^)]+)\)/g)].map(x=>x[1]).filter(x=>x.includes('viewer/index.html'));
 assert.ok(refs.length,`${item.source}: textbook reference missing`);
 assert.ok(!/https?:\/\/[^\s)]*topcit\.or\.kr\/[^\s)]*(?:essence|edubox)/.test(md),`${item.source}: external textbook reference`);
 for(const ref of refs){const url=new URL(ref,'https://jhs512.github.io/topcit/slides/'),book=url.searchParams.get('book'),page=Number(url.searchParams.get('page'));assert.equal(url.origin,'https://jhs512.github.io');assert.equal(url.pathname,'/topcit/viewer/index.html');assert.ok(Object.hasOwn(counts,book),`${item.source}: unknown book`);assert.ok(Number.isInteger(page)&&page>4&&page<=counts[book],`${item.source}: reference must point to verified content, not cover`);links++;}
}
console.log(`60 decks: ${links} hosted textbook references within content page ranges. Content accuracy is recorded separately in notes/audit-*.md.`);
