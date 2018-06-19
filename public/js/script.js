$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('a.navbar-brand, .nav-link').removeClass('white-color').addClass('black-color');
            $('nav').css('transition', 'background-color 0.4s linear').addClass('bg-white');
        } else {
            $('nav').removeClass('bg-white');
            $('a.navbar-brand, .nav-link').removeClass('black-color').addClass('white-color');
        }

        var scrollbarLocation = $(this).scrollTop();
        var navHeight = $('nav').height();
        var navLink = $('ul.navbar-nav li');
        var first = $('section:first');

        $('section').each(function () {
            var sectionOffset = $(this).offset().top;
            var targetHref = '#' + $(this).attr('id');

            if ((scrollbarLocation + navHeight) < first.offset().top) {
                $('li.nav-item').removeClass('active').addClass('black-color');
            }


            if (sectionOffset <= (scrollbarLocation + navHeight)) {
                navLink.find(function () {
                    var a = $('a', this);
                    a.each(function () {
                        if ($(this).attr('href') === targetHref) {
                            $(this).parent().removeClass('black-color').addClass('active');
                            $(this).parent().siblings().removeClass('active').addClass('black-color');
                        }
                    });
                });
            }
        });
    });
    var check = function () {
        if ($(window).width() >= 992) {
            $('body').css("background-color", "rgb(170,57,57)");
        }
        if ($(window).width() < 992) {
            $('body').css("background-color", "lightgreen");
        }
    };
    check();
    $(window).resize(check);

    var scrollLink = $('.scroll');
    scrollLink.on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('body, html').stop().animate({
                scrollTop: $(this.hash).offset().top - $('nav').height()
            }, 1000);
        }
    });

    var topscroll = $('.top-scroll');
    topscroll.on('click', function (event) {
        event.preventDefault();
        $('body, html').stop().animate({
            scrollTop: 0
        }, 1000);

    });

});
