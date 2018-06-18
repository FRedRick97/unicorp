$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('nav').addClass('bg-dark');
        } else {
            $('nav').removeClass('bg-dark');
        }
    });
    var check = function () {
        if ($(window).width() >= 992) {
            $('body').css("background-color", "blue");
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

    $('li.nav-item').on('click', function () {
        // var x = $('a', this);
        // $(this).find('a').not(x).removeClass('active');
        // $(x).addClass('active');
    });
});
