import Swiper, {
  Navigation,
  Autoplay
} from 'swiper';

const slider = new Swiper('.slider__swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  modules: [Navigation, Autoplay],
  draggable: true,
  grabCursor: true,
  speed: 700,
  loop: true,
  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: '.slider__swiper .btn--next',
    prevEl: '.slider__swiper .btn--prev',
  },

  breakpoints: {

    475: {
      slidesPerView: 1,
    },

    575: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },


    992: {
      slidesPerView: 3,
    },
  },

});