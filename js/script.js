//Script for wave animation on the <h1> element/////////////////////////////////////////////////////////
var text = $('.animation').text();

var doAnimate = function () {
    "use strict";
    $('span').each(function () {
        var that = $(this);
        setTimeout(function () {
            that.animate({
                    fontSize: "90px"
                }, 500)
                .animate({
                    fontSize: "50px"
                }, 500);
        }, that.index() * 100);
    });
};

$('.animation').html('');

var i = 0;
for (i = 0; i < text.length; i++) {
    $('.animation').append('<span>' + text[i] + '</span>');
    if (i === text.length - 1) {
        doAnimate();
    }
}
//End of Script for wave animation on the <h1> element////////////////////////////////////////////////////
