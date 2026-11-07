/* Car page: swap the big photo from the thumbnails, the arrows, the keyboard or a swipe. Also opens the mobile menu. */
(()=>{
/* a car page always opens at the top (the browser would otherwise keep the scroll position of the page you came from) */
if('scrollRestoration' in history)history.scrollRestoration='manual';
/* only until the visitor touches the page: once they scroll, wheel, touch or press a key, nothing moves it again */
let moved=false;['wheel','touchstart','keydown','pointerdown'].forEach(t=>addEventListener(t,()=>{moved=true},{passive:true,once:true}));
const toTop=()=>{if(!location.hash&&!moved&&scrollY)scrollTo(0,0)};toTop();addEventListener('DOMContentLoaded',toTop);
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const photo=$('#cpPhoto'),thumbs=$$('.cp-thumbs .thumb'),count=$('#cpCount');let at=0;
const size=h=>innerWidth<=720?h.replace('.webp','-800.webp'):h;
function show(i){
  at=(i+thumbs.length)%thumbs.length;const t=thumbs[at];
  const h=t.getAttribute('href');photo.srcset=h.replace('.webp','-800.webp')+' 800w, '+h+' 1400w';photo.src=size(h);   /* srcset too, or the browser keeps showing the first photo */photo.alt=$('img',t).alt;
  thumbs.forEach((x,k)=>k===at?x.setAttribute('aria-current','true'):x.removeAttribute('aria-current'));
  if(count)count.textContent=`${at+1} / ${thumbs.length}`;
}
thumbs.forEach((t,i)=>t.addEventListener('click',e=>{e.preventDefault();show(i)}));
$$('[data-step]').forEach(b=>b.addEventListener('click',()=>show(at+ +b.dataset.step)));
addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(at-1);if(e.key==='ArrowRight')show(at+1)});
const stage=$('#cpStage');let sx=null;
stage.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
stage.addEventListener('touchend',e=>{if(sx===null)return;const d=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(d)>40)show(at+(d<0?1:-1))},{passive:true});
const mb=$('#menuBtn'),menu=$('#mobileMenu');
const setMenu=o=>{document.body.classList.toggle('menu-open',o);mb.setAttribute('aria-expanded',o);menu.setAttribute('aria-hidden',!o);document.body.style.overflow=o?'hidden':''};
mb.addEventListener('click',()=>setMenu(!document.body.classList.contains('menu-open')));
$$('a',menu).forEach(a=>a.addEventListener('click',()=>setMenu(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
})();
