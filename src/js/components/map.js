let center = [56.951258, 32.736630];
const map = document.querySelector(".contacts__map")
if (map) {
  setTimeout(function () {
    ymaps.ready(init);
  }, 500);
}


function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 16,
    controls: []

  },
    {
      suppressMapOpenBlock: true
    });
  map.controls.remove('routeEditor');





  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']);


}
