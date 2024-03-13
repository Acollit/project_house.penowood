import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.section-gallery__swiper', {
  slidesPerView: 1,
  spaceBetween: 15,

  breakpoints: {
    1930: {
      slidesPerView: 4,
      spaceBetween: 65,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 25,
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
const swipergGllery_v2 = new Swiper('.gallery-v2__swiper', {
  slidesPerView: 1,
  spaceBetween: 15,

  breakpoints: {
    1930: {
      slidesPerView: 4,
      spaceBetween: 65,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 25,
    }
  }
});
