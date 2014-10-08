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
        }
        else {
            $('#mail-me').text('Stäng');
            $('#email-wrap').show();
            $('#tumb-contact-email').css('background-color', 'lightblue');

            var target = $('#email-wrap');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
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