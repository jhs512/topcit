import {fresh,reconcile} from './engine.mjs';
export const MAX_ENCODED=24000,MAX_DECODED=100000;
const safeId=/^[a-z][a-z0-9-]{0,63}$/;
export function snapshot(s){
  return {v:1,p:Object.entries(s.progress).filter(([,p])=>p.streak>0).map(([id,p])=>[id,p.revision,p.streak]).sort((a,b)=>a[0].localeCompare(b[0]))};
}
export function validateSnapshot(data){
  if(!data || data.v!==1 || !Array.isArray(data.p) || data.p.length>4000)throw Error('지원하지 않거나 손상된 이어가기 링크입니다.');
  const ids=new Set();
  for(const row of data.p){
    if(!Array.isArray(row)||row.length!==3)throw Error('잘못된 진도 형식입니다.');
    const [id,rev,streak]=row;
    if(typeof id!=='string'||!safeId.test(id)||ids.has(id)||!Number.isSafeInteger(rev)||rev<1||rev>1000000||![1,2].includes(streak))throw Error('잘못된 문항 진도입니다.');
    ids.add(id);
  }
  return data;
}
export function restore(data,bank){
  validateSnapshot(data);const s=fresh();
  for(const [id,revision,streak] of data.p)s.progress[id]={revision,streak};
  return reconcile(s,bank);
}
async function collect(stream,limit){
  const reader=stream.getReader(),chunks=[];let size=0;
  try{while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>limit)throw Error('이어가기 링크의 데이터가 너무 큽니다.');chunks.push(value);}}
  catch(e){await reader.cancel().catch(()=>{});throw e;}
  const out=new Uint8Array(size);let offset=0;for(const chunk of chunks){out.set(chunk,offset);offset+=chunk.length;}return out;
}
export async function encodeSnapshot(s){
  const json=JSON.stringify(validateSnapshot(snapshot(s)));
  const bytes=await collect(new Blob([json]).stream().pipeThrough(new CompressionStream('gzip')),MAX_ENCODED);
  const encoded=btoa(String.fromCharCode(...bytes)).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'');
  if(encoded.length>MAX_ENCODED)throw Error('진도 링크가 너무 큽니다.');
  return 'v1.'+encoded;
}
export async function decodeSnapshot(encoded){
  if(typeof encoded!=='string'||encoded.length>MAX_ENCODED+3||!/^v1\.[A-Za-z0-9_-]+$/.test(encoded))throw Error('잘못되었거나 지원하지 않는 이어가기 링크입니다.');
  try{
    const text=encoded.slice(3).replaceAll('-','+').replaceAll('_','/');
    const bytes=Uint8Array.from(atob(text),c=>c.charCodeAt(0));
    const plain=await collect(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip')),MAX_DECODED);
    return validateSnapshot(JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(plain)));
  }catch(e){throw Error(`이어가기 링크를 읽을 수 없습니다. ${e.message}`);}
}
