



 window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1000);
  }



$(document).ready(function() {
    $('.lang').click(function(event) {//обращаемся к заголовку, по событию слик
 
        $('.strel').toggleClass('active');// добавить при клике заголовку класс, и показать текст с анимацией

       $('.flag-menu').toggleClass('active').slideToggle(200);// добавить при клике заголовку класс, и показать текст с анимацией
    });
 });


 


 


 $(document).ready(function() {
    $('.menu__item-title').click(function(event) {//обращаемся к заголовку, по событию слик

        $(this).next().toggleClass('active');
        $(this).toggleClass('active');


    });
 });


 $(document).ready(function() {
    $('.menu__item').hover(function(event) {//обращаемся к заголовку, по событию слик
 
        $(this).toggleClass('active');

    });
 });


 

 $(document).ready(function() {
    $('.header-burger').click(function(event) {//обращаемся к заголовку, по событию слик
 
        $('.body').toggleClass('active');
        $('.menu-list,.header-top-block,.fade').toggleClass('active');

    });
 });


 

