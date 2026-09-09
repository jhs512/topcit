import * as pdfjs from './vendor/pdf.mjs';
pdfjs.GlobalWorkerOptions.workerSrc=new URL('./vendor/pdf.worker.mjs',import.meta.url).href;
const books={
 '01':['소프트웨어 개발','01_소프트웨어_개발.pdf',139],
 '02':['데이터 이해와 활용','02_데이터_이해와활용.pdf',159],
 '03':['시스템아키텍처','03_시스템아키텍처_이해와활용.pdf',221],
 '04':['정보보안','04_정보보안_이해와활용.pdf',124],
 '05':['IT비즈니스와 윤리','05_IT비즈니스와윤리.pdf',213],
 '06':['프로젝트 관리와 소통','06_프로젝트관리_및_테크니컬커뮤니케이션.pdf',139]
};
const $=id=>document.getElementById(id),params=new URL(location.href).searchParams;
const book=Object.hasOwn(books,params.get('book'))?params.get('book'):'05',meta=books[book];
let current=Math.max(1,parseInt(params.get('page')||'1',10)||1),pdf=null,revision=0,activeTasks=[],statusTimer;
$('title').textContent=meta[0];document.title=`${meta[0]} · TOPCIT 교재`;
const pdfUrl='../sources/'+encodeURIComponent(meta[1]);$('download').href=pdfUrl;
function spread(){return $('layout').value==='spread'||($('layout').value==='auto'&&matchMedia('(orientation: landscape)').matches)}
function message(value,temporary=false){clearTimeout(statusTimer);$('status').textContent=value;if(temporary)statusTimer=setTimeout(()=>{$('status').textContent=''},1800)}
function controls(){if(!pdf)return;$('prev').disabled=current<=1;$('next').disabled=current+(spread()?1:0)>=pdf.numPages;$('page').value=current;$('count').textContent=`/ ${pdf.numPages}`}
async function render(){if(!pdf)return;const version=++revision;for(const task of activeTasks)task.cancel();activeTasks=[];controls();message('페이지를 불러오는 중입니다.');try{
 const numbers=[current];if(spread()&&current<pdf.numPages)numbers.push(current+1);
 const pages=await Promise.all(numbers.map(n=>pdf.getPage(n)));if(version!==revision)return;
 const wrap=$('canvas-wrap'),styles=getComputedStyle(wrap),gap=innerWidth<=700?10:16;
 const width=wrap.clientWidth-parseFloat(styles.paddingLeft)-parseFloat(styles.paddingRight);
 const height=wrap.clientHeight-parseFloat(styles.paddingTop)-parseFloat(styles.paddingBottom)-24;
 const bases=pages.map(p=>p.getViewport({scale:1}));
 const widthScale=(width-gap*(pages.length-1))/bases.reduce((s,v)=>s+v.width,0);
 const fitScale=Math.min(widthScale,height/Math.max(...bases.map(v=>v.height)));
 const zoom=$('zoom').value,scale=Math.max(.08,zoom==='fit'?fitScale:zoom==='width'?widthScale:Number(zoom));
 const fragment=document.createDocumentFragment(),tasks=[];
 pages.forEach((page,i)=>{const viewport=page.getViewport({scale}),density=Math.min(devicePixelRatio||1,2),figure=document.createElement('figure'),canvas=document.createElement('canvas'),caption=document.createElement('figcaption');figure.className='sheet';canvas.setAttribute('aria-label',`PDF ${numbers[i]}쪽`);canvas.width=Math.ceil(viewport.width*density);canvas.height=Math.ceil(viewport.height*density);canvas.style.width=`${viewport.width}px`;canvas.style.height=`${viewport.height}px`;caption.textContent=`PDF ${numbers[i]}`;figure.append(canvas,caption);fragment.append(figure);tasks.push(page.render({canvasContext:canvas.getContext('2d'),viewport,transform:density===1?null:[density,0,0,density,0,0]}));});
 activeTasks=tasks;await Promise.all(tasks.map(t=>t.promise));if(version!==revision)return;
 $('pages').replaceChildren(fragment);wrap.scrollTop=0;wrap.scrollLeft=0;
 const u=new URL(location.href);u.searchParams.set('book',book);u.searchParams.set('page',current);history.replaceState(null,'',u);
 $('loading').hidden=true;message(`PDF ${numbers.join('–')}쪽`,true);
 }catch(e){if(version===revision&&e.name!=='RenderingCancelledException')message('페이지를 표시하지 못했습니다. 다른 페이지로 이동하거나 새로고침해 주세요.');}}
function move(n){if(!pdf)return;current=Math.max(1,Math.min(pdf.numPages,n));render()}
async function load(source){message('교재를 불러오는 중입니다.');try{$('loading').hidden=false;$('loading-label').textContent='교재 다운로드';$('percent').textContent='0%';$('progress').value=0;const loadingTask=pdfjs.getDocument({...(typeof source==='string'?{url:source,disableAutoFetch:true,disableStream:true}:{data:new Uint8Array(await source.arrayBuffer())}),cMapUrl:new URL('./vendor/cmaps/',import.meta.url).href,cMapPacked:true,standardFontDataUrl:new URL('./vendor/standard_fonts/',import.meta.url).href,wasmUrl:new URL('./vendor/wasm/',import.meta.url).href,isEvalSupported:false});loadingTask.onProgress=({loaded,total})=>{if(total>0){const percent=Math.min(100,Math.floor(loaded/total*100));$('percent').textContent=percent+'%';$('progress').value=percent;}};pdf=await loadingTask.promise;$('loading-label').textContent='페이지 준비 중';$('setup').hidden=true;$('reader').hidden=false;$('page').max=pdf.numPages;current=Math.min(current,pdf.numPages);await render()}catch{$('loading').hidden=true;message('교재를 불러오지 못했습니다. 네트워크를 확인하거나 PDF 파일을 선택하세요.');$('setup').hidden=false}}
$('prev').onclick=()=>move(current-(spread()?2:1));$('next').onclick=()=>move(current+(spread()?2:1));$('go').onclick=()=>move(parseInt($('page').value,10)||1);$('page').onkeydown=e=>{if(e.key==='Enter')$('go').click()};$('layout').onchange=render;$('zoom').onchange=render;
$('file').onchange=()=>{if($('file').files[0])load($('file').files[0])};
$('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{message('이 브라우저에서는 전체 화면을 지원하지 않습니다.',true)}};
document.addEventListener('fullscreenchange',()=>{$('fullscreen').textContent=document.fullscreenElement?'전체 화면 닫기':'전체 화면';render()});
document.addEventListener('keydown',e=>{if(e.target.closest('input,select,button,a'))return;if(e.key==='ArrowRight'){e.preventDefault();$('next').click()}if(e.key==='ArrowLeft'){e.preventDefault();$('prev').click()}});
let timer;window.addEventListener('resize',()=>{clearTimeout(timer);timer=setTimeout(render,160)});
let menuTimer;
function revealMenu(){document.body.classList.remove('menu-hidden');clearTimeout(menuTimer);menuTimer=setTimeout(()=>{document.body.classList.add('menu-hidden');},3500)}
document.addEventListener('pointermove',revealMenu);
document.addEventListener('keydown',revealMenu);
$('menu').addEventListener('focusin',revealMenu);
$('menu').addEventListener('focusout',revealMenu);
let press;
$('canvas-wrap').addEventListener('pointerdown',e=>{press={x:e.clientX,y:e.clientY}});
$('canvas-wrap').addEventListener('pointerup',e=>{if(!press)return;const moved=Math.hypot(e.clientX-press.x,e.clientY-press.y);press=null;if(moved>12)return;if(e.clientX<innerWidth*.35)$('prev').click();else if(e.clientX>innerWidth*.65)$('next').click();else revealMenu()});
$('canvas-wrap').addEventListener('pointercancel',()=>{press=null});
revealMenu();
await load(pdfUrl);
