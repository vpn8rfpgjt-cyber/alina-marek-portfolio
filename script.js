const progress=document.getElementById('progress');const menu=document.getElementById('menu');const links=document.getElementById('navlinks');document.getElementById('year').textContent=new Date().getFullYear();menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));let ticking=false;function update(){const max=document.documentElement.scrollHeight-innerHeight;const p=max>0?scrollY/max:0;progress.style.width=(p*100)+'%';if(!reduced)document.documentElement.style.setProperty('--orbit-offset',(-p*160)+'px');ticking=false}window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true}},{passive:true});update();

// Ukrywanie podpisu lokalizacji przy przewijaniu w dół; przywracanie przy przewijaniu w górę.
const locationCaption=document.querySelector('.scroll-directional');
let previousScroll=window.scrollY;
window.addEventListener('scroll',()=>{
 const current=window.scrollY;
 if(locationCaption){
  if(current<50 || current<previousScroll-3)locationCaption.classList.remove('is-hidden');
  else if(current>previousScroll+3)locationCaption.classList.add('is-hidden');
 }
 previousScroll=current;
},{passive:true});

// Only one video may play at a time.
document.querySelectorAll('.video-gallery video').forEach(video=>{video.addEventListener('play',()=>{document.querySelectorAll('.video-gallery video').forEach(other=>{if(other!==video&&!other.paused)other.pause()})})});
