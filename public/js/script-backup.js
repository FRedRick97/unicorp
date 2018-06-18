$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('nav').css('transition', 'background-color 0.4s linear').addClass('bg-dark');
        } else {
            $('nav').removeClass('bg-dark');
        }
    });
    var check = function () {
        if ($(window).width() >= 992) {
            $('body').css("background-color", "rgb(170,57,57)");
            // $('ul.navbar-nav').children().removeClass('bg-white');

            // $('.board').removeClass('small').addClass('big');
        }

        if ($(window).width() < 992) {
            $('body').css("background-color", "lightgreen");
            // $('ul.navbar-nav').children().removeClass('bg-white');

            // $('.board').removeClass('big').addClass('small');
        }

        if ($(window).width() <= 768) {
            // $('ul.navbar-nav').children().addClass('bg-white');
        }
    };
    check();
    $(window).resize(check);

    var scrollLink = $('.scroll');
    scrollLink.on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $(this).parent().siblings().removeClass('active');
            $('body, html').animate({
                scrollTop: $(this.hash).offset().top - $('nav').height()
            }, 1000);
        }

    });

    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        var navHeight = $('nav').height();
        scrollLink.each(function () {
            var hash = $(this.hash);
            var sectionOffset = $(hash).offset().top;

            if (sectionOffset <= (scrollbarLocation + navHeight)) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
                // if (hash !== undefined) {

                // }
            }
        });
    });
});
