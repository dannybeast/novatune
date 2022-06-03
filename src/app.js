import './js/modules/main';

// SCSS
import "./assets/scss/app.scss";

$(document).ready(function () {
//
 let text = $('.vote-module__count').text().trim().split('')
 $('.vote-module__count').html('')
 text.forEach(function(el){
  $('.vote-module__count').append(`<span><span>${el}</span></span>`)
 })


//
 $('.js-anchor').on('click', function(e) {
  e.preventDefault();
  var scrollTarget = $(this).attr('href');
  $("html, body").animate({ scrollTop: $(scrollTarget).position().top - 50 }, 500);
});

//
$('.header .js-anchor').on('click', function(e) {
 burgerTime();
});


//

var trigger = $('#hamburger'),
        isClosed = false;

    trigger.click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed == true) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');

        $('.header__navigation').toggleClass('is-open')
        isClosed = false;
      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        $('.header__navigation').toggleClass('is-open')
        isClosed = true;
      }
    }
//

  $('body').addClass('is-loaded')
})