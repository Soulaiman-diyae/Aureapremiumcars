/* Header tabs: a gold liquid pill that follows the pointer.
   Each edge of the pill is its own spring. The edge on the side the pill is travelling towards is quick and a little bouncy,
   the other one lags, so the pill stretches while it moves and settles back into a round pill when the pointer stops.
   Hover only previews; clicking a tab is what navigates. Keyboard focus and touch move the pill too. */
(()=>{
const bar=document.querySelector('.nav-links');if(!bar)return;
const links=[...bar.querySelectorAll('a')];
const pill=document.createElement('span');pill.className='nav-pill';pill.setAttribute('aria-hidden','true');bar.prepend(pill);

const LEAD={w:19,z:.55},TRAIL={w:11,z:.72},INSET=6,PAD=28,REACH=80;
const GRAY=[136,136,136],DARK=[10,10,10];
let barW=0,barH=0,cx=[],rest=[];                     /* link centres and the pill's resting width at each one */
function measure(){
  const b=bar.getBoundingClientRect();barW=b.width;barH=b.height;
  cx=links.map(a=>{const r=a.getBoundingClientRect();return r.left-b.left+r.width/2});
  rest=links.map(a=>a.getBoundingClientRect().width+PAD);
}
/* resting width under any x: blends between the neighbouring tabs, so it changes smoothly between them */
function restAt(x){
  if(x<=cx[0])return rest[0];
  for(let i=1;i<cx.length;i++)if(x<=cx[i]){const k=(x-cx[i-1])/(cx[i]-cx[i-1]);return rest[i-1]+(rest[i]-rest[i-1])*k}
  return rest[rest.length-1];
}
const L={x:0,v:0},R={x:0,v:0};
let tx=0,on=false,alpha=0,raf=0,last=0;
function targets(){
  const w=restAt(tx);let l=tx-w/2,r=tx+w/2;
  if(l<INSET){r+=INSET-l;l=INSET}
  if(r>barW-INSET){l-=r-(barW-INSET);r=barW-INSET}
  return [Math.max(INSET,l),r];
}
/* velocity-preserving damped spring, stepped in small slices of real elapsed time */
function spring(s,target,{w,z},dt){const a=-2*z*w*s.v-w*w*(s.x-target);s.v+=a*dt;s.x+=s.v*dt}

function frame(now){
  const step=Math.min(.05,(now-last)/1000);last=now;
  const [tl,tr]=targets();
  const right=tl+tr>L.x+R.x;                           /* travelling right: the right edge leads */
  for(let dt=step;dt>0;dt-=1/240){const h=Math.min(dt,1/240);spring(R,tr,right?LEAD:TRAIL,h);spring(L,tl,right?TRAIL:LEAD,h)}
  L.x=Math.max(INSET,L.x);R.x=Math.min(barW-INSET,R.x);
  if(R.x-L.x<barH*.6){const m=(L.x+R.x)/2;L.x=m-barH*.3;R.x=m+barH*.3}   /* never pinches thinner than a dot */
  alpha+=((on?1:0)-alpha)*(1-Math.exp(-step*9));      /* fades in and out over about a quarter second */
  const speed=Math.min(1,(Math.abs(L.v)+Math.abs(R.v))/2600);
  pill.style.transform=`translate3d(${L.x.toFixed(2)}px,0,0)`;
  pill.style.width=(R.x-L.x).toFixed(2)+'px';
  pill.style.opacity=alpha.toFixed(3);
  pill.style.setProperty('--glow',(alpha*(.75+.25*speed)).toFixed(3));
  const mid=(L.x+R.x)/2;
  links.forEach((a,i)=>{const c=Math.max(0,Math.min(1,1-Math.abs(mid-cx[i])/REACH))*alpha;
    a.style.color=c>.003?`rgb(${GRAY.map((g,j)=>Math.round(g+(DARK[j]-g)*c)).join(',')})`:''});
  const still=Math.abs(L.v)+Math.abs(R.v)<2&&Math.abs(L.x-tl)+Math.abs(R.x-tr)<.3;
  raf=(!on&&alpha<.004)||(on&&still&&alpha>.996)?0:requestAnimationFrame(frame);
  if(!raf&&!on){alpha=0;pill.style.opacity='0';links.forEach(a=>a.style.color='')}
}
function run(){if(!raf){last=performance.now();raf=requestAnimationFrame(frame)}}
function aim(x,jump){
  tx=Math.max(0,Math.min(barW,x));
  if(jump||alpha<.02){const [l,r]=targets();L.x=l;R.x=r;L.v=R.v=0}   /* appear right under the pointer, no slide in from a corner */
  on=true;bar.classList.add('lit');run();
}
function off(){on=false;bar.classList.remove('lit');run()}
const xOf=e=>e.clientX-bar.getBoundingClientRect().left;

bar.addEventListener('pointerenter',e=>{measure();aim(xOf(e),true)});
bar.addEventListener('pointermove',e=>{if(e.pointerType==='touch'&&!e.buttons)return;aim(xOf(e))});
bar.addEventListener('pointerleave',off);
bar.addEventListener('pointerup',e=>{if(e.pointerType==='touch')setTimeout(()=>{if(!bar.matches(':focus-within'))off()},450)});
bar.addEventListener('focusin',e=>{const i=links.indexOf(e.target);if(i<0)return;measure();aim(cx[i])});
bar.addEventListener('focusout',()=>{if(!bar.matches(':hover'))off()});
addEventListener('resize',()=>{if(on)measure()});
})();
