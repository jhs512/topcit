import {KEY,AREAS,decode,stats,start,submit,next,resetArea,reconcile} from './engine.mjs';
import {encodeSnapshot,decodeSnapshot,restore} from './snapshot.mjs';
import {localStore} from './storage.mjs';
const root=document.querySelector('#app');
let bank={},area=null,busy=false,store,mode="quiz";
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const read=()=>store.read();
const change=fn=>store.update(fn);
function error(e){
  let box=document.querySelector('#error');
  if(!box){box=document.createElement('div');box.id='error';box.className='error';box.setAttribute('role','alert');root.prepend(box);}
  box.textContent=`${e.message || '저장하지 못했습니다.'} 기록을 저장할 수 없다면 브라우저 저장공간과 개인정보 설정을 확인해 주세요. 저장되지 않은 답안은 완료로 계산하지 않습니다.`;
}
async function act(fn){if(busy)return;busy=true;try{await fn();}catch(e){error(e);}finally{busy=false;}}
function meter(st){return `<div class="progress-label"><span>완료 <strong>${st.done}</strong> / ${st.total}</span><span>${st.total?Math.round(st.done/st.total*100):0}%</span></div><progress value="${st.done}" max="${st.total||1}" aria-label="완료 문제 비율"></progress><div class="counts"><span>연속 정답 0회 <b>${st.zero}</b></span><span>1회 <b>${st.once}</b></span><span>완료 <b>${st.done}</b></span></div>`;}
function home(){
  area=null;const s=read();const total=AREAS.reduce((n,a)=>n+stats(s,bank[a.id]).done,0);
  root.innerHTML=`<section class="intro"><div class="eyebrow">MOKWON × TOPCIT PRACTICE</div><h1>한 문제씩,<br>확실하게 내 것으로.</h1><p>같은 문제를 서로 다른 출제에서 <strong>두 번 연속</strong> 맞히면 완료됩니다. 틀린 문제는 다시 만나며 익혀 보세요.</p><div class="total"><strong>${total}</strong><span>/ ${Object.values(bank).flat().length}문제 완료</span></div></section><section aria-label="학습영역 선택" class="area-grid">${AREAS.map(a=>{const st=stats(s,bank[a.id]);return `<button class="area-card" data-area="${a.id}" ${st.total?"":"disabled"}><div class="card-top"><span class="book">교재 ${a.number}</span><span>${a.session} · ${bank[a.id].length}문제</span></div><h2>${a.title}</h2><p>${a.description}</p>${meter(st)}<div class="card-action">${!st.total?'준비 중':st.done===st.total?'완료 기록 보기':s.active[a.id]?'이어서 풀기':'학습 시작'} <span>→</span></div></button>`;}).join('')}</section><aside class="guide"><h2>학습 방법</h2><p>답을 제출하면 정답과 해설을 바로 볼 수 있습니다. 완료하지 않은 문제만 무작위로 출제되며, 틀리면 해당 문제의 연속 정답이 0회로 돌아갑니다. 출제 횟수 제한은 없습니다.</p><p>시험의 2개 평가영역을 교재 기준 4개 학습영역으로 나누었습니다. 교사에게 기록을 전송하지 않습니다. 다른 기기에서 이어가려면 진도 링크를 만들어 본인에게 보내세요.</p><button id="share" class="text-button">다른 기기에서 이어가기</button> · <button id="export" class="text-button">내 응답기록 내려받기</button></aside>`;
  document.querySelector('#share').onclick=()=>act(showShare);
  root.querySelectorAll('[data-area]').forEach(b=>b.onclick=()=>act(()=>openArea(b.dataset.area)));
  document.querySelector('#export').onclick=()=>act(async()=>{const blob=new Blob([JSON.stringify(read(),null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='topcit-learning-record.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
}
async function openArea(id){area=id;mode="quiz";await change(s=>start(s,id,bank[id],crypto.randomUUID()));renderQuestion();}
function renderQuestion(){
  const s=read(),meta=AREAS.find(a=>a.id===area),questions=bank[area],st=stats(s,questions),a=s.active[area];
  root.innerHTML=`<nav class="quiz-nav"><button id="home" class="text-button">← 학습영역</button><span>교재 ${meta.number} · ${meta.session}</span></nav><section class="quiz-heading"><h1>${meta.title}</h1>${meter(st)}</section><div class="mode-tabs" role="group" aria-label="보기 모드"><button data-mode="quiz">문제풀이</button><button data-mode="all">전체보기</button><button data-mode="concept">개념모드</button></div><div id="question"></div><div class="bottom-actions"><button class="text-button" id="reset">이 영역 처음부터 다시 학습</button></div>`;
  document.querySelector('#home').onclick=()=>act(async()=>home());
  document.querySelector('#reset').onclick=()=>{if(confirm(`${meta.title}의 응답기록과 완료 상태를 모두 지우고 다시 시작할까요?`))act(async()=>{await change(s=>resetArea(s,area,questions));await openArea(area);});};
  const panel=document.querySelector('#question');
  document.querySelectorAll('[data-mode]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.mode===mode));b.onclick=()=>{mode=b.dataset.mode;renderQuestion();};});
  if(mode!=='quiz'){renderReading(panel,questions);return;}
  if(!a&&st.done<st.total){panel.innerHTML='<section class="complete"><h2>진도가 변경되었습니다</h2><p>다른 탭의 변경을 반영했습니다.</p><button id="resume" class="primary">문제 이어서 풀기</button></section>';document.querySelector('#resume').onclick=()=>act(()=>openArea(area));return;}
  if(!a){panel.innerHTML=`<section class="complete"><div class="completion-mark">✓</div><h2>${st.total}문제, 모두 익혔어요.</h2><p>각 문제를 두 번 연속 맞혔습니다.<br>다른 영역을 이어서 학습하거나 이 영역을 다시 시작해 보세요.</p><button id="other" class="primary">다른 영역 선택</button></section>`;document.querySelector('#other').onclick=()=>home();return;}
  const q=questions.find(q=>q.id===a.questionId);
  if(!q)throw Error('문항이 변경되었습니다. 이 영역을 초기화해 주세요.');
  panel.innerHTML=`<section class="question-card"><div class="question-meta"><span>${esc(q.topic)}</span><span>${esc(q.id)} · ${s.progress[q.id]?.streak||0}/2회</span></div><h2 id="prompt">${esc(q.prompt)}</h2><form id="answer-form"><fieldset ${a.submitted?'disabled':''}><legend class="sr-only">정답 하나를 선택하세요</legend>${a.order.map((index,i)=>`<label class="option ${a.submitted&&index===q.answer?'correct':''} ${a.submitted&&index===a.choice&& !a.correct?'wrong':''}"><input type="radio" name="answer" value="${index}" ${a.choice===index?'checked':''}><span class="option-number">${i+1}</span><span>${esc(q.options[index])}${a.submitted&&index===q.answer?' <b class="answer-tag">정답</b>':''}${a.submitted&&index===a.choice&&!a.correct?' <b class="answer-tag">내 선택</b>':''}</span></label>`).join('')}</fieldset>${a.submitted?'':'<button type="submit" class="primary" id="submit" disabled>답안 제출</button>'}</form>${a.submitted?`<section class="feedback" tabindex="-1" aria-label="채점 결과"><div class="result ${a.correct?'':'incorrect'}">${a.correct?(a.streak===2?'✓ 두 번 연속 정답 · 완료!':'✓ 정답입니다. 다음 출제에서도 맞히면 완료!'):'다시 익혀 볼까요? 연속 정답 0회'}</div><h3>정답과 해설</h3><p><strong>${esc(q.options[q.answer])}</strong></p><p>${esc(q.explanation)}</p><a href="${esc(q.source.url)}" target="_blank" rel="noopener">참고: ${esc(q.source.section)} ↗</a><button id="next" class="primary">${st.done===st.total?'완료 확인':'다음 랜덤 문제'} →</button></section>`:''}</section>`;
  if(!a.submitted){const form=document.querySelector('#answer-form');form.onchange=()=>{document.querySelector('#submit').disabled=false;};form.onsubmit=e=>{e.preventDefault();const selected=new FormData(form).get('answer');if(selected===null)return;act(async()=>{await change(s=>submit(s,area,a.token,Number(selected),questions));renderQuestion();document.querySelector('.feedback')?.focus();});};}
  else document.querySelector('#next').onclick=()=>act(async()=>{await change(s=>{next(s,area,a.token);start(s,area,questions,crypto.randomUUID());});renderQuestion();document.querySelector('#prompt')?.scrollIntoView({block:'start'});});
}
window.addEventListener('storage',e=>{if(e.key===KEY){try{area?renderQuestion():home();}catch(e){error(e);}}});
try{
  const results=await Promise.all(AREAS.map(async a=>{const r=await fetch(`./data/${a.id}.json`,{cache:"no-cache"});if(r.status===404)return [a.id,[]];if(!r.ok)throw Error('문제를 불러오지 못했습니다. 새로고침해 주세요.');return [a.id,await r.json()];}));
  bank=Object.fromEntries(results);store=localStore(bank);read();home();
  await consumeImportHash();
}catch(e){root.innerHTML='<h1>학습을 시작할 수 없습니다</h1><p>연결 상태를 확인한 뒤 새로고침해 주세요. 기존 저장 기록은 지우지 않았습니다.</p>';error(e);}

function dialog(title,html){
  document.querySelector('dialog')?.remove();
  const d=document.createElement('dialog');d.innerHTML=`<h2>${title}</h2>${html}<button class="text-button" id="close-dialog">닫기</button>`;document.body.append(d);d.querySelector('#close-dialog').onclick=()=>d.close();d.addEventListener('close',()=>d.remove());d.showModal();return d;
}
async function showShare(){
  const encoded=await encodeSnapshot(read());const url=new URL(location.href);url.hash='resume='+encoded;
  const d=dialog('다른 기기에서 이어가기',`<p>현재 진도를 담은 링크입니다. 복사해서 본인 카카오톡 등에 보내고 다른 기기에서 열어 주세요.</p><p class="subtle">이후 학습은 자동으로 동기화되지 않습니다. 최신 진도를 옮기려면 링크를 다시 만드세요. 링크를 가진 사람은 이 진도를 가져올 수 있습니다. 전체 응답 내역은 포함하지 않습니다.</p><label for="resume-url">이어가기 링크</label><textarea id="resume-url" readonly rows="4"></textarea><button class="primary" id="copy-link">링크 복사</button><p id="copy-status" role="status"></p>`);
  d.querySelector('textarea').value=url.href;
  d.querySelector('#copy-link').onclick=async()=>{try{await navigator.clipboard.writeText(url.href);d.querySelector('#copy-status').textContent='복사했습니다. 다른 기기에서 링크를 열어 주세요.';}catch{const t=d.querySelector('textarea');t.focus();t.select();d.querySelector('#copy-status').textContent='자동 복사를 사용할 수 없습니다. 선택된 링크를 길게 누르거나 Ctrl+C로 복사하세요.';}};
}
async function showImport(encoded){
  const data=await decodeSnapshot(encoded),incoming=restore(data,bank),existing=read();
  const summary=s=>AREAS.map(a=>{const st=stats(s,bank[a.id]);return `<tr><th>${a.title}</th><td>${st.done} / ${st.total}</td><td>${st.once}</td></tr>`;}).join('');
  const d=dialog('이 진도로 이어갈까요?',`<p>링크를 만든 시점의 진도입니다. 가져오기를 선택하면 현재 기기의 진도와 응답 내역을 교체합니다. 두 기록을 합산하지 않습니다.</p><h3>가져올 진도</h3><table><thead><tr><th>영역</th><th>완료</th><th>1회 정답</th></tr></thead><tbody>${summary(incoming)}</tbody></table><h3>현재 기기</h3><table><thead><tr><th>영역</th><th>완료</th><th>1회 정답</th></tr></thead><tbody>${summary(existing)}</tbody></table><p class="subtle">삭제되거나 개정된 문항의 이전 진도는 적용하지 않습니다. 기존 기록을 보관하려면 닫은 뒤 응답기록을 내려받으세요.</p><button class="primary" id="import-confirm">가져온 진도로 교체</button><p role="alert" id="import-error"></p>`);
  const baseline=JSON.stringify(existing);
  d.querySelector('#import-confirm').onclick=()=>act(async()=>{try{await change(s=>{if(JSON.stringify(s)!==baseline)throw Error('다른 탭에서 진도가 변경되었습니다. 창을 닫고 링크를 다시 열어 비교해 주세요.');Object.keys(s).forEach(k=>delete s[k]);Object.assign(s,incoming);});d.close();home();}catch(e){d.querySelector('#import-error').textContent=e.message;}});
}

function renderReading(panel,questions){
  const concept=mode==='concept';
  panel.innerHTML=`<div class="reading-intro"><h2>${concept?'정답과 해설로 개념 익히기':'전체 문제 살펴보기'}</h2><p>${concept?'정답과 추가 설명을 처음부터 펼쳐 보여 줍니다.':'JSON에 저장된 순서대로 모든 문제와 보기를 보여 줍니다. 정답은 개념모드에서 확인하세요.'} 읽기 모드는 시도나 진도를 기록하지 않습니다.</p><label for="jump">문항 바로가기</label> <select id="jump"><option value="">번호 선택</option>${questions.map((q,i)=>`<option value="read-${q.id}">${i+1}번 · ${esc(q.topic)}</option>`).join('')}</select></div><div class="reading-list">${questions.map((q,i)=>`<article class="question-card" id="read-${q.id}"><div class="question-meta"><span>${i+1}번 · ${esc(q.topic)}</span><span>${esc(q.id)}</span></div><h2>${esc(q.prompt)}</h2><ol class="reading-options">${q.options.map((o,index)=>`<li class="${concept&&index===q.answer?'reading-correct':''}">${esc(o)}${concept&&index===q.answer?' <strong>✓ 정답</strong>':''}</li>`).join('')}</ol>${concept?`<section class="reading-explanation"><h3>정답과 추가 설명</h3><p><strong>${esc(q.options[q.answer])}</strong></p><p>${esc(q.explanation)}</p><a href="${esc(q.source.url)}" target="_blank" rel="noopener">참고: ${esc(q.source.section)} ↗</a></section>`:''}</article>`).join('')}</div>`;
  document.querySelector('#jump').onchange=e=>{if(e.target.value)document.getElementById(e.target.value).scrollIntoView({block:'start'});};
}

async function consumeImportHash(){
  if(!location.hash.startsWith('#resume='))return;
  const encoded=location.hash.slice(8);history.replaceState(null,'',location.pathname+location.search);
  try{await showImport(encoded);}catch(e){error(e);}
}
window.addEventListener('hashchange',()=>{if(store)act(consumeImportHash);});
