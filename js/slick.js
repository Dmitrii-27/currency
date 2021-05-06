$(document).ready(function(){

   $('.slider').slick({

      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      easing: 'ease',
      infinite: true,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 1000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: true,
      swipe: true,
      touchThreshold: 10,
      touchMove: true,
      waitForAnimate: false,
      centerMode: false,
      variableWidth: false,
      rows: 1,
      slidesPerRow: 1,
      vertical: false,
      verticalSwiping: false,
      fade: false,

      responsive: [
      {
         breakpoint: 1500,
         settings: {
            
         }
      },{
         breakpoint: 1100,
         settings: {
            
         }
      },
      ],

   });
});

