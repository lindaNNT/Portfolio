$(function () {
    aboutSlide();
    $('#experience-container').hide();
    $('#education').hide();
    popUp();
    $('.thumb-container').hide();
});

function aboutSlide()
{
    $('#arrowL').click(function () {
        var rightArrow = $('#arrowR').css('display');
        var leftArrow = $('#arrowL').css('display');

        if (leftArrow == 'block' && rightArrow == 'block') { //egenskapsblock syns
            $('#skills-wrap').css('left', '0%');
            $('#arrowL').css('display', 'none');
            $('#arrowTextL').css('display', 'none');
            $('#arrowR').css('display', 'block');
            $('#arrowTextR').text('Egenskaper');
            $('#skills').hide();
            $('#experience-container').hide();
            $('#education').show();
        }
        else if (leftArrow == 'block' && rightArrow == 'none') { // utbildning syns
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
        var rightArrow = $('#arrowR').css('display');
        var leftArrow = $('#arrowL').css('display');

        if (rightArrow == 'block' && leftArrow == 'block') { // egenskapsblock syns
            $('#skills-wrap').css('left', '-200%');
            $('#arrowR').css('display', 'none');
            $('#arrowTextR').css('display', 'none');
            $('#arrowL').css('display', 'block');
            $('#arrowTextL').text('Egenskaper');
            $('#skills').hide();
            $('#experience-container').show();
            $('#education').hide();
        }
        else if (leftArrow == 'none' && rightArrow == 'block') { // erfarenhet syns
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

function popUp()
{
    $('#tumb-systemvetare').click(function () {
        $('#ed-systemvetare').css('display','block');
        $('#fade').css('display', 'block');
    });

    $('#tumb-system').click(function () {
        $('#ed-system').css('display', 'block');
        $('#fade').css('display', 'block');
    });

    $('#tumb-rtgssk').click(function () {
        $('#ed-xray').css('display', 'block');
        $('#fade').css('display', 'block');
    });

    $('#tumb-usk').click(function () {
        $('#ed-nurse').css('display', 'block');
        $('#fade').css('display', 'block');
    });

    $('#tumb-ex-rtg').click(function () {
        $('#ex-rtg').css('display', 'block');
        $('#fade').css('display', 'block');
    });

    $('#tumb-ex-usk').click(function () {
        $('#ex-usk').css('display', 'block');
        $('#fade').css('display', 'block');
    });

    $('#tumb-ex-rest').click(function () {
        $('#ex-rest').css('display', 'block');
        $('#fade').css('display', 'block');
    });

    $('.black_overlay').click(function () {
        $('#ed-systemvetare').css('display', 'none');
        $('#ed-system').css('display', 'none');
        $('#ed-xray').css('display', 'none');
        $('#ed-nurse').css('display', 'none');
        $('#ex-rtg').css('display', 'none');
        $('#ex-usk').css('display', 'none');
        $('#ex-rest').css('display', 'none');
        $('#black_overlay').css('display', 'none');
        $('#fade').css('display', 'none');
    });

    $('.close-btn').click(function () {
        $('#ed-systemvetare').css('display', 'none');
        $('#ed-system').css('display', 'none');
        $('#ed-xray').css('display', 'none');
        $('#ed-nurse').css('display', 'none');
        $('#ex-rtg').css('display', 'none');
        $('#ex-usk').css('display', 'none');
        $('#ex-rest').css('display', 'none');
        $('#black_overlay').css('display', 'none');
        $('#fade').css('display', 'none');
    });
}