var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
})
var reviewSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
})

var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", function() {
  console.log("navbar-bottom__visible");
  document.querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom__visible");
})

var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", function() {
  console.log("navbar-bottom__scroll");
  document.querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom__scroll");
})

var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", function() {
  console.log("chudo da i tolko");
  document.querySelector(".body-pt")
  .classList.toggle("body-pt-scroll-none");
});