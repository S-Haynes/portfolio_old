var section_a=document.querySelector("#section-a"),section_b=document.querySelector("#section-b"),section_c=document.querySelector("#section-c"),skills=document.querySelector("#skills"),projects=document.querySelector("#projects"),topScroll=document.querySelector("#top-scroll"),about_me=document.querySelector("#about-me"),about_container=document.querySelector("#about-container"),closeBtn=document.querySelector("#close-button"),about_text=document.querySelector("#about-text"),contact_text=document.querySelector("#contact-text"),contact=document.querySelector("#contact");window.addEventListener("load",function(){function t(){about_container.classList.remove("hidden"),setTimeout(function(){about_text.style.transform="translateY(0%)",contact_text.style.transform="translateY(0%)"},500),setTimeout(function(){about_container.style.transition="box-shadow 0.3s",about_container.classList.add("box-shadow")},1e3)}skills.addEventListener("click",function(t){t.preventDefault(),section_b.scrollIntoView({behavior:"smooth"})}),projects.addEventListener("click",function(t){t.preventDefault(),section_c.scrollIntoView({behavior:"smooth"})}),topScroll.addEventListener("click",function(t){t.preventDefault(),section_a.scrollIntoView({behavior:"smooth"})}),about_me.addEventListener("click",function(){t()}),closeBtn.addEventListener("click",function(){about_container.style.transition="box-shadow 0s",about_container.classList.remove("box-shadow"),about_text.style.transform="translateY(100%)",contact_text.style.transform="translateY(-100%)",setTimeout(function(){about_container.classList.add("hidden")},1e3)}),contact.addEventListener("click",function(){t()})});