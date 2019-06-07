ymaps.ready(init);

function init() {
    var bMap = new ymaps.Map('bMap', {
            center: [55.76, 37.64],
            zoom: 10
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 64,
            // Макет метки кластера pieChart.
            clusterIconLayout: "default#pieChart"
        });

    bMap.geoObjects.add(objectManager);
    bMap.controls.remove('searchControl');

    $.ajax({
        url: "data.json"
    }).done(function (data) {
        objectManager.add(data);
    });

}


