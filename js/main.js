$(document).ready(function() {

    /** To scorll header **/

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });

    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.navigation__menu').toggleClass('open-menu');
        $('.body').toggleClass('fixed');
    });

    $('.header__burger').click(function(event) {
        $('.header__burger, .navigation__menu').toggleClass('active');
        $('.body').toggleClass('fixed');
    });
});

/*Acardion */
$('.accordion').accordion({
    heightStyle: 'content',
    header: '> .accordion-item > .accordion-header',
    active: 0,
});

/* sign-up window */
$(document).on('click', '#sing-up', () => {
    $.fancybox.open({
        src: '#sing-form',
        type: 'inline'
    });
})

/* Anhor smooth scroll link */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Slider-customer */

$(function() {
    $('.single-item').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        autoplay: true,
        prevArrow: '<img class="arrow-up" src="img/up.svg">',
        nextArrow: '<img class="arrow-down" src="img/down.svg">',
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
    cssEase: 'linear',
    arrows: false,
    fade: true,
    focusOnSelect: true,
    asNavFor: '.slider-items'
});

$('.slider-items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
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