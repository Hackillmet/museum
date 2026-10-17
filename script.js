const P={y:'#FFC21A',b:'#2F4BFF',r:'#FF7FA6',g:'#12A37F',k:'#14161B',w:'#F1F2F3',o:'#FF6B35',v:'#7B4DFF',c:'#19B5C9'};
const H=[['I','Цвет','Четыре холста, где всё решает цвет.',P.b],['II','Форма','Три предмета из мастерской: объём вместо плоскости.',P.o],['III','Свет','Пять работ о свете: два холста и три фотографии.',P.y],['IV','Линия','Что остаётся от рисунка, если убрать всё лишнее.',P.g],['V','Ритм','Повторы, которые складываются в движение.',P.v],['VI','Тишина','Последний зал: почти белый, почти пустой.',P.r]];
const fb='<defs><filter id="bl"><feGaussianBlur stdDeviation="1.6"/></filter><filter id="bl2"><feGaussianBlur stdDeviation="9"/></filter></defs>';
const rg=(b,a,s,c,o,f)=>`<path d="M0 400V${b}`+[...Array(31)].map((_,i)=>` L${i*10} ${(b+Math.sin(i*.45+s)*a+Math.sin(i*1.3+s*2)*a*.35).toFixed(1)}`).join('')+` V400Z" fill="${c}" opacity="${o}"${f?' filter="url(#bl)"':''}/>`;
const lg=(id,a,b)=>`<defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="${a}"/><stop offset=".55" stop-color="${b}"/><stop offset="1" stop-color="#0007"/></linearGradient></defs>`;
const A=[
{h:0,t:'Утренний обмен',a:'Лея Вард',y:2024,m:'Масло, холст',bg:P.y,d:'Два круга перекрываются, и на пересечении появляется третий цвет. Работа о том, как разговор меняет обоих собеседников.',s:`<circle cx="120" cy="165" r="95" fill="${P.b}"/><circle cx="190" cy="250" r="75" fill="${P.r}" style="mix-blend-mode:multiply"/><circle cx="92" cy="305" r="26" fill="${P.k}"/>`},
{h:0,t:'Три пролёта',a:'Тимур Аскаров',y:2023,m:'Акрил, холст',bg:P.g,d:'Арки растут слева направо, как ступени. Зелёный фон оставляет им только цвет и высоту.',s:`<path d="M20 400V250a40 40 0 0 1 80 0V400Z" fill="${P.w}"/><path d="M110 400V190a40 40 0 0 1 80 0V400Z" fill="${P.y}"/><path d="M200 400V120a40 40 0 0 1 80 0V400Z" fill="${P.r}"/>`},
{h:0,t:'Шум 4',a:'Ирма Кольц',y:2025,m:'Акрил, холст',bg:P.k,d:'Двадцать четыре полосы без повторов. Ритм кажется случайным, пока не заметишь три цвета по кругу.',s:[...Array(24)].map((_,i)=>`<rect x="${i*12.5}" y="${(i*53)%90}" width="${3+(i*7)%9}" height="${400-((i*53)%90)*2}" fill="${[P.y,P.r,P.w][i%3]}"/>`).join('')},
{h:0,t:'Остров в воде',a:'Давид Рен',y:2022,m:'Масло, холст',bg:P.b,d:'Полукруг на горизонте и его отражение, разбитое на шесть полос. Чем глубже, тем слабее след.',s:`<path d="M60 200a90 90 0 0 1 180 0Z" fill="${P.y}"/>`+[...Array(6)].map((_,i)=>`<rect x="${70+i*8}" y="${215+i*22}" width="${160-i*16}" height="8" fill="${P.w}" opacity="${1-i*.14}"/>`).join('')},
{h:1,t:'Амфора без дна',a:'Нина Эйр',y:2023,m:'Керамика, глазурь',bg:P.g,d:'Сосуд, который нельзя наполнить: дно срезано ровно по линии света. Остаётся форма и её тень.',s:lg('a1','#F6CE63','#B5801A')+`<ellipse cx="150" cy="352" rx="80" ry="12" fill="#0005"/><path d="M122 70h56l-6 36c42 22 52 74 42 124-8 40-30 74-64 84-34-10-56-44-64-84-10-50 0-102 42-124z" fill="url(#a1)"/><path d="M108 112c-44 0-44 62 0 74M192 112c44 0 44 62 0 74" fill="none" stroke="url(#a1)" stroke-width="10"/>`},
{h:1,t:'Фрагмент колонны',a:'Йон Маар',y:2022,m:'Известняк',bg:P.b,d:'Пять каннелюр и обломанный верх. Колонна уже ничего не держит, зато хорошо держит взгляд.',s:lg('a2','#F1F2F0','#BFC4C9')+`<rect x="82" y="338" width="136" height="24" fill="url(#a2)"/><rect x="100" y="96" width="100" height="244" fill="url(#a2)"/>`+[...Array(5)].map((_,i)=>`<rect x="${112+i*19}" y="96" width="3" height="244" fill="#0003"/>`).join('')+`<path d="M82 96l30-16 22 10 24-14 22 12 36-6v14z" fill="url(#a2)"/>`},
{h:1,t:'Маска для тишины',a:'Сана Рид',y:2025,m:'Гипс, пигмент',bg:P.r,d:'Лицо без выражения, сделанное по слепку со спящего. Глаза закрыты, рот чуть приоткрыт.',s:lg('a3','#F7F7F5','#C9CED3')+`<ellipse cx="150" cy="205" rx="74" ry="108" fill="url(#a3)"/><path d="M104 180q18 12 36 0M160 180q18 12 36 0" fill="none" stroke="${P.k}" stroke-width="5" stroke-linecap="round"/><path d="M150 190v34q-8 8 0 8" fill="none" stroke="#0004" stroke-width="4"/><ellipse cx="150" cy="270" rx="16" ry="5" fill="${P.k}"/>`},
{h:2,t:'Сетка, которая дышит',a:'Мина Сато',y:2024,m:'Гуашь, бумага',bg:P.r,d:'Сорок восемь точек одного цвета. Меняется только размер, и поверхность начинает пульсировать.',s:[...Array(48)].map((_,i)=>{const c=i%6,r=(i/6)|0;return `<circle cx="${30+c*48}" cy="${40+r*46}" r="${(3+9*Math.abs(Math.sin(c*.9+r*.7))).toFixed(1)}" fill="${P.k}"/>`}).join('')},
{h:2,t:'Свет в коридоре',a:'Олаф Бреннер',y:2021,m:'Масло, холст',bg:P.k,d:'Семь вложенных прямоугольников ведут взгляд к дальней стене. Холст плоский, но глубина читается сразу.',s:[...Array(7)].map((_,i)=>`<rect x="${30+i*18}" y="${50+i*24}" width="${240-i*36}" height="${300-i*48}" fill="${[P.w,P.y,P.r,P.b,P.g,P.k,P.y][i]}"/>`).join('')},
{h:2,t:'Хребет на рассвете',a:'Лукас Дрейн',y:2024,m:'Цифровая печать',bg:'#F28A8A',d:'Четыре гряды, и каждая дальше предыдущей светлее. Воздух между ними плотнее камня, поэтому глубина видна без перспективы.',s:fb+`<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B4A8C"/><stop offset=".5" stop-color="#F28A8A"/><stop offset=".8" stop-color="#FFC27A"/></linearGradient></defs><rect width="300" height="400" fill="url(#sk)"/><circle cx="190" cy="250" r="26" fill="#FFF1C9" filter="url(#bl)"/>`+rg(250,18,1,'#8E6F9E',.7,1)+rg(285,22,2.3,'#5E5588',.85,1)+rg(325,20,4,'#352F5C',.95,0)+rg(365,14,5.5,'#14161B',1,0)},
{h:2,t:'Озеро в тумане',a:'Мира Холт',y:2023,m:'Цифровая печать',bg:'#B9C5CB',d:'Берег растворился, лодка осталась. Туман съел горизонт, и вода с небом стали одним серым полем.',s:fb+`<defs><linearGradient id="lk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E3E8EA"/><stop offset=".52" stop-color="#B9C5CB"/><stop offset=".53" stop-color="#9FB0B8"/><stop offset="1" stop-color="#5F737C"/></linearGradient></defs><rect width="300" height="400" fill="url(#lk)"/>`+rg(210,5,.7,'#8C9BA2',.8,1)+`<ellipse cx="150" cy="212" rx="200" ry="20" fill="#fff" opacity=".65" filter="url(#bl2)"/><path d="M118 296h64l-10 11h-44z" fill="#14161B"/><path d="M150 296V262l24 30z" fill="#14161B"/><path d="M130 318h40M120 330h60M138 342h24" stroke="#14161B" stroke-width="3" opacity=".35"/>`},
{h:2,t:'Лестница света',a:'Тео Брандт',y:2025,m:'Цифровая печать',bg:'#14161B',d:'Девять ступеней и один луч сверху. Свет не доходит до низа, поэтому лестница кажется длиннее, чем есть.',s:fb+[...Array(9)].map((_,i)=>`<rect x="30" y="${90+i*30}" width="240" height="30" fill="${i%2?'#2A2E36':'#1D2027'}"/>`).join('')+`<path d="M170 0h90L110 400H30z" fill="#FFE8A8" opacity=".38" filter="url(#bl2)"/><path d="M190 0h50L110 400H70z" fill="#FFF4D0" opacity=".3" filter="url(#bl)"/>`},
{h:3,t:'Одна линия',a:'Артём Лисс',y:2023,m:'Тушь, бумага',bg:P.y,d:'Кривая не отрывается от бумаги от первой точки до последней. Если идти по ней взглядом, легко потерять счёт петлям.',s:`<path d="M30 340C60 60 120 60 140 200S220 380 270 70" fill="none" stroke="${P.k}" stroke-width="6" stroke-linecap="round"/>`},
{h:3,t:'Натянутые нити',a:'Ева Шторм',y:2024,m:'Нить, гвозди',bg:P.k,d:'Четырнадцать нитей от левого края к нижнему. Из прямых линий получается плавный изгиб, которого нет ни на одной из них.',s:[...Array(14)].map((_,i)=>`<line x1="30" y1="${30+i*24}" x2="${40+i*20}" y2="370" stroke="${[P.y,P.r,P.c][i%3]}" stroke-width="2.5"/>`).join('')},
{h:4,t:'Шаги',a:'Ян Ворон',y:2022,m:'Акрил, холст',bg:P.c,d:'Шесть квадратов поднимаются по диагонали и растут на каждом шаге. Цвета чередуются, как клавиши.',s:[...Array(6)].map((_,i)=>`<rect x="${30+i*38}" y="${300-i*44}" width="${24+i*4}" height="${24+i*4}" fill="${i%2?P.w:P.k}"/>`).join('')},
{h:4,t:'Часы без стрелок',a:'Алия Норд',y:2025,m:'Масло, холст',bg:P.o,d:'Четыре кольца из чёрточек разной длины. Время в этой работе можно только услышать, как тиканье.',s:[...Array(4)].map((_,i)=>`<circle cx="150" cy="200" r="${40+i*26}" fill="none" stroke="${P.w}" stroke-width="10" stroke-dasharray="${6+i*4} 10"/>`).join('')},
{h:5,t:'Белое на белом',a:'Ким Ларс',y:2021,m:'Масло, холст',bg:'#E8EAEC',d:'Прямоугольник и круг почти не отличаются от фона. Нужно подойти ближе и постоять, чтобы их увидеть.',s:`<rect x="70" y="90" width="160" height="220" fill="#F8F9FA"/><circle cx="150" cy="200" r="46" fill="#DDE0E4"/>`},
{h:5,t:'Тень от окна',a:'Роза Клайн',y:2024,m:'Акрил, холст',bg:P.v,d:'Квадрат света, упавший на пол, и тёмный крест рамы. Окна на картине нет, остался только его след.',s:`<path d="M60 80h120l60 240H110z" fill="${P.y}"/><path d="M120 80l50 240M75 200h160" stroke="${P.v}" stroke-width="8"/>`}
];
const $=id=>document.getElementById(id),track=$('track'),ov=$('ov'),main=$('main');
const art=w=>w.img?`<img src="${w.img}" alt="${w.t}">`:`<svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${w.s}</svg>`;
const work=(w,i)=>`<section class="work" data-i="${i}"><button class="frame" aria-label="Открыть экспонат: ${w.t}" style="background:${w.bg}">${art(w)}</button><p class="pl"><small>№ ${String(i+1).padStart(2,'0')}</small><b>${w.t}</b><span>${w.a}, ${w.y}</span><span>${w.m}</span></p></section>`;
const mq=['Вход свободный','Экспонаты открываются кликом','Свет можно приглушить','Добавьте в зал своё фото'].map(s=>`<span>${s}</span>`).join('');
track.innerHTML=`<section class="intro"><h1 aria-label="Ракурс">${[...'Ракурс'].map((c,i)=>`<span class="l" style="--i:${i}" aria-hidden="true">${c}</span>`).join('')}</h1><p>Музей абстрактной живописи и предметов. Шесть залов, восемнадцать экспонатов: идите вправо.</p><p>Колесо мыши, перетаскивание или стрелки на клавиатуре.</p><div class="mq" aria-hidden="true"><div>${mq}${mq}</div></div></section>`
+H.map((h,k)=>`<section class="hall" style="--c:${h[3]}"><b class="hn" aria-hidden="true">${h[0]}</b><h2>Зал ${h[0]}. ${h[1]}</h2><p>${h[2]}</p></section>`+A.map((w,i)=>w.h===k?work(w,i):'').join('')).join('')
+`<section class="add"><h2>Ваш экспонат</h2><p>Выберите фото на устройстве, и оно появится в зале. Файл остаётся у вас, на сервер ничего не уходит.</p><label class="btn" tabindex="0" id="upl">Добавить фото<input type="file" id="file" accept="image/*" hidden></label></section><section class="outro"><h2>Выход</h2><p>Спасибо, что зашли. Вернуться ко входу можно одной кнопкой.</p><button class="btn" id="back">Вернуться ко входу</button></section>`;
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches,k=rm?1:.085;
if(matchMedia('(pointer:coarse)').matches)track.querySelector('.intro p+p').textContent='Проведите пальцем влево или вправо.';
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.3});
let works,frames,halls=[...track.querySelectorAll('.hall')];
const refresh=()=>{works=[...track.querySelectorAll('.work')];frames=[...track.querySelectorAll('.frame')];works.forEach(w=>{if(!w.classList.contains('in'))io.observe(w)})};
let x=0,t=0,max=0,cx=[],sx=0,st=0,drag=false,moved=0,vel=0,lm=0,ox=0,oy=0,last=null,mx=innerWidth/2,my=innerHeight/2,px=mx,py=my;
const cl=v=>Math.max(0,Math.min(max,v));
function size(){max=Math.max(0,track.scrollWidth-innerWidth);cx=works.map(e=>e.offsetLeft+e.offsetWidth/2);t=cl(t)}
refresh();size();addEventListener('resize',size);
addEventListener('wheel',e=>{if(ov.classList.contains('open'))return;t=cl(t+(e.deltaY+e.deltaX)*1.1)},{passive:true});
main.addEventListener('pointerdown',e=>{drag=true;moved=0;sx=e.clientX;st=t;vel=0;lm=0});
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;if(!drag)return;moved=Math.abs(e.clientX-sx);const nt=cl(st-(e.clientX-sx)*1.6);vel=nt-t;t=nt;lm=performance.now()});
addEventListener('pointerup',()=>{if(drag&&performance.now()-lm<80)t=cl(t+vel*9);drag=false});
addEventListener('pointercancel',()=>{drag=false});
addEventListener('keydown',e=>{
  if(e.key==='Escape'&&ov.classList.contains('open')){closeW();return}
  if(ov.classList.contains('open'))return;
  const s={ArrowRight:1,ArrowDown:1,PageDown:1,ArrowLeft:-1,ArrowUp:-1,PageUp:-1}[e.key];
  if(s)t=cl(t+s*innerWidth*.6);else if(e.key==='Home')t=0;else if(e.key==='End')t=max});
track.addEventListener('focusin',e=>{const w=e.target.closest('.work,.add');if(w)t=cl(w.offsetLeft+w.offsetWidth/2-innerWidth/2)});
track.addEventListener('pointermove',e=>{const f=e.target.closest('.frame');if(!f||drag||e.pointerType!=='mouse')return;const r=f.getBoundingClientRect(),a=(e.clientX-r.left)/r.width-.5,b=(e.clientY-r.top)/r.height-.5;f.style.transform=`perspective(800px) rotateY(${a*12}deg) rotateX(${-b*12}deg) scale(1.02)`});
track.addEventListener('pointerout',e=>{const f=e.target.closest('.frame');if(f)f.style.transform=''});
track.addEventListener('click',e=>{const f=e.target.closest('.frame');if(!f||moved>6)return;openW(+f.closest('.work').dataset.i,e)});
document.addEventListener('pointerover',e=>$('cur').classList.toggle('big',!!e.target.closest('.frame,.btn,.tg')));
$('back').onclick=()=>{t=0};
$('upl').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();$('file').click()}});
$('file').addEventListener('change',e=>{
  const f=e.target.files[0];if(!f)return;const r=new FileReader();
  r.onload=()=>{const w={h:5,t:'Ваш экспонат',a:'Из вашей коллекции',y:2026,m:'Фотография',bg:P.k,d:'Фото из вашей коллекции. Оно показано только на этой странице и пропадёт после обновления.',img:r.result};
    A.push(w);track.querySelector('.add').insertAdjacentHTML('beforebegin',work(w,A.length-1));
    refresh();size();const n=works[works.length-1];t=cl(n.offsetLeft+n.offsetWidth/2-innerWidth/2)};
  r.readAsDataURL(f);e.target.value=''});
const tg=$('tg'),dk=$('dk');
tg.onclick=()=>{const on=dk.classList.toggle('on');tg.setAttribute('aria-pressed',on);tg.textContent=on?'Включить свет':'Приглушить свет'};
function openW(i,e){
  const w=A[i];ox=e.clientX||innerWidth/2;oy=e.clientY||innerHeight/2;last=frames[i];
  $('oa').innerHTML=w.img?art(w):`<svg viewBox="0 0 300 400" style="background:${w.bg}" role="img" aria-label="${w.t}">${w.s}</svg>`;
  $('oh').textContent=w.t;$('om').textContent=`${w.a}, ${w.y}. ${w.m}`;$('od').textContent=w.d;
  ov.style.clipPath=`circle(0px at ${ox}px ${oy}px)`;void ov.offsetWidth;
  ov.classList.add('open');ov.style.clipPath=`circle(150vmax at ${ox}px ${oy}px)`;
  main.inert=true;$('oc').focus({preventScroll:true})}
function closeW(){ov.classList.remove('open');ov.style.clipPath=`circle(0px at ${ox}px ${oy}px)`;main.inert=false;if(last)last.focus({preventScroll:true})}
$('oc').onclick=closeW;
const lab=$('lab'),fill=$('fill'),floor=$('floor'),cur=$('cur');
(function tick(){
  x+=(t-x)*k;if(Math.abs(t-x)<.1)x=t;
  const sk=rm?0:Math.max(-5,Math.min(5,(x-t)/40));
  track.style.transform=`translate3d(${-x}px,0,0) skewX(${sk}deg)`;
  floor.style.backgroundPosition=`0 0,${-x}px 0`;
  if(!rm){
    frames.forEach(f=>{const r=f.getBoundingClientRect(),d=(r.left+r.width/2-innerWidth/2)/innerWidth;f.firstElementChild.style.transform=`translateX(${(-d*10).toFixed(2)}%)`});
    halls.forEach(h=>{const r=h.getBoundingClientRect(),d=(r.left+r.width/2-innerWidth/2)/innerWidth;h.firstElementChild.style.transform=`translateY(-50%) translateX(${(d*40).toFixed(1)}%)`})}
  px+=(mx-px)*.25;py+=(my-py)*.25;cur.style.transform=`translate(${px}px,${py}px)`;
  dk.style.setProperty('--mx',px+'px');dk.style.setProperty('--my',py+'px');
  fill.style.transform=`scaleX(${max?x/max:0})`;
  const mid=x+innerWidth/2;let n=0;cx.forEach((c,i)=>{if(Math.abs(c-mid)<Math.abs(cx[n]-mid))n=i});
  lab.textContent=max&&x>=max-4?'Выход':mid<cx[0]-innerWidth*.55?'Вход':`Зал ${H[A[n].h][0]}: ${A[n].t}`;
  requestAnimationFrame(tick)})();
