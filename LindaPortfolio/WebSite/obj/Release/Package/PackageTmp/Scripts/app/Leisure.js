$(function () {
    leisureSlide();
    $('#interest').hide();
    $('#leisure-arrowL').hide();
    $('#leisure-arrowTextL').hide();
    $('#googleMap').hide();
    showMap();
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

function showMap() {
    $('#country-text').click(function (event) {
        var map = $('#googleMap').css('display');
        if (map == 'block') {
            $('#country-text-end').text(' för att se vilka länder jag har rest till!');
            $('#googleMap').hide();

            var target = $('#leisure');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }
        }
        else {
            $('#country-text-end').text(' för att stänga kartan.');
            $('#googleMap').show();

            var target = $('#country-text');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }
            createMap();
        }
    });
}

function createMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
    };
    var map = new google.maps.Map(document.getElementById("googleMap")
      , mapProp);

    var london = new google.maps.Marker({ position: new google.maps.LatLng(51.508742, -0.120850) });
    london.setMap(map);
    var infowindowLondon = new google.maps.InfoWindow({content: "London, mycket trevliga och hjälpsamma människor."});
    google.maps.event.addListener(london, 'click', function () { infowindowLondon.open(map, london); });

    var china = new google.maps.Marker({ position: new google.maps.LatLng(39.905181, 116.408445) });
    china.setMap(map);
    var infowindowChina = new google.maps.InfoWindow({ content: "Peking, otroliga landmärken! Måste ses!" });
    google.maps.event.addListener(china, 'click', function () { infowindowChina.open(map, china); });

    var canada = new google.maps.Marker({ position: new google.maps.LatLng(49.260899, -123.114463) });
    canada.setMap(map);
    var infowindowCanada = new google.maps.InfoWindow({ content: "Vancover, vilken storstad!" });
    google.maps.event.addListener(canada, 'click', function () { infowindowCanada.open(map, canada); });

    var frankrike = new google.maps.Marker({ position: new google.maps.LatLng(46.552663, 2.290393) });
    frankrike.setMap(map);
    var infowindowFrankrike = new google.maps.InfoWindow({ content: "Varit i Cannes och Nice, så fina stränder det finns där!" });
    google.maps.event.addListener(frankrike, 'click', function () { infowindowFrankrike.open(map, frankrike); });

    var barcelona = new google.maps.Marker({ position: new google.maps.LatLng(41.381033, 2.168398) });
    barcelona.setMap(map);
    var infowindowBarcelona = new google.maps.InfoWindow({ content: "Barcelona, en livlig stad!" });
    google.maps.event.addListener(barcelona, 'click', function () { infowindowBarcelona.open(map, barcelona); });

    var kassel = new google.maps.Marker({ position: new google.maps.LatLng(51.300419, 9.464603) });
    kassel.setMap(map);
    var infowindowKassel = new google.maps.InfoWindow({ content: "Kassel, Fridericianum är ett måste när man är där!" });
    google.maps.event.addListener(kassel, 'click', function () { infowindowKassel.open(map, kassel); });

    var hongkong = new google.maps.Marker({ position: new google.maps.LatLng(22.319327, 114.141424) });
    hongkong.setMap(map);
    var infowindowHongkong = new google.maps.InfoWindow({ content: "Hongkong, varit där 2 gånger, så underbar är staden!" });
    google.maps.event.addListener(hongkong, 'click', function () { infowindowHongkong.open(map, hongkong); });

    var italien = new google.maps.Marker({ position: new google.maps.LatLng(43.440341, 12.025905) });
    italien.setMap(map);
    var infowindowItalien = new google.maps.InfoWindow({ content: "Italien, vacker, sagolikt land!" });
    google.maps.event.addListener(italien, 'click', function () { infowindowItalien.open(map, italien); });

    var liechtenstein = new google.maps.Marker({ position: new google.maps.LatLng(47.194819, 9.510398) });
    liechtenstein.setMap(map);
    var infowindowLiechtenstein = new google.maps.InfoWindow({ content: "Liechtenstein" });
    google.maps.event.addListener(liechtenstein, 'click', function () { infowindowLiechtenstein.open(map, liechtenstein); });

    var schweiz = new google.maps.Marker({ position: new google.maps.LatLng(46.005941, 8.950859) });
    schweiz.setMap(map);
    var infowindowSchweiz = new google.maps.InfoWindow({ content: "Lugano, en båttur i sjön är verkligen att rekommendera. Hisnande utsikt vart man än tittar!" });
    google.maps.event.addListener(schweiz, 'click', function () { infowindowSchweiz.open(map, schweiz); });

    var vietnam = new google.maps.Marker({ position: new google.maps.LatLng(20.972823, 107.030295) });
    vietnam.setMap(map);
    var infowindowVietnam = new google.maps.InfoWindow({ content: "Vietnamn, otrolig hänförande öar i Ha-Longbukten." });
    google.maps.event.addListener(vietnam, 'click', function () { infowindowVietnam.open(map, vietnam); });
}