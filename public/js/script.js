$(function () {
    $(window).scroll(function () {
        if ($(window).width() > 769) {
            if ($(document).scrollTop() > 100) {
                $('.navbar').css("padding", "0").css("background-color", "rgb(60,60,60)");
            } else {
                $('.navbar').css("padding", "20px").css("background-color", "rgba(60,60,60,0.9)");
            }
        }

    });

    var scrollLink = $('.scroll');
    scrollLink.on('click', function (event) {
        if (this.hash !== "") {
            // event.preventDefault();
            $('body, html').stop().animate({
                scrollTop: $(this.hash).offset().top - $('nav').outerHeight()
            }, 1000);
        }
    });

    var topscroll = $('.top-scroll');
    topscroll.on('click', function (event) {
        // event.preventDefault();
        $('body, html').stop().animate({
            scrollTop: 0
        }, 1000);

    });

});
