$(function () {
    $('#email').blur(error);

    var error = function (name) {
        $(this)
            .css('box-shadow', '1px 1px 5px red')
            .css('border', '1px solid red');
        console.log('Hello ' + name);
    }



});
