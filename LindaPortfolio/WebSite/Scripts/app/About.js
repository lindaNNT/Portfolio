$(function () {
    aboutSlide();
    $('#experience-container').hide();
    $('#education').hide();
});

function aboutSlide()
{
    $('#arrowL').click(function () {
        var rightArrow = $('#arrowL').css('display');
        var leftArrow = $('#arrowR').css('display');

        if (rightArrow == 'block' && leftArrow == 'block') { //egenskapsblock syns
            $('#skills-wrap').css('left', '0%');
            $('#arrowL').css('display', 'none');
            $('#arrowTextL').css('display', 'none');
            $('#arrowR').css('display', 'block');
            $('#arrowTextR').text('Egenskaper');
            $('#skills').hide();
            $('#experience-container').hide();
            $('#education').show();
        }
        else if (rightArrow == 'block' && leftArrow == 'none') { // utbildning syns
            $('#skills-wrap').css('left', '-100%');
            $('#arrowL').css('display', 'block');
            $('#arrowTextL').css('display', 'block');
            $('#arrowR').css('display', 'block');
            $('#arrowTextR').css('display', 'block');
            $('#arrowTextL').text('Utbildning');
            $('#skills').show();
            $('#experience-container').hide();
            $('#education').hide();
        }
    });

    $('#arrowR').click(function () {
        var rightArrow = $('#arrowL').css('display');
        var leftArrow = $('#arrowR').css('display');

        if (leftArrow == 'block' && rightArrow == 'block') { // egenskapsblock syns
            $('#skills-wrap').css('left', '-200%');
            $('#arrowR').css('display', 'none');
            $('#arrowTextR').css('display', 'none');
            $('#arrowL').css('display', 'block');
            $('#arrowTextL').text('Egenskaper');
            $('#skills').hide();
            $('#experience-container').show();
            $('#education').hide();
        }
        else if (rightArrow == 'none' && leftArrow == 'block') { // erfarenhet syns
            $('#skills-wrap').css('left', '-100%');
            $('#arrowR').css('display', 'block');
            $('#arrowTextR').css('display', 'block');
            $('#arrowL').css('display', 'block');
            $('#arrowTextL').css('display', 'block');
            $('#arrowTextR').text('Erfarenheter');
            $('#skills').show();
            $('#experience-container').hide();
            $('#education').hide();
        }
        
    });
}