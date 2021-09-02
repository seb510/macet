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
        nextArrow: '<img class="arrow-down" src="/img/down.svg">',
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 542,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,


                }
            },

        ]
    });
});

/* Team slider*/

$('.slider-info').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    focusOnSelect: true,
    asNavFor: '.slider-items'
});

$('.slider-items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-info',
    centerMode: true,
    centerPadding: '40px',
    focusOnSelect: true,
    dots: false,
    arrows: false,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});