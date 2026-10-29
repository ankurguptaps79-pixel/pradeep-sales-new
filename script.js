const LOGO={
  "atul": "assets/logos/atul.webp",
  "endurance": "assets/logos/endurance.webp",
  "fm": "assets/logos/fm.webp",
  "gabriel": "assets/logos/gabriel.webp",
  "mk": "assets/logos/mk.webp",
  "acey": "assets/logos/acey.webp",
  "ipl": "assets/logos/ipl.webp",
  "jkfenner": "assets/logos/jkfenner.webp",
  "mahle": "assets/logos/mahle.webp",
  "mklide": "assets/logos/mklide.webp",
  "monroe": "assets/logos/monroe.webp",
  "greaves": "assets/logos/greaves.webp",
  "pavna": "assets/logos/pavna.webp",
  "premier": "assets/logos/premier.webp",
  "remsons": "assets/logos/remsons.webp",
  "tp": "assets/logos/tp.webp",
  "varroc": "assets/logos/varroc.webp"
}, SZ={"atul": 1.23, "endurance": 1.387, "fm": 4.231, "gabriel": 7.857, "mk": 1.04, "acey": 1.133, "ipl": 1.0, "jkfenner": 2.573, "mahle": 4.19, "mklide": 2.018, "monroe": 6.377, "greaves": 3.761, "pavna": 4.478, "premier": 2.273, "remsons": 4.4, "tp": 1.893, "varroc": 1.053}, PHOTOS={
  "suresh": "assets/team/suresh.webp",
  "deepak": "assets/team/deepak.webp",
  "pradeep": "assets/team/pradeep.webp",
  "ankur": "assets/team/ankur.webp"
}, TOPRATIO=0.5528;
const NAMES={suresh:'Late Shri Suresh Chandra Gupta',deepak:'Mr. Deepak Gupta',pradeep:'Mr. Pradeep Gupta',ankur:'Mr. Ankur Gupta'};
const BR={
  atul:{n:'Atul',l:['atul']}, greaves:{n:'Greaves',l:['greaves']},
  goetze:{n:'Goetze (Federal-Mogul / TPR)',s:'Goetze',l:['fm','tp']}, mahle:{n:'MAHLE',l:['mahle']}, ipl:{n:'IPL',l:['ipl']},
  mk:{n:'MK',l:['mk']}, endurance:{n:'Endurance',l:['endurance']}, gabriel:{n:'Gabriel',l:['gabriel']},
  monroe:{n:'Monroe',l:['monroe'],dk:1}, mklide:{n:'MK Lide',l:['mklide']}, varroc:{n:'Varroc',l:['varroc']},
  pavna:{n:'Pavna',l:['pavna']}, acey:{n:'Acey',l:['acey']}, remsons:{n:'Remsons',l:['remsons']},
  jkfenner:{n:'JK Fenner',l:['jkfenner']}, premier:{n:'Premier Plus',l:['premier']}
};
const CATS=[
  {id:'engine',n:'Engine parts',i:'engine',d:'The heart of the vehicle, from piston kits to gaskets.',items:['Piston kits','Piston rings','Cylinder liners and blocks','Valves and guides','Gasket sets','Engine bearings'],b:['goetze','mahle','ipl'],hs:[22,62]},
  {id:'suspension',n:'Suspension parts',i:'suspension',d:'Shock absorbers and forks for a steady ride on any road.',items:['Front shock absorbers','Rear shock absorbers','Front fork assemblies','Suspension bushes','Springs'],b:['endurance','gabriel','monroe'],hs:[91,78]},
  {id:'cables',n:'Control cables',i:'cable',d:'Clutch, brake, accelerator and gear cables built to fit.',items:['Clutch cables','Accelerator cables','Brake cables','Gear-shift cables','Speedometer cables'],b:['acey','remsons'],hs:[61,85]},
  {id:'brake',n:'Brake parts',i:'brake',d:'Shoes, drums and cylinders that keep stopping power reliable.',items:['Brake shoes','Brake drums','Brake pads','Wheel cylinders','Master cylinders'],b:['endurance','mklide','varroc'],hs:[13.5,86.5]},
  {id:'clutch',n:'Clutch parts',i:'clutch',d:'Friction plates and assemblies for smooth gear changes.',items:['Clutch plates','Pressure plates','Clutch assemblies','Release bearings'],b:['mk','endurance'],hs:[37,85]},
  {id:'transmission',n:'Transmission parts',i:'gear',d:'Gears, shafts and gearbox components that carry the drive.',items:['Gears and gear sets','Shafts','Differential parts','Gearbox bearings'],b:['varroc','gabriel'],hs:[27,83]},
  {id:'electrical',n:'Electrical parts',i:'electrical',d:'Lamps, switches and wiring that keep the auto lit and starting.',items:['Headlamps','Tail and indicator lamps','Ignition switches and locks','Wiring harnesses','Horns','Regulators and CDI units'],b:['varroc','pavna'],hs:[96,62]},
  {id:'rubber',n:'Rubber parts',i:'rubber',d:'Seals, bushes, belts and mountings that absorb wear.',items:['Oil seals','Rubber bushes','Belts','Hoses','Engine mountings','Floor mats'],b:['varroc','jkfenner','premier'],hs:[41,74]},
  {id:'oil',n:'Engine oil',i:'oil',d:'Oils and lubricants matched to three-wheeler engines.',items:['Engine oils','Gear oils','Greases','Lubricants'],b:['goetze','varroc','greaves'],hs:[11,72]},
  {id:'fiber',n:'Fiber items',i:'fiber',d:'Body parts that keep the vehicle looking right.',items:['Mudguards','Front cowls','Side panels','Dashboards','Lamp housings'],b:[],hs:[82,62]}
];
const OE={id:'oe',n:'OE genuine parts',i:'oe',d:'Original-equipment parts supplied by the vehicle makers themselves.',items:['Atul genuine spare parts','Greaves genuine spare parts'],b:['atul','greaves']};
const ALL=[...CATS,OE];
const bname=b=>BR[b].s||BR[b].n;
const hFor=(k,base,lo,hi)=>Math.round(Math.max(lo,Math.min(hi,base*Math.sqrt(2.4/SZ[k]))));
const icon=(id,cls='')=>`<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- marquee ---------- */
(function(){
  const order=['atul','greaves','fm','tp','mahle','ipl','mk','endurance','gabriel','monroe','mklide','varroc','pavna','acey','remsons','jkfenner','premier'];
  const img=k=>k==='monroe'?`<span class="chip"><img src="${LOGO[k]}" alt=""></span>`:`<img src="${LOGO[k]}" alt="" style="--h:${hFor(k,44,30,72)}px">`;
  const half=Math.ceil(order.length/2), A=order.slice(0,half), B=order.slice(half);
  document.getElementById('mq1').innerHTML=[...A,...A,...A,...A].map(img).join('');
  document.getElementById('mq2').innerHTML=[...B,...B,...B,...B].map(img).join('');
})();

/* ---------- parts explorer ---------- */
(function(){
  const stage=document.getElementById('pxStage'), panel=document.getElementById('pxPanel'), chips=document.getElementById('pxChips');
  CATS.forEach(c=>{stage.insertAdjacentHTML('beforeend',`<button class="hs" type="button" data-c="${c.id}" style="left:${c.hs[0]}%;top:${c.hs[1]}%;--i:${CATS.indexOf(c)}" aria-label="${c.n}" aria-pressed="false"><span>${c.n}</span></button>`)});
  chips.innerHTML=CATS.map(c=>`<button class="chipbtn" type="button" data-c="${c.id}" aria-pressed="false">${c.n}</button>`).join('');
  const logoChip=b=>BR[b].l.map(k=>`<span class="${BR[b].dk?'dk':''}" title="${BR[b].n}"><img src="${LOGO[k]}" alt="${BR[b].n}" style="--h:${hFor(k,22,18,36)}px"></span>`).join('');
  function pick(id){
    const c=CATS.find(x=>x.id===id);
    document.querySelectorAll('#pxStage .hs,#pxChips .chipbtn').forEach(b=>b.setAttribute('aria-pressed',b.dataset.c===id));
    panel.classList.remove('fade');void panel.offsetWidth;panel.classList.add('fade');
    panel.innerHTML=`${icon(c.i,'ico')}<h3>${c.n}</h3><p class="muted">${c.d}</p><ul>${c.items.slice(0,4).map(x=>`<li>${x}</li>`).join('')}</ul>${c.b.length?`<div class="logos-row">${c.b.map(logoChip).join('')}</div>`:'<p class="muted" style="margin-top:auto">Ask us for the current range.</p>'}<a class="btn btn-red" href="#products-${c.id}" style="align-self:flex-start">View ${c.n.toLowerCase()}</a>`;
  }
  stage.addEventListener('click',e=>{const b=e.target.closest('.hs');if(b)pick(b.dataset.c)});
  chips.addEventListener('click',e=>{const b=e.target.closest('.chipbtn');if(b)pick(b.dataset.c)});
  pick('engine');
})();

/* ---------- product tiles (home) ---------- */
document.getElementById('pgrid').innerHTML=CATS.map(c=>`<a class="prod gcard" href="#products-${c.id}">${icon(c.i,'ico')}<h3>${c.n}</h3><p>${c.d}</p><span class="go">${c.b.length?c.b.map(bname).join(', '):'Ask for current range'}</span></a>`).join('');

/* ---------- products page ---------- */
(function(){
  document.getElementById('prodNav').innerHTML=ALL.map(c=>`<a href="#products-${c.id}" data-c="${c.id}">${icon(c.i)}${c.n}</a>`).join('');
  const logoTile=b=>{const o=BR[b];const imgs=o.l.map(k=>`<img src="${LOGO[k]}" alt="${o.n}" loading="lazy" style="--h:${o.l.length>1?hFor(k,30,20,44):hFor(k,34,24,58)}px">`).join('');return `<a class="${o.dk?'dk':''}" href="#partners-${CAT_OF[b]||'engine'}" title="${o.n}">${o.l.length>1?`<span class="pair">${imgs}</span>`:imgs}</a>`};
  window.CAT_OF={}; ALL.forEach(c=>c.b.forEach(b=>{if(!CAT_OF[b])CAT_OF[b]=c.id}));
  document.getElementById('prodList').innerHTML=ALL.map(c=>`<article class="pcat" id="pc-${c.id}" data-c="${c.id}">
    <div class="pcat-h">${icon(c.i)}<h2 class="display">${c.n}</h2><p>${c.d}</p><div class="links"><a class="btn btn-red" href="#contact" data-topic="${c.n}">Enquire about ${c.n.toLowerCase()}</a>${c.b.length?`<a class="more" href="#partners-${c.id}">See brand partners</a>`:''}</div></div>
    <div class="pcat-b"><h3>What we stock</h3><ul class="items">${c.items.map(x=>`<li>${x}</li>`).join('')}</ul><h3>Brands</h3>${c.b.length?`<div class="blogos">${c.b.map(b=>logoTile(b).replace(`#partners-${CAT_OF[b]}`,`#partners-${c.id}`)).join('')}</div>`:'<p class="noneyet">Brands for this category vary with stock. Ask us for the current range.</p>'}</div>
  </article>`).join('');
})();

/* ---------- partners page ---------- */
(function(){
  const order=[OE,...CATS.filter(c=>c.b.length)];
  document.getElementById('partNav').innerHTML=order.map(c=>`<a href="#partners-${c.id}" data-c="${c.id}">${icon(c.i)}${c.n}</a>`).join('');
  const inCats=b=>ALL.filter(c=>c.b.includes(b));
  const card=b=>{const o=BR[b];return `<div class="pcard gcard${o.dk?' dk':''}"><div class="pc-logo"><div class="lg${o.l.length>1?' two':''}">${o.l.map(k=>`<img src="${LOGO[k]}" alt="${o.n} logo" loading="lazy" style="--h:${o.l.length>1?hFor(k,40,26,56):hFor(k,44,30,72)}px">`).join('')}</div></div><div class="pc-body"><b>${o.n}</b><span class="badge">${icon('oe')}Authorised distributor</span><div class="pc-tags">${inCats(b).map(c=>`<a href="#products-${c.id}">${c.n}</a>`).join('')}</div></div></div>`};
  document.getElementById('cats').innerHTML=order.map(c=>`<article class="cat" id="pt-${c.id}" data-c="${c.id}"><div class="cat-h">${icon(c.i)}<div><h3>${c.n}</h3><p>${c.d}</p><a class="more" href="#products-${c.id}">View ${c.n.toLowerCase()}</a></div></div><div class="logos">${c.b.map(card).join('')}</div></article>`).join('');
})();

/* ---------- stats ---------- */
document.querySelectorAll('[data-stats]').forEach(el=>{el.innerHTML=[
  ['users',200,'+','Channel partners'],['pin',21,'','Cities served'],['box',5000,'+','SKUs in stock'],['tag',16,'','Brand partners'],['cal',1980,'','Year founded',1]
].map(s=>`<div class="stat gcard">${icon(s[0])}<b><span data-count="${s[1]}"${s[4]?' data-raw="1"':''}>0</span>${s[2]}</b><span>${s[3]}</span></div>`).join('')});

/* ---------- counters ---------- */
const fmt=(n,raw)=>raw?String(n):n.toLocaleString('en-IN');
const runCount=el=>{const end=+el.dataset.count,raw=el.dataset.raw;if(reduce){el.textContent=fmt(end,raw);return}const start=raw?Math.max(0,end-46):0,t0=performance.now(),dur=1800;const step=t=>{const p=Math.min(1,(t-t0)/dur);el.textContent=fmt(Math.round(start+(end-start)*(1-Math.pow(1-p,3))),raw);if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)};
const cio=new IntersectionObserver(en=>en.forEach(x=>{if(x.isIntersecting){runCount(x.target);cio.unobserve(x.target)}}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));

/* ---------- network map (adapted from UP Distribution Network) ---------- */
const NET={
  X:lon=>(lon-77.0)*120+30, Y:lat=>(30.5-lat)*135+30,
  outline:[[77.6,30.4],[78.3,30.1],[78.8,29.7],[79.3,29.3],[79.8,28.9],[80.3,28.75],[80.7,28.55],[81.2,28.35],[81.7,28.05],[82.2,27.7],[82.7,27.5],[83.3,27.35],[83.8,27.4],[84.1,27.3],[84.4,26.7],[84.6,26.3],[84.65,25.85],[84.35,25.55],[83.85,25.45],[83.9,25.1],[83.6,24.7],[84.0,24.4],[83.9,24.1],[83.3,23.9],[82.8,24.0],[82.4,24.15],[82.0,24.3],[81.8,24.7],[81.4,24.9],[80.9,24.9],[80.4,25.0],[79.9,25.0],[79.3,25.2],[78.9,25.1],[78.4,24.9],[78.1,24.5],[78.4,24.25],[78.1,24.8],[78.0,25.4],[78.0,25.9],[78.6,26.0],[78.9,26.3],[78.2,26.8],[77.6,26.9],[77.5,27.5],[77.6,27.9],[77.5,28.2],[77.3,28.5],[77.35,29.0],[77.2,29.5],[77.45,30.0]],
  hub:{name:'Prayagraj',lon:81.85,lat:25.43},
  cities:[["Pratapgarh",81.99,25.89,-10,4,"end"],["Ayodhya",82.20,26.80,-10,4,"end"],["Sultanpur",82.07,26.26,-10,4,"end"],["Akbarpur",82.54,26.43,10,-4,"start"],["Gorakhpur",83.37,26.76,0,-12,"middle"],["Azamgarh",83.19,26.07,-10,-6,"end"],["Jaunpur",82.68,25.75,10,4,"start"],["Mau",83.56,25.94,10,4,"start"],["Ballia",84.15,25.76,-4,20,"middle"],["Deoria",83.78,26.50,10,4,"start"],["Jhansi",78.57,25.45,0,-12,"middle"],["Banda",80.34,25.48,0,-12,"middle"],["Chitrakoot",80.90,25.20,-16,26,"middle"],["Kaushambi",81.38,25.53,0,-16,"middle"],["Fatehpur",80.81,25.93,-10,4,"end"],["Mirzapur",82.57,25.14,0,24,"middle"],["Varanasi",82.97,25.32,2,71,"middle",[2,58]],["Chandauli",83.27,25.27,14,4,"start"],["Mughalsarai",83.12,25.28,40,52,"start",[36,42]],["Bhadohi",82.57,25.39,0,-14,"middle"],["Sonbhadra",83.07,24.69,0,26,"middle"]],
  km(a,b){const r=Math.PI/180,R=6371,dLat=(b.lat-a.lat)*r,dLon=(b.lon-a.lon)*r;const h=Math.sin(dLat/2)**2+Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dLon/2)**2;return Math.round(2*R*Math.asin(Math.sqrt(h)))}
};
function mountNetMap(box){
  const NS='http://www.w3.org/2000/svg', X=NET.X, Y=NET.Y, hub=NET.hub;
  const el=(tag,attrs,parent)=>{const n=document.createElementNS(NS,tag);for(const k in attrs)n.setAttribute(k,attrs[k]);if(parent)parent.appendChild(n);return n};
  const svg=el('svg',{class:'netmap',viewBox:'20 25 960 915',role:'img','aria-label':'Map of Uttar Pradesh with Prayagraj as the hub connected to 21 cities'});
  box.insertBefore(svg,box.firstChild);
  const g=el('g',{},svg);
  const up=el('path',{class:'up',d:'M'+NET.outline.map(p=>X(p[0]).toFixed(1)+','+Y(p[1]).toFixed(1)).join('L')+'Z',pathLength:1},g);
  up.style.strokeDasharray=1;
  const routesG=el('g',{},g), citiesG=el('g',{},g), hubG=el('g',{},g), hx=X(hub.lon), hy=Y(hub.lat);
  const items=NET.cities.map(c=>{
    const x=X(c[1]),y=Y(c[2]),dx=x-hx,dy=y-hy,cx=(hx+x)/2-dy*.12,cy=(hy+y)/2+dx*.12;
    const route=el('path',{class:'route',d:`M${hx},${hy} Q${cx},${cy} ${x},${y}`,pathLength:1},routesG);
    const grp=el('g',{class:'city'},citiesG), ring=el('circle',{class:'ring',cx:x,cy:y,r:9},citiesG);
    el('circle',{cx:x,cy:y,r:7,fill:'#D62828'},grp); el('circle',{cx:x,cy:y,r:2.5,fill:'#17191D'},grp);
    const lead=c[6]?el('line',{class:'lead',x1:x,y1:y,x2:x+c[6][0],y2:y+c[6][1]},citiesG):null;
    const lbl=el('text',{class:'lbl',x:x+c[3],y:y+c[4],'text-anchor':c[5]},citiesG); lbl.textContent=c[0].toUpperCase();
    return {name:c[0],route,grp,ring,lead,lbl,km:NET.km(hub,{lat:c[2],lon:c[1]})};
  });
  [0,1,2].forEach(()=>el('circle',{class:'hubring',cx:hx,cy:hy,r:10},hubG));
  const hubDot=el('g',{class:'hubdot'},hubG); el('circle',{cx:hx,cy:hy,r:15,fill:'#D62828'},hubDot); el('circle',{cx:hx,cy:hy,r:5.5,fill:'#17191D'},hubDot);
  const hubLbl=el('text',{class:'hublbl',x:hx-10,y:hy+44,'text-anchor':'middle'},hubG); hubLbl.textContent='PRAYAGRAJ';
  const packet=el('circle',{class:'packet',r:5,cx:-10,cy:-10,opacity:0},svg);
  let run=0;
  const wait=ms=>new Promise(r=>setTimeout(r,ms));
  const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
  function reset(){up.style.transition='none';up.style.strokeDashoffset=1;up.style.fillOpacity=0;hubDot.classList.remove('show');hubLbl.classList.remove('show');hubG.querySelectorAll('.hubring').forEach(r=>r.classList.remove('live'));items.forEach(it=>{it.route.setAttribute('class','route');it.grp.setAttribute('class','city');it.ring.setAttribute('class','ring');it.lbl.setAttribute('class','lbl');if(it.lead)it.lead.setAttribute('class','lead')});packet.setAttribute('opacity',0)}
  function showAll(){up.style.transition='none';up.style.strokeDashoffset=0;up.style.fillOpacity=1;hubDot.classList.add('show');hubLbl.classList.add('show');hubG.querySelectorAll('.hubring').forEach(r=>r.classList.add('live'));items.forEach(it=>{it.route.setAttribute('class','route draw settled');it.grp.classList.add('show');it.lbl.classList.add('show');if(it.lead)it.lead.classList.add('show')})}
  function fly(it,id){return new Promise(res=>{const L=it.route.getTotalLength(),t0=performance.now(),D=650;packet.setAttribute('opacity',1);(function step(now){if(id!==run)return res();const t=Math.min(1,(now-t0)/D),p=it.route.getPointAtLength(ease(t)*L);packet.setAttribute('cx',p.x);packet.setAttribute('cy',p.y);if(t<1)requestAnimationFrame(step);else{packet.setAttribute('opacity',0);res()}})(t0)})}
  async function play(){
    const id=++run; reset(); if(reduce){showAll();return}
    await wait(200); if(id!==run)return;
    up.style.transition='stroke-dashoffset 1.6s ease-in-out, fill-opacity .9s ease 1.1s'; up.style.strokeDashoffset=0; up.style.fillOpacity=1;
    await wait(1600); if(id!==run)return;
    hubDot.classList.add('show'); hubLbl.classList.add('show'); hubG.querySelectorAll('.hubring').forEach(r=>r.classList.add('live'));
    await wait(900); if(id!==run)return;
    for(const it of items){it.route.classList.add('draw');await fly(it,id);if(id!==run)return;it.grp.classList.add('show');it.lbl.classList.add('show','hot');if(it.lead)it.lead.classList.add('show');void it.ring.getBoundingClientRect();it.ring.classList.add('go');await wait(320);if(id!==run)return;it.lbl.classList.remove('hot');it.route.classList.add('settled')}
  }
  reset();
  box.querySelector('.replay').addEventListener('click',e=>{e.stopPropagation();play()});
  svg.addEventListener('click',play);
  const io=new IntersectionObserver(en=>en.forEach(x=>{if(x.isIntersecting&&!box.dataset.played){box.dataset.played=1;play()}}),{threshold:.35});
  io.observe(box);
  return {items,highlight(name,on){const it=items.find(i=>i.name===name);if(!it)return;it.route.classList.toggle('hl',on);it.lbl.classList.toggle('hl',on)}};
}
const homeMap=mountNetMap(document.querySelector('[data-map="home"]'));
const netMap=mountNetMap(document.querySelector('[data-map="network"]'));
(function(){
  const ul=document.getElementById('dlist'), sorted=[...netMap.items].sort((a,b)=>a.km-b.km);
  ul.innerHTML=`<li class="hubli">Prayagraj (Teliyarganj hub)<span>0 km</span></li>`+sorted.map(i=>`<li data-n="${i.name}">${i.name}<span>${i.km} km</span></li>`).join('');
  ul.addEventListener('mouseover',e=>{const li=e.target.closest('li[data-n]');if(li){li.classList.add('hl');netMap.highlight(li.dataset.n,true)}});
  ul.addEventListener('mouseout',e=>{const li=e.target.closest('li[data-n]');if(li){li.classList.remove('hl');netMap.highlight(li.dataset.n,false)}});
})();

/* ---------- journey road trip ---------- */
const Trip=(function(){
  const trip=document.getElementById('trip'), stops=[...trip.querySelectorAll('.stop')];
  const NS='http://www.w3.org/2000/svg';
  const svg=document.createElementNS(NS,'svg'); svg.setAttribute('class','road'); svg.setAttribute('aria-hidden','true'); trip.appendChild(svg);
  const car=new Image(); car.src='assets/auto-top.webp'; car.className='car'; car.alt=''; trip.appendChild(car);
  let road=null, done=null, L=0, ys=[], mks=[], built=false;
  function build(){
    if(!trip.offsetParent) return;
    const W=trip.clientWidth, H=trip.scrollHeight, mobile=W<760;
    const cx=mobile?32:W/2, A=mobile?10:70, roadW=mobile?30:46;
    const pts=[[cx,0]]; ys=[];
    stops.forEach((s,i)=>{const y=s.offsetTop+s.offsetHeight/2; ys.push(y); pts.push([cx+(i%2?A:-A),y])});
    pts.push([cx,H]);
    let d=`M${pts[0][0]} ${pts[0][1]}`;
    for(let i=1;i<pts.length;i++){const [x0,y0]=pts[i-1],[x1,y1]=pts[i],m=(y1-y0)/2;d+=` C${x0} ${y0+m} ${x1} ${y1-m} ${x1} ${y1}`}
    svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
    svg.innerHTML=`<path class="edge" d="${d}" stroke-width="${roadW+6}"/><path class="asphalt" d="${d}" stroke-width="${roadW}"/><path class="lane" d="${d}"/><path class="done" d="${d}" pathLength="1"/>`+pts.slice(1,-1).map(p=>`<circle class="mk" cx="${p[0]}" cy="${p[1]}" r="${mobile?9:12}"/>`).join('');
    road=svg.querySelector('.asphalt'); done=svg.querySelector('.done'); mks=[...svg.querySelectorAll('.mk')]; L=road.getTotalLength();
    car.style.width=(mobile?62:110)+'px'; car.style.marginLeft=-(mobile?31:55)+'px'; car.style.marginTop=-(mobile?62:110)*TOPRATIO/2+'px';
    built=true; update();
  }
  function update(){
    if(!built||!trip.offsetParent) return;
    const r=trip.getBoundingClientRect();
    const p=Math.max(0,Math.min(1,(innerHeight*.5-r.top)/r.height));
    const at=p*L, a=road.getPointAtLength(at), b=road.getPointAtLength(Math.min(L,at+2)), c=road.getPointAtLength(Math.max(0,at-2));
    const ang=Math.atan2(b.y-c.y,b.x-c.x)*180/Math.PI;
    car.style.transform=`translate(${a.x}px,${a.y}px) rotate(${ang}deg)`;
    done.style.strokeDashoffset=1-p;
    stops.forEach((s,i)=>{const on=a.y>=ys[i]-6;s.classList.toggle('on',on);mks[i].classList.toggle('on',on)});
  }
  let raf=0; const req=()=>{if(!raf)raf=requestAnimationFrame(()=>{raf=0;update()})};
  addEventListener('scroll',req,{passive:true});
  let rt; addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(build,150)});
  car.addEventListener('load',()=>{if(built)build()});
  return {build};
})();


/* ---------- reveal + glass spotlight ---------- */
(function(){
  const sel=['.sec-head','.brands-band .head','.px-stage','.px-panel','.ab-photos','.ab-copy','.stat','.prod','.cta-copy','.cta img','.cstrip>div','.story h2','.story .cols','.pillars>div','.np','.gen','.pcat','.cat','.pcard','.c-info','.c-form','.netwrap>*'];
  const els=document.querySelectorAll(sel.join(','));
  els.forEach(el=>{el.setAttribute('data-rv','');const sib=[...el.parentElement.children].filter(x=>x.matches(sel.join(',')));const i=sib.indexOf(el);el.style.setProperty('--rd',(Math.min(i,8)*0.08)+'s')});
  if(reduce){els.forEach(el=>el.classList.add('in'));return}
  const io=new IntersectionObserver(en=>en.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach(el=>io.observe(el));
  document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.gcard');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true});
})();
/* ---------- router ---------- */
const VIEWS=['home','about','journey','team','products','partners','network','contact'];
const hdr=document.getElementById('top'), menuBtn=document.getElementById('menuBtn');
let pendingTopic=null;
const TITLES={home:'Pradeep Sales — Multi-brand auto parts distributor, Prayagraj',about:'About us',journey:'Our journey',team:'Our team',products:'Product range',partners:'Brand partners',network:'Distribution network',contact:'Contact us'};
function route(){
  const h=decodeURIComponent(location.hash.slice(1))||'home';
  let view=h, sub=null;
  const m=h.match(/^(products|partners)-([a-z]+)$/); if(m){view=m[1];sub=m[2]}
  if(!VIEWS.includes(view)) view='home';
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('on',v.dataset.view===view));
  document.querySelectorAll('[data-nav]').forEach(a=>a.toggleAttribute('aria-current',false));
  const cur=document.querySelector(`[data-nav="${view}"]`); if(cur) cur.setAttribute('aria-current','page');
  document.getElementById('ddAbout').classList.toggle('cur',['about','journey','team'].includes(view));
  hdr.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false');
  document.title=view==='home'?TITLES.home:TITLES[view]+' — Pradeep Sales';
  const navId=view==='products'?'prodNav':view==='partners'?'partNav':null;
  if(navId) document.querySelectorAll(`#${navId} a`).forEach(a=>a.classList.toggle('on',a.dataset.c===sub));
  if(sub){const t=document.getElementById((view==='products'?'pc-':'pt-')+sub); requestAnimationFrame(()=>{t&&t.scrollIntoView({behavior:reduce?'auto':'smooth'}); const chip=document.querySelector(`#${navId} a[data-c="${sub}"]`); chip&&chip.scrollIntoView({block:'nearest',inline:'center'})})}
  else window.scrollTo({top:0,behavior:'auto'});
  if(view==='journey') requestAnimationFrame(()=>Trip.build());
  if(view==='contact'&&pendingTopic){const f=document.getElementById('enq');f.topic.value='A specific part';f.msg.value=`Enquiry about ${pendingTopic}: `;pendingTopic=null}
}
addEventListener('hashchange',route); route();
menuBtn.addEventListener('click',()=>{const o=hdr.classList.toggle('open');menuBtn.setAttribute('aria-expanded',o)});
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-topic]'); if(t) pendingTopic=t.dataset.topic;
  const a=e.target.closest('a[href^="#"]'); if(a&&a.getAttribute('href')===location.hash){e.preventDefault();route()}
});

/* ---------- enquiry ---------- */
document.getElementById('enq').addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.target), via=e.submitter?.dataset.via||'wa', msg=document.getElementById('formMsg');
  if(!f.get('name').trim()){msg.textContent='Add your name so we know who to reply to.';e.target.elements.name.focus();return}
  msg.textContent='';
  const lines=[`Enquiry: ${f.get('topic')}`,`Name: ${f.get('name')}`,f.get('phone')&&`Phone: ${f.get('phone')}`,f.get('shop')&&`Business: ${f.get('shop')}`,f.get('city')&&`City: ${f.get('city')}`,f.get('msg')&&`\n${f.get('msg')}`].filter(Boolean).join('\n');
  if(via==='wa') window.open('https://wa.me/919648031628?text='+encodeURIComponent(lines),'_blank','noopener');
  else location.href='mailto:deepakgupta079@gmail.com?subject='+encodeURIComponent('Enquiry: '+f.get('topic'))+'&body='+encodeURIComponent(lines);
});
document.getElementById('tqHead').src=document.querySelector('.cta img').src;
document.getElementById('yr').textContent=new Date().getFullYear();
document.querySelectorAll('.portrait[data-person]').forEach(f=>{const src=PHOTOS[f.dataset.person];if(src){f.insertAdjacentHTML('afterbegin',`<img src="${src}" alt="${NAMES[f.dataset.person]}" loading="lazy">`);f.querySelector('.mono')?.remove()}});
