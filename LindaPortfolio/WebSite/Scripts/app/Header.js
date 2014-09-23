$(function () {
    koTest();
});

function koTest() {
    var vm = {
        firstName: ko.observable("Linda"),
        lastName: ko.observable("Nguyen")
    };
    ko.applyBindings(vm);
};

