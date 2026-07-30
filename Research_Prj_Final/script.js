const FILES = [
  {n:"01", tag:"Thesis",     title:"The Thesis",             code:"NT-0100-T", x:280,  y:70,   rot:-2,
    body:"Censorship is not the disappearance of information. It is the negotiation of visibility through infrastructures, protocols, and institutions. This research asks whether cartography can reveal those negotiations without claiming a position outside of them.",
    hint:"Everything else in this archive branches from this one line."},

  {n:"02", tag:"Inquiry",    title:"The Question",           code:"NT-0211-Q", x:560,  y:40,   rot:1.5,
    body:"How can cartography reveal the infrastructures that negotiate visibility in contemporary digital society? Can information ever exist outside a system of governance, or does escaping one protocol only mean landing inside another?",
    hint:"The question stays open. It is not answered by this archive."},

  {n:"03", tag:"Lexicon",    title:"Five Terms",             code:"NT-0305-W", x:470,  y:280,  rot:2,
    body:". <br>Infrastructure. <br>Cartography. Platform Governance. Archive. Five terms, chosen deliberately as concepts rather than technologies — the coordinates this atlas keeps returning to.",
    hint:"Not a glossary of censorship. A vocabulary for studying its mechanisms."},

  {n:"04", tag:"Field",      title:"Where Fields Cross",     code:"NT-0418-F", x:760,  y:250,  rot:-1.5,
    body:"This project sits at the intersection of Computational Design, Critical Data Studies, Cartography, Media Studies, Political Geography, and Platform Studies — no single field owns the question of who controls visibility.",
    hint:"The overlap is the site of the research, not a side effect of it."},

  {n:"05", tag:"Lineage",    title:"The Lineage",            code:"NT-0525-L", x:1030, y:100,  rot:2,
    body:"Book banning. State archives. Military secrecy. Satellite image restriction. Broadcast regulation. Internet filtering. Platform moderation. AI moderation. The techniques kept changing across the 20th century into the present. The underlying question — who controls visibility — did not.",
    hint:"This is not a story of censorship getting worse. It is a story of protocols evolving."},

  {n:"06", tag:"Practice",   title:"Who Else Is Looking",    code:"NT-0609-P", x:130,  y:450,  rot:1,
    body:"Researchers — Foucault, Bratton, Lyon — theorize infrastructures of power. Investigators — Forensic Architecture, Trevor Paglen — visualize what those infrastructures hide. Designers — James Bridle, Hito Steyerl — use design itself as a method of investigation. The Uncensored Library relocates censored journalism into another platform. This project investigates the platform itself as an infrastructure of negotiated visibility.",
    hint:"Positioned in relation to, not in place of, this community."},

  {n:"07", tag:"Situated",   title:"The Library",            code:"NT-0714-U", x:420,  y:530,  rot:-2,
    body:"The Uncensored Library moved journalism banned by state censors into Minecraft, framed as an escape from government surveillance. But that escape is conditional: Mojang, Microsoft, platform policy, servers, software, terms of service. It left one protocol only to become dependent on another.",
    hint:"Situated technology: government, platform, software, and moderation, exposed by a single case."},

  {n:"08", tag:"Method",     title:"The Method",             code:"NT-0822-M", x:700,  y:500,  rot:1.5,
    body:"Computational cartography. Comparative platform analysis. Archival research. Metadata collection. Network diagrams. Interactive visualization, built toward D3.js. Computation is not deployed to solve censorship — it is deployed to make its patterns legible.",
    hint:"Qualitative case study first. Computation reveals the shape of what's already there."},

  {n:"09", tag:"Experiment", title:"The Prototypes",         code:"NT-0903-X", x:980,  y:430,  rot:-1,
    body:"Same coordinates, three platforms: Google Maps, Naver Maps, Apple Maps — identical location, different visibility depending on whose infrastructure you're standing on. This site's own flashcard-and-redaction interaction began as one of those early prototypes.",
    hint:"Early evidence of exploration, not a finished study."},

  {n:"10", tag:"Visual",     title:"The Case File",          code:"NT-1017-V", x:1230, y:330,  rot:2.5,
    body:"Government archive. Military dossier. Engineering drawing. Atlas. Evidence wall. The case-file aesthetic isn't decoration layered on top of the argument — the black bar performs it directly. Censorship as a technique of reduction, enacted on a document.",
    hint:"The visual language is the argument, not an illustration of it."},

  {n:"11", tag:"Argument",   title:"The Argument",           code:"NT-1129-A", x:270,  y:760,  rot:-1.5,
    body:"Visibility is continuously negotiated through infrastructures rather than simply granted or denied. Making those negotiations legible is itself a critical design act. This atlas does not claim to stand outside the systems it studies — it is a situated instrument for examining them.",
    hint:"Descriptive, not prescriptive. It opens the question rather than closing it."},

  {n:"12", tag:"Capstone",   title:"What Comes Next",        code:"NT-1206-C", x:590,  y:780,  rot:1,
    body:"This research may develop into an interactive atlas — computational mapping, comparative case studies, and a physical archival installation, an old censored book placed beside the screen demo — letting an audience navigate different infrastructures of visibility for themselves.",
    hint:"A direction, not a promise. The proposal is built out next semester."},

  {n:"13", tag:"Challenge",  title:"What I Don't Know Yet",  code:"NT-1313-W", x:900,  y:760,  rot:-2,
    body:"Technical: learning D3.js, building a visualization system that scales past thirteen files. Research: defining the scope of comparison, reaching moderation data that isn't public. Design: representing distributed systems without flattening them. Conceptual: staying descriptive when every map already argues for something.",
    hint:"Withholding a solution to a problem not yet fully understood."},
];
const TITLE_POS = {x:20, y:60};
const LINKS = [[0,1],[1,2],[2,3],[3,4],[5,6],[6,7],[7,8],[8,9],[10,11],[11,12],
               [0,5],[1,6],[2,7],[3,8],[4,9],[5,10],[6,11],[7,12],[9,12]];
const camera = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></svg>`;
const PH_CLASSES = ['ph-pixel','ph-blur','ph-grain'];

const sidebar = document.getElementById('sidebar');
const boardCanvas = document.getElementById('boardCanvas');
const slideStage = document.getElementById('slideStage');
const strings = document.getElementById('strings');

/* -------- sidebar tabs -------- */
FILES.forEach(f=>{
  const b = document.createElement('button');
  b.className = 'tab';
  b.id = 'tab-' + f.n;
  b.innerHTML = `<span class="n">${f.n}</span><span class="t">${f.title}</span>`;
  b.addEventListener('click', ()=> go(f.n));
  sidebar.appendChild(b);
});

/* -------- pinned title card -------- */
const titleNode = document.createElement('div');
titleNode.className = 'title-node';
titleNode.style.left = TITLE_POS.x+'px'; titleNode.style.top = TITLE_POS.y+'px';
titleNode.innerHTML = `
  <div class="pin"></div>
  <div class="paper">
    <div class="eyebrow">Atlas of Negotiated Visibility · 13 Documents</div>
    <div class="thesis">&ldquo;Visibility is negotiated. It is never simply granted, or denied.&rdquo;</div>
    <div class="keywords">VISIBILITY<span class="dot">·</span>INFRASTRUCTURE<span class="dot">·</span>CARTOGRAPHY<br>PLATFORM GOVERNANCE<span class="dot">·</span>ARCHIVE</div>
  </div>`;
boardCanvas.appendChild(titleNode);

/* -------- home board nodes (overlapping, grayscale) -------- */
FILES.forEach((f,idx)=>{
  const node = document.createElement('div');
  node.className='node';
  node.style.left=f.x+'px'; node.style.top=f.y+'px';
  node.style.zIndex = 5+idx;
  node.tabIndex=0;
  const ph = PH_CLASSES[idx % PH_CLASSES.length];
  node.innerHTML = `
    <div class="node-pin"></div>
    <div class="node-doc" style="transform:rotate(${f.rot}deg)">
      <span class="pagemark">${f.n} / ${String(FILES.length).padStart(2,'0')}</span>
      <div class="node-head"><span class="num">FILE ${f.n}</span><span class="cat">${f.tag}</span></div>
      <div class="title">${f.title}</div>
      <div class="node-photo ${ph}">${camera}</div>
      <div class="node-bars"><div></div><div></div><div></div><div></div></div>
    </div>`;
  node.addEventListener('click', ()=> go(f.n));
  node.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault(); go(f.n);} });
  boardCanvas.appendChild(node);
});

/* -------- strings between nodes -------- */
function centerOf(f){ return {x:f.x+125, y:f.y+4}; }
let svgPaths='';
LINKS.forEach(([a,b],i)=>{
  const A=centerOf(FILES[a]), B=centerOf(FILES[b]);
  const mx=(A.x+B.x)/2 + ((i%2===0)?36:-36);
  const my=(A.y+B.y)/2 - 24;
  svgPaths += `<path d="M${A.x},${A.y} Q${mx},${my} ${B.x},${B.y}"/>`;
});
/* connect title card into the web */
{
  const A={x:TITLE_POS.x+160,y:TITLE_POS.y+2}, B=centerOf(FILES[0]);
  svgPaths += `<path d="M${A.x},${A.y} Q${(A.x+B.x)/2},${(A.y+B.y)/2-30} ${B.x},${B.y}"/>`;
  svgPaths += `<circle cx="${A.x}" cy="${A.y}" r="3"/>`;
}
FILES.forEach(f=>{ const c=centerOf(f); svgPaths += `<circle cx="${c.x}" cy="${c.y}" r="3"/>`; });
const CW=1560, CH=1220;
strings.setAttribute('viewBox', `0 0 ${CW} ${CH}`);
strings.innerHTML = svgPaths;

/* -------- draggable + zoomable board -------- */
const viewport = document.getElementById('boardViewport');
let panX=0, panY=0, scale=1, interacted=false;
let dragging=false, sx=0, sy=0, startX=0, startY=0;
const pointers = new Map();
let pinchStartDist=0, pinchStartScale=1, pinchMidStart={x:0,y:0}, pinchPanStart={x:0,y:0};

function apply(){ boardCanvas.style.transform = `translate(${panX}px,${panY}px) scale(${scale})`; }

function clampPan(){
  const vw = viewport.clientWidth, vh = viewport.clientHeight;
  const cw = CW*scale, ch = CH*scale;
  const pad = 120;
  const minX = Math.min(pad, vw-cw-pad);
  const maxX = Math.max(pad, vw-cw+pad);
  const minY = Math.min(pad, vh-ch-pad);
  const maxY = Math.max(pad, vh-ch+pad);
  panX = Math.min(maxX, Math.max(minX, panX));
  panY = Math.min(maxY, Math.max(minY, panY));
}

function fitToViewport(){
  const vw = viewport.clientWidth, vh = viewport.clientHeight;
  if(vw===0||vh===0) return;
  scale = Math.min(vw/CW, vh/CH) * 0.96;
  panX = (vw - CW*scale)/2;
  panY = (vh - CH*scale)/2;
  apply();
}

function dist(a,b){ return Math.hypot(a.x-b.x, a.y-b.y); }
function mid(a,b){ return {x:(a.x+b.x)/2, y:(a.y+b.y)/2}; }

function setScaleAtPoint(newScale, clientX, clientY){
  const rect = viewport.getBoundingClientRect();
  const lx = clientX-rect.left, ly = clientY-rect.top;
  const canvasX = (lx-panX)/scale, canvasY = (ly-panY)/scale;
  scale = Math.min(1.8, Math.max(0.28, newScale));
  panX = lx - canvasX*scale;
  panY = ly - canvasY*scale;
  clampPan();
  apply();
}

viewport.addEventListener('pointerdown', e=>{
  interacted = true;
  pointers.set(e.pointerId, {x:e.clientX, y:e.clientY});
  viewport.setPointerCapture(e.pointerId);
  if(pointers.size===1){
    dragging=true; viewport.classList.add('dragging');
    sx=e.clientX; sy=e.clientY; startX=panX; startY=panY;
  } else if(pointers.size===2){
    dragging=false;
    const pts=[...pointers.values()];
    pinchStartDist = dist(pts[0],pts[1]);
    pinchStartScale = scale;
    pinchMidStart = mid(pts[0],pts[1]);
    pinchPanStart = {x:panX, y:panY};
  }
});
viewport.addEventListener('pointermove', e=>{
  if(!pointers.has(e.pointerId)) return;
  pointers.set(e.pointerId, {x:e.clientX, y:e.clientY});
  if(pointers.size===2){
    const pts=[...pointers.values()];
    const d = dist(pts[0],pts[1]);
    const m = mid(pts[0],pts[1]);
    const rect = viewport.getBoundingClientRect();
    const canvasX = (pinchMidStart.x-rect.left-pinchPanStart.x)/pinchStartScale;
    const canvasY = (pinchMidStart.y-rect.top-pinchPanStart.y)/pinchStartScale;
    scale = Math.min(1.8, Math.max(0.28, pinchStartScale * (d/pinchStartDist)));
    panX = (m.x-rect.left) - canvasX*scale;
    panY = (m.y-rect.top) - canvasY*scale;
    clampPan();
    apply();
  } else if(pointers.size===1 && dragging){
    panX = startX + (e.clientX - sx);
    panY = startY + (e.clientY - sy);
    clampPan();
    apply();
  }
});
function endPointer(e){
  pointers.delete(e.pointerId);
  if(pointers.size===0){ dragging=false; viewport.classList.remove('dragging'); }
  else if(pointers.size===1){
    const [pt] = [...pointers.values()];
    dragging=true; sx=pt.x; sy=pt.y; startX=panX; startY=panY;
  }
}
['pointerup','pointerleave','pointercancel'].forEach(ev=>viewport.addEventListener(ev, endPointer));

viewport.addEventListener('wheel', e=>{
  e.preventDefault();
  interacted = true;
  const factor = Math.exp(-e.deltaY * 0.0018);
  setScaleAtPoint(scale*factor, e.clientX, e.clientY);
}, {passive:false});

document.getElementById('zoomIn').addEventListener('click', ()=>{
  interacted=true;
  const r=viewport.getBoundingClientRect();
  setScaleAtPoint(scale*1.2, r.left+r.width/2, r.top+r.height/2);
});
document.getElementById('zoomOut').addEventListener('click', ()=>{
  interacted=true;
  const r=viewport.getBoundingClientRect();
  setScaleAtPoint(scale/1.2, r.left+r.width/2, r.top+r.height/2);
});
document.getElementById('zoomReset').addEventListener('click', ()=>{ interacted=false; fitToViewport(); });

window.addEventListener('load', fitToViewport);
window.addEventListener('resize', ()=>{
  clearTimeout(window._fr);
  window._fr = setTimeout(()=>{ if(!interacted) fitToViewport(); else { clampPan(); apply(); } }, 120);
});
fitToViewport();

/* -------- slide docs -------- */
FILES.forEach((f,idx)=>{
  const wrap = document.createElement('div');
  wrap.className='slide-doc-wrap';
  wrap.id='slide-'+f.n;
  /* random-but-overlapping placement for the photo — seeded per file so it's stable across visits */
  const rTop = Math.round(-58 + Math.random()*50);   // -58 .. -8
  const rRight = Math.round(-78 + Math.random()*46); // -78 .. -32
  const rRot = Math.round(Math.random()*18 - 9);     // -9 .. 9
  wrap.innerHTML = `
    <div class="slide-photo" id="photo-${f.n}" style="top:${rTop}px; right:${rRight}px; transform:rotate(${rRot}deg);"><div class="pin"></div>${camera}<span>Photo pending</span></div>
    <div class="slide-doc">
      <div class="doc-head"><span class="doc-num">FILE ${f.n} — ${f.code}</span><span class="doc-cat">${f.tag}</span></div>
      <h2 class="doc-title">${f.title}</h2>
      <div class="text-wrap">
        <p class="doc-body">${f.body}<span class="hint">${f.hint}</span></p>
        <div class="redaction" role="button" aria-label="Reveal document ${f.n}">
          ${Array(8).fill('<div class="bar"></div>').join('')}
          <div class="stamp-hint">Declassifying…</div>
        </div>
      </div>
      <div class="stamp">DECLASSIFIED</div>
    </div>`;
  slideStage.appendChild(wrap);
  wrap.querySelector('.redaction').addEventListener('click', ()=> wrap.classList.add('revealed'));

  /* draggable photo */
  const photo = wrap.querySelector('.slide-photo');
  let pdrag=false, px=0, py=0, ox=0, oy=0;
  photo.addEventListener('pointerdown', e=>{
    e.stopPropagation();
    pdrag=true; px=e.clientX; py=e.clientY;
    const style=getComputedStyle(photo);
    ox=parseFloat(style.right)|| -46; oy=parseFloat(style.top)|| -30;
    photo.setPointerCapture(e.pointerId);
  });
  photo.addEventListener('pointermove', e=>{
    if(!pdrag) return;
    const dx=e.clientX-px, dy=e.clientY-py;
    photo.style.right = (ox-dx)+'px';
    photo.style.top = (oy+dy)+'px';
  });
  ['pointerup','pointerleave'].forEach(ev=>photo.addEventListener(ev, ()=>{ pdrag=false; }));
});

/* -------- navigation -------- */
let current = null;
function go(n){
  document.getElementById('home-view').classList.remove('active');
  document.getElementById('slide-view').classList.add('active');
  if(current){
    const prev = document.getElementById('slide-'+current);
    clearTimeout(prev._revealTimer);
    prev.classList.remove('active','revealed');
  }
  current = n;
  const wrap = document.getElementById('slide-'+n);
  wrap.classList.add('active');
  wrap.classList.remove('revealed');
  clearTimeout(wrap._revealTimer);
  wrap._revealTimer = setTimeout(()=> wrap.classList.add('revealed'), 450);
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+n).classList.add('active');
  updateNav();
  location.hash = 'f' + n;
}
function goHome(){
  if(current){
    const prev = document.getElementById('slide-'+current);
    clearTimeout(prev._revealTimer);
    prev.classList.remove('active','revealed');
  }
  current = null;
  document.getElementById('slide-view').classList.remove('active');
  document.getElementById('home-view').classList.add('active');
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  location.hash = '';
}
function updateNav(){
  const idx = FILES.findIndex(f=>f.n===current);
  document.getElementById('btnPrev').disabled = idx<=0;
  document.getElementById('btnNext').disabled = idx>=FILES.length-1;
}
document.getElementById('btnHome').addEventListener('click', goHome);
document.getElementById('btnPrev').addEventListener('click', ()=>{
  const idx=FILES.findIndex(f=>f.n===current); if(idx>0) go(FILES[idx-1].n);
});
document.getElementById('btnNext').addEventListener('click', ()=>{
  const idx=FILES.findIndex(f=>f.n===current); if(idx<FILES.length-1) go(FILES[idx+1].n);
});
window.addEventListener('hashchange', ()=>{
  const h=location.hash.replace('#','');
  if(h.startsWith('f')){ const n=h.slice(1); if(FILES.some(f=>f.n===n) && n!==current) go(n); }
  else if(!h && current){ goHome(); }
});
/* initial route */
(function(){
  const h=location.hash.replace('#','');
  if(h.startsWith('f') && FILES.some(f=>f.n===h.slice(1))) go(h.slice(1));
})();
