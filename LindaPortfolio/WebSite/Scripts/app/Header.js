$(function () {
    //koTest();
    $('#nav-wrap').bind('click', {}, openFixedMenu);
});

function openFixedMenu() {
    var navWrap = $('#nav-wrap');
    navWrap.addClass('open');
    navWrap.bind('click', {}, closeFixedMenu);
    window.setTimeout(closeFixedMenu, 5000);
}

function closeFixedMenu() {
    var navWrap = $('#nav-wrap');
    navWrap.removeClass('open');
    navWrap.unbind('click', closeFixedMenu);
}


//function koTest() {
//    var vm = {
//        firstName: ko.observable("Linda"),
//        lastName: ko.observable("Nguyen")
//    };
//    ko.applyBindings(vm);
//};

