$(document).ready(function (){
  $('.slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1
  });
});


























// const swiper = new Swiper(".chocolate-slider", {
//   // Optional parameters

//   loop: false,

//   // If we need pagination
//   pagination: {
//     el: ".chocolate-swiper-pagination",
//     clickable: true,
//     dynamicBullets: false,
//   },

  
//   slidesPerView: 1,
//   spaceBetween: 30,
//     // autoplay: {
//     //   delay: 5000,
//     //   disableOnInteraction: false,
//     //   stopOnLastSlide: false,

//     // },
//   speed: 1500,
//     breakpoints: {
//       // when window width is >= 320px
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 20
//       },
//       // when window width is >= 480px
//       1200: {
//         slidesPerView: 3,
//         spaceBetween: 30
//       },
     
//     }
// });