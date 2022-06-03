import './svg';

// Modules
import $ from "jquery";
import App from "./app";
//import Fancy from "./fancybox";
//import Masks from "./inputmask";
//import Select from "./select";
//import tabs from "./tabs";
// Forms
//import validation from '../forms/validation';
//import  "./awesomeNotifications";
// window.Select = Select // Global Select
// window.Masks = Masks // Global masks
// window.JQuery = $
import animations from "./animations";
$(document).ready(function () {
 animations();
 // tabs();
  //Fancy.init();
  //Textarea.init();
  //Select.init();
  //Masks.maskPhone();
  App.currentYear()
})