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
import  "./awesomeNotifications";
window.Select = Select // Global Select
window.Masks = Masks // Global masks
window.JQuery = $
import animations from "./animations";
import Textarea from "./textarea";


$(document).ready(function () {
  validation();
  animations();
  tabs();
  Fancy.init();
  Textarea.init();
  Select.init();
  Masks.maskPhone();
  App.currentYear()


  
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

})