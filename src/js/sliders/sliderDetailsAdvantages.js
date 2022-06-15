import Swiper from "swiper/swiper-bundle";

class sliderDetailsAdvantages {
  constructor(){
    this.el = ".js-swiper-details-advantages",
    this.options = {
      loop: false,
      slidesPerView: 3, 
      noSwiping: true,
      watchSlidesVisibility: true,
      spaceBetween: 35,
      freeMode:true,
      breakpoints: {
       0: {
        slidesPerView: 'auto',
        spaceBetween: 10,
         noSwiping: false,
       }, 
       768: {
        slidesPerView: 3,
         noSwiping: true,
         spaceBetween: 30,
       },
 
     },

    }
  }


  init(){
    let that = this;
    this.options.navigation = {
      prevEl: `.works [ref="prev"]`,
      nextEl: `.works [ref="next"]`,
    }
    let swiper = new Swiper(`${this.el}`, this.options)

  }
}

export default new sliderDetailsAdvantages()