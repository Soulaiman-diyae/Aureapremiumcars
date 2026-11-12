// Builds the public site (4 languages) from _editor/data.json.
// One car record in data.json becomes: an entry in each script.js, a detail page per language, a footer link and a line in the search-engine data.
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const LANGS = ['fr', 'ar', 'en', 'es'];
const DIR = { fr: '', ar: 'ar/', en: 'en/', es: 'es/' };
const DATA = path.join(__dirname, 'data.json'), TPL = path.join(__dirname, 'templates.json');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const write = (f, s) => { const p = path.join(ROOT, f); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s) };
const loadData = () => JSON.parse(fs.readFileSync(DATA, 'utf8'));
const saveData = d => fs.writeFileSync(DATA, JSON.stringify(d, null, 1));
const esc = v => String(v ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// text in one language; a missing translation falls back to French
const t = (v, l) => v == null ? '' : typeof v === 'object' ? (v[l] || v.fr || '') : String(v);
const has = v => v != null && v !== '' && !(typeof v === 'object' && !v.fr);
const W = {
  fresh: { fr: 'Neuf', ar: 'جديدة', en: 'New', es: 'Nuevo' },
  available: { fr: 'Disponible', ar: 'متوفرة', en: 'Available', es: 'Disponible' },
  reserved: { fr: 'Réservée', ar: 'محجوزة', en: 'Reserved', es: 'Reservado' },
  ask: { fr: 'Sur demande', ar: 'عند الطلب', en: 'On request', es: 'A consultar' },
  hp: { fr: 'ch', ar: 'حصان', en: 'hp', es: 'CV' },
  km: { fr: 'km', ar: 'كم', en: 'km', es: 'km' },
};
const dec = (n, l) => l === 'es' ? String(n).replace('.', ',') : String(n);
const thousands = (n, l) => Number(n).toLocaleString(l === 'es' ? 'de-DE' : 'en-US');
const F = {
  accel: (n, l) => `${dec(n, l)} ${l === 'ar' ? 'ث' : 's'}`,
  top: n => `${n} km/h`, torque: n => `${n} Nm`, battery: (n, l) => `${dec(n, l)} kWh`,
};
const isNew = c => c.km === 'new';
const latin = c => c.name || [c.make, c.model].filter(Boolean).join(' ');
const nm = (c, l) => l === 'ar' && c.nameAr ? c.nameAr : latin(c);
const lc = s => s ? s[0].toLowerCase() + s.slice(1) : s;
const sized = (p, w) => p.replace(/\.webp$/, `-${w}.webp`);

// ---- sentences that differ per language ----
const TXT = {
  fr: {
    core: (N, Y, fresh) => fresh && Y ? `${N} neuf ${Y}` : Y ? `${N} ${Y}` : N,
    sale: ' à vendre à Tanger', city: ' à Tanger',
    desc: (core, color) => `${core} à vendre à Tanger, Maroc, chez Aurea Premium Cars.${color ? ' ' + color + '.' : ''} Toutes les photos et la fiche technique complète, prix sur demande par WhatsApp.`,
    lead: (c, N, p) => `${N} disponible dans notre showroom Aurea Premium Cars, avenue Moulay Rachid à Tanger.` + (p.engine ? ` Moteur : ${lc(p.engine)}${c.hp ? `, ${c.hp} ch` : ''}.` : '') + (p.gearbox ? ` Boîte de vitesses : ${lc(p.gearbox)}.` : '') + (p.interior ? ` Intérieur : ${lc(p.interior)}.` : '') + (p.equipment ? ` Équipement : ${lc(p.equipment)}.` : '') + (isNew(c) ? (c.year ? ` Voiture neuve, modèle ${c.year}.` : ' Voiture neuve.') : c.km ? ` Kilométrage : ${thousands(c.km, 'fr')} km.` : '') + ' Demandez le prix sur WhatsApp et réservez une visite pour la voir sur place.',
    wa: N => `Bonjour, je souhaite connaître le prix et voir cette voiture : ${N}.`,
    alt: (N, i) => `${N}, photo ${i}, chez Aurea Premium Cars à Tanger`,
    count: n => `${n} voitures importées en showroom, ${n} disponibles`,
    more: n => [`+${n} autres voitures au showroom`, 'Elles ne sont pas encore en ligne. Demandez la liste complète sur WhatsApp.', 'Demander la liste', 'Bonjour, je souhaite recevoir la liste complète des voitures disponibles au showroom.'],
  },
  ar: {
    core: (N, Y, fresh) => fresh && Y ? `${N} جديدة ${Y}` : Y ? `${N} ${Y}` : N,
    sale: ' للبيع في طنجة', city: ' في طنجة',
    desc: (core, color) => `${core} للبيع في طنجة، المغرب، لدى Aurea Premium Cars.${color ? ' ' + color + '.' : ''} كل الصور والمواصفات الكاملة، والسعر عند الطلب عبر واتساب.`,
    lead: (c, N, p) => `${N} متوفرة في معرض Aurea Premium Cars، شارع مولاي رشيد في طنجة.` + (p.engine ? ` المحرك: ${p.engine}${c.hp ? `, ${c.hp} حصان` : ''}.` : '') + (p.gearbox ? ` ناقل الحركة: ${p.gearbox}.` : '') + (p.interior ? ` المقصورة: ${p.interior}.` : '') + (p.equipment ? ` التجهيزات: ${p.equipment}.` : '') + (isNew(c) ? (c.year ? ` سيارة جديدة، موديل ${c.year}.` : ' سيارة جديدة.') : c.km ? ` الكيلومترات: ${thousands(c.km, 'ar')} كم.` : '') + ' اسأل عن السعر عبر واتساب واحجز زيارة لمعاينتها.',
    wa: (N, c) => `مرحبًا، أود معرفة سعر ${latin(c)} ومعاينتها.`,
    alt: (N, i) => `${N}, صورة ${i}, لدى Aurea Premium Cars في طنجة`,
    count: n => `${n} سيارة مستوردة في المعرض، ${n} متوفرة`,
    more: n => [`+${n} سيارة أخرى في المعرض`, 'لم تُنشر على الموقع بعد. اطلب القائمة الكاملة عبر واتساب.', 'اطلب القائمة', 'مرحبًا، أود الحصول على القائمة الكاملة للسيارات المتوفرة في المعرض.'],
  },
  en: {
    core: (N, Y, fresh) => fresh && Y ? `New ${Y} ${N}` : Y ? `${Y} ${N}` : N,
    sale: ' for sale in Tangier', city: ' in Tangier',
    desc: (core, color) => `${core} for sale in Tangier, Morocco, at Aurea Premium Cars.${color ? ' ' + color + '.' : ''} See every photo and the full spec sheet, then ask for the price on WhatsApp.`,
    lead: (c, N, p) => `The ${N} is on the showroom floor at Aurea Premium Cars on Av. Moulay Rachid in Tangier.` + (p.engine ? ` Engine: ${p.engine}${c.hp ? `, ${c.hp} hp` : ''}.` : '') + (p.gearbox ? ` Gearbox: ${p.gearbox}.` : '') + (p.interior ? ` Interior: ${p.interior}.` : '') + (p.equipment ? ` Equipment: ${p.equipment}.` : '') + (isNew(c) ? (c.year ? ` This is a new ${c.year} car.` : ' This is a new car.') : c.km ? ` Mileage: ${thousands(c.km, 'en')} km.` : '') + ' Ask on WhatsApp for the price and book a visit to see it in person.',
    wa: N => `Hello, I would like the price and a viewing for the ${N}.`,
    alt: (N, i) => `${N}, photo ${i}, at Aurea Premium Cars in Tangier`,
    count: n => `${n} imported cars on the floor, ${n} available`,
    more: n => [`+${n} more cars in the showroom`, 'They are not online yet. Ask for the full list on WhatsApp.', 'Ask for the list', 'Hello, I would like the full list of cars available in the showroom.'],
  },
  es: {
    core: (N, Y, fresh) => fresh && Y ? `${N} nuevo ${Y}` : Y ? `${N} ${Y}` : N,
    sale: ' en venta en Tánger', city: ' en Tánger',
    desc: (core, color) => `${core} en venta en Tánger, Marruecos, en Aurea Premium Cars.${color ? ' ' + color + '.' : ''} Todas las fotos y la ficha técnica completa; pide el precio por WhatsApp.`,
    lead: (c, N, p) => `El ${N} está en exposición en Aurea Premium Cars, en la Av. Moulay Rachid de Tánger.` + (p.engine ? ` Motor: ${p.engine}${c.hp ? `, ${c.hp} CV` : ''}.` : '') + (p.gearbox ? ` Caja de cambios: ${p.gearbox}.` : '') + (p.interior ? ` Interior: ${p.interior}.` : '') + (p.equipment ? ` Equipamiento: ${p.equipment}.` : '') + (isNew(c) ? (c.year ? ` Es un coche nuevo, modelo ${c.year}.` : ' Es un coche nuevo.') : c.km ? ` Kilometraje: ${thousands(c.km, 'es')} km.` : '') + ' Pide el precio por WhatsApp y reserva una visita para verlo en persona.',
    wa: N => `Hola, quisiera saber el precio y ver el ${N}.`,
    alt: (N, i) => `${N}, foto ${i}, en Aurea Premium Cars, Tánger`,
    count: n => `${n} coches importados en exposición, ${n} disponibles`,
    more: n => [`+${n} coches más en el concesionario`, 'Todavía no están en la web. Pide la lista completa por WhatsApp.', 'Pedir la lista', 'Hola, quisiera recibir la lista completa de coches disponibles en el concesionario.'],
  },
};
const altOf = (c, i, l) => t(c.photos[i] && c.photos[i].alt, l) || TXT[l].alt(nm(c, l), i + 1);

// ---- one car as the site's script.js expects it ----
function siteCar(c, l) {
  const up = l === 'fr' ? '' : '../', ph = c.photos.map(p => up + p.file);
  const o = {
    id: c.id, page: `voitures/${c.slug}.html`, make: c.make, model: c.model, year: c.year || '{{year}}', body: t(c.body, l) || 'SUV',
    km: isNew(c) ? W.fresh[l] : (c.km || '{{km}}'), color: t(c.color, l), from: t(c.from, l) || '{{country}}', status: W[c.status === 'reserved' ? 'reserved' : 'available'][l],
    engine: t(c.engine, l) || '{{engine}}', hp: c.hp || '{{hp}}', torque: c.torque ? F.torque(c.torque) : '{{torque}}', gearbox: t(c.gearbox, l) || '{{gearbox}}',
    drive: t(c.drive, l) || '{{drive}}', fuel: t(c.fuel, l) || '{{fuel}}', accel: c.accel ? F.accel(c.accel, l) : '{{0 to 100 time}}', top: c.top ? F.top(c.top) : '{{top speed}}',
  };
  if (has(c.interior)) o.interior = t(c.interior, l);
  if (has(c.equipment)) o.equipment = t(c.equipment, l);
  if (c.battery) o.battery = F.battery(c.battery, l);
  if (has(c.evRange)) o.evRange = t(c.evRange, l);
  if (has(c.price)) o.price = t(c.price, l);
  o.image = ph[0]; o.gallery = ph; o.alts = c.photos.map((_, i) => altOf(c, i, l));
  if (l === 'ar' && c.kw) o.kw = c.kw;
  return o;
}

// ---- detail page ----
function carPage(c, l, data, T) {
  const X = TXT[l], L = T[l].labels, N = nm(c, l), up = l === 'fr' ? '../' : '../../';
  const p = { engine: t(c.engine, l), gearbox: t(c.gearbox, l), interior: t(c.interior, l), equipment: t(c.equipment, l) };
  const core = X.core(N, c.year, isNew(c)), title = core + X.sale, desc = X.desc(core, t(c.color, l)), lead = X.lead(c, N, p);
  const wa = `https://wa.me/${data.settings.whatsapp}?text=${encodeURIComponent(X.wa(N, c))}`;
  const ask = W.ask[l], v = x => esc(x || ask);
  const ld = JSON.parse(JSON.stringify(T[l].jsonld)), car = ld[0];
  car.name = core; car.brand.name = c.make; car.bodyType = t(c.body, l) || 'SUV'; car.color = t(c.color, l); car.description = lead;
  for (const [k, val] of [['vehicleTransmission', t(c.gearbox, l)], ['fuelType', t(c.fuel, l)]]) val ? car[k] = val : delete car[k];
  p.engine ? car.vehicleEngine = { '@type': 'EngineSpecification', name: p.engine } : delete car.vehicleEngine;
  c.year ? car.vehicleModelDate = String(c.year) : delete car.vehicleModelDate;
  !isNew(c) && c.km ? car.mileageFromOdometer = { '@type': 'QuantitativeValue', value: c.km, unitCode: 'KMT' } : delete car.mileageFromOdometer;
  car.itemCondition = isNew(c) ? 'https://schema.org/NewCondition' : 'https://schema.org/UsedCondition';
  const img = f => up + f, first = c.photos[0].file;
  const thumbs = c.photos.map((ph, i) => `<a class="thumb" href="${img(ph.file)}"${i ? '' : ' aria-current="true"'}><img src="${img(sized(ph.file, 160))}" width="160" height="160" alt="${esc(altOf(c, i, l))}" loading="lazy" decoding="async" /></a>`).join('');
  const row = (k, val) => `<div><dt class="body-6">${L.dt[k]}</dt><dd class="body-5">${val}</dd></div>`;
  const g1 = [row('year', v(c.year)), row('km', isNew(c) ? W.fresh[l] : c.km ? `${thousands(c.km, l)} ${W.km[l]}` : ask), row('color', v(t(c.color, l))), row('body', v(t(c.body, l))),
    has(c.interior) ? row('interior', esc(p.interior)) : '', has(c.equipment) ? row('equipment', esc(p.equipment)) : '', row('from', v(t(c.from, l)))].join('');
  const g2 = [row('engine', v(p.engine)), row('torque', v(c.torque && F.torque(c.torque))), row('gearbox', v(p.gearbox)), row('drive', v(t(c.drive, l))), row('fuel', v(t(c.fuel, l))),
    c.battery ? row('battery', F.battery(c.battery, l)) : '', has(c.evRange) ? row('evRange', esc(t(c.evRange, l))) : ''].join('');
  const others = data.cars.filter(o => o.id !== c.id && o.photos.length).map(o => `<a href="${o.slug}.html"><img src="${img(sized(o.photos[0].file, 800))}" width="800" height="800" alt="${esc(altOf(o, 0, l))}" loading="lazy" decoding="async" /><span class="title-4">${esc(nm(o, l))}</span></a>`).join('');
  const main = `
  ${T[l].crumbs.replace('{{NAME}}', esc(N))}
  <div class="cp-top">
    <div class="cp-media">
      <div class="car-img has-photo" id="cpStage"><img id="cpPhoto" src="${img(sized(first, 800))}" srcset="${img(sized(first, 800))} 800w, ${img(first)} 1400w" sizes="(max-width:1024px) 92vw, 48vw" width="1400" height="1400" alt="${esc(altOf(c, 0, l))}" fetchpriority="high" decoding="async" />
        <button class="ph-arrow prev" type="button" data-step="-1" aria-label="${L.prev}"><i class="ph ph-caret-left" aria-hidden="true"></i></button><button class="ph-arrow next" type="button" data-step="1" aria-label="${L.next}"><i class="ph ph-caret-right" aria-hidden="true"></i></button><span class="ph-count caption-4" id="cpCount">1 / ${c.photos.length}</span></div>
      <div class="cp-thumbs">${thumbs}</div>
    </div>
    <div class="cp-info">
      <p class="make caption-4">${esc(c.make)}</p>
      <h1 class="heading-2">${esc(core + X.city)}</h1>
      <p class="status caption-4">${W[c.status === 'reserved' ? 'reserved' : 'available'][l]}</p>
      <p class="body-3 lead">${esc(lead)}</p>
      <div class="stats"><div class="tile"><b>${c.hp || '—'}</b><span class="caption-5">${L.tiles[0]}</span></div><div class="tile"><b>${c.accel ? F.accel(c.accel, l) : '—'}</b><span class="caption-5">${L.tiles[1]}</span></div><div class="tile"><b>${c.top || '—'}</b><span class="caption-5">${L.tiles[2]}</span></div></div>
      <div class="cp-actions"><a class="btn btn-md btn-gold" target="_blank" rel="noopener" href="${wa}"><i class="ph ph-whatsapp-logo" aria-hidden="true"></i>${L.ask}</a>${L.visit}</div>
      <div class="spec-groups"><section class="spec-group"><h2 class="caption-4">${L.groups[0]}</h2><dl>${g1}</dl></section><section class="spec-group"><h2 class="caption-4">${L.groups[1]}</h2><dl>${g2}</dl></section></div>
    </div>
  </div>
  ${others ? `<section class="cp-more" aria-labelledby="moreT"><h2 class="heading-3" id="moreT">${L.more}</h2><div class="cp-grid">${others}</div></section>` : ''}
`;
  const fill = s => s.split('{{TITLE}}').join(esc(title + ' | Aurea Premium Cars')).split('{{OGTITLE}}').join(esc(title)).split('{{DESC}}').join(esc(desc))
    .split('{{JSONLD}}').join(JSON.stringify(ld).replace(/</g, '\\u003c')).split('{{SLUG}}').join(c.slug).split('{{WA}}').join(wa);
  return fill(T[l].pre) + main + fill(T[l].post);
}

// ---- replace one "const NAME = ...;" statement in a script ----
function setConst(s, name, value) {
  const m = s.match(new RegExp('const ' + name + '\\s*=\\s*'));
  if (!m) throw new Error('const ' + name + ' not found');
  let i = m.index + m[0].length, d = 0, q = null, e = false;
  for (; i < s.length; i++) {
    const ch = s[i];
    if (q) { if (e) e = false; else if (ch === '\\') e = true; else if (ch === q) q = null; continue }
    if (ch === '"' || ch === "'" || ch === '`') { q = ch; continue }
    if (ch === '[' || ch === '{' || ch === '(') d++;
    else if (ch === ']' || ch === '}' || ch === ')') d--;
    else if (ch === ';' && d === 0) break;
  }
  return s.slice(0, m.index) + 'const ' + name + ' = ' + value + s.slice(i);
}

function build() {
  const data = loadData(), T = JSON.parse(fs.readFileSync(TPL, 'utf8'));
  const cars = data.cars.filter(c => c.photos && c.photos.length), slugs = new Set(cars.map(c => c.slug + '.html'));
  const total = Math.max(Number(data.settings.showroomTotal) || 0, cars.length), extra = total - cars.length;
  for (const l of LANGS) {
    // script.js: the car list, the "new arrivals" row and the showroom numbers
    let s = read(DIR[l] + 'script.js');
    s = setConst(s, 'CARS', '[\n' + cars.map(c => '  ' + JSON.stringify(siteCar(c, l))).join(',\n') + '\n]');
    s = setConst(s, 'NEW_ARRIVALS', JSON.stringify((data.settings.newArrivals || []).filter(id => cars.some(c => c.id === id))));
    const [mt, mx, mb, mw] = TXT[l].more(extra);
    s = setConst(s, 'SHOWROOM', JSON.stringify({ total, line: TXT[l].count(total), more: extra > 0 ? { title: mt, text: mx, btn: mb, wa: mw } : null }));
    write(DIR[l] + 'script.js', s);
    // detail pages: write the current ones, remove pages of deleted cars
    const dir = DIR[l] + 'voitures';
    for (const c of cars) write(`${dir}/${c.slug}.html`, carPage(c, l, { ...data, cars }, T));
    for (const f of fs.readdirSync(path.join(ROOT, dir))) if (f.endsWith('.html') && !slugs.has(f)) fs.unlinkSync(path.join(ROOT, dir, f));
    // home page: footer list of cars and the search-engine data
    let h = read(DIR[l] + 'index.html');
    h = h.replace(/(<nav class="foot-col foot-cars"[^>]*><h2[^>]*>[^<]*<\/h2>)[\s\S]*?(<\/nav>)/, (_, a, b) => a + cars.map(c => `<a class="body-6" href="voitures/${c.slug}.html">${esc(latin(c))}</a>`).join('') + b);
    h = h.replace(/"makesOffer": \[[\s\S]*?\]\}(?=<\/script>)/, '"makesOffer": ' + JSON.stringify(cars.map(c => ({ '@type': 'Offer', itemOffered: { '@type': 'Car', name: latin(c), brand: { '@type': 'Brand', name: c.make } } }))).replace(/</g, '\\u003c') + '}');
    write(DIR[l] + 'index.html', h);
  }
  // photos no longer used by any car or page are removed
  const used = new Set();
  for (const c of data.cars) for (const p of c.photos || []) for (const f of [p.file, sized(p.file, 800), sized(p.file, 160)]) used.add(path.basename(f));
  for (const f of [...LANGS.map(l => DIR[l] + 'index.html'), 'styles.css']) for (const m of read(f).matchAll(/assets\/cars\/([\w.-]+\.webp)/g)) used.add(m[1]);
  const pd = path.join(ROOT, 'assets/cars'); let removed = 0;
  for (const f of fs.readdirSync(pd)) if (f.endsWith('.webp') && !used.has(f)) { fs.unlinkSync(path.join(pd, f)); removed++ }
  return { cars: cars.length, total, removedPhotos: removed };
}
module.exports = { ROOT, LANGS, loadData, saveData, build, TXT, W, t };
if (require.main === module) console.log(build());
