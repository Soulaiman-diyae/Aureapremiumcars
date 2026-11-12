/* Aurea car editor. One screen: pick a car on the left, edit it on the right, Save, then Publish. */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = v => String(v ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const OTHER = ['ar', 'en', 'es'], LNAME = { ar: 'Arabic', en: 'English', es: 'Spanish' };
let D = null, sel = null, dirty = false, gitState = { changed: 0, ahead: 0 };

const api = async (url, payload) => {
  const r = await fetch(url, payload ? { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Editor': '1' }, body: JSON.stringify(payload) } : {});
  const j = await r.json(); if (!r.ok) throw new Error(j.error || 'Something went wrong'); return j;
};
const toast = (msg, bad) => { const t = $('#toast'); t.textContent = msg; t.className = 'toast show' + (bad ? ' bad' : ''); clearTimeout(toast.t); toast.t = setTimeout(() => t.className = 'toast', bad ? 7000 : 3500) };
const ask = (text, yes = 'OK') => new Promise(ok => { const d = $('#ask'); $('#askText').textContent = text; $('#askYes').textContent = yes; d.onclose = () => ok(d.returnValue === 'yes'); d.returnValue = 'no'; d.showModal() });
const car = () => D.cars.find(c => c.id === sel);
const title = c => c.name || [c.make, c.model].filter(Boolean).join(' ') || 'New car';
const touch = () => { dirty = true; paintState() };
function paintState() {
  const s = $('#state'), pending = gitState.changed + gitState.ahead > 0;
  s.textContent = dirty ? 'Unsaved changes' : pending ? 'Saved, not published yet' : 'Everything is published';
  s.className = 'state ' + (dirty ? 'warn' : pending ? 'info' : 'ok');
  $('#save').disabled = !dirty;
}

/* ---------- translated phrases ---------- */
const dictFind = (k, fr) => (D.dict[k] || []).find(d => d.fr.toLowerCase() === String(fr || '').trim().toLowerCase());
// typing a known French phrase fills the other three languages; an unknown one waits for a translation
function setFr(c, k, fr) {
  const old = c[k] || {}, wasAuto = old.fr && dictFind(k, old.fr), hit = dictFind(k, fr);
  fr = fr.trim();
  if (!fr) { c[k] = null; return }
  if (hit) c[k] = { ...hit };
  else c[k] = wasAuto || !old.fr ? { fr } : { ...old, fr };
}
const missing = (c, k) => c[k] && c[k].fr ? OTHER.filter(l => !c[k][l]) : [];
const TEXT = [['color', 'Colour'], ['body', 'Body type'], ['from', 'Imported from'], ['engine', 'Engine'], ['fuel', 'Fuel'], ['gearbox', 'Gearbox'], ['drive', 'Drivetrain'], ['interior', 'Interior'], ['equipment', 'Equipment'], ['evRange', 'Electric range']];
const untranslated = c => TEXT.filter(([k]) => missing(c, k).length).length;

/* ---------- left: list of cars ---------- */
function paintList() {
  const news = D.settings.newArrivals || [];
  $('#cars').innerHTML = D.cars.map((c, i) => `<li class="${c.id === sel ? 'on' : ''}" data-id="${c.id}">
    <button class="pick" type="button">${c.photos[0] ? `<img src="/site/${c.photos[0].file.replace('.webp', '-160.webp')}" alt="">` : '<span class="noimg">No photo</span>'}
      <span><b>${esc(title(c))}</b><small>${[c.year, c.km === 'new' ? 'New' : c.km ? Number(c.km).toLocaleString('en-US') + ' km' : '', c.photos.length + ' photo' + (c.photos.length === 1 ? '' : 's')].filter(Boolean).join(' · ')}${untranslated(c) ? ` · <i class="warn">${untranslated(c)} to translate</i>` : ''}</small></span></button>
    <span class="tools"><button type="button" data-star title="Show in New arrivals" class="${news.includes(c.id) ? 'star on' : 'star'}">★</button><button type="button" data-move="-1" title="Move up" ${i ? '' : 'disabled'}>↑</button><button type="button" data-move="1" title="Move down" ${i < D.cars.length - 1 ? '' : 'disabled'}>↓</button></span></li>`).join('') || '<li class="none">No cars yet. Add the first one.</li>';
}
$('#cars').addEventListener('click', e => {
  const li = e.target.closest('li[data-id]'); if (!li) return; const id = li.dataset.id, i = D.cars.findIndex(c => c.id === id);
  if (e.target.closest('[data-star]')) { const n = D.settings.newArrivals = D.settings.newArrivals || []; n.includes(id) ? n.splice(n.indexOf(id), 1) : n.push(id); touch(); paintList(); return }
  const mv = e.target.closest('[data-move]');
  if (mv) { const j = i + Number(mv.dataset.move); if (j < 0 || j >= D.cars.length) return;[D.cars[i], D.cars[j]] = [D.cars[j], D.cars[i]]; touch(); paintList(); return }
  sel = id; paintList(); paintForm();
});
$('#add').onclick = () => {
  const c = { id: 'c' + Date.now().toString(36), slug: '', make: '', model: '', name: '', nameAr: '', year: new Date().getFullYear(), body: dictFind('body', 'SUV') || { fr: 'SUV' }, km: 'new', color: null, from: null, status: 'available', engine: null, hp: null, torque: null, gearbox: null, drive: null, fuel: null, accel: null, top: null, interior: null, equipment: null, battery: null, evRange: null, kw: '', photos: [], fresh: true };
  D.cars.unshift(c); sel = c.id; touch(); paintList(); paintForm(); $('#f-make').focus();
};

/* ---------- right: the form ---------- */
const field = (k, label, attrs = '', help = '') => `<label class="fld"><span>${label}</span><input id="f-${k}" data-k="${k}" ${attrs}>${help ? `<small>${help}</small>` : ''}</label>`;
function tfield(c, k, label, ph = '') {
  const v = c[k] || {}, miss = missing(c, k), id = 'dl-' + k;
  return `<div class="fld t" data-t="${k}"><label><span>${label}</span><input id="f-${k}" data-tk="${k}" value="${esc(v.fr || '')}" placeholder="${esc(ph)}" list="${id}" autocomplete="off"></label>
    <datalist id="${id}">${(D.dict[k] || []).map(d => `<option value="${esc(d.fr)}">`).join('')}</datalist>
    ${v.fr ? `<details ${miss.length ? 'open' : ''}><summary class="${miss.length ? 'warn' : 'ok'}">${miss.length ? 'Not translated yet: the site shows the French text in ' + miss.map(l => LNAME[l]).join(', ') : 'Translated in Arabic, English and Spanish'}</summary>
      <div class="tr">${OTHER.map(l => `<label><span>${LNAME[l]}</span><input data-tk="${k}" data-l="${l}" value="${esc(v[l] || '')}" ${l === 'ar' ? 'dir="rtl"' : ''}></label>`).join('')}</div></details>` : ''}</div>`;
}
function paintForm() {
  const c = car(), m = $('#main');
  if (!c) { m.innerHTML = '<div class="empty"><h2>Pick a car on the left</h2><p>or press “+ Add a car”.</p></div>'; return }
  const used = c.km !== 'new';
  m.innerHTML = `<div class="head"><div><h1>${esc(title(c))}</h1><p>${c.slug ? `<a href="/site/voitures/${c.slug}.html" target="_blank">Open its page</a> (shows the last saved version)` : 'New car: fill in the basics, add photos, then Save.'}</p></div>
      <div class="row"><button class="btn" id="dup" type="button">Duplicate</button><button class="btn danger" id="del" type="button">Delete this car</button></div></div>
    <section><h2>Photos <small>The first photo is the cover. Drag to reorder.</small></h2>
      <div class="photos" id="photos"></div>
      <label class="drop" id="drop"><input type="file" id="files" accept="image/*" multiple hidden><b>Add photos</b><span>Click here or drop files. They are resized and converted automatically.</span></label></section>
    <section><h2>Basics</h2><div class="grid">
      <label class="fld"><span>Make</span><input id="f-make" data-k="make" value="${esc(c.make)}" list="dl-make" placeholder="Audi" autocomplete="off"></label><datalist id="dl-make">${Object.keys(D.makesAr).map(x => `<option value="${esc(x)}">`).join('')}</datalist>
      ${field('model', 'Model', `value="${esc(c.model)}" placeholder="Q8 50 TDI quattro S line"`)}
      ${field('year', 'Year', `type="number" value="${c.year ?? ''}" placeholder="2026"`)}
      <div class="fld"><span>Condition</span><div class="seg"><button type="button" data-cond="new" class="${used ? '' : 'on'}">New</button><button type="button" data-cond="used" class="${used ? 'on' : ''}">Used</button></div></div>
      ${used ? field('km', 'Mileage (km)', `type="number" value="${c.km || ''}" placeholder="11398"`) : ''}
      ${tfield(c, 'color', 'Colour', 'Noir métallisé')}${tfield(c, 'body', 'Body type', 'SUV')}${tfield(c, 'from', 'Imported from', 'Allemagne')}
      <div class="fld"><span>Status</span><div class="seg"><button type="button" data-status="available" class="${c.status === 'reserved' ? '' : 'on'}">Available</button><button type="button" data-status="reserved" class="${c.status === 'reserved' ? 'on' : ''}">Reserved</button></div></div>
    </div></section>
    <section><h2>Engine and performance <small>Leave a box empty and the site shows “on request”.</small></h2><div class="grid">
      ${tfield(c, 'engine', 'Engine', 'Diesel V6 TDI 3,0 L, micro-hybride')}${tfield(c, 'fuel', 'Fuel', 'Diesel')}${tfield(c, 'gearbox', 'Gearbox', 'Automatique 8 rapports')}${tfield(c, 'drive', 'Drivetrain', 'Quatre roues motrices')}
      ${field('hp', 'Power (hp)', `type="number" value="${c.hp ?? ''}" placeholder="286"`)}${field('torque', 'Torque (Nm)', `type="number" value="${c.torque ?? ''}" placeholder="600"`)}
      ${field('accel', '0 to 100 km/h (seconds)', `type="number" step="0.1" value="${c.accel ?? ''}" placeholder="6.1"`)}${field('top', 'Top speed (km/h)', `type="number" value="${c.top ?? ''}" placeholder="241"`)}
      ${field('battery', 'Battery (kWh), hybrids only', `type="number" step="0.1" value="${c.battery ?? ''}"`)}${tfield(c, 'evRange', 'Electric range, hybrids only', '74 km (WLTP)')}
    </div></section>
    <section><h2>Details</h2><div class="grid one">${tfield(c, 'interior', 'Interior', 'Cuir noir, surpiqûres rouges')}${tfield(c, 'equipment', 'Equipment', 'Toit panoramique, son Bose, jantes 21 pouces')}</div></section>
    <details class="adv"><summary>Advanced</summary><div class="grid">
      ${field('name', 'Name shown on the page', `value="${esc(c.name || '')}" placeholder="${esc([c.make, c.model].join(' '))}"`, 'Only if it should differ from Make + Model, e.g. “Range Rover Sport”.')}
      ${field('nameAr', 'Name in Arabic', `value="${esc(c.nameAr || '')}" dir="rtl"`, 'Filled automatically from the make.')}
      ${field('kw', 'Arabic search words', `value="${esc(c.kw || '')}" dir="rtl"`, 'Lets visitors find the car by typing its name in Arabic.')}
    </div></details>`;
  paintPhotos();
}
function paintPhotos() {
  const c = car();
  $('#photos').innerHTML = c.photos.map((p, i) => `<figure draggable="true" data-i="${i}"><img src="/site/${p.file.replace('.webp', '-160.webp')}" alt="">${i ? '' : '<figcaption>Cover</figcaption>'}<button type="button" data-rm="${i}" title="Remove this photo">×</button></figure>`).join('');
}
const autoAr = c => [D.makesAr[c.make] || c.make, c.model].filter(Boolean).join(' ');
$('#main').addEventListener('input', e => {
  const c = car(), el = e.target; if (!c) return;
  if (el.dataset.k) {
    const k = el.dataset.k, wasAuto = !c.nameAr || c.nameAr === autoAr(c);
    c[k] = el.type === 'number' ? (el.value === '' ? null : Number(el.value)) : el.value;
    if ((k === 'make' || k === 'model') && wasAuto && !c.name) c.nameAr = autoAr(c);
    if (k === 'make' || k === 'model' || k === 'name') $('.head h1').textContent = title(c);
    touch(); paintList();
  } else if (el.dataset.tk && el.dataset.l) { (c[el.dataset.tk] = c[el.dataset.tk] || {})[el.dataset.l] = el.value.trim(); if (!el.value.trim()) delete c[el.dataset.tk][el.dataset.l]; touch() }
  else if (el.dataset.tk) { setFr(c, el.dataset.tk, el.value); touch() }
});
// when a French box loses focus, show whether its translations are filled
$('#main').addEventListener('change', e => {
  const el = e.target, c = car();
  if (el.dataset.tk && !el.dataset.l) { const box = el.closest('.fld.t'), tmp = document.createElement('div'); tmp.innerHTML = tfield(c, el.dataset.tk, $('span', box).textContent, el.placeholder); box.replaceWith(tmp.firstElementChild); paintList() }
  if (el.dataset.tk && el.dataset.l) { rememberPhrase(c, el.dataset.tk); paintList() }
  if (el.id === 'files') { addPhotos([...el.files]); el.value = '' }
});
// a phrase translated once is offered again for the next car
function rememberPhrase(c, k) { const v = c[k]; if (v && v.fr && OTHER.every(l => v[l]) && !dictFind(k, v.fr)) (D.dict[k] = D.dict[k] || []).push({ ...v }) }
$('#main').addEventListener('click', async e => {
  const c = car(), b = e.target.closest('button'); if (!c || !b) return;
  if (b.dataset.cond) { c.km = b.dataset.cond === 'new' ? 'new' : (typeof c.km === 'number' ? c.km : null); touch(); paintForm(); paintList() }
  if (b.dataset.status) { c.status = b.dataset.status; touch(); paintForm() }
  if (b.dataset.rm) { c.photos.splice(Number(b.dataset.rm), 1); touch(); paintPhotos(); paintList() }
  if (b.id === 'del' && await ask(`Delete “${title(c)}”? Its page and photos are removed from the website when you publish.`, 'Delete')) { D.cars = D.cars.filter(x => x !== c); sel = D.cars[0] ? D.cars[0].id : null; touch(); paintList(); paintForm() }
  if (b.id === 'dup') { const n = JSON.parse(JSON.stringify(c)); n.id = 'c' + Date.now().toString(36); n.slug = ''; n.photos = []; n.fresh = true; D.cars.splice(D.cars.indexOf(c) + 1, 0, n); sel = n.id; touch(); paintList(); paintForm(); toast('Copied without photos. Change what differs, add photos, then Save.') }
});
/* photos: drag to reorder, drop files to add */
let dragI = null;
$('#main').addEventListener('dragstart', e => { const f = e.target.closest('figure'); if (f) { dragI = Number(f.dataset.i); e.dataTransfer.effectAllowed = 'move' } });
$('#main').addEventListener('dragover', e => { if (e.target.closest('figure,#drop')) e.preventDefault() });
$('#main').addEventListener('drop', e => {
  const c = car(), f = e.target.closest('figure');
  if (e.dataTransfer.files.length) { e.preventDefault(); addPhotos([...e.dataTransfer.files]); return }
  if (f && dragI !== null) { e.preventDefault(); const j = Number(f.dataset.i), [p] = c.photos.splice(dragI, 1); c.photos.splice(j, 0, p); dragI = null; touch(); paintPhotos(); paintList() }
});
async function shrink(file, width) {
  const bmp = await createImageBitmap(file, { imageOrientation: 'from-image' }), w = Math.min(width, bmp.width), h = Math.round(bmp.height * w / bmp.width);
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h; cv.getContext('2d').drawImage(bmp, 0, 0, w, h);
  const blob = await new Promise(ok => cv.toBlob(ok, 'image/webp', 0.82)), buf = new Uint8Array(await blob.arrayBuffer());
  let s = ''; for (let i = 0; i < buf.length; i += 0x8000) s += String.fromCharCode.apply(null, buf.subarray(i, i + 0x8000)); return btoa(s);
}
async function addPhotos(files) {
  const c = car(), imgs = files.filter(f => f.type.startsWith('image/')); if (!imgs.length) return;
  const drop = $('#drop'); drop.classList.add('busy');
  try {
    for (let i = 0; i < imgs.length; i++) {
      $('b', drop).textContent = `Adding photo ${i + 1} of ${imgs.length}…`;
      const variants = [await shrink(imgs[i], 1400), await shrink(imgs[i], 800), await shrink(imgs[i], 160)];
      const r = await api('/api/photo', { name: [c.make, c.model].join(' '), variants });
      c.photos.push({ file: r.file }); touch(); paintPhotos(); paintList();
    }
  } catch (err) { toast('Photo not added: ' + err.message, true) }
  drop.classList.remove('busy'); $('b', drop).textContent = 'Add photos';
}

/* ---------- save and publish ---------- */
async function save() {
  const bad = D.cars.find(c => !c.make || !c.model);
  if (bad) { sel = bad.id; paintList(); paintForm(); toast('This car needs a make and a model before saving.', true); return false }
  D.cars.forEach(c => delete c.fresh);
  try {
    const r = await api('/api/save', D); D = r.data; gitState = r.git; dirty = false;
    const hidden = D.cars.filter(c => !c.photos.length).length;
    paintAll(); toast(`Saved. ${r.cars} car${r.cars === 1 ? '' : 's'} on the site${hidden ? `, ${hidden} hidden until it has a photo` : ''}.`); return true;
  } catch (err) { toast('Not saved: ' + err.message, true); return false }
}
$('#save').onclick = save;
$('#publish').onclick = async () => {
  if (dirty && !await save()) return;
  if (!await ask('Publish these changes to aureapremiumcars.com? The site updates about a minute later.', 'Publish')) return;
  const b = $('#publish'); b.disabled = true; b.textContent = 'Publishing…';
  try { const r = await api('/api/publish', {}); gitState = r.git; toast('Published. The website updates in about a minute.') }
  catch (err) { toast('Not published: ' + err.message, true) }
  b.disabled = false; b.textContent = 'Publish to website'; paintState();
};
$('#total').addEventListener('input', e => { D.settings.showroomTotal = Number(e.target.value) || 0; touch() });
addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); if (dirty) save() } });
addEventListener('beforeunload', e => { if (dirty) { e.preventDefault(); e.returnValue = '' } });
function paintAll() { if (!D.cars.some(c => c.id === sel)) sel = D.cars[0] ? D.cars[0].id : null; $('#total').value = D.settings.showroomTotal || ''; paintList(); paintForm(); paintState() }
api('/api/data').then(r => { D = r.data; gitState = r.git; paintAll() }).catch(e => toast(e.message, true));
