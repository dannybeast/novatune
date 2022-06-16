import './svg';

// Modules
import $ from "jquery";
import App from "./app";
import Fancy from "./fancybox";
import Masks from "./inputmask";
import Select from "./select";
import tabs from "./tabs";
// Forms
import validation from '../forms/validation';
import "./awesomeNotifications";
window.Select = Select // Global Select
window.Masks = Masks // Global masks
window.JQuery = $
import animations from "./animations";
import Textarea from "./textarea";
import cursor from "./cursor";

import {
 gsap,
 TimelineLite,
 TweenMax,
 Back
} from "gsap";
$(document).ready(function () {
 cursor();
 validation();
 animations();
 tabs();
 Fancy.init();
 Textarea.init();
 Select.init();
 Masks.maskPhone();
 App.currentYear()




 // mega menu
 var timeline = new TimelineLite({
  paused: true
 });
 let menu = $('.mega-menu');
 var open = false;

 TweenMax.set(menu, {
  x: '120%'
 });

 TweenMax.set(menu.find('.mega-menu__row'), {
  x: '30%'
 });

 TweenMax.set(menu.find('.mega-menu__top, .mega-menu__right'), {
  opacity: 0
 });


 TweenMax.set(menu.find('.mega-menu__nav li'), {
  x: 50,
  opacity: 0
 });

 timeline
  .to(menu, 0.6, {
   x: '0%'
  }).to(menu.find('.mega-menu__row'), 0.5, {
   x: '0%',
   ease: Back.easeOut
  }, '-=0.3')
  .to(menu.find('.mega-menu__top, .mega-menu__right'), 0.5, {
   opacity: 1
  }, '-=0.3')
  .to(menu.find('.mega-menu__nav li'), 0.2, {
   x: 0,
   opacity: 1,
   stagger: {
    each: 0.1,
   }
  }, '-=0.5')
 var trigger = $('#hamburger'),
  isClosed = false;

 trigger.click(function () {
  burgerTime();

  if (open) {
   timeline.reverse();
   open = false;
  } else {
   timeline.play();
   open = true;
  }

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

})