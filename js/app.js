var ratesSwiper = new Swiper('.ratesSwiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}