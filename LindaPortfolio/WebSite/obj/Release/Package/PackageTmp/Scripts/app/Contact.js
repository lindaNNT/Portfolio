$(function () {
    showEmail();
    $('#email-wrap').hide();
    closeEmail();
    ShowAlert();
});

function showEmail() {
    $('#tumb-contact-email').click(function (event) {
        var mail = $('#email-wrap').css('display');
        if (mail == 'block') {
            $('#mail-me').text('Maila mig!');
            $('#email-wrap').hide();
            $('#tumb-contact-email').css('background-color', 'white');

            var target = $('#contact');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }
        }
        else {
            $('#mail-me').text('Stäng');
            $('#email-wrap').show();
            $('#tumb-contact-email').css('background-color', 'lightblue');

            var target = $('#tumb-contact-email');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }
        }
    });
}

function closeEmail() {
    $('.close-btn-email').click(function (event) {
        var mail = $('#email-wrap').css('display');
        if (mail == 'block') {
            $('#mail-me').text('Maila mig!');
            $('#email-wrap').hide();
            $('#tumb-contact-email').css('background-color', 'white');

            var target = $('#contact');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }
        }
    });
}

function ShowAlert()
{
    var emailText = $('#email_lbl_respond').text();

    if (emailText.length > 0 && emailText !== "blank") {
        alert(emailText);
    }
}