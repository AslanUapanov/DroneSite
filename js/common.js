$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

let caruselVideoSlider = document.querySelector('.carusel_video');
let left = document.querySelector('.flex_element1');
let right = document.querySelector('.flex_element2');

left.onclick = function(){
	caruselVideoSlider.style.backgroundImage = "url('img/video_section2.png')";
};
right.onclick = function(){
	caruselVideoSlider.style.backgroundImage = "url('img/video_section1.png')";
};

let images = document.querySelectorAll('.drone_carusel_image');
let current = 0;
let left_drone_carusel = document.querySelector('.drone_carusel_array_left');
let right_drone_carusel = document.querySelector('.drone_carusel_array_right');

function slider(){
	for(let i = 0; i < images.length; i++){
		images[i].classList.add('opacity0');
	}
	images[current].classList.remove('opacity0');
	
};
slider();
left_drone_carusel.onclick = function(){
	if(current - 1 == -1){
		current = images.length - 1;
	}else{
		current--;
	}
	slider();
};
right_drone_carusel.onclick = function(){
	if(current + 1 == images.length){
		current = 0;
	}else{
		current++;
	}
	slider();
};