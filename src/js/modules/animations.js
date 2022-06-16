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

  gsap.timeline({
   scrollTrigger:{
       scrub: 2, trigger: ".request",
   }
}).fromTo('.request__decor',{y:0}, {y: -290, duration: 3})

gsap.timeline({
 scrollTrigger:{
     scrub: 2, trigger: ".request",
 }
}).fromTo('.request__wheel',{y:0}, {y: 290, duration: 3})

gsap.timeline({
 scrollTrigger:{
     scrub: 2, 
     trigger: ".setup-center",
 }
})
.fromTo('#_x34_4-love_xA0_Изображение',{scale:0.7}, {transformOrigin: 'center',
scale: 1, duration: 2})
.fromTo('#Прямоугольник_11_копия_2__x2B__Слой_163_00000161606348572906896520000017513905869245447074_, #Прямоугольник_11_копия__x2B__Слой_164_00000000913358152363234940000012245732822077225908_, #Прямоугольник_11_копия_5__x2B__Слой_165_00000074401368564525004650000015166835735933459120_',
{y: -10,scale: 1}, 
{transformOrigin: 'center', y: -30, scale: 0.8, duration: 2, stagger: 0.2}, '-=1')
.fromTo('#Прямоугольник_11_копия_3_xA0_Изображение_00000129188568908812615020000014669222514156322960_ image, #Прямоугольник_11_копия_6_xA0_Изображение_00000056393535187058475080000000222546335999611574_ image, #Прямоугольник_11_копия_4_xA0_Изображение_00000004506986576325934460000004728275362318739109_ image, #Прямоугольник_11',
{scale: 1}, 
{transformOrigin: 'center', scale: 0.5, duration: 2, stagger: 0.2}, '-=2')



}

 let animationSpeed = 0.6

 gsap.registerPlugin(ScrollTrigger);
 gsap.config({
     nullTargetWarn: false
 })
 const controller = new ScrollMagic.Controller()



}