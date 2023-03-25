const swiper = new Swiper(".chocolate-slider", {
  // Optional parameters

  loop: false,

  // If we need pagination
  pagination: {
    el: ".chocolate-swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  
  slidesPerView: 3,
  spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      stopOnLastSlide: false,

    },
  speed: 1500,
  //   breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20
  //     },
  //     // when window width is >= 480px
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 30
  //     },
  //     // when window width is >= 640px
  //     640: {
  //       slidesPerView: 4,
  //       spaceBetween: 40
  //     }
  //   }
});