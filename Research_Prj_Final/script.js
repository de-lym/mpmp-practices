const FILES = [
  {n:"01", tag:"Governance",  title:"The First Mark",   code:"NT-0117-A", x:280,  y:70,   rot:-2,
   body:"In 1559 the Catholic Church published the first Index Librorum Prohibitorum — a standing list of books its members were forbidden to read. It stayed in print, revised edition after edition, until 1966. Four centuries before firewalls and takedown notices, censorship already had its basic shape: a governing body, a list, and the ongoing work of keeping the list current. Everything filed in this archive descends from that same shape, dressed in newer protocols."},
  {n:"02", tag:"Legitimacy",  title:"Who Signs",        code:"NT-0223-B", x:560,  y:40,   rot:1.5,
   body:"Every restriction filed here can be read two ways — protection, by the party enforcing it; repression, by the party losing access. This archive doesn't try to settle that argument. It asks a narrower one: who has standing to sign off on a restriction, and does that standing survive being made visible? A court order and a platform's terms of service both restrict speech. Only one of them was voted on."},
  {n:"03", tag:"Redaction",   title:"The Black Bar",    code:"NT-0309-C", x:470,  y:280,  rot:2,
   body:"Every black bar in this archive is an argument, not a decoration. Most censorship doesn't erase a document — it keeps the file, keeps the page number, and removes one passage from it. That's the technique of reduction this entire board reproduces: nothing here is deleted, only covered, and a cover is reversible in a way a deletion never claims to be."},
  {n:"04", tag:"Threshold",   title:"Line of Sight",    code:"NT-0414-D", x:760,  y:250,  rot:-1.5,
   body:"In 2020, Reporters Without Borders rebuilt banned journalism inside Minecraft, placing censored reporting on servers no state firewall could reach. Readers under restriction could open the game and read what their government had blocked. But the library never left governance behind — it moved from one authority's line of sight into another's: Mojang's terms of service, Microsoft's moderation policy, a platform's right to shut the whole thing down. It traded one censor for a landlord."},
  {n:"05", tag:"Protocol",    title:"Chain of Custody", code:"NT-0521-A", x:1030, y:100,  rot:2,
   body:"Index → Code → Stack → Library. The mechanism for controlling visibility keeps changing hands: a Church's printed list, Hollywood's self-policed Hays Code (1934–1968), Benjamin Bratton's account of computation as its own layered sovereignty — Earth, Cloud, City, Address, Interface, User — and finally a library built inside somebody else's game. Each new protocol claims to have escaped the last one. None of them escape needing a protocol."},
  {n:"06", tag:"Governance",  title:"Need to Know",     code:"NT-0602-B", x:130,  y:450,  rot:1,
   body:"This project doesn't belong to one discipline, and that's deliberate. Information policy, platform governance, comparative law, data visualization, and archival science each hold one piece of how visibility gets restricted — and no single one of them can explain why a restriction reads as protection in one field and control in another."},
  {n:"07", tag:"Legitimacy",  title:"The Classifier",   code:"NT-0718-C", x:420,  y:530,  rot:-2,
   body:"Michel Foucault argued that power rarely announces itself as prohibition — more often it works through surveillance and classification, the ongoing sorting of what's visible from what isn't. Read that way, a censor isn't someone who deletes. It's someone who classifies. Every actor filed here — state, platform, institution — is treated first as a classifier, and the question is what their scheme actually optimizes for."},
  {n:"08", tag:"Redaction",   title:"The Archive",      code:"NT-0825-D", x:700,  y:500,  rot:1.5,
   body:"Sixteen documented cases sit behind this file, spanning six countries and four kinds of actor. None were pre-sorted into good or bad. Open the full record to browse by tag — governance, legitimacy, redaction, threshold, protocol — the same five terms pinned to every file on this board.",
   gateway:true},
  {n:"09", tag:"Threshold",   title:"What Leaks",       code:"NT-0904-A", x:980,  y:430,  rot:-1,
   body:"OpenAI moderates its own models. X moderates its own feed. Microsoft moderates the server the Uncensored Library depends on. Each restricts visibility at the level of code and API rather than law, and each is close to invisible from outside its own company. This archive can document their effects. It can't fully see their protocols — and that gap is part of the argument."},
  {n:"10", tag:"Protocol",    title:"Sunset Clause",    code:"NT-1012-B", x:1230, y:330,  rot:2.5,
   body:"This taxonomy — rationale, actor, outcome — is a working structure, not a settled one. It's missing at least two axes worth testing: jurisdiction, whose law applies when a platform and a state disagree; and reversibility, whether a restriction, once imposed, is ever actually lifted. Every classification in this archive should be read as provisional. This one included."},
  {n:"11", tag:"Governance",  title:"The Appeal",       code:"NT-1128-C", x:270,  y:760,  rot:-1.5,
   body:"Harvard's Lumen Database collects takedown notices without ruling on them. OONI and Citizen Lab measure internet censorship worldwide using standardized, volunteer-run categories. The EFF documents platform takedowns at the scale of the individual report. None of these projects say whether a restriction was justified. All of them make it visible enough that someone else can ask."},
  {n:"12", tag:"Legitimacy",  title:"Public Record",    code:"NT-1206-D", x:590,  y:780,  rot:1,
   body:"Kialo structures arguments as trees of pro and con, letting a reader hold both sides of a claim without being handed a verdict — a different mechanism aimed at the same goal as this archive. This project departs from, rather than extends, the Uncensored Library: Reporters Without Borders' position becomes one case among sixteen here, not the frame the rest of the project is judged against."},
  {n:"13", tag:"Redaction",   title:"Declassified",     code:"NT-1301-A", x:900,  y:760,  rot:-2,
   body:"The working direction: a fully sourced version of this archive, exhibited beside a physical object it can't replace — a printed page from a real banned book. Software and a two-hundred-year-old index, side by side, making the same argument in two different materials. Not a solution. A pairing."},
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
    <div class="eyebrow">Case File Archive · 13 Documents · 16-Case Index</div>
    <div class="thesis">&ldquo;Who decides what remains unseen — and why?&rdquo;</div>
    <div class="keywords">GOVERNANCE<span class="dot">·</span>LEGITIMACY<span class="dot">·</span>REDACTION<br>THRESHOLD<span class="dot">·</span>PROTOCOL</div>
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
        <p class="doc-body">${f.body}<span class="hint">Case notes continue in appendix</span></p>
        <div class="redaction" role="button" aria-label="Reveal document ${f.n}">
          ${Array(8).fill('<div class="bar"></div>').join('')}
          <div class="stamp-hint">Declassifying…</div>
        </div>
      </div>
      ${f.gateway ? `<button class="open-archive-btn" id="openArchiveBtn">Open the full case index &rarr;</button>` : ``}
      <div class="stamp">DECLASSIFIED</div>
    </div>`;
  slideStage.appendChild(wrap);
  wrap.querySelector('.redaction').addEventListener('click', ()=> wrap.classList.add('revealed'));
  if(f.gateway){
    wrap.querySelector('#openArchiveBtn').addEventListener('click', openArchive);
  }

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

/* -------- the 16-case archive (nested inside File 08) -------- */
const ARCHIVE_TAGS = ["Governance","Legitimacy","Redaction","Threshold","Protocol"];
const ARCHIVE_CASES = [
  {id:'01', title:'The Great Firewall', tag:'Governance', actor:'state', outcome:'normalized',
   summary:'A national infrastructure of filtering and blocking that restricts access to foreign platforms and search results, justified as sovereignty over domestic information space.'},
  {id:'02', title:'NetzDG Takedown Law', tag:'Redaction', actor:'state', outcome:'contested',
   summary:'A law requiring platforms to remove hate speech and illegal content within 24 hours or face heavy fines, pushing moderation decisions onto private companies.'},
  {id:'03', title:'Gayssot Act', tag:'Legitimacy', actor:'state', outcome:'upheld',
   summary:'A law criminalizing Holocaust denial, framed as protecting historical fact and public dignity rather than restricting general political speech.'},
  {id:'04', title:"Children's Online Privacy Rule", tag:'Threshold', actor:'state', outcome:'upheld',
   summary:'Federal rules restricting how services can collect data from and target content toward children under 13.'},
  {id:'05', title:'2017 Wikipedia Block', tag:'Governance', actor:'state', outcome:'overturned',
   summary:"A nationwide block of Wikipedia lasting more than two years before being ruled unconstitutional and reversed."},
  {id:'06', title:'Regional Internet Shutdowns', tag:'Governance', actor:'state', outcome:'contested',
   summary:'Repeated, localized mobile internet shutdowns during unrest, justified on public order and security grounds.'},
  {id:'07', title:'Platform Misinformation Removal', tag:'Legitimacy', actor:'platform', outcome:'contested',
   summary:'Extensive removal and demotion of posts flagged as health or election misinformation — private editorial judgment at public-square scale.'},
  {id:'08', title:'Podcast Delisting Disputes', tag:'Redaction', actor:'platform', outcome:'contested',
   summary:'Selective removal of specific episodes accused of misinformation while the show itself stays available — a partial, editorial form of moderation.'},
  {id:'09', title:'Protection from Online Falsehoods Act', tag:'Legitimacy', actor:'state', outcome:'contested',
   summary:'A law empowering ministers to order correction notices or takedowns of statements deemed false, criticized as a tool for suppressing dissent.'},
  {id:'10', title:'Online Safety Act', tag:'Threshold', actor:'state', outcome:'upheld',
   summary:'Legislation requiring platforms to shield minors from harmful content and enforce age verification.'},
  {id:'11', title:'DMCA Takedown Notices', tag:'Protocol', actor:'commercial', outcome:'normalized',
   summary:'A system letting rights holders request removal of infringing content via formal notice — routine, and occasionally used to suppress criticism.'},
  {id:'12', title:'School Library Book Removals', tag:'Redaction', actor:'institution', outcome:'contested',
   summary:'District-level removal of books in response to content disputes, driven by local pressure rather than national law.'},
  {id:'13', title:'Social Credit Content Restriction', tag:'Governance', actor:'state', outcome:'normalized',
   summary:'Access to services tied to a citizen scoring system that can be affected by online speech, blending financial and expressive consequences.'},
  {id:'14', title:'Film Ratings Board', tag:'Threshold', actor:'institution', outcome:'normalized',
   summary:'A self-regulating industry body assigning age ratings that restrict theatrical release and marketing.'},
  {id:'15', title:'Political Account Suspensions', tag:'Legitimacy', actor:'platform', outcome:'contested',
   summary:'Suspension of prominent political accounts across several countries, with disputes over whether the standard was applied evenly.'},
  {id:'16', title:'Wartime Press Censorship', tag:'Protocol', actor:'state', outcome:'contested',
   summary:'Government review and restriction of war reporting to prevent aiding an adversary — historically normalized, still ethically disputed.'},
];

const archiveOverlay = document.getElementById('archiveOverlay');
const archiveFilters = document.getElementById('archiveFilters');
const archiveGrid = document.getElementById('archiveGrid');
let archiveActiveTag = null;

function buildArchiveFilters(){
  const allBtn = document.createElement('button');
  allBtn.className = 'af-chip active';
  allBtn.textContent = 'all';
  allBtn.onclick = () => setArchiveFilter(null, allBtn);
  archiveFilters.appendChild(allBtn);
  ARCHIVE_TAGS.forEach(tag=>{
    const btn = document.createElement('button');
    btn.className = 'af-chip';
    btn.textContent = tag.toLowerCase();
    btn.onclick = () => setArchiveFilter(tag, btn);
    archiveFilters.appendChild(btn);
  });
}
function setArchiveFilter(tag, btn){
  archiveActiveTag = tag;
  [...archiveFilters.children].forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  renderArchiveGrid();
}
function renderArchiveGrid(){
  archiveGrid.innerHTML = '';
  ARCHIVE_CASES.forEach(c=>{
    const visible = !archiveActiveTag || c.tag === archiveActiveTag;
    const card = document.createElement('div');
    card.className = 'archive-card' + (visible ? '' : ' ac-hidden');
    card.innerHTML = `
      <div class="ac-pin"></div>
      <div class="ac-head"><span class="ac-id">CASE ${c.id}</span><span class="ac-tag">${c.tag}</span></div>
      <h4 class="ac-title">${c.title}</h4>
      <div class="ac-mask">
        <div class="ac-bars"><div></div><div></div><div></div></div>
        <div class="ac-hint">click to declassify</div>
      </div>
      <p class="ac-summary">${c.summary}</p>
      <div class="ac-meta">${c.actor} &middot; ${c.outcome}</div>`;
    card.addEventListener('click', ()=> card.classList.toggle('ac-open'));
    archiveGrid.appendChild(card);
  });
}
function openArchive(){
  if(!archiveFilters.children.length){ buildArchiveFilters(); renderArchiveGrid(); }
  archiveOverlay.classList.add('open');
}
function closeArchive(){ archiveOverlay.classList.remove('open'); }
document.getElementById('archiveClose').addEventListener('click', closeArchive);
archiveOverlay.addEventListener('click', e=>{ if(e.target===archiveOverlay) closeArchive(); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && archiveOverlay.classList.contains('open')) closeArchive(); });
