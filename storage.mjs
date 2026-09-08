import {KEY,decode,reconcile} from './engine.mjs';
// UI depends on this adapter, so a future account-backed store can replace it.
export function localStore(bank,storage=globalThis.localStorage,locks=globalThis.navigator?.locks){
  const read=()=>reconcile(decode(storage.getItem(KEY)),bank,{rejectNewer:true});
  const update=async fn=>{
    if(!locks)throw Error('안전하게 기록을 저장하려면 최신 Chrome, Safari, Edge 또는 Firefox로 열어 주세요.');
    return locks.request(KEY,()=>{
      const state=read(),result=fn(state);
      storage.setItem(KEY,JSON.stringify(state));
      return result;
    });
  };
  return {read,update};
}
