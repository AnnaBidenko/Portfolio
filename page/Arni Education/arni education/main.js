$(document).ready(function() {

    $('.opinion__slider').bxSlider({
        auto: true,
        controls: true,
        responsive: true,
        speed: 1000,
        pager: false,
        mimSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 365
    });

    $('.teacher_slider').bxSlider({
        auto: true,
        controls: false,
        responsive: true,
        speed: 1000
    });
});