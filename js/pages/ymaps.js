/*YANDEX*/
$(function ()   {
    ymaps.ready(init);
    var myMap,
        myMap2,
        myPin,
        myPin2,
        myPlacemark,
        myPlacemark2;

    function init() {

        if ($('#mapOffice').length) {
            var center = [55.74214536925577,37.63092943254084];

            myMap = new ymaps.Map("mapOffice", {
                center: center,
                zoom: 17,
                // controls: []
            });


            myMap.behaviors.disable(['scrollZoom']);
            myMap.controls.remove('searchControl');
            // myMap.controls.remove('geolocationControl')
            //     .remove('searchControl')
            //     .remove('trafficControl')
            //     .remove('typeSelector')
            //     .remove('fullscreenControl')
            //     .remove('zoomControl')
            //     .remove('rulerControl');

            myPin = new ymaps.GeoObjectCollection({}, {
                // iconLayout: 'default#image',
                // iconImageHref: '/img/icons/map-marker.svg',
                // iconImageSize: [46, 57],
                // iconImageOffset: [-15, -55]
            });


            myPlacemark = new ymaps.Placemark([55.74214536925577,37.63092943254084], {
                    balloonContentHeader: "21 Век - центральный офис",
                    balloonContentBody: "Наружная реклама на вашей улице",
                    balloonContentFooter: "115326, г. Москва, ул. Пятницкая, д. 25, стр. 1 (здание Россия сегодня)",
                    hintContent: "21 Век - центральный офис"
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/content/pinLogo.svg',
                    iconImageSize: [40, 47],
                    iconImageOffset: [-20, -45]
                    // preset: 'islands#redGlyphIcon'
                });


            myPin.add(myPlacemark);
            myMap.geoObjects.add(myPin);
        }

        if ($('#mapStore').length) {
            var center = [55.79280915360965,37.49019607489651];

            myMap2 = new ymaps.Map("mapStore", {
                center: center,
                zoom: 17,
                // controls: []
            });


            myMap2.behaviors.disable(['scrollZoom']);
            myMap2.controls.remove('searchControl');
            // myMap.controls.remove('geolocationControl')
            //     .remove('searchControl')
            //     .remove('trafficControl')
            //     .remove('typeSelector')
            //     .remove('fullscreenControl')
            //     .remove('zoomControl')
            //     .remove('rulerControl');

            myPin2 = new ymaps.GeoObjectCollection({}, {
                // iconLayout: 'default#image',
                // iconImageHref: '/img/icons/map-marker.svg',
                // iconImageSize: [46, 57],
                // iconImageOffset: [-15, -55]
            });


            myPlacemark2 = new ymaps.Placemark([55.79280915360965,37.49019607489651], {
                    balloonContentHeader: "21 Век - склад",
                    balloonContentBody: "Наружная реклама на вашей улице",
                    balloonContentFooter: "Ул. Народного Ополчения улица д.43, корп.2 стр 5. (ст м Октябрьское поле, первый вагон из центра)",
                    hintContent: "21 Век - склад"
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/content/pinLogo.svg',
                    iconImageSize: [40, 47],
                    iconImageOffset: [-20, -45]
                    // preset: 'islands#redGlyphIcon'
                });


            myPin2.add(myPlacemark2);
            myMap2.geoObjects.add(myPin2);
        }

    }

});
/*END YANDEX*/