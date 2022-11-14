$('.contacts #main-filter__select')[0].selectedIndex = "0";

ymaps.ready(init);
var coords = {
    msc : [55.576796, 37.696566],
    spb : [60.000020, 30.256301],
    ecb : [56.814168, 60.587000],
    nov : [56.313259, 43.992772],
    ros : [47.219661, 39.712731],
    nvsib : [55.029575, 82.908365],
    vlad : [43.123215, 131.881370],
}


function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.576796, 37.696566],
        zoom: 15,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    })

for (const [key, value] of Object.entries(coords)) {
        myMap.geoObjects
        .add(new ymaps.Placemark(value, {
            balloonContent: ''
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
  }
    $('.main-filter__category').on('click', function () {
        console.log($(this))
        console.log($(this).attr('data-city'))
        myMap.panTo(coords[$(this).attr('data-city')])
    })

    $('#main-filter__select').on('change', function () {
        console.log($(this).val())
        myMap.panTo(coords[$(this).val()])
        
    });
    
}



