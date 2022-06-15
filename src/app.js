import './js/modules/main';
import sliderWorks from './js/sliders/sliderWorks';

// SCSS
import "./assets/scss/app.scss";

$(document).ready(function () {
 sliderWorks.init();

 //
 $('.js-anchor').on('click', function(e) {
  e.preventDefault();
  var scrollTarget = $(this).attr('href');
  $("html, body").animate({ scrollTop: $(scrollTarget).position().top - 50 }, 500);
});

//
  $('body').addClass('is-loaded')
})