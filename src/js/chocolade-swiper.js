$(document).ready(function (){
  $('.slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500,
  
    responsive: [
    {
        // when window width is >= 480px
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          spaceBetween: 20
        }
      },
      {
        // when window width is >= 768px
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          spaceBetween: 20
          
        }
      },
      {
        // when window width is >= 1200px
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          spaceBetween: 40
        }
      }
    ],
    mobileFirst: true
  });
});




 

















