// var $window = $(window),
//     $nav = $('#navigation'),
//     navTop = $nav.offset().top;

// $window.scroll(function() {
//     $nav.toggleClass('sticky', $window.scrollTop() > navTop);
// });


/**/

$(document).ready(function() {
    var stickyNavTop = $('nav').offset().top;

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });
});