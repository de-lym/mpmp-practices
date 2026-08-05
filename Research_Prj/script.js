// Array order = presentation/navigation order (sidebar + next/prev).
// File numbers (n) and qtags stay fixed to the assignment's 13 required questions.
const FILES = [
  {n:"01", tag:"Governance",  title:"The First Mark",   code:"NT-0117-A", x:280,  y:70,   rot:-2,
   qtag:"01 introduction",
   body:"The project starts with the Catholic Church's Index Librorum Prohibitorum, a list of banned books founded in 1559 and revised continuously until 1966.",
   photos:['./img/01-index-1.jpeg', './img/01-index-2.jpg'],
   snippets:["Institutional censorship has existed in organized, systematic form since at least 1559."]
  },
  {n:"02", tag:"Protocol",    title:"Chain of Custody", code:"NT-0521-A", x:1030, y:100,  rot:2,
   qtag:"02 historical lineage",
   body:"From there, censorship keeps returning in new forms. It becomes the Motion Picture Production Code enforced by the American film industry from 1934 to 1968. Then it reappears as terms-of-service agreements on digital platforms. In response to these restrictions, it eventually leads to the creation of a digital library built inside a commercial video game that provides access to information censored in certain countries.",
   photos:[ './img/07-hayscode.jpg', './img/06-instagram.jpg', './img/05-precedent-1.png'],
   snippets:["The mechanism of censorship keeps reappearing in new forms."]
  },
  {n:"03", tag:"Threshold",   title:"Precedent",    code:"NT-0414-D", x:760,  y:250,  rot:-1.5,
   qtag:"03 situated technology",
   body:"The Uncensored Library is created in 2020 by Reporters Without Borders. The idea was to place censored journalism inside Minecraft, a virtual game space that would be safe from the national firewall. However, the library did not really escape control. It simply moved from the authority of a government to the authority of a private platform, becoming subject to Mojang's terms of service and Microsoft's moderation policy.",
   photos:['./img/05-precedent-2.png', './img/05-precedent-3.jpg', './img/05-precedent-4.png', './img/05-precedent-5.jpg'],
   snippets:["A Library built to escape a national firewall ended up governed by a private platform instead."]
  },
  {n:"04", tag:"Legitimacy",  title:"Public Record",    code:"NT-1206-D", x:590,  y:780,  rot:1,
   qtag:"04 rhetorical argument",
   body:"This case shows something important. The format of an archive does not matter, because visibility is never fully released from control. Authority is only ever transferred from one controller to another. Still, censorship is not simply repression. It can protect and restrict depending on who is asking. Therefore, the real question will not be whether censorship is good or bad, but what makes a restriction turn into control, and who decides that.",
   photos:['./img/02-threshold.jpeg'],
   snippets:["The format of an archive does not matter, because visibility is never fully released from control.",
    "What makes a restriction turn into control, and who decides that?"
   ]
  },
  {n:"05", tag:"Governance",  title:"Category",     code:"NT-0602-B", x:130,  y:450,  rot:1,
  qtag:"05 keywords",
  body:"For the investigation, the project works through five terms. Governance is who holds authority to restrict. Legitimacy is whether that authority is accepted. Redaction is the technique used to cover information. Threshold is the point where restriction becomes control. Protocol is the system a restriction runs on.",
  photos:['./img/02-Office_Of_Censorship_1945.jpg', './img/02-legitimacy.jpg', './img/02-protocol-system.png', './img/02-redaction.jpg', './img/06-tiktok.png'],
  // Front page keeps exactly one line of body text (instead of the usual
  // auto-picked two) — the hub diagram below takes over from there.
  snippets:["Five terms structure this project."],
  // ===================================================================
  // PUT YOUR OWN DIAGRAM IMAGES HERE. `center.image` is the middle
  // image (always shown, never redacted). Each `nodes[i].image` is
  // that node's own thumbnail — set any of these to an image path/URL,
  // e.g. 'images/governance.jpg'. Leave one unset and a camera
  // placeholder shows instead until you fill it in.
  // ===================================================================
  diagram:{
    center:{ image:'./img/censorship.png' },
    nodes:[
      {n:"01", label:"Governance", desc:"Who holds the authority to restrict.",       image:'./img/governance.png'},
      {n:"02", label:"Legitimacy", desc:"Whether that authority is accepted.",        image:'./img/legitimacy.png'},
      {n:"03", label:"Redaction",  desc:"Cover material rather than delete it.",      image:'./img/redaction.png'},
      {n:"04", label:"Threshold",  desc:"Where protection turns into control.",       image:'./img/threshold.png'},
      {n:"05", label:"Protocol",   desc:"The system a restriction runs on.",          image:'./img/protocol.png'},
    ]}
  },
  {n:"06", tag:"Legitimacy",  title:"Who Signs",        code:"NT-0223-B", x:560,  y:40,   rot:1.5,
   qtag:"06 research question",
   body:"And by defining these terms, it leads to one central question. Would the authority behind a decision about visibility remain credible once that decision became transparent?",
   photos:['./img/censor-book.jpg'],
   snippets:["Would the authority behind a decision about visibility remain credible once that decision became transparent?"]
  },
  {n:"07", tag:"Redaction",   title:"The Archive",      code:"NT-0825-D", x:700,  y:500,  rot:1.5,
   qtag:"07 computational experiments",
   body:"As a process of research, collected data transferred into an interactive archive that holds sixteen historical and contemporary cases. Each of them are filtered through the five terms that is predefined earlier and then visualized into two formats: <br>A case index lists all sixteen restrictions categorized under five terms. <br>A threshold map plots each case somewhere between protective and repressive, and readers can adjust a lever representing the concentration of authority. As they move it, related keywords be revealed.",
   gateway:true, photos:['./img/08-archive-1.png', './img/08-archive-2.png', './img/08-archive-3.png', './img/08-archive-4.jpg', './img/08-archive-5.jpg'],
   snippets:["The archive lets readers actively place each case somewhere between protective and repressive, rather than being told where it belongs."]
  },
  {n:"08", tag:"Redaction",   title:"The Black Bar",    code:"NT-0309-C", x:470,  y:280,  rot:2,
   qtag:"08 visual representation",
   body:"Each redaction bar represents an authorized decision to censor the information. As audiences engage with it, they gradually remove that restriction themselves. Instead of deciding for the audience, the archive makes the act of classifying something as censorship visible, and the whole system is built to recreate the friction of an actual declassification review.",
   photos:['./img/04-redaction-1.jpg', './img/04-redaction-2.jpg', './img/04-redaction-5.jpg'],
   snippets:["The redaction bar interaction is designed to recreate the friction of a real declassification review."]
  },
  {n:"09", tag:"Threshold",   title:"Application",       code:"NT-0904-A", x:980,  y:430,  rot:-1,
   qtag:"09 methods",
   body:"The project itself is composed of three parts, material, dataset, and archive. Material is a physical index of censorship cases drawn from legislative history in the United States. Dataset is a network diagram mapping raw historical data against rhetorical keywords, left intentionally dense because it represents data that has not yet been classified. Archive is the interactive format I just described, where selected cases become something audiences can actually explore.",
   photos:['./img/material-photo-1.jpg', './img/censorship-casefile-poster.jpg', './img/website.png'],
   snippets:["Material, dataset, and archive move the project from raw, unclassified data toward a structured, explorable format."]
  },
  {n:"10", tag:"Governance",  title:"The Appeal",       code:"NT-1128-C", x:270,  y:760,  rot:-1.5,
   qtag:"10 community of practice (projects)",
   body:"This project builds on related work. Harvard's Lumen Database collects takedown notices without judging them. OONI, Citizen Lab, and the University of Michigan's Censored Planet measure internet censorship worldwide through automated methods. The Electronic Frontier Foundation documents platform takedowns case by case. The National Coalition Against Censorship keeps a public timeline for advocacy rather than neutral measurement. Kialo structures arguments as trees instead of case files, a different approach toward a similar goal.",
   photos:['./img/10-project-1.png', './img/10-project-2.png', './img/10-project-3.png', './img/10-project-4.png', './img/10-project-5.png'],
   snippets:["Existing projects either measure censorship at scale or advocate against it, but few turn it into an interpretive experience for the audience."]
  },
  {n:"11", tag:"Legitimacy",  title:"The Classifier",   code:"NT-0718-C", x:420,  y:530,  rot:-2,
   qtag:"11 intersecting fields · community of practice (readings)",
   body:"The theoretical foundation draws on three ideas, and each one shapes a specific decision in the project.<br>Michel Foucault argued that power rarely works through outright prohibition. It works through surveillance and classification, through the quiet act of sorting information into categories. That is why this archive treats classification itself as the object of study. The five terms and the threshold map do not just describe restrictions, they make the act of classifying something as censorship visible, which is the exact mechanism Foucault said usually stays hidden.<br>Benjamin Bratton describes computation as a layered, sovereign stack, where authority moves between states, platforms, and infrastructure instead of sitting in one place. The Uncensored Library case shows this directly. When the project moved from a state firewall into Minecraft, it did not leave sovereignty behind, it moved into a different layer of the same stack, from national governance to platform governance.<br>Data feminism argues that data is never neutral, because personal narrative always shapes how information gets collected and used. That is why the archive gives the audience a lever instead of a conclusion. Interpretation stays with the audience, not with the provider.",
   photos:['./img/11-bretton.jpg', './img/11-data-femi.jpg', './img/11-foucault.jpg'],
   snippets:["Foucault, Bratton, and data feminism each explain a specific design choice, not just a general framing, classification made visible, authority as layered, interpretation left to the audience."]
  },
  {n:"12", tag:"Protocol",    title:"Sunset Clause",    code:"NT-1012-B", x:1230, y:330,  rot:2.5,
   qtag:"12 challenges",
   body:"This case file borrows its structure from the Index, but it is meant to stay open to appeal, not to act as a closed verdict.<br>That said, this project is still more of a database raising questions than a method answering them. So the real challenge going forward is deciding what comes next. While avoding returning to censorship, building a completely new system, or settling somewhere in between either, would it be possible to provide audiences authority over their own interpretation, instead of handing that authority to the provider?",
   photos:['./img/12-challenge-1.png', './img/12-challenge-5.png'],
   snippets:["Would it be possible to provide audiences authority over their own interpretation, instead of handing that authority to the provider?"]
  },
  {n:"13", tag:"Redaction",   title:"Declassified",     code:"NT-1301-A", x:900,  y:760,  rot:-2,
   qtag:"13 capstone direction",
   body:"So can an archive ever escape control? Based on this research, it cannot. But that leads to a more useful question. Can an archive at least make its own conditions of control visible, instead of pretending those conditions do not exist? This project does not answer that fully. It leaves the question open.",
   photos:['./img/13-1.png', './img/13-2.jpg', './img/13-3.jpg', './img/13-8.jpeg'],
   snippets:["Can an archive ever escape control?",
    "Can an archive at least make its own conditions of control visible, instead of pretending those conditions do not exist?"
   ]
  },
];
const TITLE_POS = {x:20, y:60};
// Index pairs below refer to POSITION in the FILES array above, not file number,
// remapped after reordering FILES so the original web of connections (by file number) still holds.
const LINKS = [[0,2],[2,3],[3,4],[4,6],[1,10],[10,7],[7,8],[8,11],[9,5],[5,12],
               [0,1],[2,10],[3,7],[4,8],[6,11],[1,9],[10,5],[7,12],[11,12]];
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
titleNode.tabIndex = 0;
titleNode.style.cursor = 'pointer';
titleNode.setAttribute('aria-label', 'Zoom into title card');
titleNode.innerHTML = `
  <div class="pin"></div>
  <div class="paper">
    <div class="eyebrow">The Censorship Casefile</div>
    <div class="thesis">&ldquo;Who decides what remains unseen, and why?&rdquo;</div>
    <div class="keywords">from the history of censorship to the sustainability of archive undere the computational technology</div>
  </div>`;
boardCanvas.appendChild(titleNode);
// keyboard equivalent of tapping the title card (see clickCandidate below
// for the pointer/tap version) — replays the zoom-into-title flourish.
titleNode.addEventListener('keydown', e=>{
  if(e.key==='Enter'||e.key===' '){ e.preventDefault(); zoomToTitleIntro(); }
});

/* -------- home board nodes (overlapping, grayscale) -------- */
FILES.forEach((f,idx)=>{
  const node = document.createElement('div');
  node.className='node';
  node.dataset.n = f.n;
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
  /* navigation on pointer tap is handled centrally by the viewport's own
     pointer handlers below (see clickCandidate) — the viewport captures
     the pointer for panning, which can swallow a plain 'click' listener
     here, so a tap is detected by movement distance instead. Keyboard
     activation still works directly. */
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

/* -------- tight content bounds --------
   The nominal canvas (CW x CH) is padded well beyond where the nodes
   actually sit, so fitting to it leaves a lot of dead space. The FIT
   button (and the initial view) instead fit to the real bounding box of
   the title card + document nodes, computed once from their laid-out
   positions. clampPan() still uses the full CW/CH so free dragging isn't
   restricted to just the cluster. */
function computeContentBounds(){
  const els = boardCanvas.querySelectorAll('.node, .title-node');
  let minX=Infinity, minY=Infinity, maxX=-Infinity, maxY=-Infinity;
  els.forEach(el=>{
    const l=el.offsetLeft, t=el.offsetTop, w=el.offsetWidth, h=el.offsetHeight;
    minX=Math.min(minX,l); maxX=Math.max(maxX,l+w);
    minY=Math.min(minY,t); maxY=Math.max(maxY,t+h);
  });
  const pad=28; // small allowance for pins/shadows overflowing each card's box
  return {minX:minX-pad, minY:minY-pad, maxX:maxX+pad, maxY:maxY+pad};
}
const contentBounds = computeContentBounds();

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
  const b = contentBounds;
  const w = b.maxX-b.minX, h = b.maxY-b.minY;
  scale = Math.min(vw/w, vh/h) * 0.96;
  panX = (vw - w*scale)/2 - b.minX*scale;
  panY = (vh - h*scale)/2 - b.minY*scale;
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

// tap-to-open a board node (or re-zoom the title card): the viewport
// captures the pointer for panning (see setPointerCapture below), which
// redirects the browser's own 'click' event to the viewport rather than
// the element underneath it, so plain 'click' listeners on those elements
// can't be relied on. Instead we track which element (if any) a
// single-pointer gesture started on, and treat it as a tap only if the
// pointer barely moved before lifting, distinguishing it from a drag/pan.
let clickCandidate = null, clickStartX = 0, clickStartY = 0;
const TAP_TOLERANCE = 6;

viewport.addEventListener('pointerdown', e=>{
  interacted = true;
  pointers.set(e.pointerId, {x:e.clientX, y:e.clientY});
  viewport.setPointerCapture(e.pointerId);
  if(pointers.size===1){
    dragging=true; viewport.classList.add('dragging');
    sx=e.clientX; sy=e.clientY; startX=panX; startY=panY;
    clickCandidate = e.target.closest('.node, .title-node');
    clickStartX = e.clientX; clickStartY = e.clientY;
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
  if(e.type==='pointerup' && clickCandidate){
    const moved = Math.hypot(e.clientX-clickStartX, e.clientY-clickStartY);
    if(moved < TAP_TOLERANCE){
      if(clickCandidate.classList.contains('node')) go(clickCandidate.dataset.n);
      else if(clickCandidate.classList.contains('title-node')) zoomToTitleIntro();
    }
  }
  clickCandidate = null;
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

// -------- one-time opening zoom into the title card --------
// Plays only on the very first page load/refresh, after a beat, while the
// board is showing. Returning to the board later via the "board" button
// (goHome) does NOT replay this — it's a single opening flourish only.
let introPlayed = false;
function zoomToTitleIntro(){
  const vw = viewport.clientWidth, vh = viewport.clientHeight;
  if(vw===0||vh===0) return;
  const targetScale = 1.75; // intensely close, near the max zoom level
  // title card center, in board-canvas coordinates
  const titleCenterX = TITLE_POS.x + 160; // title-node is 320px wide
  const titleCenterY = TITLE_POS.y + 85;  // approx half its rendered height
  scale = targetScale;
  panX = vw/2 - titleCenterX*targetScale;
  panY = vh/2 - titleCenterY*targetScale;
  boardCanvas.classList.add('intro-transition');
  apply();
  boardCanvas.addEventListener('transitionend', ()=>{
    boardCanvas.classList.remove('intro-transition');
  }, {once:true});
}
window.addEventListener('load', ()=>{
  fitToViewport();
  if(!introPlayed && !current){
    introPlayed = true;
    setTimeout(()=>{
      if(!interacted && !current) zoomToTitleIntro();
    }, 1000);
  }
});
window.addEventListener('resize', ()=>{
  clearTimeout(window._fr);
  window._fr = setTimeout(()=>{ if(!interacted) fitToViewport(); else { clampPan(); apply(); } }, 120);
});
fitToViewport();

/* -------- slide docs -------- */

// Default number of photos a document gets if it doesn't define its own `photos` array.
const DEFAULT_PHOTO_COUNT = 2;

// Scatters a photo somewhere over the document: random side (left/right), random vertical
// position across the doc's height, random rotation, and slight size variation so they don't
// all look like identical prints. Retries against already-placed photos on the same document
// so two photos never overlap each other (a 16px buffer is kept between them too).
function randomPhotoPlacement(existingRects){
  const docWidth = 480; // matches .slide-doc-wrap width
  const pad = 16;
  let best = null;
  for(let tries=0; tries<50; tries++){
    const side = Math.random() < 0.5 ? 'left' : 'right';
    const sideVal = Math.round(-90 + Math.random()*130);   // can bleed past the doc edge
    const topVal = Math.round(-50 + Math.random()*560);    // spread across the full doc height
    const rot = Math.round(Math.random()*26 - 13);         // -13deg .. 13deg
    const w = Math.round(163 + Math.random()*58);          // 163px .. 221px
    const h = Math.round(w * 0.74);
    const left = side === 'left' ? sideVal : (docWidth - sideVal - w);
    const rect = {left: left-pad, top: topVal-pad, right: left+w+pad, bottom: topVal+h+pad};
    const overlaps = (existingRects||[]).some(r =>
      rect.left < r.right && rect.right > r.left && rect.top < r.bottom && rect.bottom > r.top);
    const candidate = {side, sideVal, topVal, rot, w, h, rect};
    if(!overlaps) return candidate;
    if(!best) best = candidate; // fallback if 50 tries can't find a free spot
  }
  return best;
}

// The rect the corner photo occupies at its fixed, default CSS position
// (top:-16px, right:34px, 150x112 — see .slide-photo-corner). Seeded into
// the collision check below so the randomly-scattered photos never land
// under it.
const CORNER_PHOTO_RECT = (()=>{
  const docWidth = 480, w = 190, h = 141, top = -16, right = 34, pad = 16;
  const left = docWidth - right - w;
  return {left:left-pad, top:top-pad, right:left+w+pad, bottom:top+h+pad};
})();

function renderPhotos(f){
  // To add your own images to a file: give that FILES entry a `photos` array of image
  // paths/URLs, e.g. photos:['images/file01-a.jpg','images/file01-b.jpg','images/file01-c.jpg'].
  // Any number of entries works, they don't have to be exactly 2. Leave `photos` off (or empty)
  // and the file falls back to DEFAULT_PHOTO_COUNT placeholder camera-icon photos instead.
  const list = (f.photos && f.photos.length) ? f.photos : (f.photos ? [] : new Array(DEFAULT_PHOTO_COUNT).fill(null));

  // First photo is the "corner" photo: always the same fixed spot, always sitting on
  // top of and blocking the top-right corner of the whole stack. Only its rotation
  // is randomized. Otherwise it behaves just like any other photo (draggable, zoomable).
  const [cornerSrc, ...restSrcs] = list;
  const cornerRot = Math.round(Math.random()*20 - 10); // -10deg .. 10deg
  const cornerInner = cornerSrc
    ? `<img src="${cornerSrc}" alt="" draggable="false">`
    : `${camera}<span>Photo pending</span>`;
  const cornerHTML = `<div class="slide-photo slide-photo-corner" id="photo-${f.n}-corner"
      style="--rot:${cornerRot}deg;">
      <div class="pin"></div>${cornerInner}
    </div>`;

  // Remaining photos: scattered, draggable, freely zoomable — avoiding the corner photo's spot.
  const placedRects = [CORNER_PHOTO_RECT];
  const scatterHTML = restSrcs.map((src, i)=>{
    const p = randomPhotoPlacement(placedRects);
    placedRects.push(p.rect);
    const inner = src
      ? `<img src="${src}" alt="" draggable="false">`
      : `${camera}<span>Photo pending</span>`;
    return `<div class="slide-photo" id="photo-${f.n}-${i}"
      style="top:${p.topVal}px; ${p.side}:${p.sideVal}px; width:${p.w}px; height:${p.h}px; --rot:${p.rot}deg; z-index:${5+i};">
      <div class="pin"></div>${inner}
    </div>`;
  }).join('');

  return cornerHTML + scatterHTML;
}

// If a file doesn't define its own `snippets` array, pull one or two short highlight
// lines out of its body paragraph automatically (first ~10 words of a couple of sentences).
function autoSnippets(body){
  const sentences = (body.match(/[^.!?]+[.!?]+/g) || [body]).map(s=>s.trim()).filter(Boolean);
  const trim = s=>{
    const words = s.split(/\s+/);
    return words.length>10 ? words.slice(0,10).join(' ')+'…' : s;
  };
  const picks = [];
  if(sentences[0]) picks.push(trim(sentences[0]));
  if(sentences.length>2) picks.push(trim(sentences[Math.min(2, sentences.length-1)]));
  return picks.slice(0,2);
}
// Deterministic per-snippet tilt so two lines on the same file always angle differently.
function snippetRot(f, i){
  const seed = f.n.charCodeAt(0) + f.n.charCodeAt(1) + i*17;
  const mag = 2 + (seed % 4); // 2..5deg
  return (i % 2 === 0 ? -1 : 1) * mag;
}
// Breaks a snippet's text into short chunks so each one can get its own
// redaction bar — this is what makes the reveal cascade line by line
// instead of covering a whole paragraph with one bar.
function splitIntoRedactedLines(text, wordsPerLine){
  const words = text.split(/\s+/);
  const lines = [];
  for(let i=0; i<words.length; i+=wordsPerLine){
    lines.push(words.slice(i, i+wordsPerLine).join(' '));
  }
  return lines;
}
function renderFrontBody(f){
  const snippets = (f.snippets && f.snippets.length) ? f.snippets : autoSnippets(f.body);
  
  // ===================================================================
  // PUT YOUR OWN FRONT-PAGE IMAGE(S) HERE.
  // Give a FILES[] entry `frontImage: 'images/your-file.jpg'` to show a
  // single inline image right under the title, above the redacted text
  // (see the `.doc-front-image` CSS rule for its box/size). Want it to
  // sit somewhere else, or want more than one, just move/duplicate the
  // line below.
  // ===================================================================
  const imageHTML = f.frontImage
    ? `<div class="doc-front-image"><img src="${f.frontImage}" alt=""></div>`
    : ``;

  // running line counter across ALL snippets on this page, so the
  // redaction reveal cascades top to bottom across the whole front page
  // rather than resetting per snippet
  let lineCounter = 0;
  const snippetsHTML = snippets.map((s,i)=>{
    const lines = splitIntoRedactedLines(s, 4); // ~4 words per redacted line
    const linesHTML = lines.map(line=>{
      const li = lineCounter++;
      return `<div class="doc-snippet-line" style="--li:${li}">
        <p class="doc-snippet">${line}</p>
        <span class="redact-bar"></span>
      </div>`;
    }).join('');
    return `<div class="doc-snippet-block" style="transform:rotate(${snippetRot(f,i)}deg)">${linesHTML}</div>`;
  }).join('');

  // diagram section (currently only File 06 defines `diagram`) — placed
  // right after the text, continuing the same running --li counter so its
  // labels/thumbnails reveal in sequence right after the text above them
  const diagramHTML = f.diagram ? renderDiagram(f.diagram, lineCounter) : ``;

  const gatewayHTML = f.gateway ? `<div class="gateway-btns">
    <button class="open-archive-btn" id="openArchiveBtn">Open the case index &rarr;</button>
    <button class="open-archive-btn" id="openWordmapBtn">Open the threshold map &rarr;</button>
  </div>` : ``;
  return imageHTML + snippetsHTML + diagramHTML + gatewayHTML;
}

//NEED TO BE REVISED

// Renders the hub-and-spoke diagram (center image + 5 labeled satellite
// nodes) used on File 06's front page. `startLi` continues the page's
// running redact-bar stagger index so these reveal right after the text.
const DGM_POS = ['top','left','right','bl','br'];
// Connector line endpoints, hand-matched to the .dgm-pos-* CSS positions
// and the 350×560 .dgm-canvas box. Center hub sits at (175,225), 50px radius.
const DGM_LINES = [
  'M175,180 L175,84',   // hub -> top
  'M129,201 L60,206',   // hub -> left
  'M221,201 L290,206',  // hub -> right
  'M148,258 L30,444',    // hub -> bottom-left top-middle
  'M202,258 L320,444',   // hub -> bottom-right top-middle
];
function renderDiagram(d, startLi){
  const centerInner = d.center && d.center.image
    ? `<img src="${d.center.image}" alt="">`
    : camera;

  const nodesHTML = d.nodes.map((node,i)=>{
    const li = startLi + i;
    const thumbInner = node.image
      ? `<img src="${node.image}" alt="" draggable="false">`
      : camera;
    return `<div class="dgm-node dgm-pos-${DGM_POS[i]}">
      <div class="dgm-thumb-wrap" data-dgm-thumb style="--li:${li}">
        ${thumbInner}
        <span class="redact-bar"></span>
      </div>
      <div class="dgm-tag">${node.n}</div>
      <div class="dgm-label-wrap" style="--li:${li}">
        <div class="dgm-label">${node.label}</div>
        <span class="redact-bar"></span>
      </div>
      <div class="dgm-desc">${node.desc}</div>
    </div>`;
  }).join('');

  const linesHTML = DGM_LINES.map(p=>`<path d="${p}"/>`).join('')
    + DGM_LINES.map(p=>{
        const [, x, y] = p.match(/M([\d.]+),([\d.]+)/);
        return `<circle cx="${x}" cy="${y}" r="3"/>`;
      }).join('');

  return `<div class="doc-diagram">
    <div class="dgm-canvas">
      <svg class="dgm-lines" viewBox="0 0 350 560" preserveAspectRatio="xMidYMid meet">${linesHTML}</svg>
      <div class="dgm-center">${centerInner}</div>
      ${nodesHTML}
    </div>
  </div>`;
}

// Any number of photos on a document can be zoomed at once — no cap,
// no eviction. Each photo's zoom state is independent of the others.
function toggleZoom(photo){
  photo.classList.toggle('zoomed');
}

// Each file gets its own fixed front/back sheet angles, generated once at build time
// (kept moderate and pushed to opposite sides so the two sheets always read as distinct).
function sheetAngles(){
  const front = (Math.random()*3 + 1) * (Math.random()<0.5 ? -1 : 1); // ~1..4deg
  let back = (Math.random()*3 + 2) * (Math.random()<0.5 ? -1 : 1);    // ~2..5deg
  if(Math.sign(back)===Math.sign(front)) back *= -1; // keep them leaning opposite ways
  return {front, back};
}

FILES.forEach((f,idx)=>{
  const wrap = document.createElement('div');
  wrap.className='slide-doc-wrap';
  wrap.id='slide-'+f.n;
  const angles = sheetAngles();
  // shared markup for the back sheet's content, reused for both faces
  // (front=blurred/closed, back=clear/open) so a single flip can reveal
  // the correctly-oriented face rather than the same one rotated.
  const backContentHTML = `
    <div class="doc-head"><span class="doc-num">FILE ${f.n}, ${f.code}</span><span class="doc-cat">${f.tag}</span></div>
    <div class="doc-qtag">${f.qtag}</div>
    <h2 class="doc-title">${f.title}</h2>
    <p class="doc-body">${f.body}</p>`;
  wrap.innerHTML = `
    ${renderPhotos(f)}
    <div class="doc-stack" style="--front-rot:${angles.front.toFixed(1)}deg; --back-rot:${angles.back.toFixed(1)}deg;">
      <div class="doc-sheet doc-front">
        <div class="doc-head"><span class="doc-num">FILE ${f.n}, ${f.code}</span><span class="doc-cat">${f.tag}</span></div>
        <div class="doc-qtag">${f.qtag}</div>
        <h2 class="doc-title">${f.title}</h2>
        <div class="doc-front-body">${renderFrontBody(f)}</div>
        <div class="stamp">DECLASSIFIED</div>
      </div>
      <div class="doc-back" role="button" aria-label="Reveal document ${f.n}">
        <div class="doc-sheet doc-back-flip">
          <div class="doc-back-face doc-back-face-front">${backContentHTML}</div>
          <div class="doc-back-face doc-back-face-back">${backContentHTML}</div>
        </div>
      </div>
    </div>`;
  slideStage.appendChild(wrap);
  if(f.gateway){
    wrap.querySelector('#openArchiveBtn').addEventListener('click', e=>{ e.stopPropagation(); openArchive(); });
    wrap.querySelector('#openWordmapBtn').addEventListener('click', e=>{ e.stopPropagation(); openWordmap(); });
  }

  /* the flip plays on .doc-back-flip (isolated from the outer sheet's
     static position/tilt), pivoting on its own centerline, exactly one
     hinge turn per click. Each click reverses the previous one — open
     rotates 0 -> -180, and the next click rewinds -180 -> 0 back through
     the same motion, rather than continuing on to -360. The front face
     (blurred) and back face (clear) swap over via the flip itself. */
  const back = wrap.querySelector('.doc-back');
  const flipEl = wrap.querySelector('.doc-back-flip');
  flipEl._flipOpen = false; // per-document resting state, reset on nav-away
  back.addEventListener('click', ()=>{
    const from = flipEl._flipOpen ? -180 : 0;
    const to = flipEl._flipOpen ? 0 : -180; // rewind back the way it came, never past 0/-180
    flipEl.style.setProperty('--flip-from', from+'deg');
    flipEl.style.setProperty('--flip-to', to+'deg');
    flipEl.classList.remove('flip-play');
    void flipEl.offsetWidth; // force reflow so the animation can replay
    flipEl.classList.add('flip-play');
    flipEl._flipOpen = !flipEl._flipOpen;
    back.classList.toggle('open', flipEl._flipOpen);
    flipEl.addEventListener('animationend', ()=>{
      flipEl.classList.remove('flip-play');
      flipEl.style.setProperty('--flip-rot', to+'deg');
    }, {once:true});
  });

  /* draggable + click-to-zoom photos, corner photo included */
  wrap.querySelectorAll('.slide-photo').forEach(photo=>{
    let pdrag=false, moved=false, px=0, py=0, ox=0, oy=0, sideProp='right';
    photo.addEventListener('pointerdown', e=>{
      e.stopPropagation();
      pdrag=true; moved=false; px=e.clientX; py=e.clientY;
      sideProp = photo.style.left ? 'left' : 'right';
      const style=getComputedStyle(photo);
      ox=parseFloat(style[sideProp]) || 0; oy=parseFloat(style.top) || 0;
      photo.setPointerCapture(e.pointerId);
    });
    photo.addEventListener('pointermove', e=>{
      if(!pdrag || photo.classList.contains('zoomed')) return;
      const dx=e.clientX-px, dy=e.clientY-py;
      if(Math.abs(dx)>3 || Math.abs(dy)>3) moved = true;
      photo.style[sideProp] = (sideProp==='right' ? ox-dx : ox+dx)+'px';
      photo.style.top = (oy+dy)+'px';
    });
    photo.addEventListener('pointerup', ()=>{
      if(pdrag && !moved) toggleZoom(photo);
      pdrag=false;
    });
    photo.addEventListener('pointerleave', ()=>{ pdrag=false; });
  });

  // diagram thumbnails (section 02): plain click-to-zoom, no drag — click
  // again (or click elsewhere on the thumb) to shrink back to normal size
  wrap.querySelectorAll('.dgm-thumb-wrap').forEach(thumb=>{
    thumb.addEventListener('click', e=>{
      e.stopPropagation();
      toggleZoom(thumb);
    });
  });
});

/* -------- navigation -------- */
// replays the redaction-bar slide-off animation on a document's front page
function replayRedactBars(wrap){
  wrap.querySelectorAll('.redact-bar').forEach(bar=>{
    bar.style.animation = 'none';
    void bar.offsetWidth; // force reflow so the animation restarts
    bar.style.animation = '';
  });
}
// replays the DECLASSIFIED rubber-stamp slam animation
function replayStamp(wrap){
  wrap.querySelectorAll('.stamp').forEach(stamp=>{
    stamp.style.animation = 'none';
    void stamp.offsetWidth; // force reflow so the animation restarts
    stamp.style.animation = '';
  });
}
// resets a document's back sheet to its closed/blurred resting state
// (used when navigating away, so revisiting a file starts fresh)
function resetBackFlip(prevBack){
  if(!prevBack) return;
  prevBack.classList.remove('open');
  const flipEl = prevBack.querySelector('.doc-back-flip');
  if(!flipEl) return;
  flipEl.classList.remove('flip-play');
  flipEl._flipOpen = false;
  flipEl.style.removeProperty('--flip-rot');
}
let current = null;
function go(n){
  document.getElementById('home-view').classList.remove('active');
  document.getElementById('slide-view').classList.add('active');
  if(current){
    const prev = document.getElementById('slide-'+current);
    prev.classList.remove('active');
    prev.querySelectorAll('.slide-photo.zoomed, .dgm-thumb-wrap.zoomed').forEach(p=>p.classList.remove('zoomed'));
    resetBackFlip(prev.querySelector('.doc-back'));
  }
  current = n;
  const wrap = document.getElementById('slide-'+n);
  wrap.classList.add('active');
  replayRedactBars(wrap);
  replayStamp(wrap);
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+n).classList.add('active');
  updateNav();
  location.hash = 'f' + n;
}
function goHome(){
  if(current){
    const prev = document.getElementById('slide-'+current);
    prev.classList.remove('active');
    prev.querySelectorAll('.slide-photo.zoomed, .dgm-thumb-wrap.zoomed').forEach(p=>p.classList.remove('zoomed'));
    resetBackFlip(prev.querySelector('.doc-back'));
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
  {id:'01', title:'The Great Firewall', tag:'Governance', actor:'state', outcome:'normalized', pos:87,
   note:'Rated toward the concentrated end. Filtering runs at the national gateway with no independent appeal.',
   year:'1998 to ongoing', location:'China',
   mechanism:'DNS filtering, IP blocking, and keyword inspection at the national gateway level',
   kw:['china','infrastructure','ongoing'],
   summary:'A national infrastructure of filtering and blocking that restricts access to foreign platforms and search results, justified as sovereignty over domestic information space.'},
  {id:'02', title:'NetzDG Takedown Law', tag:'Redaction', actor:'state', outcome:'contested', pos:51,
   note:'Rated mid scale. The state sets the rule, but a private platform executes it under fine pressure, and the law itself has faced public and legal challenge.',
   year:'2017', location:'Germany',
   mechanism:'Statutory 24 hour takedown mandate enforced through fines on platform operators',
   kw:['germany','platform law','hate speech'],
   summary:'A law requiring platforms to remove hate speech and illegal content within 24 hours or face heavy fines, pushing moderation decisions onto private companies.'},
  {id:'03', title:'Gayssot Act', tag:'Legitimacy', actor:'state', outcome:'upheld', pos:50,
   note:'Rated mid scale. Speech is criminalized, but prosecution runs through ordinary courts with appeal rights attached.',
   year:'1990', location:'France',
   mechanism:'Criminal statute prosecuted through the French courts',
   kw:['france','historical memory','upheld'],
   summary:'A law criminalizing Holocaust denial, framed as protecting historical fact and public dignity rather than restricting general political speech.'},
  {id:'04', title:"Children's Online Privacy Rule", tag:'Threshold', actor:'state', outcome:'upheld', pos:26,
   note:'Rated toward the checked end, and still the lowest score in this archive. A public rulemaking process and agency oversight exist, but an agency still unilaterally restricts, so no case gets to be purely protective.',
   year:'1998 (COPPA), rule active', location:'United States',
   mechanism:'FTC regulatory rule enforced through civil penalties',
   kw:['usa','minors','data'],
   summary:'Federal rules restricting how services can collect data from and target content toward children under 13.'},
  {id:'05', title:'2017 Wikipedia Block', tag:'Governance', actor:'state', outcome:'overturned', pos:75,
   note:'Rated toward the concentrated end. Full administrative authority was exercised for over two years before any court intervened.',
   year:'2017 to 2020', location:'Turkey',
   mechanism:'Administrative ISP level block, later reversed by constitutional court ruling',
   kw:['turkey','overturned','court ruling'],
   summary:"A nationwide block of Wikipedia lasting more than two years before being ruled unconstitutional and reversed."},
  {id:'06', title:'Regional Internet Shutdowns', tag:'Governance', actor:'state', outcome:'contested', pos:79,
   note:'Rated toward the concentrated end. Regional authorities can repeat the order with little independent review each time.',
   year:'2012 to ongoing', location:'India',
   mechanism:'Mobile network shutdown orders issued by regional authorities',
   kw:['india','security','recurring'],
   summary:'Repeated, localized mobile internet shutdowns during unrest, justified on public order and security grounds.'},
  {id:'07', title:'Platform Misinformation Removal', tag:'Legitimacy', actor:'platform', outcome:'contested', pos:56,
   note:'Rated mid scale. A private platform applies its own criteria at public scale, with an appeal path that stays largely opaque.',
   year:'2020 to 2022', location:'Global (US centered)',
   mechanism:'Private platform policy enforcement via automated and human review',
   kw:['platform policy','health','elections'],
   summary:'Extensive removal and demotion of posts flagged as health or election misinformation, private editorial judgment at public square scale.'},
  {id:'08', title:'Podcast Delisting Disputes', tag:'Redaction', actor:'platform', outcome:'contested', pos:47,
   note:'Rated mid scale. Narrower in reach than platform wide moderation, but still one company\'s unilateral call.',
   year:'2022', location:'United States',
   mechanism:'Selective episode removal under platform content policy',
   kw:['audio platform','selective removal'],
   summary:'Selective removal of specific episodes accused of misinformation while the show itself stays available, a partial, editorial form of moderation.'},
  {id:'09', title:'Protection from Online Falsehoods Act', tag:'Legitimacy', actor:'state', outcome:'contested', pos:83,
   note:'Rated toward the concentrated end. A minister can order a correction or takedown directly, with little independent review built into the process.',
   year:'2019', location:'Singapore',
   mechanism:'Ministerial correction and takedown directives under statute (POFMA)',
   kw:['singapore','fake news law'],
   summary:'A law empowering ministers to order correction notices or takedowns of statements deemed false, criticized as a tool for suppressing dissent.'},
  {id:'10', title:'Online Safety Act', tag:'Threshold', actor:'state', outcome:'upheld', pos:43,
   note:'Rated toward the checked end. A statutory regulator enforces the rule, and formal appeal routes exist even though the penalties are real.',
   year:'2023', location:'United Kingdom',
   mechanism:'Statutory duty of care enforced by regulator (Ofcom) with age verification requirements',
   kw:['uk','minors','platform duty'],
   summary:'Legislation requiring platforms to shield minors from harmful content and enforce age verification.'},
  {id:'11', title:'DMCA Takedown Notices', tag:'Protocol', actor:'commercial', outcome:'normalized', pos:38,
   note:'Rated toward the checked end. Any rights holder can trigger a takedown unilaterally, but a counter notice process exists, even if the two sides remain unevenly matched.',
   year:'1998 to ongoing', location:'United States',
   mechanism:'Formal notice and takedown procedure under federal copyright law',
   kw:['usa','copyright','routine'],
   summary:'A system letting rights holders request removal of infringing content via formal notice, routine, and occasionally used to suppress criticism.'},
  {id:'12', title:'School Library Book Removals', tag:'Redaction', actor:'institution', outcome:'contested', pos:60,
   note:'Rated mid scale. An elected local board makes the call, which offers some accountability, though the pattern is often driven by ideological pressure.',
   year:'2021 to ongoing', location:'United States (multiple districts)',
   mechanism:'Local school board review and removal decisions',
   kw:['usa','education','local'],
   summary:'District level removal of books in response to content disputes, driven by local pressure rather than national law.'},
  {id:'13', title:'Social Credit Content Restriction', tag:'Governance', actor:'state', outcome:'normalized', pos:90,
   note:'Rated toward the concentrated end. Criteria stay opaque and cross domains, with little independent appeal.',
   year:'2014 to ongoing', location:'China',
   mechanism:'Scoring system linking online conduct to access restrictions on services',
   kw:['china','scoring system','ongoing'],
   summary:'Access to services tied to a citizen scoring system that can be affected by online speech, blending financial and expressive consequences.'},
  {id:'14', title:'Film Ratings Board', tag:'Threshold', actor:'institution', outcome:'normalized', pos:31,
   note:'Rated toward the checked end. An unelected industry board still controls real distribution and marketing access, which is why even a voluntary system does not score near the floor.',
   year:'1968 to ongoing', location:'United States',
   mechanism:'Voluntary industry self regulation (MPA rating system) tied to distribution and marketing',
   kw:['industry regulation','film','longstanding'],
   summary:'A self regulating industry body assigning age ratings that restrict theatrical release and marketing.'},
  {id:'15', title:'Political Account Suspensions', tag:'Legitimacy', actor:'platform', outcome:'contested', pos:65,
   note:'Rated mid scale. Global private platforms enforce the same rule inconsistently across accounts and countries.',
   year:'2018 to 2023', location:'Global (multiple countries)',
   mechanism:'Platform trust and safety enforcement against political accounts',
   kw:['platform policy','politicians','global'],
   summary:'Suspension of prominent political accounts across several countries, with disputes over whether the standard was applied evenly.'},
  {id:'16', title:'Wartime Press Censorship', tag:'Protocol', actor:'state', outcome:'contested', pos:70,
   note:'Rated toward the concentrated end. Wartime executive power historically left little room to contest a decision while the review board was active.',
   year:'1917 to 1945 (recurring)', location:'United States / United Kingdom',
   mechanism:'Government pre publication review boards for war reporting',
   kw:['historical','wartime','press'],
   summary:'Government review and restriction of war reporting to prevent aiding an adversary, historically normalized, still ethically disputed.'},
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
      <div class="ac-loc">${c.location} &middot; ${c.year}</div>
      <div class="ac-mask">
        <div class="ac-bars"><div></div><div></div><div></div></div>
        <div class="ac-hint">click to declassify</div>
      </div>
      <p class="ac-summary">${c.summary}</p>
      <p class="ac-mechanism"><span>mechanism</span> ${c.mechanism}</p>
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

/* -------- the threshold map (word map, second gateway from File 08) -------- */
const wordmapOverlay = document.getElementById('wordmapOverlay');
const wordFieldEl = document.getElementById('wordField');
const wmSlider = document.getElementById('wmSlider');
const wmReadout = document.getElementById('wmReadout');
const wmResults = document.getElementById('wmResults');

function hashSign(str){ let s=0; for(let i=0;i<str.length;i++) s+=str.charCodeAt(i); return (s%2===0)?1:-1; }

const wordMap = {};
ARCHIVE_CASES.forEach(c=>{
  c.kw.forEach(w=>{
    if(!wordMap[w]) wordMap[w] = { cases:[] };
    wordMap[w].cases.push(c);
  });
});
ARCHIVE_TAGS.forEach(tag=>{
  const inTag = ARCHIVE_CASES.filter(c=>c.tag===tag);
  wordMap[tag.toLowerCase()] = { cases:inTag };
});
const WORDS = Object.entries(wordMap).map(([word,data])=>{
  const avgPos = Math.round(data.cases.reduce((s,c)=>s+c.pos,0)/data.cases.length);
  return { word, cases:data.cases, pos:avgPos, freq:data.cases.length, rotSign:hashSign(word), el:null };
}).sort(()=>Math.random()-0.5);

let wordmapBuilt = false;
let selectedWord = null;

function seededRand(str, salt){
  let s=0; for(let i=0;i<str.length;i++) s = (s*31 + str.charCodeAt(i) + salt) % 100000;
  return (s%1000)/1000;
}

function bgForPos(pos){
  if(pos < 50) return 'light';   // authority still checked by process, appeal, or oversight
  if(pos <= 72) return 'dark';   // authority contested, mixed accountability
  return 'red';                  // authority concentrated, minimal independent check
}

function buildWordField(){
  WORDS.forEach(w=>{
    const span = document.createElement('span');
    span.className = 'wm-word';
    span.dataset.bg = bgForPos(w.pos);
    const label = document.createElement('span');
    label.className = 'wm-label';
    span.appendChild(label);
    span.onclick = ()=>{ selectedWord = (selectedWord===w.word) ? null : w.word; refreshWordField(); renderWmResults(w); };
    w.el = span;
    w.labelEl = label;
    // not appended yet, presence in the field is what visibility means
  });
  wordmapBuilt = true;
}

// typewriter reveal for a single cell
function typeWord(w){
  clearInterval(w.typeTimer);
  const text = w.word;
  w.labelEl.textContent = '';
  w.labelEl.classList.add('wm-caret');
  let i = 0;
  w.typeTimer = setInterval(()=>{
    i++;
    w.labelEl.textContent = text.slice(0, i);
    if(i >= text.length){
      clearInterval(w.typeTimer);
      setTimeout(()=>{ w.labelEl.classList.remove('wm-caret'); }, 350);
    }
  }, 55);
}

// group a run of visible words into variable-length rows, Lego-brick style,
// budgeting by estimated pixel width (which depends on each word's own font-size)
// rather than raw character count, so rows never overflow the field.
function buildRows(shown){
  const rows = [];
  let row = [], width = 0, rowIdx = 0;
  const containerWidth = (wordFieldEl.clientWidth || 900) - 6;
  shown.forEach(w=>{
    const fs = parseFloat(w.el.style.fontSize) || 14;
    const wpx = w.word.length * fs * 0.62 + fs * 1.3; // rough cell width incl padding, monospace
    const target = containerWidth * (0.82 + seededRand('row'+rowIdx, 13) * 0.14);
    if(row.length && width + wpx > target){ rows.push(row); row = []; width = 0; rowIdx++; }
    row.push(w); width += wpx;
  });
  if(row.length) rows.push(row);
  return rows;
}

function refreshWordField(firstLoad){
  const v = +wmSlider.value;

  // FIRST: record current on-screen rect of every cell currently mounted (FLIP technique)
  const before = new Map();
  if(!firstLoad){
    WORDS.forEach(w=>{ if(w.el.isConnected) before.set(w.word, w.el.getBoundingClientRect()); });
  }

  const newlyShown = [];
  const shown = [];
  WORDS.forEach(w=>{
    const declassified = w.pos <= v;
    const wasShown = w.el.isConnected;
    const distance = Math.abs(w.pos - v);
    const proximity = Math.pow(1 - (distance/100), 0.7);
    const variety = 0.85 + seededRand(w.word, 5) * 0.3;
    const fontSize = (9 + proximity*15 + Math.min(w.freq,4)*0.9) * variety;
    w.el.style.fontSize = fontSize.toFixed(1)+'px';
    w.el.classList.toggle('wm-selected', selectedWord===w.word);
    if(!declassified){ clearInterval(w.typeTimer); return; }
    shown.push(w);
    if(!wasShown) newlyShown.push(w);
  });

  // rebuild the justified row structure, this is what produces the Lego brick reflow.
  // Each word keeps its own natural size (so text never gets clipped); leftover width in a
  // row is absorbed by blank filler cells scattered through the row, not one gap at the end.
  wordFieldEl.innerHTML = '';
  buildRows(shown).forEach((row, ri)=>{
    const rowEl = document.createElement('div');
    rowEl.className = 'wm-row';
    row.forEach((w,i)=>{
      rowEl.appendChild(w.el);
      const isLast = i === row.length - 1;
      // roughly half the gaps between words become filler cells; never after the very last word
      if(!isLast && seededRand(w.word+ri, 41) < 0.55){
        const filler = document.createElement('div');
        filler.className = 'wm-filler';
        rowEl.appendChild(filler);
      }
    });
    wordFieldEl.appendChild(rowEl);
  });

  // LAST + INVERT + PLAY
  requestAnimationFrame(()=>{
    shown.forEach(w=>{
      const last = w.el.getBoundingClientRect();
      if(newlyShown.includes(w)){
        w.el.style.transition = 'none';
        w.el.style.transform = 'scale(.35)'; w.el.style.opacity = '0';
        requestAnimationFrame(()=>{
          w.el.style.transition = 'transform .4s cubic-bezier(.34,1.56,.64,1), opacity .25s ease';
          w.el.style.transform = ''; w.el.style.opacity = '1';
        });
        typeWord(w);
        return;
      }
      const first = before.get(w.word);
      if(!first || firstLoad) return;
      const dx = first.left - last.left, dy = first.top - last.top;
      const sx = first.width / last.width, sy = first.height / last.height;
      if(Math.abs(dx)<0.5 && Math.abs(dy)<0.5 && Math.abs(sx-1)<0.02 && Math.abs(sy-1)<0.02) return;
      w.el.style.transition = 'none';
      w.el.style.transform = `translate(${dx}px,${dy}px) scale(${sx},${sy})`;
      requestAnimationFrame(()=>{
        w.el.style.transition = 'transform .5s cubic-bezier(.4,0,.2,1)';
        w.el.style.transform = '';
      });
    });
  });

  if(firstLoad){ shown.forEach(w=> typeWord(w)); }
}

function wmLabelFor(v){
  if(v<40) return 'A threshold this narrow admits almost nothing, no case in this archive is checked enough to qualify.';
  if(v<55) return 'A threshold that admits only cases where process, appeal, or oversight still constrained the authority.';
  if(v<75) return 'A threshold that tolerates mixed or contested accountability, as long as some justification was offered.';
  return 'A wide threshold, admitting even concentrated, largely unchecked authority.';
}
function updateWmThreshold(firstLoad){
  const v = +wmSlider.value;
  const inLine = ARCHIVE_CASES.filter(c=>c.pos<=v).length;
  wmReadout.innerHTML = `<span class="wm-stat">${v}</span> / 100 &nbsp;&middot;&nbsp; <span class="wm-stat">${inLine}</span> of ${ARCHIVE_CASES.length} cases fall within this threshold.<br>${wmLabelFor(v)}`;
  if(wordmapBuilt) refreshWordField(firstLoad);
}
wmSlider.addEventListener('input', ()=>updateWmThreshold(false));

function renderWmResults(w){
  wmResults.innerHTML = `<div class="wm-results-head">"${w.word}" with ${w.cases.length} case${w.cases.length===1?'':'s'}</div>` +
    w.cases.map(c=>`<div class="wm-result-row">
      <div class="wm-rtop"><span class="wm-rid">CASE ${c.id}</span><span class="wm-rtitle">${c.title}</span></div>
      <div class="wm-rnote">${c.note}</div>
    </div>`).join('');
  wmResults.classList.add('open');
}

function openWordmap(){
  const isFirst = !wordmapBuilt;
  if(isFirst) buildWordField();
  wordmapOverlay.classList.add('open');
  requestAnimationFrame(()=>{ updateWmThreshold(isFirst); });
}
function closeWordmap(){ wordmapOverlay.classList.remove('open'); }
document.getElementById('wordmapClose').addEventListener('click', closeWordmap);
wordmapOverlay.addEventListener('click', e=>{ if(e.target===wordmapOverlay) closeWordmap(); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && wordmapOverlay.classList.contains('open')) closeWordmap(); });
document.getElementById('wmBrowseAll').addEventListener('click', ()=>{ closeWordmap(); openArchive(); });
