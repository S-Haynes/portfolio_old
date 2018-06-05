var section_a = document.querySelector("#section-a");
var section_b = document.querySelector("#section-b");
var section_c = document.querySelector("#section-c");
var skills = document.querySelector("#skills");
var projects = document.querySelector("#projects");
var topScroll = document.querySelector("#top-scroll");
var about_me = document.querySelector("#about-me");
var about_container = document.querySelector("#about-container");
var closeBtn = document.querySelector("#close-button");
var about_text = document.querySelector("#about-text");
var contact_text = document.querySelector("#contact-text");
var contact = document.querySelector("#contact");

window.addEventListener('load', function(){
	skills.addEventListener('click', function(e){
		e.preventDefault();
		section_b.scrollIntoView({behavior: 'smooth'});
	});

	projects.addEventListener('click', function(e){
		e.preventDefault();
		section_c.scrollIntoView({behavior: 'smooth'});
	});

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

	contact.addEventListener('click', function(){
		displayAbout();
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
