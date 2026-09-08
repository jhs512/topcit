import {readFile,writeFile} from 'node:fs/promises';
import {AREAS} from '../engine.mjs';
const path=new URL('../data/id-registry.json',import.meta.url);
let registry={};try{registry=JSON.parse(await readFile(path,'utf8'));}catch(e){if(e.code!=='ENOENT')throw e;}
const present=new Set();
for(const area of AREAS){
  const bank=JSON.parse(await readFile(new URL(`../data/${area.id}.json`,import.meta.url),'utf8'));
  for(const q of bank){
    if(present.has(q.id))throw Error(`중복 ID: ${q.id}`);
    present.add(q.id);const old=registry[q.id];
    if(old?.retired)throw Error(`삭제한 ID 재사용 금지: ${q.id}`);
    if(old && (old.area!==q.area || old.revision>q.revision))throw Error(`영역 변경/개정번호 감소 금지: ${q.id}`);
    registry[q.id]={area:q.area,revision:q.revision,retired:false};
  }
}
for(const id of Object.keys(registry))if(!present.has(id))registry[id].retired=true;
await writeFile(path,JSON.stringify(registry,null,2)+'\n');
console.log(`문항 ID 등록부: 현재 ${present.size}, 누적 ${Object.keys(registry).length}`);
