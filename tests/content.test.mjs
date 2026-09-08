import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {AREAS} from '../engine.mjs';
test('all four banks have 100 unique, valid sourced questions',async()=>{
  const ids=new Set(),prompts=new Set();
  for(const area of AREAS){
    const bank=JSON.parse(await readFile(new URL(`../data/${area.id}.json`,import.meta.url),'utf8'));
    assert.equal(bank.length,100,area.id);
    for(const q of bank){
      assert.match(q.id,/^[a-z][a-z0-9-]{0,63}$/);assert.ok(!ids.has(q.id),q.id);ids.add(q.id);
      assert.equal(q.area,area.id);assert.ok(Number.isInteger(q.revision)&&q.revision>0);
      assert.ok(q.prompt.length>=15,q.id);assert.ok(!prompts.has(q.prompt),q.id);prompts.add(q.prompt);
      assert.equal(q.options.length,4,q.id);assert.equal(new Set(q.options).size,4,q.id);
      assert.ok(q.options.every(o=>typeof o==='string'&&o.trim().length>0),q.id);
      assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,q.id);
      assert.ok(q.explanation.length>=25,q.id);assert.ok(q.topic.length>0,q.id);
      assert.match(q.source.url,/^https:\/\/(www\.)?topcit\.or\.kr\//);assert.ok(q.source.section.length>0,q.id);
    }
  }
  assert.equal(ids.size,400);
});
