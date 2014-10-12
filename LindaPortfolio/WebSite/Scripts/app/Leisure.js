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
            $('#country-text').text('Klicka här för att se vilka länder jag har rest till!');
            $('#googleMap').hide();

            var target = $('#interest-container');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }
        }
        else {
            $('#country-text').text('Klicka här för att stänga kartan.');
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

    var danmark = new google.maps.Marker({ position: new google.maps.LatLng(55.684526, 12.606288) });
    danmark.setMap(map);
    var infowindowDanmark = new google.maps.InfoWindow({ content: "Köpenhamn, en trevlig stad." });
    google.maps.event.addListener(danmark, 'click', function () { infowindowDanmark.open(map, danmark); });

    var nice = new google.maps.Marker({ position: new google.maps.LatLng(43.703806, 7.265120) });
    nice.setMap(map);
    var infowindowNice = new google.maps.InfoWindow({ content: "Nice, vacker, sagolikt strand!" });
    google.maps.event.addListener(nice, 'click', function () { infowindowNice.open(map, nice); });

    var cannes = new google.maps.Marker({ position: new google.maps.LatLng(43.564655, 7.012434) });
    cannes.setMap(map);
    var infowindowCannes = new google.maps.InfoWindow({ content: "Cannes, förstår varför kändisar åka dit varje år!" });
    google.maps.event.addListener(cannes, 'click', function () { infowindowCannes.open(map, cannes); });

    var toulon = new google.maps.Marker({ position: new google.maps.LatLng(43.117209, 5.930281) });
    toulon.setMap(map);
    var infowindowToulon = new google.maps.InfoWindow({ content: "Toulon, otrolig  vy man fick se från linbanan!" });
    google.maps.event.addListener(toulon, 'click', function () { infowindowToulon.open(map, toulon); });

    var barcelona = new google.maps.Marker({ position: new google.maps.LatLng(41.381033, 2.168398) });
    barcelona.setMap(map);
    var infowindowBarcelona = new google.maps.InfoWindow({ content: "Barcelona, en livlig stad!" });
    google.maps.event.addListener(barcelona, 'click', function () { infowindowBarcelona.open(map, barcelona); });

    var lasPalmas = new google.maps.Marker({ position: new google.maps.LatLng(28.117739, -15.440132) });
    lasPalmas.setMap(map);
    var infowindowLasPalmas = new google.maps.InfoWindow({ content: "Las Palmas, vackra ständer med mjuka sand och blå hav." });
    google.maps.event.addListener(lasPalmas, 'click', function () { infowindowLasPalmas.open(map, lasPalmas); });

    var kassel = new google.maps.Marker({ position: new google.maps.LatLng(51.300419, 9.464603) });
    kassel.setMap(map);
    var infowindowKassel = new google.maps.InfoWindow({ content: "Kassel, Fridericianum är ett måste när man är där!" });
    google.maps.event.addListener(kassel, 'click', function () { infowindowKassel.open(map, kassel); });

    var hamburg = new google.maps.Marker({ position: new google.maps.LatLng(53.547687, 10.002810) });
    hamburg.setMap(map);
    var infowindowHamburg = new google.maps.InfoWindow({ content: "Hamburg, mysig stad!" });
    google.maps.event.addListener(hamburg, 'click', function () { infowindowHamburg.open(map, hamburg); });

    var hongkong = new google.maps.Marker({ position: new google.maps.LatLng(22.272871, 114.148101) });
    hongkong.setMap(map);
    var infowindowHongkong = new google.maps.InfoWindow({ content: "Hongkong, varit där 2 gånger, så underbar är staden!" });
    google.maps.event.addListener(hongkong, 'click', function () { infowindowHongkong.open(map, hongkong); });

    var neapel = new google.maps.Marker({ position: new google.maps.LatLng(40.969737, 14.331423) });
    neapel.setMap(map);
    var infowindowNeapel = new google.maps.InfoWindow({ content: "Neapel, pizzan är ett måste om man besöker!" });
    google.maps.event.addListener(neapel, 'click', function () { infowindowNapoli.open(map, neapel); });

    var rom = new google.maps.Marker({ position: new google.maps.LatLng(41.873013, 12.480380) });
    rom.setMap(map);
    var infowindowRom = new google.maps.InfoWindow({ content: "Rom, inga ord kan beskriva hur mäktliga alla byggnader är!" });
    google.maps.event.addListener(rom, 'click', function () { infowindowRom.open(map, rom); });

    var civitavecchia = new google.maps.Marker({ position: new google.maps.LatLng(42.126112, 11.768328) });
    civitavecchia.setMap(map);
    var infowindowCivitavecchia = new google.maps.InfoWindow({ content: "Civitavecchia, mycket stor hamn." });
    google.maps.event.addListener(civitavecchia, 'click', function () { infowindowCivitavecchia.open(map, civitavecchia); });

    var pompei = new google.maps.Marker({ position: new google.maps.LatLng(40.745319, 14.499604) });
    pompei.setMap(map);
    var infowindowPompei = new google.maps.InfoWindow({ content: "Pompei, dit måste man innan alla väggmålningar bleknar bort!" });
    google.maps.event.addListener(pompei, 'click', function () { infowindowPompei.open(map, pompei); });

    var amalfi = new google.maps.Marker({ position: new google.maps.LatLng(40.633965, 14.600588) });
    amalfi.setMap(map);
    var infowindowAmalfi = new google.maps.InfoWindow({ content: "Amalfi, båttur är ett måste!" });
    google.maps.event.addListener(amalfi, 'click', function () { infowindowAmalfi.open(map, amalfi); });

    var firenze = new google.maps.Marker({ position: new google.maps.LatLng(43.767945, 11.244389) });
    firenze.setMap(map);
    var infowindowFirenze = new google.maps.InfoWindow({ content: "Florens, otroliga broar!" });
    google.maps.event.addListener(firenze, 'click', function () { infowindowFirenze.open(map, firenze); });

    var livorno = new google.maps.Marker({ position: new google.maps.LatLng(43.585507, 10.361129) });
    livorno.setMap(map);
    var infowindowLivorno = new google.maps.InfoWindow({ content: "Livorno, vacker båtstad!" });
    google.maps.event.addListener(livorno, 'click', function () { infowindowLivorno.open(map, livorno); });

    var pisa = new google.maps.Marker({ position: new google.maps.LatLng(43.716670, 10.399581) });
    pisa.setMap(map);
    var infowindowPisa = new google.maps.InfoWindow({ content: "Pisa, lutande tornet är ju självklart ett måste!" });
    google.maps.event.addListener(pisa, 'click', function () { infowindowPisa.open(map, pisa); });

    var verona = new google.maps.Marker({ position: new google.maps.LatLng(45.436801, 10.986008) });
    verona.setMap(map);
    var infowindowVerona = new google.maps.InfoWindow({ content: "Verona, måste ju besöka Julias balkong!" });
    google.maps.event.addListener(verona, 'click', function () { infowindowVerona.open(map, verona); });

    var montepulciano = new google.maps.Marker({ position: new google.maps.LatLng(43.097743, 11.784505) });
    montepulciano.setMap(map);
    var infowindowMontepulciano = new google.maps.InfoWindow({ content: "Montepulciano, oerhört vacker landskapsvy på toskana härifrån." });
    google.maps.event.addListener(montepulciano, 'click', function () { infowindowMontepulciano.open(map, montepulciano); });

    var chianciano = new google.maps.Marker({ position: new google.maps.LatLng(43.043570, 11.818150) });
    chianciano.setMap(map);
    var infowindowChianciano = new google.maps.InfoWindow({ content: "Chianciano Terme, ett besök i gamla stan är ett måste, så charmig!" });
    google.maps.event.addListener(chianciano, 'click', function () { infowindowChianciano.open(map, chianciano); });

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