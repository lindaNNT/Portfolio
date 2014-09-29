$(function () {
    aboutSlide();
});

function aboutSlide()
{
    $('#arrowL').click(function () {
        var rightArrow = $('#arrowL').css('display');
        var leftArrow = $('#arrowR').css('display');

        if (rightArrow == 'block' && leftArrow == 'block') {
            $('#skills-wrap').css('left', '0%');
            $('#arrowL').css('display', 'none');
            $('#arrowTextL').css('display', 'none');
            $('#arrowR').css('display', 'block');
        }
        else if (rightArrow == 'block' && leftArrow == 'none') {
            $('#skills-wrap').css('left', '-100%');
            $('#arrowL').css('display', 'block');
            $('#arrowTextL').css('display', 'block');
            $('#arrowR').css('display', 'block');
            $('#arrowTextR').css('display', 'block');
        }
    });

    $('#arrowR').click(function () {
        var rightArrow = $('#arrowL').css('display');
        var leftArrow = $('#arrowR').css('display');

        if (leftArrow == 'block' && rightArrow == 'block') {
            $('#skills-wrap').css('left', '-200%');
            $('#arrowR').css('display', 'none');
            $('#arrowTextR').css('display', 'none');
            $('#arrowL').css('display', 'block');
        }
        else if (rightArrow == 'none' && leftArrow == 'block') {
            $('#skills-wrap').css('left', '-100%');
            $('#arrowR').css('display', 'block');
            $('#arrowTextR').css('display', 'block');
            $('#arrowL').css('display', 'block');
            $('#arrowTextL').css('display', 'block');
        }
        
    });
}