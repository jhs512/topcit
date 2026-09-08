export const KEY = 'topcit-practice-v1';
export const AREAS = [
  {id:'architecture',title:'시스템아키텍처',number:'03',description:'운영체제 · 네트워크 · 시스템 설계',session:'2회차'},
  {id:'security',title:'정보보안',number:'04',description:'보안 원리 · 위협과 대응 · 접근 통제',session:'3회차'},
  {id:'business',title:'IT비즈니스와 윤리',number:'05',description:'비즈니스 전략 · IT 활용 · 직업윤리',session:'1회차'},
  {id:'management',title:'프로젝트 관리와 소통',number:'06',description:'범위 · 일정 · 위험 · 커뮤니케이션',session:'1회차'},
];
export const fresh = () => ({version:1,progress:{},attempts:[],active:{},last:{}});
export function decode(raw) {
  if (!raw) return fresh();
  const s=JSON.parse(raw);
  if(s.version!==1 || !s.progress || !Array.isArray(s.attempts) || !s.active || !s.last) throw Error('저장된 기록 형식을 읽을 수 없습니다.');
  for(const p of Object.values(s.progress)) if(!Number.isInteger(p.streak)||p.streak<0||p.streak>2) throw Error('학습기록이 손상되었습니다.');
  return s;
}
// Reconcile by stable ID and content revision, never by array position.
export function reconcile(s,bank) {
  const all=Object.values(bank).flat(),byId=new Map(all.map(q=>[q.id,q]));
  for(const [id,p] of Object.entries(s.progress)){
    const q=byId.get(id);
    if(!q || p.revision!==q.revision)delete s.progress[id];
  }
  for(const [area,a] of Object.entries(s.active)){
    const q=byId.get(a.questionId);
    if(!q || q.area!==area || a.revision!==q.revision || !Array.isArray(a.order) || [...a.order].sort().join()!=='0,1,2,3')delete s.active[area];
  }
  return s;
}
export function shuffle(values,random=Math.random) {
  const a=[...values];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
export function stats(s,questions) {
  const done=questions.filter(q=>s.progress[q.id]?.streak===2).length;
  const once=questions.filter(q=>s.progress[q.id]?.streak===1).length;
  return {total:questions.length,done,once,zero:questions.length-done-once};
}
export function start(s,area,questions,token,random=Math.random) {
  const current=s.active[area];
  if(current) return current;
  let pool=questions.filter(q=>(s.progress[q.id]?.streak||0)<2);
  if(!pool.length) return null;
  if(pool.length>1) pool=pool.filter(q=>q.id!==s.last[area]);
  const q=pool[Math.floor(random()*pool.length)];
  const a={token,questionId:q.id,revision:q.revision,order:shuffle([0,1,2,3],random),submitted:false};
  s.active[area]=a;
  return a;
}
export function submit(s,area,token,choice,questions,now=new Date().toISOString()) {
  const a=s.active[area];
  if(!a || a.token!==token || a.submitted) return false;
  const q=questions.find(q=>q.id===a.questionId);
  if(!q || q.revision!==a.revision || !Number.isInteger(choice) || choice<0 || choice>3) throw Error('문항이 변경되었거나 답안이 올바르지 않습니다. 새 문제를 열어 주세요.');
  const correct=choice===q.answer;
  const streak=correct ? Math.min(2,(s.progress[q.id]?.streak||0)+1) : 0;
  s.progress[q.id]={streak,revision:q.revision};
  Object.assign(a,{submitted:true,choice,correct,streak});
  s.attempts.push({token,area,questionId:q.id,revision:q.revision,choice,correct,streak,at:now});
  s.last[area]=q.id;
  return true;
}
export function next(s,area,token) {
  if(s.active[area]?.token===token && s.active[area].submitted) delete s.active[area];
}
export function resetArea(s,area,questions) {
  for(const q of questions) delete s.progress[q.id];
  s.attempts=s.attempts.filter(a=>a.area!==area);
  delete s.active[area]; delete s.last[area];
}
