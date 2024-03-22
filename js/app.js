var ratesSwiper = new Swiper('.ratesSwiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
});


var swiperHowGet = new Swiper('.swiperHowGet', {
  slidesPerView: 1.0,
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}