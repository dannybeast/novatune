import './js/modules/main';
import sliderWorks from './js/sliders/sliderWorks';
import sliderDetailsAdvantages from './js/sliders/sliderDetailsAdvantages';
import Swiper from "swiper/swiper-bundle";

// SCSS
import "./assets/scss/app.scss";

$(document).ready(function () {


 var large = new Swiper(".js-swiper-gallery-large", {
  loop: true,
  loopedSlides: 3,
  freeMode:false,
  spaceBetween: 10,
  slidesPerView: 1,
  effect: 'fade',
  watchSlidesVisibility: true,
});

var small = new Swiper(".js-swiper-gallery-small", {
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 3,
  spaceBetween: 30,  
  slidesPerView: 3, 
  watchSlidesVisibility: true,
  navigation:{
   prevEl: `.details__thrumbs [ref="prev"]`,
   nextEl: `.details__thrumbs [ref="next"]`,
 }
});
if(document.querySelector('.js-swiper-gallery-large')){
 large.controller.control = small;
 small.controller.control = large;
}


 sliderWorks.init();
 sliderDetailsAdvantages.init();

 //
 $('.js-anchor').on('click', function(e) {
  e.preventDefault();
  var scrollTarget = $(this).attr('href');
  $("html, body").animate({ scrollTop: $(scrollTarget).position().top - 50 }, 500);
});

//
  $('body').addClass('is-loaded')
})