$(document).ready(function(){
    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop();
        if (scroll >120) {
            $('.navbar').addClass('nav_bg_sticky')
        }
        else {
             $('.navbar').removeClass('nav_bg_sticky')
        }
    });
});
