var $window = $(window),
    $nav = $('#navigation'),
    navTop = $nav.offset().top;

$window.scroll(function() {
    $nav.toggleClass('sticky', $window.scrollTop() > navTop);
});