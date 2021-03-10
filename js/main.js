const hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  effect: "coverflow",
});

const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
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
// паралакс для newsletter
$('.newsletter').parallax({
  imageSrc: './img/newsletter-bg.jpg',
  zindex: -10,
  speed: 0.3
});
