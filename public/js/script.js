$(function () {
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        var navHeight = $('nav').height();
        var navLink = $('ul.navbar-nav li');
        var first = $('section:first');

        $('section').each(function () {
            var sectionOffset = $(this).offset().top;
            var targetHref = '#' + $(this).attr('id');
            if ((scrollbarLocation + navHeight) < first.offset().top) {
                $('li.nav-item').each(function () {
                    $(this).removeClass('active');
                    $('a', this).addClass('white-color');
                });
            }


            if (sectionOffset <= (scrollbarLocation + navHeight)) {
                navLink.find(function () {
                    var a = $('a', this);
                    a.each(function () {
                        if ($(this).attr('href') === targetHref) {
                            $(this).removeClass('white-color');
                            $(this).parent().addClass('active');
                            $(this).parent().siblings().removeClass('active');
                            $(this).parent().siblings().each(function () {
                                var anchor = $('a', this);
                                anchor.addClass('white-color');
                            });
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
        $(this).removeClass('white-color');
        // console.log($(this).parent());
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
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

});
