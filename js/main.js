$(document).ready(function() {

    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.navigation__menu').toggleClass('open-menu');
    });

    $('.header__burger').click(function(event) {
        $('.header__burger, .navigation__menu').toggleClass('active');
        $('body').toggleClass('fixed-page');
    });
});

/*Acardion */
$('.accordion').accordion({
    heightStyle: 'content',
    header: '> .accordion-item > .accordion-header',
    active: 0,
});

/* Slider-customer */

$(function() {
    $('.single-item').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        autoplay: true,
        prevArrow: '<img class="arrow-up" src="/img/up.svg">',
        nextArrow: '<img class="arrow-down" src="/img/down.svg">'
    });
});