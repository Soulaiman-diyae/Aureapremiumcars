/* ============ EDIT THIS BLOCK ============ */
const CONFIG = {
  name: 'Aurea Premium Cars',
  whatsapp: '212775772920',   // digits only with country code: 07 75 77 29 20 in Morocco (+212, leading 0 dropped)
  phone: '07 75 77 29 20',
  address: 'Av. Moulay Rachid, Tanger 90000',
  hours: 'Tous les jours, de 9h à 17h',
  handle: '@aurea.premium.cars',   // shown on the social card
  instagram: 'https://www.instagram.com/aurea.premium.cars/',   // full links
  tiktok: 'https://www.tiktok.com/@aurea.premium.cars',   // assumed to match the Instagram handle: check it opens your account
  mapImage: 'assets/carte-showroom-aurea-tanger.webp',            // optional screenshot of your Google Maps location, e.g. 'assets/map.png'
  mapsQuery: 'Aurea Premium Cars',   // what Google Maps should search for if there's no place link; empty uses the address
  mapsUrl: 'https://www.google.com/maps/place/Aurea+Premium+Cars/@35.7590064,-5.8436929,17z/data=!4m6!3m5!1s0xd0b87604569d273:0x8a68e9c26f7d0df8!8m2!3d35.7590064!4d-5.8436929!16s%2Fg%2F11njz8ymg1',   // your Google Maps listing
  drawnMap: true,   // show the gold-on-black drawn map (set to false for the Google Maps picture)
  mapsLatLng: '35.7590064,-5.8436929'   // the showroom's exact pin, used for directions
};
// Cars. "image" is the photo on the card, "gallery" the photos in the details popup, "alts" one description per gallery photo (for Google and screen readers).
// Each photo exists in three sizes: name.webp (1400px), name-800.webp (cards, phones) and name-160.webp (thumbnails).
// Anything written as {{...}} is still to be filled in; it stays hidden on cards and reads On request in the spec table.
const CARS = [{"id": "glc", "page": "voitures/mercedes-glc-coupe-noir-tanger.html", "make": "Mercedes-Benz", "model": "GLC Coupé 4MATIC", "year": 2026, "body": "SUV", "km": "Neuf", "color": "Noir", "from": "{{country}}", "status": "Disponible", "engine": "{{engine}}", "hp": "{{hp}}", "torque": "{{torque}}", "gearbox": "{{gearbox}}", "drive": "Quatre roues motrices (4MATIC)", "fuel": "{{fuel}}", "accel": "{{0 to 100 time}}", "top": "{{top speed}}", "image": "assets/cars/mercedes-glc-coupe-noir-tanger-avant-trois-quarts.webp", "gallery": ["assets/cars/mercedes-glc-coupe-noir-tanger-avant-trois-quarts.webp", "assets/cars/mercedes-glc-coupe-noir-tanger-face-avant.webp", "assets/cars/mercedes-glc-coupe-noir-tanger-arriere-trois-quarts.webp"], "alts": ["Mercedes-Benz GLC Coupé noir, vue trois-quarts avant, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC Coupé noir, vue de face avec la calandre étoilée, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC Coupé noir, vue trois-quarts arrière, chez Aurea Premium Cars à Tanger"]}, {"id": "glc300de", "page": "voitures/mercedes-glc-300-de-coupe-gris-tanger.html", "make": "Mercedes-Benz", "model": "GLC 300 de 4MATIC Coupé", "year": 2026, "body": "SUV", "km": "Neuf", "color": "Gris Alpin", "from": "{{country}}", "status": "Disponible", "engine": "Diesel turbo 2,0 L 4 cylindres avec moteur électrique", "hp": 333, "torque": "750 Nm", "gearbox": "Automatique 9 rapports (9G-TRONIC)", "drive": "Quatre roues motrices (4MATIC)", "fuel": "Hybride rechargeable diesel", "accel": "6.4 s", "top": "219 km/h", "interior": "Cuir marron Siena et noir", "equipment": "Toit panoramique, son Burmester", "battery": "31.2 kWh", "evRange": "113 à 130 km (WLTP)", "image": "assets/cars/mercedes-glc-300-de-coupe-gris-tanger-avant-trois-quarts.webp", "gallery": ["assets/cars/mercedes-glc-300-de-coupe-gris-tanger-avant-trois-quarts.webp", "assets/cars/mercedes-glc-300-de-coupe-gris-tanger-face-avant.webp", "assets/cars/mercedes-glc-300-de-coupe-gris-tanger-avant-cote.webp", "assets/cars/mercedes-glc-300-de-coupe-gris-tanger-arriere-trois-quarts.webp", "assets/cars/mercedes-glc-300-de-coupe-gris-tanger-arriere-jante.webp", "assets/cars/mercedes-glc-300-de-coupe-gris-tanger-tableau-de-bord.webp", "assets/cars/mercedes-glc-300-de-coupe-gris-tanger-poste-de-conduite.webp", "assets/cars/mercedes-glc-300-de-coupe-gris-tanger-console-centrale.webp", "assets/cars/mercedes-glc-300-de-coupe-gris-tanger-sieges-avant-porte-conducteur.webp", "assets/cars/mercedes-glc-300-de-coupe-gris-tanger-sieges-avant-porte-passager.webp", "assets/cars/mercedes-glc-300-de-coupe-gris-tanger-banquette-arriere.webp", "assets/cars/mercedes-glc-300-de-coupe-gris-tanger-toit-panoramique.webp", "assets/cars/mercedes-glc-300-de-coupe-gris-tanger-panneau-de-porte.webp"], "alts": ["Mercedes-Benz GLC 300 de 4MATIC Coupé gris, vue trois-quarts avant, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC 300 de 4MATIC Coupé gris, vue de face avec la calandre étoilée, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC 300 de 4MATIC Coupé gris, angle avant et jante alliage noire, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC 300 de 4MATIC Coupé gris, vue trois-quarts arrière, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC 300 de 4MATIC Coupé gris, angle arrière et jante alliage noire, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC 300 de 4MATIC Coupé gris, tableau de bord et écran tactile central, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC 300 de 4MATIC Coupé gris, volant et poste de conduite, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC 300 de 4MATIC Coupé gris, console centrale et sièges avant, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC 300 de 4MATIC Coupé gris, sièges avant vus de la porte conducteur, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC 300 de 4MATIC Coupé gris, sièges avant en cuir fauve vus de la porte passager, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC 300 de 4MATIC Coupé gris, sièges arrière en cuir fauve, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC 300 de 4MATIC Coupé gris, toit panoramique, chez Aurea Premium Cars à Tanger", "Mercedes-Benz GLC 300 de 4MATIC Coupé gris, panneau de porte en cuir fauve, chez Aurea Premium Cars à Tanger"]}, {"id": "cayenne", "page": "voitures/porsche-cayenne-e-hybrid-coupe-noir-tanger.html", "make": "Porsche", "model": "Cayenne E-Hybrid Coupé", "year": 2026, "body": "SUV", "km": 11398, "color": "Noir métallisé", "from": "{{country}}", "status": "Disponible", "engine": "Essence V6 turbo 3,0 L avec moteur électrique", "hp": 470, "torque": "650 Nm", "gearbox": "Automatique 8 rapports (Tiptronic S)", "drive": "Quatre roues motrices", "fuel": "Hybride rechargeable essence", "accel": "4.9 s", "top": "254 km/h", "interior": "Cuir vert et noir", "equipment": "Toit panoramique, son Bose, chrono Sport Chrono, jantes noires 21 pouces", "battery": "25.9 kWh", "evRange": "74 km (WLTP)", "image": "assets/cars/porsche-cayenne-e-hybrid-coupe-noir-tanger-avant-trois-quarts.webp", "gallery": ["assets/cars/porsche-cayenne-e-hybrid-coupe-noir-tanger-avant-trois-quarts.webp", "assets/cars/porsche-cayenne-e-hybrid-coupe-noir-tanger-avant-jante.webp", "assets/cars/porsche-cayenne-e-hybrid-coupe-noir-tanger-arriere-trois-quarts-gauche.webp", "assets/cars/porsche-cayenne-e-hybrid-coupe-noir-tanger-face-arriere.webp", "assets/cars/porsche-cayenne-e-hybrid-coupe-noir-tanger-arriere-trois-quarts-droit.webp", "assets/cars/porsche-cayenne-e-hybrid-coupe-noir-tanger-calandre-avant.webp", "assets/cars/porsche-cayenne-e-hybrid-coupe-noir-tanger-poste-de-conduite.webp", "assets/cars/porsche-cayenne-e-hybrid-coupe-noir-tanger-volant-compteurs.webp", "assets/cars/porsche-cayenne-e-hybrid-coupe-noir-tanger-compteurs-numeriques.webp", "assets/cars/porsche-cayenne-e-hybrid-coupe-noir-tanger-sieges-avant-toit-panoramique.webp", "assets/cars/porsche-cayenne-e-hybrid-coupe-noir-tanger-sieges-arriere.webp", "assets/cars/porsche-cayenne-e-hybrid-coupe-noir-tanger-planche-de-bord.webp"], "alts": ["Porsche Cayenne E-Hybrid Coupé noir, vue trois-quarts avant, chez Aurea Premium Cars à Tanger", "Porsche Cayenne E-Hybrid Coupé noir, angle avant et jante alliage noire, chez Aurea Premium Cars à Tanger", "Porsche Cayenne E-Hybrid Coupé noir, vue trois-quarts arrière avec quatre sorties d'échappement, chez Aurea Premium Cars à Tanger", "Porsche Cayenne E-Hybrid Coupé noir, vue arrière avec bandeau lumineux et quatre sorties d'échappement, chez Aurea Premium Cars à Tanger", "Porsche Cayenne E-Hybrid Coupé noir, vue trois-quarts arrière de l'autre côté, chez Aurea Premium Cars à Tanger", "Porsche Cayenne E-Hybrid Coupé noir, calandre avant et écusson du capot, chez Aurea Premium Cars à Tanger", "Porsche Cayenne E-Hybrid Coupé noir, intérieur côté conducteur, chez Aurea Premium Cars à Tanger", "Porsche Cayenne E-Hybrid Coupé noir, volant et combiné numérique, chez Aurea Premium Cars à Tanger", "Porsche Cayenne E-Hybrid Coupé noir, combiné numérique, chez Aurea Premium Cars à Tanger", "Porsche Cayenne E-Hybrid Coupé noir, sièges avant sous le toit panoramique, chez Aurea Premium Cars à Tanger", "Porsche Cayenne E-Hybrid Coupé noir, sièges arrière, chez Aurea Premium Cars à Tanger", "Porsche Cayenne E-Hybrid Coupé noir, tableau de bord côté passager, chez Aurea Premium Cars à Tanger"]}, {"id": "rrs", "page": "voitures/range-rover-sport-gris-bleu-tanger.html", "make": "Land Rover", "model": "Range Rover Sport", "year": "{{year}}", "body": "SUV", "km": 74485, "color": "Gris bleu métallisé", "from": "{{country}}", "status": "Disponible", "engine": "Diesel turbo 6 cylindres en ligne 3,0 L, micro-hybride", "hp": "{{hp}}", "torque": "{{torque}}", "gearbox": "Automatique 8 rapports", "drive": "Quatre roues motrices", "fuel": "Diesel", "accel": "{{0 to 100 time}}", "top": "{{top speed}}", "interior": "Cuir fauve et noir", "equipment": "Son Meridian, jantes noires 22 pouces, marchepieds", "image": "assets/cars/range-rover-sport-gris-bleu-tanger-avant-trois-quarts.webp", "gallery": ["assets/cars/range-rover-sport-gris-bleu-tanger-avant-trois-quarts.webp", "assets/cars/range-rover-sport-gris-bleu-tanger-face-avant.webp", "assets/cars/range-rover-sport-gris-bleu-tanger-calandre-avant.webp", "assets/cars/range-rover-sport-gris-bleu-tanger-aile-avant-jante.webp", "assets/cars/range-rover-sport-gris-bleu-tanger-panneau-de-porte.webp", "assets/cars/range-rover-sport-gris-bleu-tanger-tableau-de-bord.webp", "assets/cars/range-rover-sport-gris-bleu-tanger-ecran-central.webp", "assets/cars/range-rover-sport-gris-bleu-tanger-sieges-avant.webp", "assets/cars/range-rover-sport-gris-bleu-tanger-poste-de-conduite.webp", "assets/cars/range-rover-sport-gris-bleu-tanger-interieur-cote-conducteur.webp", "assets/cars/range-rover-sport-gris-bleu-tanger-interieur-cote-passager.webp", "assets/cars/range-rover-sport-gris-bleu-tanger-interieur-vue-large.webp"], "alts": ["Range Rover Sport gris bleu, vue trois-quarts avant, chez Aurea Premium Cars à Tanger", "Range Rover Sport gris bleu, vue de face, chez Aurea Premium Cars à Tanger", "Range Rover Sport gris bleu, calandre avant et phares, chez Aurea Premium Cars à Tanger", "Range Rover Sport gris bleu, aile avant et jante noire 22 pouces, chez Aurea Premium Cars à Tanger", "Range Rover Sport gris bleu, panneau de porte en cuir fauve, chez Aurea Premium Cars à Tanger", "Range Rover Sport gris bleu, tableau de bord et sièges avant en cuir fauve, chez Aurea Premium Cars à Tanger", "Range Rover Sport gris bleu, écran tactile central et console, chez Aurea Premium Cars à Tanger", "Range Rover Sport gris bleu, sièges avant et volant, chez Aurea Premium Cars à Tanger", "Range Rover Sport gris bleu, poste de conduite et écran tactile, chez Aurea Premium Cars à Tanger", "Range Rover Sport gris bleu, intérieur vu du côté conducteur, chez Aurea Premium Cars à Tanger", "Range Rover Sport gris bleu, intérieur vu du côté passager, chez Aurea Premium Cars à Tanger", "Range Rover Sport gris bleu, vue d'ensemble de l'intérieur, chez Aurea Premium Cars à Tanger"]}, {"id": "q5sb", "page": "voitures/audi-q5-sportback-s-line-noir-tanger.html", "make": "Audi", "model": "Q5 Sportback 40 TDI quattro S line", "year": 2026, "body": "SUV", "km": "Neuf", "color": "Noir métallisé", "from": "{{country}}", "status": "Disponible", "engine": "Diesel TDI 4 cylindres 2,0 L, micro-hybride", "hp": 204, "torque": "400 Nm", "gearbox": "Automatique S tronic 7 rapports", "drive": "Quatre roues motrices (quattro)", "fuel": "Diesel", "accel": "7.4 s", "top": "226 km/h", "interior": "Sièges noirs effet suède, surpiqûres rouges", "equipment": "Son Sonos, jantes 20 pouces, étriers de frein rouges", "image": "assets/cars/audi-q5-sportback-s-line-noir-tanger-avant-trois-quarts.webp", "gallery": ["assets/cars/audi-q5-sportback-s-line-noir-tanger-avant-trois-quarts.webp", "assets/cars/audi-q5-sportback-s-line-noir-tanger-face-avant.webp", "assets/cars/audi-q5-sportback-s-line-noir-tanger-avant-jante.webp", "assets/cars/audi-q5-sportback-s-line-noir-tanger-profil-portes-ouvertes.webp", "assets/cars/audi-q5-sportback-s-line-noir-tanger-arriere-jante.webp", "assets/cars/audi-q5-sportback-s-line-noir-tanger-arriere-trois-quarts.webp", "assets/cars/audi-q5-sportback-s-line-noir-tanger-interieur-sieges-avant.webp", "assets/cars/audi-q5-sportback-s-line-noir-tanger-tableau-de-bord.webp", "assets/cars/audi-q5-sportback-s-line-noir-tanger-console-centrale.webp", "assets/cars/audi-q5-sportback-s-line-noir-tanger-sieges-surpiqures-rouges.webp", "assets/cars/audi-q5-sportback-s-line-noir-tanger-panneau-de-porte.webp"], "alts": ["Audi Q5 Sportback 40 TDI quattro S line noir, vue trois-quarts avant, chez Aurea Premium Cars à Tanger", "Audi Q5 Sportback 40 TDI quattro S line noir, vue de face avec calandre nid d'abeille, chez Aurea Premium Cars à Tanger", "Audi Q5 Sportback 40 TDI quattro S line noir, angle avant et jante alliage, chez Aurea Premium Cars à Tanger", "Audi Q5 Sportback 40 TDI quattro S line noir, vue de profil, portes ouvertes, chez Aurea Premium Cars à Tanger", "Audi Q5 Sportback 40 TDI quattro S line noir, angle arrière et jante alliage, chez Aurea Premium Cars à Tanger", "Audi Q5 Sportback 40 TDI quattro S line noir, vue trois-quarts arrière, chez Aurea Premium Cars à Tanger", "Audi Q5 Sportback 40 TDI quattro S line noir, sièges avant et volant, chez Aurea Premium Cars à Tanger", "Audi Q5 Sportback 40 TDI quattro S line noir, tableau de bord et écrans incurvés, chez Aurea Premium Cars à Tanger", "Audi Q5 Sportback 40 TDI quattro S line noir, console centrale et écran passager, chez Aurea Premium Cars à Tanger", "Audi Q5 Sportback 40 TDI quattro S line noir, sièges à surpiqûres rouges, chez Aurea Premium Cars à Tanger", "Audi Q5 Sportback 40 TDI quattro S line noir, panneau de porte, chez Aurea Premium Cars à Tanger"]}, {"id": "q8", "page": "voitures/audi-q8-s-line-noir-tanger.html", "make": "Audi", "model": "Q8 50 TDI quattro S line", "year": 2026, "body": "SUV", "km": "Neuf", "color": "Noir métallisé", "from": "{{country}}", "status": "Disponible", "engine": "Diesel V6 TDI 3,0 L, micro-hybride", "hp": 286, "torque": "600 Nm", "gearbox": "Automatique 8 rapports (tiptronic)", "drive": "Quatre roues motrices (quattro)", "fuel": "Diesel", "accel": "6.1 s", "top": "241 km/h", "interior": "Cuir noir et effet suède, surpiqûres et ceintures rouges", "equipment": "Jantes 23 pouces, étriers rouges, coques de rétroviseurs et finitions carbone", "image": "assets/cars/audi-q8-s-line-noir-tanger-avant-trois-quarts.webp", "gallery": ["assets/cars/audi-q8-s-line-noir-tanger-avant-trois-quarts.webp", "assets/cars/audi-q8-s-line-noir-tanger-avant-jante.webp", "assets/cars/audi-q8-s-line-noir-tanger-arriere-trois-quarts-droit.webp", "assets/cars/audi-q8-s-line-noir-tanger-arriere-trois-quarts-gauche.webp", "assets/cars/audi-q8-s-line-noir-tanger-face-arriere.webp", "assets/cars/audi-q8-s-line-noir-tanger-interieur-porte-ouverte.webp", "assets/cars/audi-q8-s-line-noir-tanger-tableau-de-bord.webp", "assets/cars/audi-q8-s-line-noir-tanger-poste-de-conduite.webp", "assets/cars/audi-q8-s-line-noir-tanger-volant-s-compteurs.webp", "assets/cars/audi-q8-s-line-noir-tanger-banquette-arriere.webp", "assets/cars/audi-q8-s-line-noir-tanger-panneau-de-porte.webp", "assets/cars/audi-q8-s-line-noir-tanger-jante-23-pouces-etrier-rouge.webp", "assets/cars/audi-q8-s-line-noir-tanger-retroviseur-carbone.webp", "assets/cars/audi-q8-s-line-noir-tanger-badge-s-line.webp"], "alts": ["Audi Q8 50 TDI quattro S line noir, vue trois-quarts avant, chez Aurea Premium Cars à Tanger", "Audi Q8 50 TDI quattro S line noir, angle avant et jante 23 pouces, chez Aurea Premium Cars à Tanger", "Audi Q8 50 TDI quattro S line noir, vue trois-quarts arrière, chez Aurea Premium Cars à Tanger", "Audi Q8 50 TDI quattro S line noir, vue trois-quarts arrière de l'autre côté, chez Aurea Premium Cars à Tanger", "Audi Q8 50 TDI quattro S line noir, vue arrière avec bandeau lumineux, chez Aurea Premium Cars à Tanger", "Audi Q8 50 TDI quattro S line noir, intérieur vu par la porte ouverte, chez Aurea Premium Cars à Tanger", "Audi Q8 50 TDI quattro S line noir, tableau de bord et double écran tactile, chez Aurea Premium Cars à Tanger", "Audi Q8 50 TDI quattro S line noir, poste de conduite et volant à surpiqûres rouges, chez Aurea Premium Cars à Tanger", "Audi Q8 50 TDI quattro S line noir, volant S et combiné numérique, chez Aurea Premium Cars à Tanger", "Audi Q8 50 TDI quattro S line noir, sièges arrière matelassés et ceintures rouges, chez Aurea Premium Cars à Tanger", "Audi Q8 50 TDI quattro S line noir, panneau de porte, chez Aurea Premium Cars à Tanger", "Audi Q8 50 TDI quattro S line noir, jante 23 pouces et étrier de frein rouge, chez Aurea Premium Cars à Tanger", "Audi Q8 50 TDI quattro S line noir, coque de rétroviseur en carbone, chez Aurea Premium Cars à Tanger", "Audi Q8 50 TDI quattro S line noir, badge S line sur l'aile, chez Aurea Premium Cars à Tanger"]}];
// Which cars appear in the New arrivals section, by id.
const NEW_ARRIVALS = ['q8','cayenne','glc300de','q5sb'];
/* ========================================= */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const fmt=n=>n.toLocaleString('en-US');
const known=v=>v!=null&&v!==''&&!String(v).startsWith('{{');
const show=v=>known(v)?(typeof v==='number'?fmt(v):v):'—';
const name=c=>[c.year,c.make,c.model].filter(known).join(' ');
const parts=(...xs)=>xs.filter(Boolean).join(', ');
const lot=i=>'N° '+String(i+1).padStart(2,'0');
const st=c=>`<span class="status caption-4 ${c.status==='Disponible'?'':'res'}">${c.status}</span>`;
$$('[data-name]').forEach(e=>e.textContent=CONFIG.name);
$$('[data-addr]').forEach(e=>e.textContent=CONFIG.address);
$$('[data-hours]').forEach(e=>e.textContent=CONFIG.hours);
$$('[data-phone]').forEach(e=>e.textContent=CONFIG.phone);
const avail=CARS.filter(c=>c.status==='Disponible').length;
$('#countProof').textContent=`${CARS.length} voitures importées en showroom, ${avail} disponibles`;
$('#aCars').textContent=CARS.length;$('#aMakes').textContent=new Set(CARS.map(c=>c.make)).size;$('#aFrom').textContent=new Set(CARS.map(c=>c.from).filter(known)).size;
$$('#footContact p').forEach(p=>{if(p.textContent.startsWith('{{'))p.remove()});
const wa=t=>`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}`;
$$('[data-wa]').forEach(a=>a.href=wa(a.dataset.wa));

/* WhatsApp nudge: the button stays hidden until the page has been on screen for 10 seconds, then pops in with a bubble above it
   that fades away after 6 seconds; the button stays from then on. Once per visit: after that it is simply there from the start. */
(()=>{
  const btn=$('#waFloat');if(!btn)return;
  let done=false;try{done=sessionStorage.getItem('waNudge')==='1'}catch{}
  if(done){btn.classList.add('in');return}
  const bub=document.createElement('a');
  bub.className='wa-bubble';bub.href=btn.href;bub.target='_blank';bub.rel='noopener';
  bub.textContent='Contactez-nous sur WhatsApp pour plus d\'informations';
  btn.after(bub);
  let left=10000,t0=0,timer=0;
  const run=()=>{t0=performance.now();timer=setTimeout(fire,left)};
  const pause=()=>{clearTimeout(timer);left-=performance.now()-t0};
  document.addEventListener('visibilitychange',()=>{if(left>0)document.hidden?pause():run()});
  if(!document.hidden)run();
  function fire(){
    left=0;try{sessionStorage.setItem('waNudge','1')}catch{}
    btn.classList.add('in','pop');
    btn.addEventListener('animationend',e=>{if(e.animationName==='waPop')btn.classList.remove('pop')});
    const hide=()=>bub.classList.remove('show');
    setTimeout(()=>bub.classList.add('show'),550);              /* the bubble follows once the button has landed */
    setTimeout(hide,550+6000);
    bub.addEventListener('click',hide);
  }
})();
/* no photo yet: a faint outline of a car behind a "Photos coming soon" badge, so the card never reads as empty */
const sized=(p,w)=>p.replace('.webp',`-${w}.webp`);
const big=p=>innerWidth<=720?sized(p,800):p;
const altOf=(c,i)=>(c.alts&&c.alts[i])||name(c);
const art=c=>c.image?`<img src="${sized(c.image,800)}" srcset="${sized(c.image,800)} 800w, ${c.image} 1400w" sizes="(max-width:720px) 92vw, (max-width:1024px) 46vw, 32vw" width="800" height="800" alt="${altOf(c,0)}" loading="lazy" decoding="async">`:`<svg viewBox="0 0 400 140" role="img" aria-label="Photos de ${c.make} ${c.model} bientôt disponibles"><use href="#car"/></svg><span class="soon caption-4" aria-hidden="true">Photos bientôt disponibles</span>`;
/* a car's price, or an invitation to ask for it (add price:'...' to a car above to show it) */
const price=c=>known(c.price)?c.price:'Demander le prix';

/* scroll reveals */
/* elements that enter together (the hero on load, a row of cards on scroll) cascade 70ms apart, capped so nothing waits long */
const io=new IntersectionObserver(es=>{let k=0;es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,d=Math.min(k++,5)*70;
  el.style.transitionDelay=d+'ms';el.classList.add('in');io.unobserve(el);setTimeout(()=>el.style.transitionDelay='',d+700)})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
/* nothing fades in underneath the intro: reveals start once it has finished */
const introReady=window.introDone||Promise.resolve();
const watch=(root=document)=>introReady.then(()=>$$('.reveal:not(.in)',root).forEach(el=>io.observe(el)));

/* search: one state object drives both search forms and the grid */
const norm=s=>String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const HAY=new Map(CARS.map(c=>{const t=norm([c.year,c.make,c.model,c.body,c.color,c.from,c.engine,c.drive,c.fuel,c.status].filter(known).join(' '));return[c.id,t+' '+t.replace(/[\s-]+/g,'')]}));
const BLANK={q:'',make:'',model:'',body:'',km:'',avail:false,sort:'featured'};
const S={...BLANK};
const byText=(c,q)=>norm(q).split(/\s+/).filter(Boolean).every(w=>HAY.get(c.id).includes(w));
const num=v=>known(v)&&typeof v==='number'?v:null;
const kmOf=c=>c.km==='Neuf'?0:num(c.km);
const passes=c=>byText(c,S.q)&&(!S.make||c.make===S.make)&&(!S.model||c.model===S.model)&&(!S.body||c.body===S.body)
  &&(!S.avail||c.status==='Disponible')&&(!S.km||(kmOf(c)!==null&&kmOf(c)<+S.km));
const SORTS={year:(a,b)=>(num(b.year)??-1)-(num(a.year)??-1),km:(a,b)=>(kmOf(a)??Infinity)-(kmOf(b)??Infinity),hp:(a,b)=>(num(b.hp)??-1)-(num(a.hp)??-1),az:(a,b)=>`${a.make} ${a.model}`.localeCompare(`${b.make} ${b.model}`)};
const results=()=>{const l=CARS.map((c,i)=>[c,i]).filter(([c])=>passes(c));if(SORTS[S.sort])l.sort(([a],[b])=>SORTS[S.sort](a,b));return l};
const plural=n=>`${n} ${n===1?'voiture':'voitures'}`;
const opts=(all,list)=>`<option value="">${all}</option>`+list.map(v=>`<option>${v}</option>`).join('');
const makes=[...new Set(CARS.map(c=>c.make))].sort(),bodies=[...new Set(CARS.map(c=>c.body))];
$$('#hMake,#sMake').forEach(e=>e.innerHTML=opts('Toutes les marques',makes));
$('#hBody').innerHTML=opts('Toutes les carrosseries',bodies);
const fEl=$('#filters');
fEl.innerHTML=['',...bodies].map(b=>`<button class="fbtn body-5" type="button" aria-pressed="false" data-f="${b}">${b||'Toutes les voitures'}</button>`).join('');
fEl.addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(b){S.body=b.dataset.f;update()}});
function sync(){
  const models=[...new Set(CARS.filter(c=>!S.make||c.make===S.make).map(c=>c.model))].sort();
  $$('#hModel,#sModel').forEach(e=>e.innerHTML=opts('Tous les modèles',models));
  $$('[data-k]').forEach(e=>{const v=S[e.dataset.k];if(e.type==='checkbox')e.checked=v;else if(e.value!==v)e.value=v});
  $$('.fbtn').forEach(x=>x.setAttribute('aria-pressed',x.dataset.f===S.body));
  const n=results().length;
  $('#finderGo').textContent=n?`Voir ${plural(n)}`:'Aucune voiture';
  $('#resultCount').textContent=`${n} sur ${plural(CARS.length)}`;
  $('#clearAll').hidden=Object.keys(BLANK).every(k=>k==='sort'||S[k]===BLANK[k]);
}
let refreshT=0;
const remeasure=()=>{clearTimeout(refreshT);refreshT=setTimeout(()=>window.ScrollTrigger&&ScrollTrigger.refresh(),200)};
function update(){sync();render(false)}
$$('[data-k]').forEach(e=>e.addEventListener(e.type==='checkbox'||e.tagName==='SELECT'?'change':'input',()=>{
  const k=e.dataset.k;S[k]=e.type==='checkbox'?e.checked:e.value;if(k==='make')S.model='';update()}));
const clearAll=()=>{Object.assign(S,BLANK);update();closeSuggest()};
$('#clearAll').addEventListener('click',clearAll);
$('#tools').addEventListener('submit',e=>e.preventDefault());
/* hero search: live suggestions under the box; arrows pick one, Enter opens it or jumps to the results */
const sugEl=$('#hSuggest'),hQ=$('#hQ');let sugI=-1;
function closeSuggest(){sugEl.hidden=true;sugI=-1;hQ.setAttribute('aria-expanded','false');hQ.removeAttribute('aria-activedescendant')}
function suggest(){
  const q=hQ.value.trim();if(!q){closeSuggest();return}
  const hits=CARS.filter(c=>byText(c,q)).slice(0,5);sugI=-1;hQ.removeAttribute('aria-activedescendant');
  sugEl.innerHTML=hits.length?hits.map((c,i)=>`<li role="option" id="sug${i}" data-id="${c.id}" aria-selected="false"><span class="title-4">${c.make} ${c.model}</span><span class="caption-5 mono">${parts(known(c.year)&&c.year,known(c.hp)&&c.hp+' ch',c.status)}</span></li>`).join(''):`<li class="none body-6">Aucune voiture ne correspond</li>`;
  sugEl.hidden=false;hQ.setAttribute('aria-expanded','true');
}
hQ.addEventListener('input',suggest);
hQ.addEventListener('keydown',e=>{
  const items=$$('[role=option]',sugEl);
  if(e.key==='Escape'){closeSuggest();return}
  if((e.key==='ArrowDown'||e.key==='ArrowUp')&&items.length&&!sugEl.hidden){e.preventDefault();
    sugI=(sugI+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;
    items.forEach((x,i)=>x.setAttribute('aria-selected',i===sugI));hQ.setAttribute('aria-activedescendant','sug'+sugI)}
  if(e.key==='Enter'&&sugI>=0){e.preventDefault();const id=items[sugI].dataset.id;closeSuggest();openCar(CARS.findIndex(x=>x.id===id))}
});
hQ.addEventListener('blur',()=>setTimeout(closeSuggest,160));
$('#finder').addEventListener('submit',e=>{e.preventDefault();closeSuggest();$('#cars').scrollIntoView()});

/* inventory */
const card=(c,i,cls='')=>`<button class="car ${cls}" type="button" data-id="${c.id}" aria-label="Voir les détails de ${name(c)}">
    <div class="car-img${c.image?' has-photo':''}">${art(c)}<span class="lot mono caption-5">${lot(i)}</span>${st(c)}</div>
    <div class="car-body"><div><p class="make caption-4">${c.make}</p><h3 class="heading-6">${c.model}</h3><p class="sub body-6">${parts(known(c.year)&&c.year,c.color,known(c.from)&&'imported from '+c.from)}</p></div>
    <div class="figs"><div><b>${show(c.km)}</b><span class="caption-5">${c.km==='Neuf'?'état':'km'}</span></div><div><b>${show(c.hp)}</b><span class="caption-5">ch</span></div><div><b>${show(c.accel)}</b><span class="caption-5">0 à 100</span></div></div>
    <div class="car-foot"><span class="price title-3">${price(c)}</span><span class="body-5 cta">Voir les détails<i class="ph ph-arrow-right" aria-hidden="true"></i></span></div></div></button>`;
const pick=ids=>ids.map(id=>[CARS.find(c=>c.id===id),CARS.findIndex(c=>c.id===id)]).filter(([c])=>c);
$('#newRail').innerHTML=pick(NEW_ARRIVALS).map(([c,i])=>card(c,i)).join('');
const rail=$('#newRail');
document.addEventListener('click',e=>{const b=e.target.closest('[data-rail]');if(!b)return;
  const w=rail.firstElementChild.getBoundingClientRect().width+24;rail.scrollBy({left:w*b.dataset.rail,behavior:still.matches?'auto':'smooth'})});
function render(animate=true){
  const list=results();
  $('#grid').innerHTML=list.length?list.map(([c,i])=>card(c,i,animate?'reveal':'')).join(''):`<div class="empty"><p class="body-3">Aucune voiture ne correspond à cette recherche.</p><div class="row"><button class="btn btn-sm" type="button" id="emptyClear">Effacer la recherche</button><a class="btn btn-sm btn-gold" target="_blank" rel="noopener" href="${wa('Bonjour, je cherche une voiture qui n\'est pas dans votre showroom :')}">Dites-nous ce que vous cherchez</a></div></div>`;
  const x=$('#emptyClear');if(x)x.addEventListener('click',clearAll);
  if(animate)watch($('#grid'));
  /* the grid's height just changed, so the pinned visit section below must re-measure where it starts */
  remeasure();
}
sync();
/* loading: skeletons hold the grid until fonts and any car photos are in (at least 450ms so it never flashes, at most 4s) */
const grid=$('#grid'),sk='<span class="sk-shape sk-l1"></span><span class="sk-shape sk-l2"></span><span class="sk-shape sk-l3"></span><span class="sk-shape sk-pill"></span>';
grid.setAttribute('aria-busy','true');
grid.innerHTML=CARS.map(()=>`<div class="sk" aria-hidden="true"><span class="sk-shape sk-img"></span><div class="sk-lines">${sk}</div></div>`).join('')+'<p class="sr-only">Chargement des voitures</p>';
const photos=CARS.filter(c=>c.image).map(c=>new Promise(r=>{const i=new Image();i.onload=i.onerror=r;i.src=sized(c.image,800)}));
const wait=ms=>new Promise(r=>setTimeout(r,ms));
Promise.race([Promise.all([document.fonts?document.fonts.ready:0,...photos,wait(450)]),wait(4000)]).then(()=>{grid.removeAttribute('aria-busy');render()});
$('#fCar').innerHTML='<option value="">Pas encore décidé</option>'+CARS.map(c=>`<option>${name(c)}</option>`).join('');

/* detail dialog */
const dlg=$('#carDialog');let cur=0;
/* photo gallery in the popup: one large photo, thumbnails underneath swap it */
/* swipe the big photo left or right (finger or mouse drag), or use the gold arrows on it, or the keyboard arrow keys */
const many=c=>c.gallery.length>1;
const gallery=c=>`<div class="car-img has-photo" id="dStage"><img id="dPhoto" src="${big(c.gallery[0])}" width="1400" height="1400" alt="${altOf(c,0)}" decoding="async" draggable="false">
  ${many(c)?`<button class="ph-arrow prev" type="button" data-step="-1" aria-label="Photo précédente"><i class="ph ph-caret-left" aria-hidden="true"></i></button><button class="ph-arrow next" type="button" data-step="1" aria-label="Photo suivante"><i class="ph ph-caret-right" aria-hidden="true"></i></button><span class="ph-count caption-5" id="dCount" aria-hidden="true">1 / ${c.gallery.length}</span>`:''}</div>
  <div class="thumbs" role="group" aria-label="Photos">${c.gallery.map((g,i)=>`<button class="thumb" type="button" data-photo="${i}" aria-label="Photo ${i+1}" aria-pressed="${i===0}"><img src="${sized(g,160)}" width="160" height="160" alt="" loading="lazy" decoding="async"></button>`).join('')}</div>`;
let ph=0,dragAt=0,photoRun=0;
/* changing photo: the old one keeps moving the way it was going and fades out, the new one is fully loaded first and
   then slides in from the other side, so nothing snaps back or flashes. The photos either side are loaded ahead. */
function showPhoto(i,dir=0,from=0){
  const c=CARS[cur];if(!c.gallery)return;const n=c.gallery.length,p=$('#dPhoto');ph=(i+n)%n;
  const run=++photoRun,src=big(c.gallery[ph]),alt=altOf(c,ph);
  const th=$$('.thumb',dlg);th.forEach((b,k)=>b.setAttribute('aria-pressed',k===ph));
  const cnt=$('#dCount');if(cnt)cnt.textContent=`${ph+1} / ${n}`;
  const t=th[ph],box=t&&t.parentElement;               /* keep the chosen thumbnail in view in the thumbnail strip */
  if(box&&box.scrollWidth>box.clientWidth){const a=box.getBoundingClientRect(),b=t.getBoundingClientRect();box.scrollTo({left:box.scrollLeft+b.left-a.left-(a.width-b.width)/2,behavior:'smooth'})}
  const pre=new Image();pre.src=src;
  const ready=Promise.race([(pre.decode?pre.decode():Promise.resolve()).catch(()=>{}),new Promise(r=>setTimeout(r,2500))]);
  [ph+1,ph-1].forEach(k=>{const im=new Image();im.src=big(c.gallery[(k+n)%n])});
  const swap=()=>{if(run!==photoRun)return false;p.src=src;p.alt=alt;return true};
  if(!dir||!p.animate){ready.then(swap);return}
  p.getAnimations().forEach(a=>a.cancel());
  const w=p.parentElement.clientWidth||400;
  const out=p.animate([{transform:`translateX(${from}px)`,opacity:1},{transform:`translateX(${from-dir*Math.max(60,w*.18)}px)`,opacity:0}],{duration:170,easing:'cubic-bezier(.4,0,1,1)',fill:'forwards'});
  p.style.transform='';
  Promise.all([ready,Promise.race([out.finished.catch(()=>{}),new Promise(r=>setTimeout(r,260))])]).then(()=>{
    if(!swap())return;
    p.animate([{transform:`translateX(${dir*60}px)`,opacity:0},{transform:'none',opacity:1}],{duration:320,easing:'cubic-bezier(.2,.8,.2,1)'});
    out.cancel();
  });
}
dlg.addEventListener('click',e=>{
  const t=e.target.closest('[data-photo]');if(t){const i=+t.dataset.photo;showPhoto(i,i>ph?1:i<ph?-1:0);return}
  const s=e.target.closest('[data-step]');if(s&&Date.now()-dragAt>250){const d=+s.dataset.step;showPhoto(ph+d,d)}
});
dlg.addEventListener('keydown',e=>{
  if((e.key!=='ArrowLeft'&&e.key!=='ArrowRight')||!$('#dPhoto')||e.target.closest('input,select,textarea'))return;
  e.preventDefault();const d=e.key==='ArrowRight'?1:-1;showPhoto(ph+d,d);
});
(()=>{let sx=null,sy=0,dx=0,drag=false,pid=0;
  const img=()=>$('#dPhoto');
  dlg.addEventListener('pointerdown',e=>{
    const st=e.target.closest('#dStage');if(!st||e.target.closest('button')||e.button>0||!many(CARS[cur]))return;
    sx=e.clientX;sy=e.clientY;dx=0;drag=false;pid=e.pointerId;
  });
  dlg.addEventListener('pointermove',e=>{
    if(sx===null||e.pointerId!==pid)return;dx=e.clientX-sx;const dy=e.clientY-sy;
    if(!drag){
      if(Math.abs(dx)>8&&Math.abs(dx)>Math.abs(dy)){drag=true;$('#dStage').classList.add('dragging');try{$('#dStage').setPointerCapture(pid)}catch(_){}}
      else if(Math.abs(dy)>10){sx=null;return}                 /* a vertical move is a scroll, leave it to the page */
      else return;
    }
    img().style.transform=`translateX(${dx}px)`;
  });
  const end=e=>{
    if(sx===null||e.pointerId!==pid)return;sx=null;if(!drag)return;drag=false;
    const st=$('#dStage'),p=img();st.classList.remove('dragging');
    const cancel=e.type==='pointercancel';
    if(!cancel&&Math.abs(dx)>Math.min(60,st.clientWidth*.15)){const d=dx<0?1:-1;showPhoto(ph+d,d,dx)}   /* carries on from where the finger let go */
    else{p.style.transform='';if(p.animate)p.animate([{transform:`translateX(${dx}px)`},{transform:'none'}],{duration:260,easing:'cubic-bezier(.2,.8,.2,1)'})}
    dragAt=Date.now();                                        /* a drag is not a click */
  };
  dlg.addEventListener('pointerup',end);dlg.addEventListener('pointercancel',end);
})();
const group=(t,rows)=>`<section class="spec-group"><h3 class="caption-4">${t}</h3><dl>${rows.map(r=>`<div><dt class="body-6">${r[0]}</dt><dd class="body-5">${String(r[1]).includes('{{')?'Sur demande':r[1]}</dd></div>`).join('')}</dl></section>`;
function openCar(i){
  cur=(i+CARS.length)%CARS.length;const c=CARS[cur];ph=0;
  $('#dBody').innerHTML=`<div class="dlg"><div class="dlg-top"><div class="meta"><span class="lot mono caption-5">${lot(cur)}</span>${st(c)}</div>
  <div class="dlg-nav"><button class="gbtn" data-nav="-1" aria-label="Voiture précédente"><i class="ph ph-caret-left"></i></button><button class="gbtn" data-nav="1" aria-label="Voiture suivante"><i class="ph ph-caret-right"></i></button><button class="gbtn" data-close aria-label="Fermer"><i class="ph ph-x"></i></button></div></div>
  <div class="dlg-grid"><div class="dlg-media">${c.gallery?gallery(c):`<div class="car-img">${art(c)}</div>`}</div><div class="dlg-info"><p class="make caption-4">${c.make}</p><h2 class="heading-4" id="dTitle">${c.model}</h2><p class="sub body-6">${parts(known(c.year)&&c.year,c.body,c.color)}</p>
  <div class="stats"><div class="tile"><b>${show(c.hp)}</b><span class="caption-5">Puissance (ch)</span></div><div class="tile"><b>${show(c.accel)}</b><span class="caption-5">0 à 100 km/h</span></div><div class="tile"><b>${show(known(c.top)?c.top.replace(' km/h',''):c.top)}</b><span class="caption-5">Vitesse max, km/h</span></div></div>
  <div class="spec-tabs"><button class="spec-tab body-5" type="button" data-spec="0" aria-pressed="true">Aperçu</button><button class="spec-tab body-5" type="button" data-spec="1" aria-pressed="false">Moteur et transmission</button></div>
  <div class="spec-groups">${group('Aperçu',[['Année',c.year],['Kilométrage',c.km==='Neuf'?'Neuf':fmt(c.km)+' km'],['Couleur',c.color],['Carrosserie',c.body],...(c.interior?[['Intérieur',c.interior]]:[]),...(c.equipment?[['Équipement',c.equipment]]:[]),['Importée de',c.from]])}${group('Moteur et transmission',[['Moteur',c.engine],['Couple',c.torque],['Boîte de vitesses',c.gearbox],['Transmission',c.drive],['Carburant',c.fuel],...(c.battery?[['Batterie',c.battery]]:[]),...(c.evRange?[['Autonomie électrique',c.evRange]]:[])])}</div>
  <a class="dlg-more body-5" href="${c.page}">Ouvrir la page complète<i class="ph ph-arrow-right" aria-hidden="true"></i></a>
  <div class="dlg-cta"><a class="btn btn-md btn-gold" target="_blank" rel="noopener" href="${wa(`Bonjour, je souhaite connaître le prix et voir cette voiture : ${name(c)}.`)}"><i class="ph ph-whatsapp-logo" aria-hidden="true"></i>Se renseigner sur cette voiture</a><a class="btn btn-md" href="${c.page}">Ouvrir la page complète</a></div></div></div></div>`;   /* specs and the button sit in the right column, beside the photos */
  if(!dlg.open){dlg.showModal();if(innerWidth<=720){try{history.pushState({carOpen:1},'');pushed=true}catch(_){}}}else dlg.scrollTo({top:0});
}
/* on a phone the popup fills the screen, so the back button closes it instead of leaving the site */
let pushed=false;
addEventListener('popstate',()=>{if(pushed){pushed=false;if(dlg.open)dlg.close()}});
dlg.addEventListener('close',()=>{if(pushed){pushed=false;try{history.back()}catch(_){}}});
/* phone: the two spec tables sit behind two tabs, so the buttons stay close to the photos */
dlg.addEventListener('click',e=>{const b=e.target.closest('[data-spec]');if(!b)return;$('.spec-groups',dlg).dataset.on=b.dataset.spec;$$('.spec-tab',dlg).forEach(x=>x.setAttribute('aria-pressed',x===b))});
document.addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b){closeSuggest();openCar(CARS.findIndex(x=>x.id===b.dataset.id))}});
dlg.addEventListener('click',e=>{const n=e.target.closest('[data-nav]');if(n)openCar(cur+Number(n.dataset.nav))});
document.addEventListener('click',e=>{
  if(e.target.closest('[data-close]')){e.target.closest('dialog').close()}
  else if(e.target.tagName==='DIALOG')e.target.close();
  const l=e.target.closest('[data-legal]');
  if(l){const p=l.dataset.legal==='privacy';$('#lTitle').textContent=p?LEGAL.title[0]:LEGAL.title[1];$('#lText').innerHTML=p?LEGAL.privacy:LEGAL.terms;$('#legalDialog').scrollTop=0;$('#legalDialog').showModal()}
});

/* nav */
const mb=$('#menuBtn');
function setMenu(o){document.body.classList.toggle('menu-open',o);mb.setAttribute('aria-expanded',o);$('#mobileMenu').setAttribute('aria-hidden',!o);document.body.style.overflow=o?'hidden':''}
mb.addEventListener('click',()=>setMenu(!document.body.classList.contains('menu-open')));
$$('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
const still=matchMedia('(prefers-reduced-motion: reduce)');
/* header: hidden while scrolling down, back on scrolling up or near the top; about 12px of travel flips it */
const navEl=$('#nav');let navY=scrollY,navTravel=0;
addEventListener('scroll',()=>{
  const y=Math.max(0,scrollY),d=y-navY;navY=y;
  navEl.classList.toggle('scrolled',y>40);                 /* away from the top: the soft fade behind the logo shows */
  if(y<80){navEl.classList.remove('away');navTravel=0;return}
  navTravel=Math.sign(d)===Math.sign(navTravel)?navTravel+d:d;
  if(navTravel>12)navEl.classList.add('away');else if(navTravel<-12)navEl.classList.remove('away');
},{passive:true});

/* reveals + brand strip: repeat the logos until one half of the track is wider than the screen (even if the window is
   later widened to full screen), then double it, so the left-to-right loop never shows a gap or a jump */
watch();
const track=$('#brandTrack'),set=[...track.children];
const dupe=li=>{const d=li.cloneNode(true);d.classList.add('dupe');d.setAttribute('aria-hidden','true');track.append(d)};
{
  const setW=set.reduce((w,li)=>w+li.getBoundingClientRect().width,0)||1;
  const need=Math.max(innerWidth,screen.width||0)*1.15;
  for(let n=Math.min(10,Math.ceil(need/setW)-1);n>0;n--)set.forEach(dupe);
  [...track.children].forEach(dupe);
}

/* questions: Expand all opens the rows one after another from the top; Collapse all closes them in reverse, from the bottom.
   Each answer slides open or shut; a second click mid-way takes over from wherever the sequence is. */
const faqItems=$$('#faqList details'),faqBtn=$('#faqToggle'),EASE='cubic-bezier(0.22,1,0.36,1)';
let faqRun=0;
/* the card grows to fit its answer while the answer fades in and rises a few pixels; closing runs the same in reverse.
   A short movement the visitor starts, so it plays with reduced motion on too. */
function slide(d,open){
  const p=d.querySelector('p'),from0=p.getAnimations().length?p.getBoundingClientRect().height:null;p.getAnimations().forEach(a=>a.cancel());
  if(open)d.open=true;
  d.classList.toggle('on',open);
  const h=p.scrollHeight,pad=getComputedStyle(p).paddingBottom,
    shut={height:'0px',paddingBottom:'0px',opacity:0,transform:'translateY(-6px)'},full={height:h+'px',paddingBottom:pad,opacity:1,transform:'none'};
  if(from0!==null)(open?shut:full).height=from0+'px';                     /* a second click mid-way carries on from where it is */
  p.style.overflow='hidden';
  const a=p.animate(open?[shut,full]:[full,shut],{duration:open?420:300,easing:EASE});
  a.onfinish=()=>{p.style.overflow='';if(!open&&!d.classList.contains('on'))d.open=false};   /* unless it was reopened meanwhile */
}
faqItems.forEach(d=>{d.classList.toggle('on',d.open);
  d.querySelector('summary').addEventListener('click',e=>{e.preventDefault();faqRun++;slide(d,!d.classList.contains('on'))})});
const setFaqBtn=open=>{faqBtn.setAttribute('aria-expanded',open);faqBtn.querySelector('span').textContent=open?'Tout fermer':'Tout ouvrir';
  faqBtn.querySelector('i').className='ph '+(open?'ph-arrows-in-line-vertical':'ph-arrows-out-line-vertical')};
faqBtn.addEventListener('click',async()=>{
  const open=faqBtn.getAttribute('aria-expanded')!=='true',run=++faqRun;setFaqBtn(open);
  for(const d of open?faqItems:[...faqItems].reverse()){
    if(run!==faqRun)return;
    if(d.classList.contains('on')===open)continue;
    slide(d,open);await wait(open?110:80);
  }
});
/* opening rows changes the page height, so the pinned visit section re-measures once things settle; the button follows manual toggles */
let faqRefresh=0;
faqItems.forEach(d=>d.addEventListener('toggle',()=>{
  clearTimeout(faqRefresh);faqRefresh=setTimeout(()=>{window.ScrollTrigger&&ScrollTrigger.refresh();
    if(!faqItems.some(x=>x.querySelector('p').getAnimations().length))setFaqBtn(faqItems.every(x=>x.open))},450);
}));

/* visit cards: content */
$('#handle').textContent=CONFIG.handle;
$('#posts').innerHTML=CARS.slice(0,6).map((c,i)=>`<span class="post"><img src="${sized(c.image,800)}" width="800" height="800" alt="" loading="lazy" decoding="async">${i%3===1?'<i class="ph-fill ph-play"></i>':''}</span>`).join('');
const SOCIALS=[['instagram','Instagram','ph-instagram-logo'],['tiktok','TikTok','ph-tiktok-logo']];
$('#socials').innerHTML=SOCIALS.map(([k,n,ic],i)=>CONFIG[k]
  ?`<a class="btn btn-md${i===0?' btn-gold':''}" href="${CONFIG[k]}" target="_blank" rel="noopener"><i class="ph ${ic}" aria-hidden="true"></i>${n}</a>`
  :`<span class="btn btn-md" aria-disabled="true" title="Add your ${n} link in script.js" style="opacity:.5;cursor:default"><i class="ph ${ic}" aria-hidden="true"></i>${n}</span>`).join('');
/* footer: Instagram and TikTok sit right next to the WhatsApp "Message us" button (only the ones that have a link) */
$('#footSocial').insertAdjacentHTML('beforeend',SOCIALS.filter(([k])=>CONFIG[k]).map(([k,n,ic])=>
  `<a class="btn btn-md" href="${CONFIG[k]}" target="_blank" rel="noopener"><i class="ph ${ic}" aria-hidden="true"></i>${n}</a>`).join(''));
const mq=encodeURIComponent(CONFIG.mapsQuery||CONFIG.address);
/* open your exact listing when there is one; directions go to the exact pin so they never land on a similarly named place */
$('#mapsOpen').href=CONFIG.mapsUrl||`https://www.google.com/maps/search/?api=1&query=${mq}`;
/* the whole map opens Google Maps too, as people expect when they tap a map */
/* the map: a screenshot of Google Maps when CONFIG.mapImage is set (the whole picture opens Google Maps), otherwise the live
   Google map zoomed out on the city. The drawn map underneath shows only when neither is available */
const mapLink=()=>$('#mapVisual').insertAdjacentHTML('beforeend',`<a class="map-link" href="${$('#mapsOpen').href}" target="_blank" rel="noopener" aria-label="Ouvrir ${CONFIG.name} dans Google Maps"></a>`);
if(CONFIG.drawnMap)mapLink();
else if(CONFIG.mapImage){
  /* a Google Maps picture you can move like a map: drag with the mouse or two fingers, zoom with the + and − buttons,
     a double click, a pinch or Ctrl + wheel. The pin stays on the showroom and keeps its size */
  const box=$('#mapVisual'),IW=896,IH=629,PX=354,PY=263;
  box.insertAdjacentHTML('afterbegin',`<div class="mstage"><img class="map-img" src="${CONFIG.mapImage}" width="896" height="629" alt="Plan indiquant où se trouve ${CONFIG.name}" decoding="async" draggable="false"><span class="gpin" aria-hidden="true"><svg viewBox="0 0 27 43"><path d="M13.5 0C6 0 0 6 0 13.4c0 10 13.5 29.6 13.5 29.6S27 23.4 27 13.4C27 6 21 0 13.5 0z" fill="#EA4335"/><path d="M13.5 1.2c6.8 0 12.3 5.4 12.3 12.2 0 8.6-10.4 24.6-12.3 27.4C11.6 38 1.2 22 1.2 13.4 1.2 6.6 6.7 1.2 13.5 1.2z" fill="none" stroke="#A52714" stroke-width="1" opacity=".55"/><circle cx="13.5" cy="13.5" r="4.8" fill="#A52714"/></svg><b>${CONFIG.name}</b></span></div><div class="mzoom"><button type="button" data-z="1" aria-label="Zoom avant">+</button><button type="button" data-z="-1" aria-label="Zoom arrière">−</button></div><span class="gcredit">© Google</span>`);
  $('.map-art')?.remove();$('.map-chip')?.remove();box.classList.add('live');
  const st=$('.mstage',box),lab=$('.gpin b',box);let W=0,H=0,base=1,z=1,x=0,y=0;
  const clamp=()=>{const s=base*z;x=Math.min(0,Math.max(W-IW*s,x));y=Math.min(0,Math.max(H-IH*s,y))};
  const draw=()=>{clamp();st.style.transform=`translate(${x}px,${y}px) scale(${base*z})`;st.style.setProperty('--iz',1/(base*z));
    /* the name sits left of the pin; it moves to the right when the left edge would cut it */
    const s=base*z,px=x+PX*s,lw=lab.offsetWidth+31;lab.parentNode.classList.toggle('flip',px-lw<6)};
  const fit=()=>{const r=box.getBoundingClientRect();if(!r.width)return;const s0=base*z;
    const cx=(W/2-x)/s0,cy=(H/2-y)/s0;W=r.width;H=r.height;base=Math.max(W/IW,H/IH);
    const s=base*z;if(!s0||!isFinite(cx)||st.dataset.ready!=='1'){x=W/2-PX*s;y=H/2-PY*s;st.dataset.ready='1'}else{x=W/2-cx*s;y=H/2-cy*s}draw()};
  const zoomAt=(nz,px,py)=>{nz=Math.min(2.5,Math.max(1,nz));const s0=base*z,s=base*nz;x=px-(px-x)*s/s0;y=py-(py-y)*s/s0;z=nz;draw()};
  const local=e=>{const r=box.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]};
  new ResizeObserver(fit).observe(box);fit();
  $$('[data-z]',box).forEach(bt=>bt.addEventListener('click',()=>zoomAt(z*(+bt.dataset.z>0?1.5:1/1.5),W/2,H/2)));
  box.addEventListener('dblclick',e=>{if(e.target.closest('.mzoom'))return;const[px,py]=local(e);zoomAt(z*1.5,px,py)});
  box.addEventListener('wheel',e=>{if(!(e.ctrlKey||e.metaKey))return;e.preventDefault();const[px,py]=local(e);zoomAt(z*Math.exp(-e.deltaY*0.0025),px,py)},{passive:false});
  /* mouse: drag. Touch: one finger keeps scrolling the page, two fingers move and pinch the map */
  const pts=new Map();let last=null;
  box.addEventListener('pointerdown',e=>{if(e.target.closest('.mzoom'))return;if(e.pointerType==='mouse'&&e.button!==0)return;
    pts.set(e.pointerId,local(e));if(e.pointerType==='mouse'||pts.size===2){box.setPointerCapture(e.pointerId);box.classList.add('dragging')}last=null});
  box.addEventListener('pointermove',e=>{if(!pts.has(e.pointerId))return;const p=local(e);pts.set(e.pointerId,p);
    const v=[...pts.values()];if(e.pointerType!=='mouse'&&v.length<2)return;
    const c=v.length>1?[(v[0][0]+v[1][0])/2,(v[0][1]+v[1][1])/2]:v[0],dist=v.length>1?Math.hypot(v[0][0]-v[1][0],v[0][1]-v[1][1]):0;
    if(last){x+=c[0]-last.c[0];y+=c[1]-last.c[1];if(dist&&last.d)zoomAt(z*dist/last.d,c[0],c[1]);else draw()}last={c,d:dist}});
  const up=e=>{pts.delete(e.pointerId);last=null;if(!pts.size)box.classList.remove('dragging')};
  box.addEventListener('pointerup',up);box.addEventListener('pointercancel',up);
}
else if(CONFIG.mapsLatLng){$('.map-chip')?.remove();$('#mapVisual').insertAdjacentHTML('beforeend',`<iframe class="map-frame" src="https://maps.google.com/maps?q=${CONFIG.mapsLatLng}&z=16&hl=fr&output=embed" title="Google Maps · ${CONFIG.name}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`)}
else mapLink();
$('#fCar').addEventListener('change',e=>{const c=CARS.find(x=>name(x)===e.target.value);
  $('#visitCar').textContent=c?`${c.make} ${c.model}`:'N\'importe quelle voiture du showroom';
  $('#visitSub').textContent=c?parts(known(c.year)&&c.year,known(c.km)&&(c.km==='Neuf'?'Neuf':fmt(c.km)+' km'),c.status.toLowerCase()):'Choisissez une voiture dans le formulaire, elle apparaîtra ici'});

/* visit cards: pinned stack. Each card slides up over the last, earlier cards shrink back into a stack. */
const stackSec=$('.stack-sec'),scards=$$('.scard'),sdots=$('#sdots'),sLabel=$('#stackLabel');
sdots.innerHTML=scards.map((c,i)=>`<button class="sdot" type="button" tabindex="-1" data-i="${i}" aria-label="${c.dataset.label}"></button>`).join('');
let stackST=null,stackTL=null;
/* runs on every scroll frame, so it only touches the page when the card actually changes */
let stepNow=-1;
const setStep=i=>{if(i===stepNow)return;stepNow=i;$$('.sdot',sdots).forEach((d,j)=>d.classList.toggle('on',j===i));sLabel.textContent=scards[i].dataset.label};
setStep(0);
/* a card's content (its visual and its text, each as one block) settles in: fades up a short way.
   Moving whole blocks, not every line, keeps the text steady while the card itself travels. */
const settle=(tl,c,at,dur=.5)=>tl.fromTo([$('.scard-visual',c),$('.scard-copy',c)],{autoAlpha:0,y:22},{autoAlpha:1,y:0,ease:'power2.out',duration:dur,stagger:.08},at);
/* each card's text goes into one block, so it can be shrunk as a whole when a short screen can't fit it */
$$('.scard-copy').forEach(c=>{const w=document.createElement('div');w.className='scard-fit';while(c.firstChild)w.append(c.firstChild);c.append(w)});
function fitCards(){
  scards.forEach(c=>{
    const copy=$('.scard-copy',c),fit=$('.scard-fit',copy);fit.style.zoom='';
    if(!stackSec.classList.contains('is-stacked'))return;
    const cs=getComputedStyle(copy),room=copy.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom),need=fit.offsetHeight;
    if(need>room)fit.style.zoom=Math.max(.7,room/need).toFixed(3);
  });
}
/* one card change per 600px of scrolling: about six notches of a normal mouse wheel, whatever the screen size */
const STEP=600;
if(window.gsap&&window.ScrollTrigger){
  gsap.registerPlugin(ScrollTrigger);
  /* one matchMedia for both layouts, so the old layout is fully reverted before the new one is built */
  gsap.matchMedia().add({desk:'(min-width: 900px) and (min-height: 520px)',list:'(max-width: 899px), (max-height: 519px)'},ctx=>{
    if(ctx.conditions.desk){
      stackSec.classList.add('is-stacked');
      const n=scards.length,HOLD=.5,pin=$('.stack-pin',stackSec),stack=$('#stack'),run=Math.round((n-1+HOLD)*STEP);
      /* the frame is held by CSS position:sticky, not pinned by script: the browser keeps it still on its own scrolling
         thread, so it can never overshoot by a few pixels and snap back when the pin locks or lets go.
         The section is made exactly one scroll run taller than the frame. */
      stackSec.style.setProperty('--run',run+'px');
      /* waiting cards are parked with their top edge just below the pinned frame, which clips them */
      const parked=()=>pin.clientHeight-(stack.getBoundingClientRect().top-pin.getBoundingClientRect().top)+24;
      scards.forEach((c,i)=>gsap.set(c,{zIndex:i+1}));
      /* when the section releases (or is left from the top), finish the smoothing at once, so the last card is fully in
         place as the section scrolls away, instead of still catching up while it moves */
      const settleNow=self=>{const t=self.getTween&&self.getTween();if(t)t.progress(1)};
      stackTL=gsap.timeline({defaults:{duration:1,ease:'power2.inOut',force3D:true},scrollTrigger:{
        trigger:stackSec,start:'top top',end:'+='+run,
        scrub:1,invalidateOnRefresh:true,onLeave:settleNow,onLeaveBack:settleNow,
        onUpdate:()=>setStep(Math.min(n-1,Math.round(stackTL.time())))}});
      stackST=stackTL.scrollTrigger;
      /* the first card's content settles as the section arrives; tied 1:1 to the scrollbar (no smoothing lag),
         so it is always finished before the pin locks and nothing moves inside the first layer afterwards */
      settle(gsap.timeline({scrollTrigger:{trigger:stackSec,start:'top 75%',end:'top 25%',scrub:true}}),scards[0],0,1);
      /* how far back a card sits once `depth` cards cover it; capped at 2 so only two edges ever show.
         Every move has explicit start and end values, so a re-measure mid-scroll can never knock a card out of place. */
      const back=depth=>{const d=Math.min(depth,2);return {scale:1-d*.045,y:-d*16}};
      const later={immediateRender:false};
      for(let i=1;i<n;i++){
        const at=i-1;
        /* snap:'y' keeps every card on whole pixels: at zoom levels like 110% or 125% a card between pixels makes its text shimmer */
        stackTL.fromTo(scards[i],{y:parked,scale:1},{y:0,scale:1,snap:'y'},at);         /* glide up over the previous card */
        /* immediateRender belongs with the end values: with the start values it is ignored, and every later step would paint
           its start pose at once, so the section opened with the second card already on top until the first scroll fixed it */
        for(let j=0;j<i;j++)stackTL.fromTo(scards[j],{...back(i-1-j)},{...back(i-j),...later,snap:'y'},at);   /* earlier cards step back */
        stackTL.fromTo($('.scard-in',scards[i-1]),{opacity:1},{opacity:.3,...later},at);           /* the covered card dims */
        settle(stackTL,scards[i],at+.5);                                        /* text lands as the card does */
      }
      stackTL.to({},{duration:HOLD});                                           /* hold on the last card, then the section releases */
      stackST.refresh();                                                        /* measure again now the timeline is complete */
      fitCards();
      return ()=>{stackSec.classList.remove('is-stacked');stackSec.style.removeProperty('--run');stackST=null;stackTL=null};
    }
    /* tablets, phones and very short windows: cards sit in a list, each settles as it scrolls into view */
    fitCards();
    scards.forEach(c=>settle(gsap.timeline({scrollTrigger:{trigger:c,start:'top 88%',end:'top 45%',scrub:1}}),c,0,1));
  });
  ScrollTrigger.addEventListener('refresh',fitCards);
  /* new fonts change text heights: re-measure once they (and the photos) are in, so the pin starts exactly at the section */
  if(document.fonts)document.fonts.ready.then(()=>ScrollTrigger.refresh());
  addEventListener('load',()=>ScrollTrigger.refresh());
}
/* card i is fully in at timeline time i; the last card is fully rolled out at the end */
const stepY=i=>stackST?stackST.start+(stackST.end-stackST.start)*(i===scards.length-1?1:i/stackTL.duration()):null;
sdots.addEventListener('click',e=>{const d=e.target.closest('[data-i]');if(d&&stackST)scrollTo({top:stepY(+d.dataset.i),behavior:'smooth'})});
/* links to #contact land on the booking card, not the first card */
document.addEventListener('click',e=>{const a=e.target.closest('a[href="#contact"]');if(!a||!stackST)return;e.preventDefault();setMenu(false);scrollTo({top:stepY(scards.length-1)-2,behavior:'smooth'})});

/* form */
$('#form').addEventListener('submit',e=>{
  e.preventDefault();
  const n=$('#fName'),p=$('#fPhone');let ok=true;
  const chk=(el,msg,bad)=>{const er=$('#'+(el===n?'eName':'ePhone'));er.textContent=bad?msg:'';el.setAttribute('aria-invalid',bad);if(bad)ok=false};
  chk(n,'Indiquez votre nom pour que nous sachions à qui répondre.',!n.value.trim());
  chk(p,'Indiquez un numéro de téléphone d\'au moins 8 chiffres.',p.value.replace(/\D/g,'').length<8);
  if(!ok)return;
  const car=$('#fCar').value;
  $('#fOk').innerHTML=`Votre message est prêt. <a target="_blank" rel="noopener" href="${wa(`Bonjour, je m'appelle ${n.value.trim()} (${p.value.trim()}). Je souhaite réserver une visite${car?' pour voir : '+car:''}.`)}">Ouvrez-le dans WhatsApp</a> et appuyez sur envoyer pour confirmer.`;
});

/* hover glow: tells the hovered card or button where the cursor is, so its gold light follows it */
addEventListener('pointermove',e=>{
  if(e.pointerType!=='mouse')return;
  const el=e.target.closest&&e.target.closest('.car,.scard,.faq details,.btn,.gbtn,.fbtn');if(!el)return;
  const r=el.getBoundingClientRect();el.style.setProperty('--mx',(e.clientX-r.left)+'px');el.style.setProperty('--my',(e.clientY-r.top)+'px');
},{passive:true});

/* reading progress: a thin gold line across the very top fills left to right as you scroll down and empties as you scroll back up */
(()=>{
  const bar=document.createElement('div');bar.className='progress';bar.setAttribute('aria-hidden','true');document.body.append(bar);
  let queued=false;
  const draw=()=>{queued=false;const max=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${max>0?Math.min(1,Math.max(0,scrollY/max)):0})`};
  const ask=()=>{if(!queued){queued=true;requestAnimationFrame(draw)}};
  addEventListener('scroll',ask,{passive:true});addEventListener('resize',ask);draw();
})();

/* numbers count up: km, hp, 0 to 100 times, the About figures and the popup's key figures roll up from 0 the first time
   they come into view, like a dashboard waking up. Commas, decimals and units are kept as written. */
(()=>{
  const SEL='.figs b,.about-facts dd,.tile b',NUM=/\d[\d,]*(?:\.\d+)?/;
  const ease=k=>1-Math.pow(1-k,3);
  const fmtLike=(v,src)=>{const dec=(src.split('.')[1]||'').length;let s=v.toFixed(dec);if(src.includes(','))s=Number(s).toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec});return s};
  function run(el){
    const full=el.dataset.countTo,m=full.match(NUM),src=m[0],to=parseFloat(src.replace(/,/g,'')),pre=full.slice(0,m.index),post=full.slice(m.index+src.length);
    const t0=performance.now(),dur=to>999?1300:1000;
    const step=now=>{const k=Math.min(1,(now-t0)/dur);el.textContent=k<1?pre+fmtLike(to*ease(k),src)+post:full;if(k<1)requestAnimationFrame(step)};
    requestAnimationFrame(step);
  }
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){io.unobserve(e.target);run(e.target)}}),{threshold:.6});
  function scan(){
    document.querySelectorAll(SEL).forEach(el=>{
      if(el.dataset.countTo!==undefined)return;
      const t=el.textContent.trim(),m=t.match(NUM);el.dataset.countTo=t;
      if(!m)return;                                                    /* "—" and other blanks stay as they are */
      const src=m[0];el.textContent=t.slice(0,m.index)+fmtLike(0,src)+t.slice(m.index+src.length);   /* start at zero, ready to roll */
      io.observe(el);
    });
  }
  let queued=0;
  /* look again only when new elements arrive (cards redrawn, a popup opened), not on every number change while counting */
  new MutationObserver(ms=>{if(queued||!ms.some(m=>[...m.addedNodes].some(n=>n.nodeType===1)))return;queued=requestAnimationFrame(()=>{queued=0;scan()})}).observe(document.body,{childList:true,subtree:true});
  scan();
})();

/* magnetic logo: only when the mouse is right at the header logo (within about 30px of it), the logo leans gently toward it
   (up to 6px) and glides back when it leaves */
(()=>{
  const logo=document.querySelector('.brand');if(!logo)return;   /* the whole logo link moves, so its shine moves with it */
  const RANGE=30,PULL=.12,MAX=6;
  let tx=0,ty=0,x=0,y=0,raf=0;
  const frame=()=>{x+=(tx-x)*.18;y+=(ty-y)*.18;
    logo.style.translate=`${x.toFixed(2)}px ${y.toFixed(2)}px`;
    raf=Math.abs(tx-x)+Math.abs(ty-y)>.05?requestAnimationFrame(frame):0;
    if(!raf&&!tx&&!ty)logo.style.translate=''};
  const go=()=>{if(!raf)raf=requestAnimationFrame(frame)};
  addEventListener('pointermove',e=>{
    if(e.pointerType!=='mouse')return;
    const r=logo.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2-x),dy=e.clientY-(r.top+r.height/2-y),   /* measured from its resting spot */d=Math.hypot(dx,dy);
    const reach=RANGE+Math.max(r.width,r.height)/2;
    if(d<reach){const k=PULL*(1-d/reach*.4);tx=Math.max(-MAX,Math.min(MAX,dx*k));ty=Math.max(-MAX,Math.min(MAX,dy*k))}
    else{tx=0;ty=0}
    go();
  },{passive:true});
  document.addEventListener('pointerleave',()=>{tx=ty=0;go()});
})();

/* while the page is scrolling, the layer cards ignore the mouse: with the wheel the cursor stays still while the cards slide
   under it, and every hover on/off would redraw a whole card with its big soft shadow. Hover comes back as soon as you stop. */
(()=>{
  const root=document.documentElement;let t=0;
  addEventListener('scroll',()=>{if(!t)root.classList.add('scrolling');clearTimeout(t);t=setTimeout(()=>{root.classList.remove('scrolling');t=0},180)},{passive:true});
})();

/* services panels: no hover on a touch screen, so a panel opens as it comes into view and closes once it has mostly left */
(()=>{const ps=$$('.svc-panel');if(!ps.length||!matchMedia('(hover:none)').matches)return;
  if(!('IntersectionObserver' in window)){ps.forEach(p=>p.classList.add('open'));return}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.intersectionRatio>=.6)e.target.classList.add('open');else if(e.intersectionRatio<.3)e.target.classList.remove('open')}),{threshold:[.3,.6]});
  ps.forEach(p=>io.observe(p));
})();

/* privacy policy and terms shown in the legal popup (footer links), written for a car showroom in Tangier under Moroccan law */
const LEGAL={"title":["Politique de confidentialité","Conditions générales"],"privacy":"<p class=\"legal-date\">Dernière mise à jour : 5 novembre 2026</p><h3>Qui sommes-nous</h3><p>Aurea Premium Cars est un showroom de voitures importées situé Av. Moulay Rachid, Tanger 90000, Maroc. Téléphone et WhatsApp : 07 75 77 29 20. Nous sommes responsables des données personnelles que vous nous confiez.</p><h3>Les données que nous recevons</h3><p>Le site ne propose pas de compte client et n'enregistre aucune donnée sur un serveur. Nous recevons uniquement ce que vous choisissez de nous envoyer :</p><ul><li>le formulaire « Réserver une visite » : votre nom, votre numéro de téléphone et la voiture qui vous intéresse. Le formulaire prépare un message WhatsApp que vous envoyez vous-même ;</li><li>vos messages sur WhatsApp, Instagram ou TikTok, et vos appels ;</li><li>lors d'un achat, d'une reprise ou d'un entretien au showroom : les informations et documents nécessaires (pièce d'identité, documents du véhicule, coordonnées).</li></ul><h3>Pourquoi nous les utilisons</h3><ul><li>répondre à vos questions et vous communiquer les prix ;</li><li>organiser votre visite ou votre essai ;</li><li>préparer une vente, une reprise ou un entretien, et les documents qui vont avec ;</li><li>respecter nos obligations légales, comptables et fiscales.</li></ul><p>Nous n'utilisons jamais vos données pour de la publicité de tiers et nous ne les vendons pas.</p><h3>Base légale</h3><p>Vos données sont traitées conformément à la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel. Le traitement repose sur votre demande (vous nous contactez), sur les démarches avant et après une vente, et sur nos obligations légales.</p><h3>Durée de conservation</h3><p>Les échanges liés à une simple demande sont conservés le temps nécessaire pour y répondre et assurer le suivi, et au plus 2 ans après le dernier contact. Les documents liés à une vente sont conservés pendant la durée exigée par la loi, notamment en matière comptable et fiscale.</p><h3>Partage des données</h3><p>Vos données ne sont partagées qu'avec :</p><ul><li>les services de messagerie que vous choisissez d'utiliser (WhatsApp, Instagram, TikTok), selon leurs propres politiques de confidentialité ;</li><li>les administrations et organismes concernés lorsqu'une vente l'exige (immatriculation, assurance, impôts) ou lorsque la loi l'impose.</li></ul><h3>Cookies et données techniques</h3><p>Le site n'utilise ni cookies publicitaires ni outils de mesure d'audience. Il garde seulement, le temps de votre visite, une petite information dans votre navigateur pour ne pas répéter le rappel WhatsApp. Les polices et certains scripts sont chargés depuis Google Fonts et Cloudflare (cdnjs), qui reçoivent votre adresse IP pour les afficher.</p><h3>Vos droits</h3><p>Selon la loi n° 09-08, vous pouvez demander l'accès à vos données, leur rectification ou leur suppression, et vous opposer à leur utilisation pour un motif légitime. Écrivez-nous sur WhatsApp au 07 75 77 29 20 ou passez au showroom. Si notre réponse ne vous satisfait pas, vous pouvez saisir la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP), www.cndp.ma.</p><h3>Modifications</h3><p>Nous pouvons mettre à jour cette politique. La date en haut de la page indique la dernière version.</p>","terms":"<p class=\"legal-date\">Dernière mise à jour : 5 novembre 2026</p><h3>À propos du site</h3><p>Ce site présente les voitures importées proposées par Aurea Premium Cars, Av. Moulay Rachid, Tanger 90000, Maroc (téléphone et WhatsApp : 07 75 77 29 20). En l'utilisant, vous acceptez les conditions ci-dessous.</p><h3>Annonces et photos</h3><p>Les annonces, photos et fiches techniques sont fournies de bonne foi, à titre d'information. Une erreur reste possible et elles ne constituent pas une offre ferme. Seuls l'état de la voiture constaté sur place et ses documents font foi. Nous vous invitons à voir et vérifier la voiture avant tout engagement.</p><h3>Prix et disponibilité</h3><p>Les prix sont communiqués sur demande, en dirhams (MAD). Un prix n'engage Aurea Premium Cars que s'il est confirmé par écrit, et pour la durée indiquée. Une voiture reste disponible à la vente tant qu'aucune réservation n'a été confirmée ; la disponibilité peut donc changer sans préavis.</p><h3>Réservation et acompte</h3><p>Une voiture n'est réservée qu'après un accord écrit et, le cas échéant, le versement d'un acompte contre reçu. Le montant de l'acompte, la durée de la réservation et les conditions de remboursement sont précisés par écrit au moment de la réservation.</p><h3>Vente</h3><p>La vente est conclue par un contrat signé au showroom, qui précise la voiture, le prix, le mode de paiement et la date de livraison. Le transfert de propriété et la remise des clés ont lieu après le paiement complet. Nous vous accompagnons dans les démarches administratives (carte grise, immatriculation, documents d'importation) selon ce que prévoit le contrat.</p><h3>Garanties</h3><p>Chaque voiture bénéficie des garanties prévues par la loi marocaine, notamment la garantie des vices cachés du Dahir des obligations et contrats et les dispositions de la loi n° 31-08 édictant des mesures de protection du consommateur. Toute garantie commerciale supplémentaire n'existe que si elle est écrite dans le contrat de vente.</p><h3>Essais</h3><p>Un essai est possible sur rendez-vous, avec un permis de conduire valide et une pièce d'identité, accompagné d'un membre de notre équipe. Nous pouvons refuser un essai si les conditions de sécurité ne sont pas réunies.</p><h3>Reprise, rachat et entretien</h3><p>Toute offre de reprise ou de rachat faite à distance est une estimation. Elle ne devient définitive qu'après inspection de la voiture et de ses documents. Pour l'entretien, un devis vous est communiqué avant tout travail.</p><h3>Propriété intellectuelle</h3><p>Les textes et photos de ce site appartiennent à Aurea Premium Cars et ne peuvent pas être réutilisés sans autorisation. Les noms et logos des marques automobiles appartiennent à leurs propriétaires respectifs et servent uniquement à identifier les voitures proposées.</p><h3>Liens externes</h3><p>Le site renvoie vers WhatsApp, Instagram, TikTok et Google Maps. Ces services ont leurs propres conditions, dont nous ne sommes pas responsables.</p><h3>Responsabilité</h3><p>Nous faisons de notre mieux pour que le site soit exact et accessible, sans pouvoir garantir l'absence d'erreurs ou d'interruptions. Notre responsabilité ne peut pas être engagée sur la seule base d'une information du site non confirmée par écrit.</p><h3>Droit applicable</h3><p>Ces conditions sont régies par le droit marocain. En cas de litige, nous privilégions une solution à l'amiable ; à défaut, les tribunaux de Tanger sont compétents, sous réserve des règles protectrices du consommateur.</p><h3>Contact</h3><p>Pour toute question : WhatsApp ou téléphone au 07 75 77 29 20, ou directement au showroom, Av. Moulay Rachid, Tanger.</p>"};
