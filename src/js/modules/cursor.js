export default function(){

  $('body').prepend('<div class="js-cursor"></div>')
  $('.main-layout__centered').prepend('<div class="main-wrapper__gradient"><span></span></div>')
  var $cursor = $('.js-cursor');
  var $gradient = $('.main-wrapper__gradient');


  $(window).on('mousemove', function(e){
     $cursor.css('transform', 'translate('+ e.pageX +'px, '+ e.pageY +'px)');
     $gradient.css('transform', 'translate('+ e.pageX +'px, '+ e.pageY +'px)');
  });



}