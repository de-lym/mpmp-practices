const CATS = {
  protective: {label:'protective', color:'var(--c-protective)'},
  cohesive:   {label:'cohesive',   color:'var(--c-cohesive)'},
  political:  {label:'political control', color:'var(--c-political)'},
  commercial: {label:'commercial', color:'var(--c-commercial)'},
  epistemic:  {label:'epistemic',  color:'var(--c-epistemic)'},
};

const CASES = [
  {id:'01', title:'The Great Firewall', actor:'state', rationale:'political', outcome:'normalized', pos:88,
   summary:'A national infrastructure of filtering and blocking that restricts access to foreign platforms and search results, justified as sovereignty over domestic information space.',
   tags:['china','infrastructure','ongoing']},
  {id:'02', title:'NetzDG Takedown Law', actor:'state', rationale:'protective', outcome:'contested', pos:42,
   summary:'A law requiring platforms to remove hate speech and illegal content within 24 hours or face heavy fines, criticized for pushing moderation decisions onto private companies.',
   tags:['germany','platform law','hate speech']},
  {id:'03', title:'Gayssot Act', actor:'state', rationale:'protective', outcome:'upheld', pos:34,
   summary:'A law criminalizing Holocaust denial, framed as protecting historical fact and public dignity rather than restricting general political speech.',
   tags:['france','historical memory','upheld']},
  {id:'04', title:"Children's Online Privacy Rule", actor:'state', rationale:'protective', outcome:'upheld', pos:18,
   summary:'Federal rules restricting how services can collect data from and target content toward children under 13, limiting what minors can be shown online.',
   tags:['usa','minors','data']},
  {id:'05', title:'2017 Wikipedia Block', actor:'state', rationale:'political', outcome:'overturned', pos:82,
   summary:"A nationwide block of Wikipedia that lasted more than two years before being ruled unconstitutional by the country's highest court and reversed.",
   tags:['turkey','overturned','court ruling']},
  {id:'06', title:'Regional Internet Shutdowns', actor:'state', rationale:'cohesive', outcome:'contested', pos:76,
   summary:'Repeated, localized shutdowns of mobile internet during periods of unrest, justified on public order and security grounds.',
   tags:['india','security','recurring']},
  {id:'07', title:'Platform Misinformation Removal', actor:'platform', rationale:'epistemic', outcome:'contested', pos:52,
   summary:'Extensive removal and demotion of posts flagged as health or election misinformation, applying private editorial judgment at the scale of a public square.',
   tags:['platform policy','health','elections']},
  {id:'08', title:'Podcast Delisting Disputes', actor:'platform', rationale:'epistemic', outcome:'contested', pos:47,
   summary:'Selective removal of specific episodes accused of spreading misinformation, while the show itself remains available on the platform, illustrating a partial and editorial form of moderation.',
   tags:['audio platform','selective removal']},
  {id:'09', title:'Protection from Online Falsehoods Act', actor:'state', rationale:'epistemic', outcome:'contested', pos:68,
   summary:'A law empowering government ministers to order correction notices or takedowns of statements deemed false, criticized as a tool for suppressing dissent under a rationale based on truth.',
   tags:['singapore','fake news law']},
  {id:'10', title:'Online Safety Act', actor:'state', rationale:'protective', outcome:'upheld', pos:31,
   summary:'Legislation requiring platforms to shield minors from harmful content and enforce age verification, trading some degree of open access for guarantees of child safety.',
   tags:['uk','minors','platform duty']},
  {id:'11', title:'DMCA Takedown Notices', actor:'commercial', rationale:'commercial', outcome:'normalized', pos:28,
   summary:'A system allowing rights holders to request removal of content they claim infringes copyright through formal notice, widely used and occasionally applied to suppress legitimate criticism.',
   tags:['usa','copyright','routine']},
  {id:'12', title:'School Library Book Removals', actor:'institution', rationale:'cohesive', outcome:'contested', pos:58,
   summary:'Removal of books from school libraries at the district level in response to content disputes, driven by local parental and administrative pressure rather than national law.',
   tags:['usa','education','local']},
  {id:'13', title:'Social Credit Content Restriction', actor:'state', rationale:'political', outcome:'normalized', pos:91,
   summary:'Access to services and visibility tied to a citizen scoring system that can be affected by online speech, blending financial and expressive consequences.',
   tags:['china','scoring system','ongoing']},
  {id:'14', title:'Film Ratings Board', actor:'institution', rationale:'cohesive', outcome:'normalized', pos:16,
   summary:'An industry body that regulates itself, assigning age ratings that restrict theatrical release and marketing, and rarely challenged as a form of censorship despite shaping what is ultimately produced.',
   tags:['industry regulation','film','longstanding']},
  {id:'15', title:'Political Account Suspensions', actor:'platform', rationale:'political', outcome:'contested', pos:63,
   summary:'Suspension of prominent political accounts across several countries for policy violations, with critics on all sides disputing whether the standard was applied evenly.',
   tags:['platform policy','politicians','global']},
  {id:'16', title:'Wartime Press Censorship', actor:'state', rationale:'cohesive', outcome:'contested', pos:55,
   summary:'Government review and restriction of war reporting to prevent aiding an adversary, a historically normalized practice that remains ethically disputed.',
   tags:['historical','wartime','press']},
];

// build the word list from tags and rationale labels, each with a derived position
function hashSign(str){
  let s = 0;
  for(let i=0;i<str.length;i++) s += str.charCodeAt(i);
  return (s % 2 === 0) ? 1 : -1;
}

const wordMap = {};
CASES.forEach(c => {
  c.tags.forEach(t => {
    if(!wordMap[t]) wordMap[t] = { cases:[], cat:c.rationale };
    wordMap[t].cases.push(c);
  });
});
Object.keys(CATS).forEach(k => {
  const label = CATS[k].label;
  const inCat = CASES.filter(c => c.rationale === k);
  wordMap[label] = { cases:inCat, cat:k };
});

const words = Object.entries(wordMap).map(([word, data]) => {
  const avgPos = Math.round(data.cases.reduce((s,c)=>s+c.pos,0) / data.cases.length);
  return { word, cases:data.cases, cat:data.cat, pos:avgPos, freq:data.cases.length, rotSign:hashSign(word) };
}).sort(()=>Math.random()-0.5);

// build persistent word field elements
const wordFieldEl = document.getElementById('wordField');
let activeCat = null;
let selectedWord = null;

words.forEach(w => {
  const span = document.createElement('span');
  span.className = 'word';
  span.textContent = w.word;
  span.onclick = () => {
    selectedWord = w.word;
    refreshWordField();
    openModal(w.word);
  };
  w.el = span;
  wordFieldEl.appendChild(span);
});

function refreshWordField(){
  const v = +slider.value;
  words.forEach(w => {
    const declassified = w.pos <= v;
    const distance = Math.abs(w.pos - v);
    const proximity = 1 - (distance / 100);

    const baseSize = 12 + Math.min(w.freq, 6) * 2.5;
    const fontSize = baseSize + proximity * 34;
    const rotation = w.rotSign * (1 - proximity) * 22;
    const lift = (1 - proximity) * 10 * (w.rotSign > 0 ? 1 : -1);

    w.el.style.fontSize = fontSize.toFixed(1) + 'px';
    w.el.style.transform = `rotate(${rotation.toFixed(1)}deg) translateY(${lift.toFixed(1)}px)`;

    w.el.classList.toggle('hidden', !declassified);
    w.el.classList.toggle('selected', selectedWord === w.word);

    w.el.style.color = declassified ? CATS[w.cat].color : '';

    let opacity = 1;
    if(activeCat && w.cat !== activeCat) opacity = declassified ? 0.15 : 0.05;
    w.el.style.opacity = opacity;
  });
}

const legendEl = document.getElementById('legend');
Object.keys(CATS).forEach(k => {
  const btn = document.createElement('button');
  btn.innerHTML = `<span class="dot" style="background:${CATS[k].color}"></span>${CATS[k].label}`;
  btn.onclick = () => {
    activeCat = activeCat === k ? null : k;
    [...legendEl.children].forEach(b=>b.classList.remove('active'));
    if(activeCat) btn.classList.add('active');
    refreshWordField();
  };
  legendEl.appendChild(btn);
});

// threshold slider
const slider = document.getElementById('slider');
const readout = document.getElementById('readout');
const posLabel = document.getElementById('posLabel');

function labelFor(v){
  if(v < 25) return 'This threshold suggests a narrow tolerance for restriction, in which most censorship reads as overreach.';
  if(v < 50) return 'This threshold suggests acceptance of clearly protective restriction and little else.';
  if(v < 75) return 'This threshold suggests tolerance for broad justification when the stated aim is order or safety.';
  return 'This threshold suggests acceptance of most restriction, including overtly political control.';
}

function updateThreshold(){
  const v = +slider.value;
  posLabel.textContent = v + ' / 100';
  const inLine = CASES.filter(c => c.pos <= v).length;
  readout.innerHTML = `<span class="stat">${inLine}</span> of ${CASES.length} cases fall within your threshold.<br>${labelFor(v)}`;
  refreshWordField();
  if(modalOverlay.classList.contains('open')){
    renderFlashcard();
  }
}
slider.addEventListener('input', updateThreshold);

// modal and flashcards
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalCount = document.getElementById('modalCount');
const flashcardArea = document.getElementById('flashcardArea');

let currentList = [];
let currentIndex = 0;

function openModal(word){
  currentList = (word === 'all cases') ? CASES : words.find(w => w.word === word).cases;
  currentIndex = 0;
  modalTitle.textContent = word;
  modalCount.textContent = currentList.length + (currentList.length === 1 ? ' case' : ' cases');
  buildFlashcardShell();
  renderFlashcard();
  modalOverlay.classList.add('open');
}

function closeModal(){
  modalOverlay.classList.remove('open');
  selectedWord = null;
  refreshWordField();
}

document.getElementById('modalClose').onclick = closeModal;
modalOverlay.addEventListener('click', (e) => { if(e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => {
  if(!modalOverlay.classList.contains('open')) return;
  if(e.key === 'Escape') closeModal();
  if(e.key === 'ArrowRight') goTo(currentIndex + 1);
  if(e.key === 'ArrowLeft') goTo(currentIndex - 1);
});
document.getElementById('browseAll').onclick = () => {
  selectedWord = null;
  refreshWordField();
  openModal('all cases');
};

function buildFlashcardShell(){
  flashcardArea.innerHTML = `
    <div class="flashcard-viewport">
      <div class="card" id="flashcard"></div>
    </div>
    <div class="flashcard-nav">
      <button class="nav-btn" id="prevBtn">previous</button>
      <div class="dots" id="dots"></div>
      <button class="nav-btn" id="nextBtn">next</button>
    </div>
    <div class="swipe-hint">swipe, or use the arrow keys, to move between cases</div>
  `;
  document.getElementById('prevBtn').onclick = () => goTo(currentIndex - 1);
  document.getElementById('nextBtn').onclick = () => goTo(currentIndex + 1);

  const viewport = document.querySelector('.flashcard-viewport');
  let startX = 0;
  viewport.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, {passive:true});
  viewport.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].clientX - startX;
    if(Math.abs(diff) > 50){
      if(diff < 0) goTo(currentIndex + 1);
      else goTo(currentIndex - 1);
    }
  }, {passive:true});
}

function goTo(index){
  if(index < 0 || index >= currentList.length) return;
  currentIndex = index;
  renderFlashcard();
}

function renderFlashcard(){
  const v = +slider.value;
  const c = currentList[currentIndex];
  const declassified = c.pos <= v;
  const card = document.getElementById('flashcard');
  card.className = 'card' + (declassified ? '' : ' redacted');
  card.innerHTML = `
    <div class="tophead">
      <div class="catdot" style="background:${CATS[c.rationale].color}"></div>
      <div class="idmono">${c.id} of ${CASES.length} / ${c.actor}</div>
    </div>
    <h3>${c.title}</h3>
    <p class="summary">${c.summary}</p>
    ${declassified
      ? `<div class="tags"><span>${CATS[c.rationale].label}</span><span>${c.outcome}</span></div>`
      : `<div class="tags"><span>${c.actor}</span><span>position ${c.pos}</span></div><span class="stamp">exceeds your threshold</span>`
    }
  `;

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === currentList.length - 1;

  const dots = document.getElementById('dots');
  dots.innerHTML = '';
  currentList.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot' + (i === currentIndex ? ' active' : '');
    d.onclick = () => goTo(i);
    dots.appendChild(d);
  });
}

refreshWordField();
updateThreshold();
