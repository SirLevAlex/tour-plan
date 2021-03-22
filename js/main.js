$(document).ready(function () {
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
    var myMap = new ymaps.Map("map", {
      center: [7.573638, 79.803893],
      zoom: 11,
      controls: [],
    });
    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        position: {
          right: 10,
          top: 60,
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
  $(".newsletter").parallax({
    imageSrc: "./img/newsletter-bg.jpg",
    speed: 0.3,
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    $("body").toggleClass("modal-open");
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close, .modal__overlay");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  $(document).keydown(function (press) {
    if (press.key === 'Escape' || e.keyCode === 27) {
      closeModal(press);
    }
  });
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalBody = $("body")
    modalOverlay.addClass("modal__overlay--active");
    modalDialog.addClass("modal__dialog--active");
    modalBody.addClass("modal-open")
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalBody = $("body")
    modalOverlay.removeClass("modal__overlay--active");
    modalDialog.removeClass("modal__dialog--active");
    modalBody.removeClass("modal-open")
  }
});

$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Your full name",
        minlength: "Name not shorter than 2 letters",
      },
      phone: {
        required: "Enter your phone number",
        min: "Phone number type: +7 (999) 999-99-99",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Format of email should be name@domain.com"
      }
    }
  });
});
$('.phone').each(function () {
  $(this).mask("+7 (999) 999-99-99", {
    'translation': { 0: { pattern: /[0-9*]/ } }
  });

});