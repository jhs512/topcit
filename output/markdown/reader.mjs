const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const storage = {
  get(key) { try { return localStorage.getItem(`topcit-reader-${key}`); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(`topcit-reader-${key}`, value); } catch {} },
};
let fontSize = Math.max(14, Math.min(23, Number(storage.get('font')) || 17));
document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
document.documentElement.dataset.theme = storage.get('theme') === 'dark' ? 'dark' : 'light';
const savedPage = Number(storage.get('page'));
let pages = [], headings = [], tocLinks = new Map(), ready = false, scrolling = false;
let renderer, purifier, mermaidPromise, observer, diagramObserver;
let renderQueue = Promise.resolve(), diagramId = 0, generation = 0;

function toggleMenu(open) {
  document.body.classList.toggle('menu-open', open);
  $('#menu').setAttribute('aria-expanded', String(open));
  $('#scrim').hidden = !open;
  if (open) $('#search').focus();
}
$('#menu').onclick = () => toggleMenu(!document.body.classList.contains('menu-open'));
$('#scrim').onclick = () => toggleMenu(false);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') toggleMenu(false);
  if (event.key === '/' && !/INPUT|TEXTAREA/.test(event.target.tagName)) {
    event.preventDefault();
    if (matchMedia('(max-width: 760px)').matches) toggleMenu(true);
    $('#search').focus();
  }
});
for (const [id, delta] of [['smaller', -1], ['larger', 1]]) {
  $(`#${id}`).onclick = () => {
    fontSize = Math.max(14, Math.min(23, fontSize + delta));
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
    storage.set('font', fontSize);
  };
}
function themeLabel() {
  $('#theme').setAttribute('aria-label', document.documentElement.dataset.theme === 'dark' ? '밝은 화면으로 전환' : '어두운 화면으로 전환');
}
$('#theme').onclick = () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next; storage.set('theme', next); themeLabel();
};
themeLabel();
$('#page-form').onsubmit = event => {
  event.preventDefault();
  const n = Number($('#page-number').value);
  if (Number.isInteger(n) && n >= 1 && n <= 213) go(`page-${String(n).padStart(3, '0')}`);
};
if (savedPage >= 1 && savedPage <= 213) {
  $('#resume').hidden = false;
  $('#resume').textContent = `${savedPage}쪽 이어서 읽기 →`;
  $('#resume').onclick = () => go(`page-${String(savedPage).padStart(3, '0')}`);
}

function getMermaid() {
  if (!mermaidPromise) mermaidPromise = import('https://cdn.jsdelivr.net/npm/mermaid@12.0.0/dist/mermaid.esm.min.mjs').then(({ default: mermaid }) => {
    mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'base',
      fontFamily: 'Noto Sans KR, sans-serif',
      themeVariables: { primaryColor: '#eaf1ec', primaryTextColor: '#253f32', primaryBorderColor: '#7c9a88', lineColor: '#638172', secondaryColor: '#f5f3e7', tertiaryColor: '#f6f8f5', background: '#ffffff', fontSize: '15px' },
      flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis', padding: 18 },
    });
    return mermaid;
  }).catch(error => { mermaidPromise = null; throw error; });
  return mermaidPromise;
}

function queueDiagram(surface) {
  if (surface.dataset.queued) return;
  surface.dataset.queued = 'true';
  const currentGeneration = generation;
  renderQueue = renderQueue.then(async () => {
    if (!surface.isConnected || currentGeneration !== generation) return;
    try {
      const mermaid = await getMermaid();
      const { svg, bindFunctions } = await mermaid.render(`diagram-${++diagramId}`, surface.dataset.source);
      if (!surface.isConnected || currentGeneration !== generation) return;
      surface.innerHTML = svg;
      bindFunctions?.(surface);
      surface.dataset.rendered = 'true';
      surface.closest('.rich-block').querySelector('button').disabled = false;
    } catch (error) {
      surface.replaceChildren();
      const box = document.createElement('div'); box.className = 'diagram-error';
      const label = document.createElement('p'); label.textContent = '도식을 표시하지 못했습니다. 다시 시도하거나 아래 내용을 확인하세요.';
      const retry = document.createElement('button'); retry.textContent = '도식 다시 불러오기';
      retry.onclick = () => { delete surface.dataset.queued; queueDiagram(surface); };
      const details = document.createElement('details'), summary = document.createElement('summary'), pre = document.createElement('pre');
      summary.textContent = '도식 내용'; pre.textContent = surface.dataset.source;
      details.append(summary, pre); box.append(label, retry, details); surface.append(box);
      console.error('Diagram rendering failed', error);
    }
  });
}

function enrich(section) {
  $$('p', section).forEach(p => {
    if (/^(\[그림\s*\d+\]|[〈<]표\s*\d+)/.test(p.textContent.trim())) p.classList.add('caption');
  });
  for (const table of $$('table', section)) {
    const shell = richBlock('TABLE', '표 확대 보기');
    table.before(shell);
    const scroll = document.createElement('div'); scroll.className = 'table-scroll'; scroll.tabIndex = 0; scroll.setAttribute('aria-label', '표, 좌우로 스크롤할 수 있습니다');
    scroll.append(table); shell.append(scroll);
    $('button', shell).onclick = () => openZoom(table, '표 확대 보기');
  }
  for (const code of $$('pre > code.language-mermaid', section)) {
    const shell = richBlock('DIAGRAM', '도식 확대 보기');
    const surface = document.createElement('div'); surface.className = 'diagram-surface';
    surface.dataset.source = code.textContent;
    const waiting = document.createElement('span'); waiting.className = 'waiting'; waiting.textContent = '도식을 준비하고 있습니다…'; surface.append(waiting);
    code.parentElement.replaceWith(shell); shell.append(surface);
    const button = $('button', shell); button.disabled = true;
    button.onclick = () => { const svg = $('svg', surface); if (svg) openZoom(svg, '도식 확대 보기'); };
    diagramObserver.observe(surface);
  }
  for (const a of $$('a[href]', section)) {
    if (/^https?:/.test(a.href)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
  }
}

function richBlock(label, title) {
  const shell = document.createElement('div'); shell.className = 'rich-block';
  const bar = document.createElement('div'); bar.className = 'block-bar';
  const name = document.createElement('span'); name.textContent = label;
  const button = document.createElement('button'); button.textContent = '확대 ↗'; button.setAttribute('aria-label', title);
  bar.append(name, button); shell.append(bar); return shell;
}

function buildToc() {
  $('#toc').replaceChildren(); tocLinks = new Map();
  const front = document.createElement('a'); front.className = 'item'; front.href = '#page-001'; front.textContent = '표지 · 발행 안내 · 전체 목차'; $('#toc').append(front);
  let container = $('#toc');
  for (const { node, level } of headings.filter(h => h.level >= 2 && h.level <= 4)) {
    const a = document.createElement('a'); a.href = `#${node.id}`; a.textContent = node.textContent;
    tocLinks.set(node.id, a);
    if (level === 2) {
      const details = document.createElement('details'), summary = document.createElement('summary');
      summary.append(a); details.append(summary);
      container = document.createElement('div'); container.className = 'toc-children'; details.append(container); $('#toc').append(details);
      a.onclick = event => { event.preventDefault(); details.open = true; go(node.id); };
    } else {
      a.className = `item${level === 4 ? ' sub' : ''}`; container.append(a);
    }
  }
  $('#toc details')?.setAttribute('open', '');
}

function updateLocation() {
  scrolling = false;
  if (!ready || $('#zoom-dialog').open) return;
  const point = 145;
  let current = pages[0];
  for (const page of pages) { if (page.node.getBoundingClientRect().top <= point) current = page; else break; }
  let heading;
  for (const h of headings) { if (h.node.getBoundingClientRect().top <= point) heading = h; else break; }
  for (const a of tocLinks.values()) a.removeAttribute('aria-current');
  if (heading) {
    const link = tocLinks.get(heading.node.id);
    if (link) { link.setAttribute('aria-current', 'true'); const details = link.closest('details'); if (details) details.open = true; }
    const chapter = [...headings].reverse().find(h => h.level === 2 && h.page <= current.number);
    $('#current-chapter').textContent = chapter?.node.textContent || '표지 · 목차';
  }
  if (document.activeElement !== $('#page-number')) $('#page-number').value = current.number;
  if (current.node.getBoundingClientRect().top <= point) storage.set('page', current.number);
  const height = document.documentElement.scrollHeight - innerHeight;
  const progress = Math.max(0, Math.min(100, height > 0 ? scrollY / height * 100 : 0));
  $('#progress').style.width = `${progress}%`; $('#percent').textContent = `${Math.round(progress)}%`;
}
addEventListener('scroll', () => { if (!scrolling) { scrolling = true; requestAnimationFrame(updateLocation); } }, { passive: true });

function go(id, replace = false) {
  const target = document.getElementById(id);
  if (!target) return;
  toggleMenu(false);
  if (replace) history.replaceState(null, '', `#${id}`); else if (location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
  target.scrollIntoView({ behavior: 'instant', block: 'start' });
  const section = target.closest('.book-page');
  if (section) $$('.diagram-surface', section).forEach(queueDiagram);
  updateLocation();
}
document.addEventListener('click', event => {
  const a = event.target.closest('a[href^="#"]');
  if (!a || event.defaultPrevented) return;
  const id = a.hash.slice(1); if (document.getElementById(id)) { event.preventDefault(); go(id); }
});
addEventListener('hashchange', () => { if (ready) go(location.hash.slice(1), true); });
addEventListener('popstate', () => { if (ready) { if (location.hash) go(location.hash.slice(1), true); else scrollTo(0, 0); } });

let searchTimer;
$('#search').addEventListener('input', () => { clearTimeout(searchTimer); searchTimer = setTimeout(search, 160); });
function search() {
  const q = $('#search').value.trim(); const normalized = q.toLocaleLowerCase().replace(/\s/g, '');
  $('#results').replaceChildren(); $('#results').hidden = !q; $('#toc').hidden = !!q;
  if (!q) { $('#search-status').textContent = ''; return; }
  if (!ready) { $('#search-status').textContent = '본문을 불러온 뒤 검색할 수 있습니다.'; return; }
  const matches = pages.filter(page => page.searchText.includes(normalized));
  $('#search-status').textContent = matches.length ? `${matches.length}개 페이지에서 찾았습니다${matches.length > 50 ? ' · 앞 50개 표시' : ''}` : '검색 결과가 없습니다.';
  for (const page of matches.slice(0, 50)) {
    const a = document.createElement('a'); a.href = `#${page.node.id}`; a.className = 'result';
    const label = document.createElement('small'); label.textContent = `PDF ${page.number}쪽${page.title ? ` · ${page.title}` : ''}`;
    const hit = page.text.toLocaleLowerCase().indexOf(q.toLocaleLowerCase());
    const start = Math.max(0, hit - 40), snippet = page.text.slice(start, start + 150);
    const excerpt = document.createElement('span'); excerpt.textContent = `${start ? '…' : ''}${snippet}…`;
    a.append(label, excerpt); $('#results').append(a);
  }
}

let zoomItem, zoomPlaceholder, originalStyle, zoomBase = 800, zoomScale = 1;
function openZoom(element, title) {
  zoomItem = element; originalStyle = element.getAttribute('style');
  zoomBase = element.tagName.toLowerCase() === 'svg' ? (element.viewBox.baseVal.width || 800) : Math.max(800, element.scrollWidth);
  zoomPlaceholder = document.createComment('expanded element'); element.replaceWith(zoomPlaceholder);
  $('#zoom-content').append(element); $('#zoom-title').textContent = title;
  $('#zoom-dialog').showModal(); fitZoom();
}
function setZoom(scale) {
  zoomScale = Math.max(.2, Math.min(4, scale));
  if (!zoomItem) return;
  const width = zoomBase * zoomScale;
  $('#zoom-content').style.width = `${width}px`;
  zoomItem.style.width = `${width}px`; zoomItem.style.maxWidth = 'none'; zoomItem.style.height = 'auto';
  $('#zoom-label').textContent = `${Math.round(zoomScale * 100)}%`;
}
function fitZoom() { setZoom(Math.min(1, ($('#zoom-viewport').clientWidth - 48) / zoomBase)); }
$('#zoom-in').onclick = () => setZoom(zoomScale * 1.25);
$('#zoom-out').onclick = () => setZoom(zoomScale / 1.25);
$('#zoom-fit').onclick = fitZoom;
$('#zoom-close').onclick = () => $('#zoom-dialog').close();
$('#zoom-dialog').addEventListener('close', () => {
  if (!zoomItem) return;
  if (originalStyle === null) zoomItem.removeAttribute('style'); else zoomItem.setAttribute('style', originalStyle);
  zoomPlaceholder.replaceWith(zoomItem); zoomItem = null;
});

async function load() {
  ready = false; generation++;
  observer?.disconnect(); diagramObserver?.disconnect();
  $('#status').hidden = false; $('#status').textContent = '책을 펼치는 중입니다…'; $('#retry').hidden = true;
  try {
    const [{ marked }, { default: DOMPurify }, response] = await Promise.all([
      import('https://cdn.jsdelivr.net/npm/marked@18.0.13/lib/marked.esm.js'),
      import('https://cdn.jsdelivr.net/npm/dompurify@3.4.15/dist/purify.es.mjs'),
      fetch(new URL('./IT비즈니스와윤리.md', import.meta.url), { cache: 'no-cache', signal: AbortSignal.timeout(30000) }),
    ]);
    if (!response.ok) throw new Error(`Book HTTP ${response.status}`);
    renderer = marked; purifier = DOMPurify;
    const source = await response.text();
    const segments = [...source.matchAll(/<!-- PDF page: (\d{3}) -->([\s\S]*?)(?=<!-- PDF page: \d{3} -->|$)/g)];
    if (segments.length !== 213 || segments.some((s, i) => Number(s[1]) !== i + 1)) throw new Error('Incomplete page sequence');
    $('#book').replaceChildren(); pages = []; headings = [];
    diagramObserver = new IntersectionObserver(entries => {
      entries.filter(e => e.isIntersecting).forEach(e => { queueDiagram(e.target); diagramObserver.unobserve(e.target); });
    }, { rootMargin: '500px' });
    const fragment = document.createDocumentFragment();
    for (const [, pageId, markdown] of segments) {
      const section = document.createElement('section'); section.className = 'book-page'; section.id = `page-${pageId}`;
      section.innerHTML = purifier.sanitize(renderer.parse(markdown, { gfm: true, breaks: false }), { USE_PROFILES: { html: true }, FORBID_TAGS: ['img', 'style'], FORBID_ATTR: ['style'] });
      const label = document.createElement('div'); label.className = 'page-label';
      const a = document.createElement('a'); a.href = `#${section.id}`; a.textContent = `PDF ${Number(pageId)} / 213`; label.append(a); section.prepend(label);
      let index = 0;
      for (const node of $$('h1,h2,h3,h4,h5,h6', section)) {
        node.id = `p${pageId}-h${++index}`;
        headings.push({ node, level: Number(node.tagName.slice(1)), page: Number(pageId) });
      }
      const text = section.textContent.replace(/\s+/g, ' ').trim();
      pages.push({ node: section, number: Number(pageId), text, searchText: text.toLocaleLowerCase().replace(/\s/g, ''), title: $('h2,h3,h4', section)?.textContent || '' });
      enrich(section); fragment.append(section);
    }
    $('#book').append(fragment); buildToc(); ready = true;
    $('#status').hidden = true; $('#endnote').hidden = false;
    document.body.dataset.ready = 'true';
    if (location.hash) go(location.hash.slice(1), true);
    updateLocation(); search();
  } catch (error) {
    $('#status').textContent = '책을 불러오지 못했습니다. 인터넷 연결을 확인하고 다시 시도해 주세요.';
    $('#retry').hidden = false; console.error('Reader load failed', error);
  }
}
$('#retry').onclick = load;
load();
