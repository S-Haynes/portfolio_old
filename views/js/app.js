var section_a=document.querySelector("#section-a"),section_b=document.querySelector("#section-b"),section_c=document.querySelector("#section-c"),skills=document.querySelectorAll(".skills"),projects=document.querySelectorAll(".projects"),contact=document.querySelectorAll(".contact"),dropdown=document.querySelector("#dropdown"),dropdown_info=document.querySelector("#dropdown-info"),dropdown_close=document.querySelector("#dropdown-close"),dropdown_underlay=document.querySelector("#dropdown-info-underlay"),topScroll=document.querySelector("#top-scroll"),about_me=document.querySelector("#about-me"),about_container=document.querySelector("#about-container"),closeBtn=document.querySelector("#close-button"),about_text=document.querySelector("#about-text"),contact_text=document.querySelector("#contact-text");window.addEventListener("load",function(){for(var t=0;t<skills.length;t++)skills[t].addEventListener("click",function(t){t.preventDefault(),section_b.scrollIntoView({behavior:"smooth"})}),projects[t].addEventListener("click",function(t){t.preventDefault(),section_c.scrollIntoView({behavior:"smooth"})}),contact[0].addEventListener("click",function(){e()});function e(){about_container.classList.remove("hidden"),setTimeout(function(){about_text.style.transform="translateY(0%)",contact_text.style.transform="translateY(0%)"},500),setTimeout(function(){about_container.style.transition="box-shadow 0.3s",about_container.classList.add("box-shadow")},1e3)}topScroll.addEventListener("click",function(t){t.preventDefault(),section_a.scrollIntoView({behavior:"smooth"})}),about_me.addEventListener("click",function(){e()}),closeBtn.addEventListener("click",function(){about_container.style.transition="box-shadow 0s",about_container.classList.remove("box-shadow"),about_text.style.transform="translateY(100%)",contact_text.style.transform="translateY(-100%)",setTimeout(function(){about_container.classList.add("hidden")},1e3)}),dropdown.addEventListener("click",function(){dropdown_info.classList.remove("hidden"),dropdown_underlay.classList.remove("hidden"),setTimeout(function(){dropdown_underlay.style.transform="translateX(0%)"},200),setTimeout(function(){dropdown_info.style.transform="translateX(0%)"},400)}),dropdown_close.addEventListener("click",function(){dropdown_info.style.transform="translateX(-110%)",setTimeout(function(){dropdown_underlay.style.transform="translateX(-110%)"},200),setTimeout(function(){dropdown_info.classList.add("hidden"),dropdown_underlay.classList.add("hidden")},800)}),contact[1].addEventListener("click",function(){dropdown_info.style.transform="translateX(-100%)",setTimeout(function(){dropdown_underlay.style.transform="translateX(-100%)"},200),setTimeout(function(){dropdown_info.classList.add("hidden"),dropdown_underlay.classList.add("hidden")},800),setTimeout(function(){e()},500)})});