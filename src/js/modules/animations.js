import {
 gsap
} from 'gsap'
import {
 ScrollTrigger,
} from "gsap/dist/ScrollTrigger";
import ScrollMagic from "../libs/ScrollMagic";

function animate(controller, scrollmagic, triggerClass, tl) {

 const trigger = document.querySelector(triggerClass)

 if (!trigger) {return}
 new scrollmagic.Scene({
         triggerElement: triggerClass,
         offset: -250
     })
     .setTween(tl)
     .addTo(controller)
}


export default function () {
 gsap.registerPlugin(ScrollTrigger);

 if (window.matchMedia("(min-width: 1180px)").matches) {

  const tl = gsap.timeline({
   scrollTrigger:{
       scrub: 2,
   }
});


tl.fromTo('.request__decor',{y:0}, {y: -290, duration: 3})}

 let animationSpeed = 0.6

 gsap.registerPlugin(ScrollTrigger);
 gsap.config({
     nullTargetWarn: false
 })
 const controller = new ScrollMagic.Controller()



}