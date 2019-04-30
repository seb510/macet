$(document).ready(function () {
    var carousel = $("#carousel").waterwheelCarousel({
        flankingItems: 3,
        movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
        },
        movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
        },
        movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
        },
        movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
        },
        clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
        }
    });


    $('#reload').bind('click', function () {
        newOptions = eval("(" + $('#newoptions').val() + ")");
        carousel.reload(newOptions);
        return false;
    });

    $(function(){
        $('.slick-vertical').slick({
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 2,
            autoplay: true,
            prevArrow: '<img src="/img/up.svg">',
            nextArrow: '<img src="/img/downs.svg">'
            // focusOnSelect: 1,
            // centerMode: false,
        });
    });

});