!function(){"use strict";function e(e,t,o){document.querySelector(e).style.display="block",document.body.style.overflow="hidden",document.querySelector("body").style.paddingRight=o+"px",t&&clearTimeout(t)}function t(e){document.querySelector(e).style.display="none",document.body.style.overflow="visible",document.querySelector("body").style.paddingRight=""}window.addEventListener("DOMContentLoaded",(()=>{const o=setTimeout((()=>e(".modal",o)),2e5);(function({tabsSelector:e,tabsContentSelector:t,tabsParentSelector:o,classActive:r}){const c=document.querySelectorAll(e),a=document.querySelectorAll(t),l=document.querySelector(o);function s(){a.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),c.forEach((e=>{e.classList.remove(r.slice(1))}))}function n(e=0){a[e].classList.add("show","fade"),a[e].classList.remove("hide"),c[e].classList.add(r.slice(1))}s(),n(),l.addEventListener("click",(t=>{const o=t.target;o&&o.classList.contains(e.slice(1))&&c.forEach(((e,t)=>{e==o&&(s(),n(t))}))}))})({tabsSelector:".tabheader__item",tabsContentSelector:".tabcontent",tabsParentSelector:".tabheader__items",classActive:".tabheader__item_active"}),function(o,r,c){const a=document.querySelectorAll(o),l=document.querySelector(r),s=window.innerWidth-document.documentElement.clientWidth;a.forEach((t=>{t.addEventListener("click",(()=>e(r,c,s)))})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e(r,c,s),window.removeEventListener("scroll",t))})),document.addEventListener("keydown",(e=>{"Escape"==e.code&&"block"==getComputedStyle(l).display&&t(r)})),l.addEventListener("click",(e=>{e.target!=l&&""!=e.target.getAttribute("data-close")||t(r)}))}("[data-modal]",".modal",o),function(){const e=document.querySelector(".calculating__result span");let t,o,r,c,a;function l(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")==localStorage.getItem("sex")&&e.classList.add(t),e.dataset.ratio==localStorage.getItem("ratio")&&e.classList.add(t)}))}function s(){t&&o&&r&&c&&a?("female"==t&&(e.innerHTML=Math.floor((88.36+13.4*r+4.8*o-5.7*c)*a)),"male"==t&&(e.innerHTML=Math.floor((447.6+9.2*r+3.1*o-4.3*c)*a))):e.innerHTML="____"}function n(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":o=+t.value,localStorage.setItem("height",+t.value);break;case"weight":r=+t.value,localStorage.setItem("weight",+t.value);break;case"age":c=+t.value,localStorage.setItem("age",+t.value)}s()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("height")>=1?(o=localStorage.getItem("height"),document.querySelector("#height").value=o):(o=0,localStorage.setItem("height",0)),localStorage.getItem("weight")>=1?(r=localStorage.getItem("weight"),document.querySelector("#weight").value=r):(r=0,localStorage.setItem("weight",0)),localStorage.getItem("age")>=1?(c=localStorage.getItem("age"),document.querySelector("#age").value=c):(c=0,localStorage.setItem("age",0)),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a=1.375,localStorage.setItem("ratio",1.375)),l(".calculating__choose_big div","calculating__choose-item_active"),l("#gender div","calculating__choose-item_active"),s(),function(){const e=document.querySelectorAll("#gender div");e.forEach((o=>{o.addEventListener("click",(o=>{t=o.target.getAttribute("id"),localStorage.setItem("sex",o.target.getAttribute("id")),e.forEach((e=>{e.classList.remove("calculating__choose-item_active")})),o.target.classList.add("calculating__choose-item_active"),s()}))}))}(),function(){const e=document.querySelectorAll(".calculating__choose_big div");e.forEach((t=>{t.addEventListener("click",(t=>{"low"==t.target.getAttribute("id")?(a=1.2,localStorage.setItem("ratio",1.2)):"small"==t.target.getAttribute("id")?(a=1.375,localStorage.setItem("ratio",1.375)):"medium"==t.target.getAttribute("id")?(a=1.55,localStorage.setItem("ratio",1.55)):"high"==t.target.getAttribute("id")&&(a=1.725,localStorage.setItem("ratio",1.725)),e.forEach((e=>{e.classList.remove("calculating__choose-item_active")})),t.target.classList.add("calculating__choose-item_active"),s()}))}))}(),n("#age"),n("#height"),n("#weight")}(),function(e){function t(e){return e<10&&e>=0?`0${e}`:e}!function(e){const o=document.querySelector(".timer"),r=o.querySelector("#days"),c=o.querySelector("#hours"),a=o.querySelector("#minutes"),l=o.querySelector("#seconds"),s=setInterval(n,1e3);function n(){const o=function(e){const t=new Date,o=Date.parse(e)-Date.parse(t);return{total:o,day:Math.floor(o/864e5),hours:Math.floor(o/36e5%24),minuts:Math.floor(o/6e4%60),seconds:Math.floor(o/1e3%60)}}(e);r.innerHTML=t(o.day),c.innerHTML=t(o.hours),a.innerHTML=t(o.minuts),l.innerHTML=t(o.seconds),o.total<=0&&clearInterval(s)}n()}(e)}("2021-10-22 13:00:00"),function(){class e{constructor(e,t,o,r,c,a,...l){this.img=e,this.alt=t,this.title=o,this.descr=r,this.price=c,this.selector=document.querySelector(a),this.classes=l}render(){const e=document.createElement("div");0==this.classes.length?e.classList.add("menu__item"):this.classes.forEach((t=>{e.classList.add(t)})),e.innerHTML=`\n                <img src=${this.img} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.selector.append(e)}}(async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((({img:t,alt:o,title:r,descr:c,price:a})=>{new e(t,o,r,c,a*=27,".menu .container").render()}))}))}(),function(o){function r(r){const c=document.querySelector(".modal__dialog");c.classList.add("hide"),e(".modal",o);const a=document.createElement("div");a.classList.add("modal__dialog"),a.innerHTML=`\n            <div class="modal__content">\n                <div data-close class="modal__close">&times;</div>\n                <div class="modal__title">${r}</div>\n            </div>\n        `,document.querySelector(".modal").insertAdjacentElement("afterbegin",a),setTimeout((()=>{a.remove(),t(".modal"),c.classList.add("show"),c.classList.remove("hide")}),2e3)}document.querySelectorAll("form").forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();const o=document.createElement("img");o.src="img/form/spinner.svg",o.classList.add("spinner-form"),t.insertAdjacentElement("afterend",o);const c=new FormData(t);(async(e,t)=>{const o=await fetch("http://localhost:3000/requests",{method:"POST",body:t,headers:{"content-type":"application/json; charset=utf-8"}});return await o.json()})(0,JSON.stringify(Object.fromEntries(c.entries()))).then((e=>{console.log(e),r("successful")})).catch((()=>{console.error("Error!"),r("ERROR")})).finally((()=>{t.reset(),o.remove()}))}))}))}(o),function({sliderSelector:e,sliderWrapperSelector:t,nextArrow:o,prevArrow:r,slidesSelector:c,sliderBodySelector:a,totalSlidesSelector:l,currentSlideSelector:s}){const n=document.querySelector(s),i=document.querySelector(l),d=document.querySelectorAll(c),u=document.querySelector(o),m=document.querySelector(r),g=document.querySelector(t),h=g.getBoundingClientRect().width,f=document.querySelector(a),S=document.querySelector(e),v=[];let y=1,_=0;function p(){d.length<10?(i.innerHTML=`0${d.length}`,n.innerHTML=`0${y}`):(i.innerHTML=d.length,n.innerHTML=y)}function L(){v.forEach((e=>{e.style.cssText="\n                    opacity: .5;\n                    transform: scale(1);\n                "})),v[y-1].style.cssText="\n            opacity: 1;\n            transform: scale(1.05);\n        "}p(),f.style.width=100*d.length+"%",f.style.display="flex",f.style.transition="all 0.5s ease",g.style.overflow="hidden",d.forEach((e=>{e.style.width=h+"px"})),u.addEventListener("click",(()=>{_==h*(d.length-1)?(_=0,y=0):_+=h,f.style.transform=`translateX(-${_}px)`,y++,p(),L()})),m.addEventListener("click",(()=>{0==_?(_=h*(d.length-1),y=d.length+1):_-=h,f.style.transform=`translateX(-${_}px)`,y--,p(),L()}));const E=document.createElement("ol");E.classList.add("carousel-indicators"),S.append(E),d.forEach(((e,t)=>{const o=document.createElement("li");o.setAttribute("data-slide-to",t+1),o.classList.add("dot"),E.append(o),v.push(o),L()})),v.forEach((e=>{e.addEventListener("click",(e=>{y=e.target.getAttribute("data-slide-to"),_=h*(y-1),f.style.transform=`translateX(-${_}px)`,L(),p()}))}))}({sliderSelector:".offer__slider",sliderWrapperSelector:".offer__slider-wrapper",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",slidesSelector:".offer__slide",sliderBodySelector:".offer__slider-body",totalSlidesSelector:"#total",currentSlideSelector:"#current"})}))}();
//# sourceMappingURL=bundle.js.map