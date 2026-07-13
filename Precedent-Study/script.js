console.log("JS LOADED");

(function(){

  const page = document.getElementById('page');
  const clock = document.getElementById('clock');
  const MENU_H = 26;        // matches #menubar height in style.css
  const HEADER_SAFE = 36;   // exclusion zone below the header, with a clear gap

  const vw = () => window.innerWidth;
  const vh = () => window.innerHeight;

  clock.textContent = new Date().toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'});

  // bibliography, textFragments, menuContent, errorMessages, and restartMessage
  // are all defined in content.js, loaded before this file.

  // combined pool for random 'text' windows: plain notes + the header-menu content,
  // still used as a fallback pool for spawnFromMenu-style one-off windows
  // menuContent can hold both plain text entries (history, project, etc.)
  // and image entries (poster). Only the text entries feed the random
  // pools/cascade below — image entries are opened solely via their own
  // menu click (see spawnFromMenu), never auto-shown.
  const menuTextEntries = Object.values(menuContent).filter(m => m.text !== undefined);

  const textPool = textFragments.concat(menuTextEntries);

  // ---------- master content list ----------
  // Every entry here is guaranteed exactly one window per cascade (see
  // spawnCascade below). This is the "must all be shown" content. Edit
  // content.js, not this file, to change what appears.
  const contentItems = textFragments.map(t => ({ type:'text', fname:t.fname, text:t.text }))
    .concat(menuTextEntries.map(m => ({ type:'text', fname:m.fname, text:m.text })))
    .concat(bibliography.map(l => ({ type:'link', fname:l.word + '.url', link:l })))
    .concat(imageFragments.map(im => ({ type:'image', fname:im.fname, image:im })));

  // ---------- shared state ----------
  let browserOpenCount = 0;   // only counts closable browser windows (drives the reveal button)
  let zTop = 1000;            // running z-index for stacking / drag-to-front

  // error boxes are fixed at this footprint; every browser window must be
  // spawned strictly larger than this on both axes
  const ERROR_W = 220;
  const ERROR_H = 140;

  const MIN_WIN_W = ERROR_W + 60;   // 280
  const MAX_WIN_W = ERROR_W + 240;  // 460
  const MIN_WIN_H = ERROR_H + 40;   // 180
  const MAX_WIN_H = ERROR_H + 200;  // 340

  // errors fire on whichever comes first: a random number of browser
  // closes, or a random 2-10 minute timer
  let closesSinceLastError = 0;
  let closeThreshold = randInt(3, 6);
  let errorTimer = null;

  // escalating chain: nth time the user closes an error box, n! new ones
  // open (1, 2, 6, 24, ...). Capped so the page stays usable.
  let errorCloseCount = 0;
  const MAX_ERROR_BURST = 24;

  function factorial(n){
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  }

  function rand(min, max){ return Math.random() * (max - min) + min; }
  function randInt(min, max){ return Math.floor(rand(min, max + 1)); }
  function pick(arr){ return arr[Math.floor(Math.random() * arr.length)]; }

  function shuffled(arr){
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(s){
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  const VIEW_PAD = 16; // keep every box this far from the raw screen edge

  // keep any box within the viewport, clear of the header, and off the raw edges
  function clampToViewport(x, y, w, h){
    const maxX = Math.max(VIEW_PAD, vw() - w - VIEW_PAD);
    const maxY = Math.max(HEADER_SAFE, vh() - h - VIEW_PAD);
    return {
      x: Math.min(Math.max(x, VIEW_PAD), maxX),
      y: Math.min(Math.max(y, HEADER_SAFE), maxY)
    };
  }

  function bumpBrowsers(n){
    const wasEmpty = browserOpenCount <= 0;
    browserOpenCount += n;
    if (browserOpenCount <= 0){
      browserOpenCount = 0;
      showRestartBox();
      clearTimeout(errorTimer); // pause the random error timer while nothing is open
    } else {
      hideRestartBox();
      if (wasEmpty) scheduleTimedError(); // resume it the moment a browser reopens
    }
  }

  // ---------- restart popup: appears once every browser window is closed ----------
  let restartEl = null;
  let lastClosePos = null; // where the user's cursor was on their last close click

  function showRestartBox(){
    if (restartEl) return; // already showing
    const RESTART_W = 260, RESTART_H = 150;
    const anchor = lastClosePos || { x: vw() / 2, y: vh() / 2 };
    const pos = clampToViewport(anchor.x - RESTART_W / 2, anchor.y - RESTART_H / 2, RESTART_W, RESTART_H);

    const el = document.createElement('div');
    el.className = 'restartbox';
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    el.style.height = RESTART_H + 'px';

    const tb = document.createElement('div');
    tb.className = 'titlebar';
    tb.innerHTML = '<div class="dots"><span></span><span></span><span></span></div><div class="fname">' + escapeHtml(restartMessage.fname) + '</div>';

    const body = document.createElement('div');
    body.className = 'body';
    body.innerHTML = restartMessage.lines
      .map(line => escapeHtml(line)
        .replace(/\{\{blink\}\}/g, '<span class="blink">')
        .replace(/\{\{\/blink\}\}/g, '</span>'))
      .join('<br>');

    const row = document.createElement('div');
    row.className = 'btnrow';
    const btn = document.createElement('button');
    btn.textContent = 'OK';
    row.appendChild(btn);

    el.appendChild(tb);
    el.appendChild(body);
    el.appendChild(row);
    page.appendChild(el);
    bringToFront(el);
    restartEl = el;

    makeDraggable(el, tb);
    el.addEventListener('pointerdown', () => bringToFront(el));

    btn.addEventListener('click', () => {
      hideRestartBox();
      spawnCascade();
    });
  }

  function hideRestartBox(){
    if (restartEl){
      restartEl.remove();
      restartEl = null;
    }
  }

  function bringToFront(el){
    zTop += 1;
    el.style.zIndex = zTop;
  }

  // ---------- dragging (constrained to viewport) ----------
  function makeDraggable(win, handle){
    handle.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.closebox')) return; // don't drag when hitting close
      e.preventDefault();

      const startX = e.clientX;
      const startY = e.clientY;
      const rect = win.getBoundingClientRect();
      const startLeft = rect.left;
      const startTop = rect.top;
      const w = rect.width;
      const h = rect.height;

      win.classList.add('dragging');
      bringToFront(win);
      handle.setPointerCapture(e.pointerId);

      function onMove(ev){
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;
        const pos = clampToViewport(startLeft + dx, startTop + dy, w, h);
        win.style.left = pos.x + 'px';
        win.style.top = pos.y + 'px';
      }
      function onUp(){
        win.classList.remove('dragging');
        handle.removeEventListener('pointermove', onMove);
        handle.removeEventListener('pointerup', onUp);
      }
      handle.addEventListener('pointermove', onMove);
      handle.addEventListener('pointerup', onUp);
    });
  }

  // grow a text window's height (up to a capped amount) if its content
  // doesn't fit at the randomly-rolled size. Anything still too tall
  // after hitting the cap falls back to the scrollbar defined in style.css
  // (.win.text .body has overflow-y:auto).
  const TEXT_GROW_CAP = 260; // max extra px a window may grow beyond its rolled height
  function fitTextWindowToContent(el, body, w, h, pos){
    if (body.scrollHeight <= body.clientHeight + 1) return; // already fits, nothing to do

    el.classList.add('scrolls'); // switches CSS to left-align for readability

    const overflow = body.scrollHeight - body.clientHeight;
    const maxH = Math.min(h + TEXT_GROW_CAP, vh() - HEADER_SAFE - VIEW_PAD * 2);
    const newH = Math.min(h + overflow, maxH);
    if (newH <= h) return;

    el.style.height = newH + 'px';

    // re-clamp position since a taller box may now run off the bottom edge
    const newPos = clampToViewport(pos.x, pos.y, w, newH);
    el.style.left = newPos.x + 'px';
    el.style.top = newPos.y + 'px';
  }

  // ---------- browser window ----------
  function makeWindow({x, y, w, h, rot, type, delay, z, fname, text, link, image}){
    const pos = clampToViewport(x, y, w, h);

    const el = document.createElement('div');
    el.className = 'win ' + type;
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    el.style.width = w + 'px';
    el.style.height = h + 'px';
    el.style.setProperty('--rot', rot + 'deg');
    el.style.animationDelay = delay + 'ms';
    el.style.zIndex = z;

    const tb = document.createElement('div');
    tb.className = 'titlebar';
    const dots = document.createElement('div');
    dots.className = 'dots';
    dots.innerHTML = '<span></span><span></span><span></span>';
    const fnameEl = document.createElement('div');
    fnameEl.className = 'fname';

    const body = document.createElement('div');
    body.className = 'body';

    if (type === 'motif'){
      fnameEl.textContent = 'censored';
      body.textContent = 'This content is blocked for your protection. \n To learn more about why you are seeing this message or to get in touch with the administrator.';
    } else if (type === 'text'){
      const chosen = (fname || text) ? { fname: fname || 'note.txt', text: text || '' } : pick(textPool);
      fnameEl.textContent = chosen.fname;
      body.style.whiteSpace = 'pre-line';
      body.textContent = chosen.text;
    } else if (type === 'link'){
      const l = link || pick(bibliography);
      fnameEl.textContent = l.word + '.url';
      const a = document.createElement('a');
      a.href = l.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = l.word;
      body.appendChild(a);
    } else if (type === 'image'){
      const img = image || pick(imageFragments);
      fnameEl.textContent = img.fname;
      const imgEl = document.createElement('img');
      imgEl.src = img.src;
      imgEl.alt = img.alt || '';
      body.appendChild(imgEl);
    }

    const close = document.createElement('div');
    close.className = 'closebox';
    close.innerHTML = '&#10005;';
    close.addEventListener('click', (e) => {
      lastClosePos = { x: e.clientX, y: e.clientY };
      el.remove();
      bumpBrowsers(-1);
      registerBrowserClose();
    });

    tb.appendChild(dots);
    tb.appendChild(fnameEl);
    tb.appendChild(close);
    el.appendChild(tb);
    el.appendChild(body);

    page.appendChild(el);
    bumpBrowsers(1);

    if (type === 'text'){
      fitTextWindowToContent(el, body, w, h, pos);
    }

    makeDraggable(el, tb);
    el.addEventListener('pointerdown', () => bringToFront(el));

    return el;
  }

  // ---------- error box: OK closes this one, but opens a fresh one ----------
  function spawnError(){
    const w = ERROR_W, h = ERROR_H;
    const rawX = rand(VIEW_PAD, Math.max(VIEW_PAD, vw() - w - VIEW_PAD));
    const rawY = rand(HEADER_SAFE, Math.max(HEADER_SAFE, vh() - h - VIEW_PAD));
    const pos = clampToViewport(rawX, rawY, w, h);

    const el = document.createElement('div');
    el.className = 'errbox';
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    el.style.width = w + 'px';
    bringToFront(el);

    const tb = document.createElement('div');
    tb.className = 'titlebar';
    tb.innerHTML = '<div class="dots"><span></span><span></span><span></span></div><div class="fname">System Error</div>';

    const body = document.createElement('div');
    body.className = 'body';
    body.textContent = pick(errorMessages);

    const row = document.createElement('div');
    row.className = 'btnrow';
    const btn = document.createElement('button');
    btn.textContent = 'OK';
    row.appendChild(btn);

    el.appendChild(tb);
    el.appendChild(body);
    el.appendChild(row);
    page.appendChild(el);
    // not counted toward browserOpenCount: errors don't affect the empty-page state

    btn.addEventListener('click', () => {
      el.remove();
      errorCloseCount += 1;
      const burst = Math.min(factorial(errorCloseCount), MAX_ERROR_BURST);
      for (let i = 0; i < burst; i++){
        spawnError();
      }
    });
  }

  // fires whichever trigger condition is met first, then resets both
  function triggerError(){
    spawnError();
    closesSinceLastError = 0;
    closeThreshold = randInt(3, 6);
    scheduleTimedError();
  }

  function scheduleTimedError(){
    clearTimeout(errorTimer);
    const minutes = rand(2, 10); // random 2-10 minute timer
    errorTimer = setTimeout(triggerError, minutes * 60 * 1000);
  }

  // called every time the user closes a browser window
  function registerBrowserClose(){
    closesSinceLastError++;
    if (closesSinceLastError >= closeThreshold){
      triggerError();
    }
  }

  // ---------- figure-eight cascade layout ----------
  // returns exactly `count` points spread evenly along a figure-eight path,
  // with an optional phase offset so a second set (e.g. filler windows) can
  // interleave with a first set along the same curve
  function figureEightPointsN(count, cx, cy, rx, ry, phase){
    const pts = [];
    const off = phase || 0;
    for (let i = 0; i < count; i++){
      const t = ((i / count) + off) % 1 * Math.PI * 4; // full double loop
      let x, y;
      if (t < Math.PI * 2){
        x = cx + rx * Math.sin(t);
        y = cy - ry + ry * Math.cos(t);
      } else {
        const t2 = t - Math.PI * 2;
        x = cx + rx * Math.sin(t2);
        y = cy + ry - ry * Math.cos(t2);
      }
      pts.push({ x, y });
    }
    return pts;
  }

  function spawnCascade(){
    const W = vw(), H = vh();
    const cx = W * 0.5, cy = H * 0.5;
    // pull the figure-eight open wide so it reaches toward the edges of the
    // viewport instead of staying clustered near the center
    const rx = Math.min(W * 0.40, 340);
    const ry = Math.min(H * 0.34, 300);
    const jitter = 70; // wide jitter so windows disperse but still overlap neighbors

    function placeAt(p, item, delay){
      const w = Math.min(Math.round(rand(MIN_WIN_W, MAX_WIN_W)), W - 20);
      const h = Math.min(Math.round(rand(MIN_WIN_H, MAX_WIN_H)), H - HEADER_SAFE - 20);
      const x = p.x - w / 2 + rand(-jitter, jitter);
      const y = p.y - h / 2 + rand(-jitter, jitter);
      zTop += 1;
      makeWindow({
        x, y, w, h,
        rot: rand(-2.5, 2.5),
        type: item.type,
        delay,
        z: zTop,
        fname: item.fname,
        text: item.text,
        link: item.link,
        image: item.image
      });
    }

    // 1) every required content item, shuffled into random order, each
    //    placed at its own point along the figure-eight curve — this is
    //    what guarantees nothing is skipped or duplicated
    const items = shuffled(contentItems);
    const anchors = figureEightPointsN(items.length, cx, cy, rx, ry, 0);
    items.forEach((item, i) => placeAt(anchors[i], item, i * 45));

    // 2) decorative filler ("censored" motif windows) interleaved on the
    //    same curve at an offset phase, purely for visual density — these
    //    are not required content, so repetition is fine here.
    //    EDIT THIS NUMBER to control how many censored windows appear here
    //    (there are two more contributors below: scatterCount and the
    //    single hero window — see the note near the end of this function).
    const fillerCount = 3;
    const fillerAnchors = figureEightPointsN(fillerCount, cx, cy, rx, ry, 0.5 / fillerCount);
    for (let i = 0; i < fillerCount; i++){
      placeAt(fillerAnchors[i], { type:'motif' }, (items.length + i) * 45);
    }

    // 3) a small true-random scatter pass purely for texture, reaching the
    //    corners the curve doesn't touch. These are ALSO type:'motif'
    //    (censored), so they add to the total censored-window count too.
    //    EDIT these two numbers to change how many appear on wide vs
    //    narrow screens.
    const scatterCount = W < 640 ? 5 : 10;
    for (let i = 0; i < scatterCount; i++){
      const w = Math.min(Math.round(rand(MIN_WIN_W, MAX_WIN_W)), W - 20);
      const h = Math.min(Math.round(rand(MIN_WIN_H, MAX_WIN_H)), H - HEADER_SAFE - 20);
      const x = rand(0, Math.max(0, W - w));
      const y = rand(HEADER_SAFE, Math.max(HEADER_SAFE, H - h));
      zTop += 1;
      makeWindow({
        x, y, w, h,
        rot: rand(-3, 3),
        type: 'motif',
        delay: (items.length + fillerCount + i) * 45,
        z: zTop
      });
    }

    // one extra-large hero window near center, clamped to fit the viewport.
    // This is also type:'motif' (censored), and always exactly 1 — so:
    //   total censored windows per cascade = fillerCount + scatterCount + 1
    const heroW = Math.min(Math.round(rand(MAX_WIN_W - 40, MAX_WIN_W + 80)), W - 20);
    const heroH = Math.min(Math.round(rand(MAX_WIN_H - 40, MAX_WIN_H + 60)), H - HEADER_SAFE - 20);
    zTop += 1;
    makeWindow({
      x: cx - heroW / 2,
      y: cy - heroH / 2,
      w: heroW, h: heroH,
      rot: 0,
      type: 'motif',
      delay: (items.length + fillerCount + scatterCount) * 45 + 120,
      z: zTop
    });
  }

  // ---------- header words: click one to pop a browser window with its content ----------
  function spawnFromMenu(key){
    const info = menuContent[key];
    if (!info) return;

    const w = Math.min(Math.round(rand(MIN_WIN_W, MAX_WIN_W)), vw() - 20);
    const h = Math.min(Math.round(rand(MIN_WIN_H, MAX_WIN_H)), vh() - HEADER_SAFE - 20);
    const x = rand(0, Math.max(0, vw() - w));
    const y = rand(HEADER_SAFE, Math.max(HEADER_SAFE, vh() - h));

    zTop += 1;
    if (info.src){
      // image-type menu entry (e.g. poster)
      makeWindow({
        x, y, w, h,
        rot: rand(-2, 2),
        type: 'image',
        delay: 0,
        z: zTop,
        fname: info.fname,
        image: info
      });
    } else {
      makeWindow({
        x, y, w, h,
        rot: rand(-2, 2),
        type: 'text',
        delay: 0,
        z: zTop,
        fname: info.fname,
        text: info.text
      });
    }
  }

  // opens one window per entry in a data array (used for bibliography,
  // download, and image, since each of those is a list of items rather
  // than a single blob of text like the other menu entries)
  function spawnGroup(items, type){
    items.forEach((item, i) => {
      const w = Math.min(Math.round(rand(MIN_WIN_W, MAX_WIN_W)), vw() - 20);
      const h = Math.min(Math.round(rand(MIN_WIN_H, MAX_WIN_H)), vh() - HEADER_SAFE - 20);
      const x = rand(0, Math.max(0, vw() - w));
      const y = rand(HEADER_SAFE, Math.max(HEADER_SAFE, vh() - h));

      zTop += 1;
      makeWindow({
        x, y, w, h,
        rot: rand(-2.5, 2.5),
        type,
        delay: i * 70,
        z: zTop,
        fname: type === 'image' ? item.fname : (item.word + '.url'),
        link: type === 'link' ? item : undefined,
        image: type === 'image' ? item : undefined
      });
    });
  }

  const MENU_GROUPS = {
    bibliography: () => spawnGroup(bibliography, 'link'),
    download:     () => spawnGroup(download, 'link'),
    image:        () => spawnGroup(imageFragments, 'image'),
    explore:      () => spawnGroup(imageFragments, 'image')
  };

  document.querySelectorAll('#menubar .items span[data-menu]').forEach((span) => {
    span.addEventListener('click', () => {
      const key = span.dataset.menu;
      if (MENU_GROUPS[key]) MENU_GROUPS[key]();
      else spawnFromMenu(key);
    });
  });

  window.addEventListener('resize', () => {
    // re-clamp everything currently on stage so nothing is left stranded
    // outside the viewport after a resize
    document.querySelectorAll('.win, .errbox, .restartbox').forEach((el) => {
      const rect = el.getBoundingClientRect();
      const pos = clampToViewport(rect.left, rect.top, rect.width, rect.height);
      el.style.left = pos.x + 'px';
      el.style.top = pos.y + 'px';
    });
  });

  // initial load
  spawnCascade();

})();
