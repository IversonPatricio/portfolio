document.addEventListener('DOMContentLoaded',()=>{document.body.classList.add('loaded');
document.querySelectorAll('a[data-nav]').forEach(a=>a.addEventListener('click',e=>{if(a.classList.contains('active'))return;e.preventDefault();document.body.classList.add('leaving');setTimeout(()=>location.href=a.href,300)}));
const t=document.querySelectorAll('.spy a');if(t.length){const o=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){t.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+x.target.id))}}),{rootMargin:'-40% 0px -55% 0px'});document.querySelectorAll('section[id]').forEach(s=>o.observe(s))}});
window.addEventListener('pageshow',e=>{if(e.persisted)document.body.classList.remove('leaving')});
