document.addEventListener("DOMContentLoaded",(e=>{document.querySelectorAll(".my-carousel-ofertas").forEach((e=>{const t=Array.from(e.querySelectorAll(".slide-ofertas")),r=Array.from(e.querySelectorAll(".nav-dot-ofertas")),s=e.querySelector(".arrow-left"),a=e.querySelector(".arrow-right");let l=0,o=0;t[1].classList.add("active");const c=e=>{t[l].classList.remove("active","slide-in"),t[l].classList.add("slide-out"),r[l].classList.remove("active-dot"),l=e,t[l].classList.remove("slide-out"),t[l].classList.add("active","slide-in"),r[l].classList.add("active-dot"),o=performance.now()},i=e=>{(!o||e-o>=5e3)&&(c((l+1)%t.length),o=e),requestAnimationFrame(i)};r.forEach(((e,t)=>{e.addEventListener("click",(()=>c(t)))})),s.addEventListener("click",(()=>{c((l-1+t.length)%t.length)})),a.addEventListener("click",(()=>{c((l+1)%t.length)})),requestAnimationFrame(i)}))}));