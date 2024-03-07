import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.section-gallery__swiper', {
  slidesPerView: 3,
  spaceBetween: 65,

  breakpoints: {
    1930: {
      slidesPerView: 4,
      spaceBetween: 65,
    }
  }
});

const swiperGallery = new Swiper('.section-modular__swiper', {
  slidesPerView: 1,
  navigation: {
    prevEl: '.section-modular__arrow--prev',
    nextEl: '.section-modular__arrow--next',


  }

});
