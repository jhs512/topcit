import {readFile,writeFile,readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {marked} from 'marked';

const root=fileURLToPath(new URL('../slides/',import.meta.url));
const read=name=>readFile(path.join(root,name),'utf8');
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const css=await read('theme/slides.css');
const js=await read('theme/slides.js');
const widget=await read('theme/critical-path-widget.html');
const files=(await readdir(root)).filter(f=>f.endsWith('.md')&&f!=='README.md').sort();
for(const file of files){
  const source=(await read(file)).replace(/\r\n/g,'\n');
  const pages=source.trim().split(/\n---\n/);
  for(const page of pages){
    if(!/^# .+/m.test(page))throw Error(`${file}: every slide needs a # heading`);
    const directives=[...page.matchAll(/^::: (.+)$/gm)].map(m=>m[1]);
    if(directives.some(d=>d!=='critical-path'))throw Error(`${file}: unknown widget`);
  }
  if((source.match(/^::: critical-path$/gm)||[]).length>1)throw Error(`${file}: use the critical-path widget only once per deck`);
  const title=pages[0].match(/^# (.+)$/m)[1];
  const render=page=>marked.parse(page.replace(/^::: critical-path\n:::/gm,widget))
    .replace(/<p>(<a [^>]+>(?:참고|출처)[\s\S]*?<\/p>)/g,'<p class="source">$1')
    .replace(/<p>((?:사례는|예시는|예시의 작업|기업 사례를)[\s\S]*?<\/p>)/g,'<p class="caption">$1');
  const sections=pages.map((page,i)=>`<section class="${i===0?'active':''} ${page.includes('<!-- layout: compact -->')?'compact':''}" aria-label="${esc(page.match(/^# (.+)$/m)[1])}">${render(page)}</section>`).join('\n');
  const html=`<!doctype html>\n<!-- Generated from ${file}; edit the Markdown source and run npm run build:slides. -->\n<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><style>${css}</style></head><body><main>${sections}</main><nav aria-label="슬라이드 이동"><button id="prev">← 이전</button><span id="counter"></span><button id="next">다음 →</button><button id="full">전체 화면</button></nav><script>${js}</script></body></html>\n`;
  await writeFile(path.join(root,file.replace(/\.md$/,'.html')),html);
  console.log(`${file}: ${pages.length} slides`);
}
