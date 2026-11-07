/* Pull to refresh.
   At the very top of the page, pull down (touch drag, or scroll up with a wheel or trackpad). The whole page, header
   included, slides down and a sports car appears in the gap above it, at the very top of the screen, growing and revving
   as you pull. Let go past the line and it launches right through tire
   smoke and speed streaks, then the site reloads. Let go early and everything springs back. */
(()=>{
const MAX=118,ARM=0.92*MAX,PULL_SPAN=MAX*2.2;   /* d tops out at 118px; about 260px of finger travel gets there */
const moved=[document.querySelector('.nav'),document.querySelector('main'),document.querySelector('.foot')].filter(Boolean);
const strip=document.createElement('div');strip.className='ptr';strip.setAttribute('aria-hidden','true');
const cv=document.createElement('canvas');strip.append(cv);document.body.append(strip);
const live=document.createElement('p');live.className='sr-only';live.setAttribute('role','status');document.body.append(live);
const ctx=cv.getContext('2d');
let W=0;const H=MAX+24;
function size(){const dpr=Math.min(2,devicePixelRatio||1);W=innerWidth;cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';ctx.setTransform(dpr,0,0,dpr,0,0)}
size();addEventListener('resize',size);

const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const easeInOut=k=>{k=clamp(k);return k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2};
function rng(seed){return()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296}}

/* ---------- the car (local units: origin at the centre of the wheel contact line, facing right) ---------- */
const BODY=new Path2D('M-46 -10 L-47 -18 Q-47 -22 -42 -23 L-34 -24 Q-22 -26 -12 -34 Q-4 -38.5 6 -38.5 Q14 -38 20 -31 Q24 -26 34 -23.5 L44 -21 Q48.5 -19 48 -14 L46 -9.5 Q45 -8 42 -8 L-43 -8 Q-46 -8 -46 -10 Z');
const SPOILER=new Path2D('M-48.5 -26.5 L-38 -25.4 L-38 -23.6 L-44 -23.2 Z');
const WIN_REAR=new Path2D('M-17 -28.6 Q-9.5 -34.6 0 -36.1 L0.5 -28.6 Z');
const WIN_FRONT=new Path2D('M3.5 -36.3 Q12 -36.3 18 -29.6 L3.5 -28.7 Z');
function softDot(x,y,r,a,rgb='226,218,200'){
  if(a<=0.002||r<=0)return;const g=ctx.createRadialGradient(x,y,0,x,y,r);
  g.addColorStop(0,`rgba(${rgb},${a})`);g.addColorStop(1,`rgba(${rgb},0)`);ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
}
function wheel(x,ang){
  ctx.fillStyle='#0A0907';ctx.beginPath();ctx.arc(x,-7.5,7.5,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#CCA158';ctx.lineWidth=1.1;ctx.lineCap='round';
  for(let i=0;i<5;i++){const a=ang+i*Math.PI*2/5;ctx.beginPath();ctx.moveTo(x+Math.cos(a)*2,-7.5+Math.sin(a)*2);ctx.lineTo(x+Math.cos(a)*5.4,-7.5+Math.sin(a)*5.4);ctx.stroke()}
  ctx.fillStyle='#CCA158';ctx.beginPath();ctx.arc(x,-7.5,2.3,0,Math.PI*2);ctx.fill();
}
function car({x,y,s,tilt,haze,tire,blur,front,rear}){
  ctx.save();ctx.translate(x,y);ctx.translate(-29*s,0);ctx.rotate(tilt);ctx.translate(29*s,0);ctx.scale(s,s);
  if(haze>0){softDot(-52,-13,9+7*haze,0.22*haze,'205,196,178');softDot(-60,-15,6+6*haze,0.14*haze,'205,196,178')}
  if(tire>0){softDot(-36,-3,7+5*tire,0.28*tire);softDot(-44,-5,6+6*tire,0.2*tire);softDot(-30,-2,5+3*tire,0.18*tire)}
  if(blur>0){const g=ctx.createLinearGradient(-48,0,-48-46*blur,0);g.addColorStop(0,`rgba(236,226,206,${0.32*blur})`);g.addColorStop(1,'rgba(236,226,206,0)');ctx.fillStyle=g;ctx.fillRect(-48-46*blur,-30,46*blur,20)}
  ctx.fillStyle='#B9A57F';ctx.fill(SPOILER);
  const g=ctx.createLinearGradient(0,-39,0,-8);g.addColorStop(0,'#F4ECDB');g.addColorStop(0.45,'#DDCFB2');g.addColorStop(1,'#8A7C62');ctx.fillStyle=g;ctx.fill(BODY);
  ctx.fillStyle='rgba(20,16,8,0.55)';ctx.fillRect(-42,-10,84,1.6);
  ctx.save();ctx.globalAlpha=0.85;const wg=ctx.createLinearGradient(0,-38,0,-28);wg.addColorStop(0,'#4A3F2C');wg.addColorStop(1,'#0E0C08');ctx.fillStyle=wg;ctx.fill(WIN_REAR);ctx.fill(WIN_FRONT);ctx.restore();
  wheel(-29,rear);wheel(28,front);
  ctx.fillStyle='#FFF4DC';ctx.beginPath();ctx.ellipse(44.5,-18,2.6,1.2,-0.15,0,Math.PI*2);ctx.fill();softDot(46,-18,5,0.35,'255,236,200');
  ctx.fillStyle='rgba(214,72,60,0.9)';ctx.beginPath();ctx.ellipse(-45.6,-20.5,1.3,2,0,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,0.7)';ctx.lineWidth=0.8;ctx.beginPath();ctx.moveTo(-38,-23.2);ctx.quadraticCurveTo(0,-25.5,38,-23.6);ctx.stroke();
  ctx.restore();
}

/* ---------- state ---------- */
let mode='idle',raw=0,d=0,dRel=0,pRel=0,since=0,backFrom=0,rearA=0,frontA=0,last=0,raf=0,puffs=[],streaks=[];
const x0=()=>Math.max(70,Math.min(160,W*0.22));
const carX=k=>x0()+(W-x0()+140)*k*k*k;                          /* x = start + distance * k^3, off the right edge */
const carV=k=>k>=1?0:(W-x0()+140)*3*k*k/0.65;
const pullD=()=>{const s=clamp(raw/PULL_SPAN);return MAX*(1-(1-s)*(1-s))};

function setOffset(){
  strip.style.height=d+'px';
  moved.forEach(el=>el.style.transform=d>0.5?`translateY(${d}px)`:'');
}
function start(){if(!raf){last=performance.now();raf=requestAnimationFrame(tick)}}
function release(){
  if(mode!=='pull')return;
  if(d>=ARM){mode='launch';dRel=d;pRel=1;since=performance.now();live.textContent='Refreshing';
    const r=rng(7),r2=rng(42);
    puffs=Array.from({length:12},()=>({delay:r()*0.12,life:1.2*(0.75+0.25*r()),rise:6+16*r(),drift:40+50*r(),dx:-6*r(),dy:-2-4*r(),spawned:false}));
    streaks=Array.from({length:10},()=>({len:18+40*r2(),speed:180+180*r2(),x0:r2()*W,fy:r2()}));
    setTimeout(()=>location.reload(),900);
  }else{mode='back';backFrom=d;since=performance.now()}
  start();
}

function tick(now){
  const dt=Math.min(0.05,(now-last)/1000);last=now;const t=(now-since)/1000;
  let p=0,shake=0,k=0,ωR=0,ωF=0;
  if(mode==='pull'){d=pullD();p=clamp(d/ARM);if(p>=1)shake=1.6*Math.sin(95*now/1000);ωR=p>=1?60:6*p;ωF=6*p}
  else if(mode==='back'){const q=clamp(t/0.35);d=backFrom*(1-easeInOut(q));p=clamp(d/ARM);if(q>=1){d=0;mode='idle'}}
  else if(mode==='launch'){d=80+(dRel-80)*Math.exp(-11*t)*Math.cos(2*Math.PI*2.2*t);p=pRel;k=clamp(t/0.65);const v=carV(k);ωR=ωF=12+v/7.5}
  rearA+=ωR*dt;frontA+=ωF*dt;
  setOffset();

  /* ---------- draw the exposed strip; its bottom edge is the top of the page ---------- */
  ctx.clearRect(0,0,W,H);
  if(d>0.5){
    ctx.fillStyle='#0B0A07';ctx.fillRect(0,0,W,d);
    const s=0.6+0.55*p,contact=d-10;
    if(mode==='launch'){
      const a=t<0.2?0:t<0.45?(t-0.2)/0.25:1;
      if(a>0){ctx.strokeStyle=`rgba(204,161,88,${0.5*a})`;ctx.lineWidth=3;ctx.lineCap='round';
        for(const sk of streaks){const span=W+sk.len,x=((sk.x0+sk.speed*(t-0.2))%span+span)%span-sk.len,y=8+sk.fy*Math.max(0,d-16);ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+sk.len,y);ctx.stroke()}}
      for(const pf of puffs){
        if(t<pf.delay)continue;
        if(!pf.spawned){const kk=clamp(pf.delay/0.65);pf.spawned=true;pf.x=carX(kk)-29*s+pf.dx;pf.y=contact-4*s+pf.dy;pf.v=carV(kk)}
        const a=(t-pf.delay)/pf.life;if(a>1)continue;const e=1-Math.pow(1-a,3),age=t-pf.delay;
        softDot(pf.x+(0.12*pf.v-pf.drift)*age,pf.y-pf.rise*e,8+24*e,0.38*Math.pow(1-a,1.3));
      }
    }
    if(!(mode==='launch'&&k>=1)){
      car({x:(mode==='launch'?carX(k):x0())+shake,y:contact,s,
        tilt:mode==='launch'?-(2*Math.PI/180)*Math.sin(Math.PI*clamp(k/0.6)):0,
        haze:mode==='launch'?Math.max(0,1-k*3):p,tire:mode==='launch'?Math.max(0,1-k*4):p>=1?1:0.35*p,
        blur:mode==='launch'?clamp(k*1.6):0,front:frontA,rear:rearA});
    }
    ctx.fillStyle='rgba(204,161,88,0.3)';ctx.fillRect(0,d-1,W,1);
  }
  raf=mode==='idle'?0:requestAnimationFrame(tick);
}

/* ---------- input: only from the very top of the page, never inside a popup ---------- */
const blocked=t=>t.closest&&t.closest('dialog,.mobile-menu');
const atTop=()=>scrollY<=0&&!document.querySelector('dialog[open]');
let y0=null;
addEventListener('touchstart',e=>{if(mode==='idle'&&atTop()&&!blocked(e.target)&&e.touches.length===1)y0=e.touches[0].clientY},{passive:true});
/* passive: the browser never waits for this script before scrolling, so touch scrolling stays smooth everywhere.
   At the very top a downward drag has nothing to scroll (overscroll-behavior in styles.css), so nothing needs blocking. */
addEventListener('touchmove',e=>{
  if(y0===null)return;const dy=e.touches[0].clientY-y0;
  if(dy>0&&scrollY<=0){raw=dy;if(mode==='idle'){mode='pull';start()}}
  else if(mode==='pull'){raw=0}else y0=null;
},{passive:true});
addEventListener('touchend',()=>{if(y0!==null){y0=null;release()}},{passive:true});
addEventListener('touchcancel',()=>{if(y0!==null){y0=null;raw=0;release()}},{passive:true});
/* wheel / trackpad: like a phone, a refresh takes one deliberate, continuous pull that starts at the top.
   - A gesture only counts if the page was already resting at the top when it began (a gap of GAP ms since the last
     wheel event). Scrolling up to reach the top, and the trackpad's coasting after it, never pull.
   - Each pull starts from zero: separate single scrolls never add up.
   - One gesture needs a firm pull (about 8 quick mouse-wheel clicks, or a long two-finger swipe) to reach the line;
     a pause of RELEASE ms counts as letting go, and short of the line everything springs back. */
const GAP=350,RELEASE=220,WHEEL_K=0.25;
let wheelT=0,lastWheel=0,fromTop=false;
addEventListener('wheel',e=>{
  const now=performance.now(),fresh=now-lastWheel>GAP;lastWheel=now;
  if(fresh)fromTop=atTop()&&mode==='idle';
  if(!fromTop||!(mode==='idle'||mode==='pull')||!atTop()||blocked(e.target))return;
  const dy=e.deltaMode===1?e.deltaY*33:e.deltaY;                 /* Firefox reports lines */
  if(dy<0){if(mode==='idle'){raw=0;mode='pull';start()}raw=Math.min(PULL_SPAN,raw-dy*WHEEL_K)}
  else if(mode==='pull'){raw=Math.max(0,raw-dy)}
  else return;
  clearTimeout(wheelT);wheelT=setTimeout(()=>{release();fromTop=false},RELEASE);
},{passive:true});
})();
