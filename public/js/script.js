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
            $(this).parent().siblings().removeClass('active');
            $('body, html').animate({
                scrollTop: $(this.hash).offset().top - $('nav').height()
            }, 1000);
        }

    });

    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        var navHeight = $('nav').height();
        var navLink = $('ul.navbar-nav li');
        $('section').each(function () {
            var sectionOffset = $(this).offset().top;
            var targetHref = '#' + $(this).attr('id');
            // console.log(targetHref);
            if (sectionOffset <= (scrollbarLocation + navHeight)) {
                navLink.find(function () {
                    var a = $('a', this);
                    a.each(function () {
                        // console.log($(this).attr('href'));
                        if ($(this).attr('href') === targetHref) {
                            $(this).parent().addClass('active');
                            $(this).parent().siblings().removeClass('active');

                        }
                    });
                });
            }
        });
    });
});
