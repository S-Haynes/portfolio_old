var section_a = document.querySelector("#section-a");
var section_b = document.querySelector("#section-b");
var section_c = document.querySelector("#section-c");
var skills = document.querySelector("#skills");
var projects = document.querySelector("#projects");
var topScroll = document.querySelector("#top-scroll");

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

})
