export const addVideoReviewsSwiper = () => {
  const reviews = document.querySelector('[data-swiper="video-reviews"]');
  reviews.classList.remove('is-nojs');

  new Swiper('.review__swiper--video', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      950: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    keyboard: {
      enabled: true,
    },
    centeredSlides: true,
    centeredSlidesBounds: true,

    // Navigation arrows
    navigation: {
      nextEl: '.review__button--next',
      prevEl: '.review__button--prev',
    },
  });
};
