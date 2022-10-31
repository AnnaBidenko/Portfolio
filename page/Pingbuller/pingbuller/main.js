$(document).ready(function(){

	$('.head_slider').bxSlider({
		auto: true,
	    controls: true,
	    responsive: true,
	    speed: 700
	});

	$('.item_slider').bxSlider({
		auto: true,
	    controls: false,
	    responsive: true,
	    speed: 1000
	});

    $('.patners__slider').bxSlider({
    	pager: false,
		controls: false,
		auto: true,
		pause: 1800,
    	minSlides: 1,
    	maxSlides: 6,
    	moveSlides: 3,
    	slideMargin: 70,
    	slideWidth: 70,
    });

});