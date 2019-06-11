let bMap;

ymaps.ready(init);

function init() {

    bMap = new ymaps.Map('bMap', {
            center: [55.76, 37.64],
            zoom: 10
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 64,
            // Макет метки кластера pieChart.
            clusterIconLayout: "default#pieChart",
        });

    bMap.geoObjects.add(objectManager);
    bMap.controls.remove('searchControl');
    setBoardFilter();

    $.ajax({
        url: "data.json"
    }).done(function (data) {
        objectManager.add(data);
    });

    $('.bboards__form').on('submit', function (e) {
        e.preventDefault();
        setBoardFilter();
    });

    function setBoardFilter() {
        let $this = $('.bboards__form'),
            data = $this.serializeArray().filter(function (i, x) {
                if (i.value) {
                    return i;
                }
            });

        if (data.length > 0) {
            objectManager.setFilter(setFilters(data));
        } else {
            objectManager.setFilter();
        }
    }

    function setFilters(data) {
        return function (obj) {
            let result = true;
            data.forEach(function (i, x) {
                if (result) {
                    result = obj.properties[i.name] == i.value;
                }
            });
            return result;
        }
    }

    $('.bboards__form').on('reset', function (e) {
        e.preventDefault();

        selects.each(function (x, i) {
            let selectize = i.selectize;
            selectize.clear();
        });


        let radios = document.querySelectorAll('.radio__input');
        for (let i = 0; i < radios.length; i++) {
            let radio = radios[i];
            if (i == 0) {
                radio.checked = true;
            } else {
                radio.checked = false;
            }
        }

        setBoardFilter();

    });

}


