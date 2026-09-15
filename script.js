const cursor=document.querySelector('.cursor');
const topbar=document.querySelector('.topbar');

if(cursor && window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{
    cursor.style.transform=`translate(${e.clientX-5}px,${e.clientY-5}px)`;
    const stage=document.querySelector('.tech-stage');
    if(stage){
      const x=(e.clientX/window.innerWidth-.5)*10;
      const y=(e.clientY/window.innerHeight-.5)*-7;
      stage.style.transform=`perspective(800px) rotateX(${5+y*.25}deg) rotateY(${x*.25}deg)`;
    }
  });
}

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('in');
  });
},{threshold:.08});
document.querySelectorAll('.entry,.project,.education-card,.archive-block,.closing-copy,.recognition').forEach(el=>observer.observe(el));

window.addEventListener('scroll',()=>{
  if(topbar) topbar.classList.toggle('scrolled',window.scrollY>40);
},{passive:true});

// Give links and interactive rows a subtle magnetic feel.
if(window.matchMedia('(pointer:fine)').matches){
  document.querySelectorAll('.menu-link,.brand,.archive-list>div,.tags span,.project-facts span').forEach(el=>{
    el.addEventListener('mousemove',e=>{
      const r=el.getBoundingClientRect();
      const x=(e.clientX-(r.left+r.width/2))*0.08;
      const y=(e.clientY-(r.top+r.height/2))*0.08;
      el.style.transform=`translate(${x}px,${y}px)`;
    });
    el.addEventListener('mouseleave',()=>el.style.transform='');
  });
}
