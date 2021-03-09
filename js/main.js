const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [7.573638, 79.803893],
      zoom: 11,
      controls: [],
    },
  );
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      position: {
        right: 10,
        top: 60
      },
    },
  });
  myMap.controls.add(zoomControl);
  (placemark = new ymaps.Placemark([7.573638, 79.803893], {
    hintContent: "Grand Hilton Hotel",
    balloonContent: "77 Corea Watta, Chilaw 61000, Sri Lanka",
  })),
    myMap.geoObjects.add(placemark);
}
