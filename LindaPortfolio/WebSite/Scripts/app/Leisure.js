$(function () {
    leisureSlide();
    $('#interest').hide();
    $('#leisure-arrowL').hide();
    $('#leisure-arrowTextL').hide();
});

function leisureSlide() {
    $('#leisure-arrowL').click(function () {
        var rightArrow = $('#leisure-arrowR').css('display');
        var leftArrow = $('#leisure-arrowL').css('display');

        if (leftArrow == 'block' && rightArrow == 'none') { // family syns
            $('#leisure-wrap').css('left', '0%');

            $('#leisure-arrowL').css('display', 'none');
            $('#leisure-arrowTextL').css('display', 'none');
            $('#leisure-arrowR').css('display', 'block');
            $('#leisure-arrowTextR').css('display', 'block');

            $('#family').show();
            $('#interest').hide();
        }
    });

    $('#leisure-arrowR').click(function () {
        var rightArrow = $('#leisure-arrowR').css('display');
        var leftArrow = $('#leisure-arrowL').css('display');
        if (leftArrow == 'none' && rightArrow == 'block') { // inressen syns
            $('#leisure-wrap').css('left', '-100%');

            $('#leisure-arrowR').css('display', 'none');
            $('#leisure-arrowTextR').css('display', 'none');

            $('#leisure-arrowL').css('display', 'block');
            $('#leisure-arrowTextL').css('display', 'block');

            $('#family').hide();
            $('#interest').show();
        }
    });
}