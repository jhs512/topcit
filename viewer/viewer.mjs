import * as pdfjs from './vendor/pdf.mjs';
pdfjs.GlobalWorkerOptions.workerSrc=new URL('./vendor/pdf.worker.mjs',import.meta.url).href;
const books={
 '01':['소프트웨어 개발','01_소프트웨어_개발.pdf',139],
 '02':['데이터 이해와 활용','02_데이터_이해와활용.pdf',159],
 '03':['시스템아키텍처','03_시스템_아키텍처이해와 활용.pdf',221],
 '04':['정보보안','04_정보보안_이해와활용.pdf',124],
 '05':['IT비즈니스와 윤리','05_IT_비즈니스와윤리.pdf',213],
 '06':['프로젝트 관리와 소통','06_테크니컬_커뮤니케이션과프로젝트 관리.pdf',139]
};
const $=id=>document.getElementById(id),params=new URL(location.href).searchParams;
const book=Object.hasOwn(books,params.get('book'))?params.get('book'):'05';
const localFiles={'01':'01_소프트웨어_개발.pdf','02':'02_데이터_이해와활용.pdf','03':'03_시스템아키텍처_이해와활용.pdf','04':'04_정보보안_이해와활용.pdf','05':'05_IT비즈니스와윤리.pdf','06':'06_프로젝트관리_및_테크니컬커뮤니케이션.pdf'};
const meta=books[book];let current=Math.max(1,parseInt(params.get('page')||'1',10)||1),pdf=null,rendering=false;
const initial=current;
$('title').textContent=`교재 ${book} · ${meta[0]}`;
$('reference').textContent=book==='05'&&initial===25?'참고 위치: IT와 비즈니스의 연계 · 인쇄 23쪽 / PDF 25쪽':'PDF 페이지 번호는 책에 인쇄된 쪽수와 다를 수 있습니다.';
$('download').href=localFiles[book]?'../sources/'+encodeURIComponent(localFiles[book]):'https://www.topcit.or.kr/upload/edubox/essence/pdf/ko/'+encodeURIComponent(meta[1]);
function db(){return new Promise((resolve,reject)=>{const r=indexedDB.open('topcit-textbook-pdfs',1);r.onupgradeneeded=()=>r.result.createObjectStore('books');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}
async function stored(action,value){const d=await db();return new Promise((resolve,reject)=>{const tx=d.transaction('books',action==='get'?'readonly':'readwrite'),s=tx.objectStore('books');const r=action==='get'?s.get(book):action==='put'?s.put(value,book):s.delete(book);let result;r.onsuccess=()=>result=r.result;tx.oncomplete=()=>{d.close();resolve(result)};tx.onerror=()=>{d.close();reject(tx.error)};tx.onabort=()=>{d.close();reject(tx.error||Error('보관 실패'))};});}
function message(s){$('status').textContent=s;}
function controls(){for(const id of ['go','page','zoom','replace','forget'])$(id).disabled=rendering;$('prev').disabled=rendering||current<=1;$('next').disabled=rendering||current>=pdf.numPages;}
async function render(){if(!pdf||rendering)return;rendering=true;controls();message('페이지를 표시하고 있습니다.');try{current=Math.max(1,Math.min(pdf.numPages,current));const page=await pdf.getPage(current),base=page.getViewport({scale:1});const fit=Math.max(.2,($('canvas-wrap').clientWidth-18)/base.width);const scale=$('zoom').value==='fit'?fit:Number($('zoom').value);const viewport=page.getViewport({scale});const density=Math.min(devicePixelRatio||1,2);const canvas=$('canvas');canvas.width=Math.floor(viewport.width*density);canvas.height=Math.floor(viewport.height*density);canvas.style.width=`${viewport.width}px`;canvas.style.height=`${viewport.height}px`;await page.render({canvasContext:canvas.getContext('2d'),viewport,transform:density===1?null:[density,0,0,density,0,0]}).promise;$('page').value=current;$('count').textContent=`/ ${pdf.numPages}`;const u=new URL(location.href);u.searchParams.set('book',book);u.searchParams.set('page',current);history.replaceState(null,'',u);message(`PDF ${current}쪽을 표시했습니다.`);}catch(e){message('페이지를 표시하지 못했습니다. 다른 페이지를 선택하거나 PDF를 다시 선택하세요.');}finally{rendering=false;controls();}}
async function load(file,save){message('PDF를 읽고 있습니다. 큰 교재는 잠시 걸릴 수 있습니다.');$('file').disabled=true;let doc;try{doc=await pdfjs.getDocument({...(typeof file==='string'?{url:file,disableAutoFetch:true,disableStream:true}:{data:new Uint8Array(await file.arrayBuffer())}),cMapUrl:new URL('./vendor/cmaps/',import.meta.url).href,cMapPacked:true,standardFontDataUrl:new URL('./vendor/standard_fonts/',import.meta.url).href,wasmUrl:new URL('./vendor/wasm/',import.meta.url).href,isEvalSupported:false}).promise;if(meta[2]&&doc.numPages!==meta[2]){await doc.destroy();throw Error('교재 쪽수가 다릅니다. 이 화면에 표시된 공식 교재 PDF를 선택하세요.');}if(pdf)await pdf.destroy();pdf=doc;$('page').max=pdf.numPages;$('setup').hidden=true;$('reader').hidden=false;current=Math.min(initial,pdf.numPages);await render();if(save){try{await stored('put',file);message(`PDF ${current}쪽을 표시했습니다. 이 브라우저에 교재를 보관했습니다.`);}catch{message(`PDF ${current}쪽을 표시했습니다. 저장공간 문제로 보관하지 못해 다음에는 파일을 다시 선택해야 합니다.`);}}}catch(e){$('setup').hidden=false;message(e.message?.startsWith('교재 쪽수')?e.message:'PDF를 열지 못했습니다. 암호가 없는 올바른 교재 PDF를 선택하세요.');}finally{$('file').disabled=false;}}
$('file').onchange=()=>{const f=$('file').files[0];if(f)load(f,true);};
$('prev').onclick=()=>{current--;render()};$('next').onclick=()=>{current++;render()};$('go').onclick=()=>{current=parseInt($('page').value,10)||1;render()};$('page').onkeydown=e=>{if(e.key==='Enter')$('go').click()};$('zoom').onchange=render;
$('replace').onclick=()=>{$('setup').hidden=false;$('file').value='';$('file').focus()};
$('forget').onclick=async()=>{try{await stored('delete');message('이 브라우저에 보관한 교재를 제거했습니다. 현재 열어둔 PDF는 탭을 닫을 때까지 볼 수 있습니다.');}catch{message('보관 해제에 실패했습니다. 브라우저의 사이트 데이터 설정을 확인하세요.')}};
let timer;window.addEventListener('resize',()=>{clearTimeout(timer);timer=setTimeout(()=>{if($('zoom').value==='fit')render()},200)});
try{if(localFiles[book]){$('setup').hidden=true;await load('../sources/'+encodeURIComponent(localFiles[book]),false);}else{const file=await stored('get');if(file)await load(file,false);else message('관련 쪽을 열려면 교재 PDF를 선택하세요.');}}catch{message('브라우저 보관 기능을 사용할 수 없습니다. PDF를 선택하면 이번 탭에서 읽을 수 있습니다.');}
