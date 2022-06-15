export const addReviewsSwiper = () => {
  const reviews = document.querySelector('[data-swiper="reviews"]');
  reviews.classList.remove('is-nojs');

  new Swiper('.reviews__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    keyboard: {
      enabled: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });
};
