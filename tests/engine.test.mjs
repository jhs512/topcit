import {test} from 'node:test';
import assert from 'node:assert/strict';
import {fresh,start,submit,next,stats,reconcile,resetArea,decode} from '../engine.mjs';
import {encodeSnapshot,decodeSnapshot,restore,MAX_ENCODED} from '../snapshot.mjs';
import {localStore} from '../storage.mjs';
const q=(id,revision=1)=>({id,revision,area:'architecture',answer:1});
const qs=[q('arch-001'),q('arch-002')];
function answer(s,id,choice,token){const pool=[qs.find(q=>q.id===id)];start(s,'architecture',pool,token,()=>0);const ok=submit(s,'architecture',token,choice,qs);next(s,'architecture',token);return ok;}
test('streak belongs to each question; wrong resets; two correct retires',()=>{
  const s=fresh();answer(s,'arch-001',1,'1');answer(s,'arch-002',1,'2');
  assert.equal(s.progress['arch-001'].streak,1);
  answer(s,'arch-001',0,'3');assert.equal(s.progress['arch-001'].streak,0);
  answer(s,'arch-001',1,'4');answer(s,'arch-002',0,'5');answer(s,'arch-001',1,'6');
  assert.equal(s.progress['arch-001'].streak,2);
  for(let i=0;i<20;i++){const a=start(s,'architecture',qs,'t'+i);assert.equal(a.questionId,'arch-002');submit(s,'architecture',a.token,0,qs);next(s,'architecture',a.token);}
  assert.equal(s.attempts.length,26); // no five-attempt cap
});
test('duplicate submit, stale token, and reload do not count twice',()=>{
  let s=fresh();const a=start(s,'architecture',qs,'unique',()=>0);
  assert.equal(submit(s,'architecture','stale',1,qs),false);
  submit(s,'architecture',a.token,1,qs);s=decode(JSON.stringify(s));
  assert.equal(start(s,'architecture',qs,'new').token,'unique');
  assert.equal(submit(s,'architecture','unique',1,qs),false);
  assert.equal(s.attempts.length,1);assert.equal(s.progress[a.questionId].streak,1);
});
test('avoid immediate repeat when other unfinished question exists',()=>{
  const s=fresh();answer(s,'arch-001',1,'1');assert.equal(start(s,'architecture',qs,'2',()=>0).questionId,'arch-002');
});
test('all complete, explicit reset, new question after completion',()=>{
  const s=fresh();for(const q of qs)s.progress[q.id]={revision:1,streak:2};
  assert.equal(start(s,'architecture',qs,'x'),null);
  const added=[...qs,q('arch-003')];reconcile(s,{architecture:added});
  assert.equal(start(s,'architecture',added,'y').questionId,'arch-003');
  resetArea(s,'architecture',added);assert.deepEqual(stats(s,added),{total:3,done:0,once:0,zero:3});
});
test('revision changes clear only affected progress/current answer; deletion excludes',()=>{
  const s=fresh();answer(s,'arch-002',1,'a');start(s,'architecture',[qs[0]],'b');submit(s,'architecture','b',1,qs);
  reconcile(s,{architecture:[q('arch-001',2),qs[1]]});
  assert.equal(s.progress['arch-001'],undefined);assert.equal(s.active.architecture,undefined);
  assert.equal(s.progress['arch-002'].streak,1);
  assert.equal(submit(s,'architecture','b',1,qs),false);
  reconcile(s,{architecture:[qs[1]]});assert.equal(stats(s,[qs[1]]).total,1);
});
test('same revision typo/explanation and reordering preserve progress',()=>{
  const s=fresh();answer(s,'arch-001',1,'a');reconcile(s,{architecture:[qs[1],{...qs[0],explanation:'reworded'}]});
  assert.equal(s.progress['arch-001'].streak,1);
});
test('store does not claim success when persistence fails',async()=>{
  const storage={getItem:()=>null,setItem:()=>{throw Error('quota');}},locks={request:async(_,fn)=>fn()};
  const store=localStore({architecture:qs},storage,locks);
  await assert.rejects(store.update(s=>start(s,'architecture',qs,'x')),/quota/);
  assert.equal(store.read().attempts.length,0);
});
test('old tab cannot overwrite progress from newer question revision',async()=>{
  const s=fresh();s.progress['arch-001']={revision:2,streak:1};
  let saved=JSON.stringify(s);
  const store=localStore({architecture:qs},{getItem:()=>saved,setItem:v=>{saved=v;}},{request:async(_,fn)=>fn()});
  await assert.rejects(store.update(s=>start(s,'architecture',qs,'x')),/업데이트/);
  assert.equal(JSON.parse(saved).progress['arch-001'].revision,2);
});
test('snapshot roundtrip is a replacement, not accumulated streak or attempt log',async()=>{
  const s=fresh();answer(s,'arch-001',1,'x');
  const encoded=await encodeSnapshot(s),data=await decodeSnapshot(encoded);
  const imported=restore(data,{architecture:qs});assert.equal(imported.progress['arch-001'].streak,1);
  assert.equal(imported.attempts.length,0);assert.deepEqual(imported.active,{});
  assert.deepEqual(restore(data,{architecture:qs}),imported);
  assert.deepEqual(restore(data,{architecture:[q('arch-001',2)]}).progress,{});
});
test('malformed, oversized, duplicate, unsafe and unsupported snapshot inputs rejected',async()=>{
  for(const value of ['bad','v2.abc','v1.!!!!','v1.'+'a'.repeat(MAX_ENCODED+1),'v1.e30'])await assert.rejects(decodeSnapshot(value));
  for(const data of [{v:2,p:[]},{v:1,p:[['__proto__',1,2]]},{v:1,p:[['arch-001',1,3]]},{v:1,p:[['arch-001',1,1],['arch-001',1,2]]}])assert.throws(()=>restore(data,{architecture:qs}));
  const bomb=new Blob([' '.repeat(100001)]).stream().pipeThrough(new CompressionStream('gzip'));
  const bytes=new Uint8Array(await new Response(bomb).arrayBuffer());
  await assert.rejects(decodeSnapshot('v1.'+Buffer.from(bytes).toString('base64url')),/너무 큽니다/);
});
test('400-question populated snapshot fits a measured share URL',async()=>{
  const s=fresh();for(let i=0;i<400;i++)s.progress[`test-${i.toString().padStart(3,'0')}`]={revision:12345,streak:i%2+1};
  const encoded=await encodeSnapshot(s);console.log('400-item snapshot URL length:',encoded.length+50);
  assert.ok(encoded.length<MAX_ENCODED);assert.equal((await decodeSnapshot(encoded)).p.length,400);
});
