$(document).ready(function () {

    $(window).scroll(function(){
    // console.log('scrolling');
    // console.log($(window).scrollTop());
    
    if ($(window).scrollTop() > 50) {
        // $('header').css('font-size', '20px');
        $('header').addClass('small-nav');
    } else {
        // $('header').css('font-size', '75px');
        $('header').removeClass('small-nav');
    }
    });
    
    })
    