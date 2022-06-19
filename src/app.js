import './js/modules/main';
import sliderWorks from './js/sliders/sliderWorks';
import sliderMainIntro from './js/sliders/sliderMainIntro';
import sliderDetailsAdvantages from './js/sliders/sliderDetailsAdvantages';
import sliderDetailsWhy from './js/sliders/sliderDetailsWhy';
import sliderServices from './js/sliders/sliderServices';
import Swiper from "swiper/swiper-bundle";
import contactsMap from './js/modules/contacts-map';

var youtubeThumbnail = require('youtube-thumbnail');


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
  breakpoints: {
   0: {
    spaceBetween: 15,
   }, 

    768: {
     spaceBetween: 30,  
   },
 },
  navigation:{
   prevEl: `.details__thrumbs [ref="prev"]`,
   nextEl: `.details__thrumbs [ref="next"]`,
  
 }
});
if(document.querySelector('.js-swiper-gallery-large')){
 large.controller.control = small;
 small.controller.control = large;
}

sliderMainIntro.init();
 sliderWorks.init();
 sliderDetailsAdvantages.init();
 sliderDetailsWhy.init();
 sliderServices.init();


 //
 $('.js-anchor').on('click', function(e) {
  e.preventDefault();
  var scrollTarget = $(this).attr('href');
  $("html, body").animate({ scrollTop: $(scrollTarget).position().top - 50 }, 500);
});
contactsMap();
$('.js-youtube-video').each(function(){
 var thumbnail = youtubeThumbnail( $(this).attr('href') );
 $(this).find('img').attr('src', thumbnail.high.url)
})

$('.gallery-item').mouseenter(function(){
 $('.js-cursor').addClass('is-zoom')
})
$('.gallery-item').mouseleave(function(){
  $('.js-cursor').removeClass('is-zoom')
})
$('.slide-large').mouseenter(function(){
$('.js-cursor').addClass('is-zoom')
})
$('.slide-large').mouseleave(function(){
$('.js-cursor').removeClass('is-zoom')
})

//

var  materialInputs = '.field__inner input';

$(materialInputs).each(function(){
  if ($(this).get(0).value && $(this).get(0).value.length)
    $(this).parent().addClass('is-active');
});

$(document).on('focus', materialInputs, function(e) {
  $(this).parent().addClass('is-active')
});

$(document).on('blur', materialInputs, function(e) {
  if (!this.value.length)
    $(this).parent().removeClass('is-active');
});
//

$(".header__hamburger").click(function(){
 $(this).find('.hamburger').toggleClass("is-active"); 
 $('.mobile-menu').toggleClass("is-active");
 $('body').toggleClass("overflow");
});



$(".option").click(function(){
 $(".option").removeClass("active");
 $(this).addClass("active");
 
});



  $('body').addClass('is-loaded')
})