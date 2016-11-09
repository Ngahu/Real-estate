/**
 * Created by joel on 11/10/16.
 */
$(window).scroll(function () {
    if ($(document).scrollTop() > 50 ) {
        $('nav').addClass('shrink');
    }
    else {
        $('nav').removeClass('shrink');
    }
});