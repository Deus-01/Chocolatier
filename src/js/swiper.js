const swiper = new Swiper(".image-slider", {
  // Optional parameters

  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },

  
  slidesPerView: 1,
  spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    //   stopOnLastSlide: false,

    // },
  speed: 1500,
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },

      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
});