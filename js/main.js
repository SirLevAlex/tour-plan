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

  var mapStyle = $(".map"),
    mapWidth = mapStyle.css("width"),
    mapHeight = mapStyle.css("height");
  $(".show-map-on-click").click(function () {
    var map = $(this).attr("data-map");
    $(this).html('<iframe src="' + map + '" width="' + mapWidth + '" height="' + mapHeight + '" frameborder="0" style="border:0" allowfullscreen></iframe>');
  });

  // паралакс для newsletter
  $(".newsletter").parallax({
    imageSrc: "./img/newsletter-bg.jpg",
    speed: 0.3,
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    $("body").toggleClass("modal-open");
    if ($(".navbar-bottom").hasClass("navbar-bottom--visible")) {
      hotelSlider.navigation.destroy(),
        reviewsSlider.navigation.destroy();
    } else {
      hotelSlider.navigation.init(),
        reviewsSlider.navigation.init();
    }
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close");
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
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalBody = $("body")
    modalOverlay.removeClass("modal__overlay--active");
    modalDialog.removeClass("modal__dialog--active");
    modalBody.removeClass("modal-open")
  };

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Your full name",
          minlength: "Name not shorter than 2 letters"
        },
        phone: {
          required: "Enter your phone number",
          minlength: "Phone number type: +7 (999) 999-99-99"
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
      'translation': {
        9: {
          pattern: /[0-9*]/
        }
      }
    });
  });

  var mapImage = $(".map__image"),
    imgWidth = mapImage.css("width"),
    imgHeight = mapImage.css("heigth");
  var size = function () {
    imgWidth = mapWidth;
    imgHeight = mapHeight;
  }

  function forForm() {
    var form = $("input");
    if (form.clicked == true) {
      $(window).resize(function () {
        document.location.reload(false);
      });
    } else {
      $(window).resize(function () {
        document.location.reload(true);
        size();
      });
    }
  }
  forForm();
  // $(window).resize(function () {
  //   document.location.reload();
  //   size();
  // });

  var removeAos = function () { };

  if (window.innerWidth < 768) {
    removeAos = function () {
      var elem = document.getElementById('aos-css-file');
      elem.parentNode.removeChild(elem);
      return false;
    }
    removeAos();
  }

  AOS.init();

});