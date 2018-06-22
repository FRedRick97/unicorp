$(function () {
    $(window).scroll(function () {
        if ($(window).width() > 769) {
            if ($(document).scrollTop() > 100) {
                $('.navbar').css("padding", "10px").css("background-color", "rgb(60,60,60)");
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
                scrollTop: $(this.hash).offset().top - $('nav').height()
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

    var currentSlide = 1;
    var $slider = $('.slides');
    var slideCount = $slider.children().length;
    var animationSpeed = 1000;
    var pause = 2000;
    setInterval(function () {
        $slider.animate({
            marginLeft: '-=900px'
        }, animationSpeed, function () {
            currentSlide++;
            if (currentSlide === slideCount) {
                currentSlide = 1;
                $(this).css('margin-left', 0);
            }
        });
    }, pause);

});
