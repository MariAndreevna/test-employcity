document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".nav__burger"),n=document.querySelector(".nav__list");n.classList.remove("nav__list--no-js"),e.classList.remove("nav__burger--no-js"),e.addEventListener("click",function(){n.classList.toggle("nav__list--active"),e.classList.toggle("nav__burger--active")}),document.addEventListener("click",function(t){!t.target.closest(".nav__list")&&!t.target.closest(".nav__burger")&&(n.classList.remove("nav__list--active"),e.classList.remove("nav__burger--active"))}),document.querySelectorAll(".nav__link").forEach(t=>{t.addEventListener("click",function(){n.classList.remove("nav__list--active"),e.classList.remove("nav__burger--active")})})});document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".order__range"),n=document.querySelector(".order__progress");e.addEventListener("input",function(){n.textContent=`${this.value}%`})});document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".order__select-custom"),n=document.querySelector(".order__select-selected"),t=document.querySelector(".order__select-options"),o=document.querySelector("#system_type");e.addEventListener("click",function(){let s=t.style.display==="block";t.style.display=s?"none":"block",e.classList.toggle("open",!s)}),document.querySelectorAll(".order__select-options li").forEach(s=>{s.addEventListener("click",function(){n.textContent=this.textContent,o.value=this.getAttribute("data-value"),t.style.display="none",e.classList.remove("open")})}),document.addEventListener("click",function(s){e.contains(s.target)||(t.style.display="none",e.classList.remove("open"))})});
