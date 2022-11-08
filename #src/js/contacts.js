$('.contacts #main-filter__select')[0].selectedIndex = "0";

ymaps.ready(init);
var coords = {
    msc : [55.576796, 37.696566],
    spb : [1,1],
    ecb : [56.778860, 60.700484],
    nov : [3,3],
    ros : [4,4],
    nvsib : [5,5],
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



