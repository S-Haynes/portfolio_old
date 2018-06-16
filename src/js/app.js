var section_a = document.querySelector("#section-a");
var section_b = document.querySelector("#section-b");
var section_c = document.querySelector("#section-c");
var skills = document.querySelectorAll(".skills");
var projects = document.querySelectorAll(".projects");
var contact = document.querySelectorAll(".contact");
var dropdown = document.querySelector("#dropdown");
var dropdown_info = document.querySelector("#dropdown-info");
var dropdown_close = document.querySelector("#dropdown-close");
var dropdown_underlay = document.querySelector("#dropdown-info-underlay");
var topScroll = document.querySelector("#top-scroll");
var about_me = document.querySelector("#about-me");
var about_container = document.querySelector("#about-container");
var closeBtn = document.querySelector("#close-button");
var about_text = document.querySelector("#about-text");
var contact_text = document.querySelector("#contact-text");


window.addEventListener('load', function(){
	for(var i = 0; i < skills.length; i++){
	skills[i].addEventListener('click', function(e){
		e.preventDefault();
		section_b.scrollIntoView({behavior: 'smooth'});
	});
	projects[i].addEventListener('click', function(e){
		e.preventDefault();
		section_c.scrollIntoView({behavior: 'smooth'});
	});

	contact[0].addEventListener('click', function(){
		displayAbout();
	})

	}
		
	topScroll.addEventListener('click', function(e){
		e.preventDefault();
		section_a.scrollIntoView({behavior: 'smooth'})
	});

	about_me.addEventListener('click', function(){
		displayAbout();
	});

	closeBtn.addEventListener('click', function(){
		hideAbout();
	});

	dropdown.addEventListener('click', function(){
		dropdown_info.style.display = "flex";
		dropdown_underlay.style.display = "flex";
		setTimeout(function(){
			dropdown_underlay.style.transform = "translateX(0%)"
		}, 200)
		
		setTimeout(function(){
		dropdown_info.style.transform = "translateX(0%)";
		}, 400)
		
	})
	dropdown_close.addEventListener('click', function(){
		
		dropdown_info.style.transform = "translateX(-110%)";
		setTimeout(function(){
			dropdown_underlay.style.transform = "translateX(-110%)";
		}, 200)
		
		setTimeout(function(){
			dropdown_info.style.display = "none";
			dropdown_underlay.style.display = "none";
		}, 800)

	})
	contact[1].addEventListener('click', function(){
	dropdown_info.style.transform = "translateX(-100%)";
		setTimeout(function(){
			dropdown_underlay.style.transform = "translateX(-100%)";
		}, 200)
		
		setTimeout(function(){
			dropdown_info.classList.add('hidden');
			dropdown_underlay.classList.add('hidden');
		}, 800)
		setTimeout(function(){
			displayAbout();
		}, 500)
	})
	

	function displayAbout(){
		about_container.classList.remove('hidden');
		setTimeout(function(){
			about_text.style.transform = "translateY(0%)";
			contact_text.style.transform = "translateY(0%)";
		}, 500)
		setTimeout(function(){
			about_container.style.transition = "box-shadow 0.3s"
			about_container.classList.add('box-shadow');
		}, 1000)
	}

	function hideAbout(){
		about_container.style.transition = "box-shadow 0s"
		about_container.classList.remove('box-shadow');
		about_text.style.transform = "translateY(100%)";
		contact_text.style.transform = "translateY(-100%)";
		setTimeout(function(){
			about_container.classList.add('hidden');
		}, 1000)
	}

	
})
