import Swiper from "swiper/swiper-bundle";

class sliderDetailsWhy {
  constructor(){
    this.el = ".js-swiper-why",
    this.options = {
      loop: false,
      slidesPerView: 3, 
      noSwiping: true,
      watchSlidesVisibility: true,
      spaceBetween: 35,
      freeMode:true,
      breakpoints: {
       0: {
        slidesPerView: 1.5, 
        spaceBetween: 15,
         noSwiping: false,
       }, 
     
       768: {
        slidesPerView: 3,
         noSwiping: true,
         spaceBetween: 30,
       },
        1200: {
        slidesPerView: 3,
         noSwiping: true,
         spaceBetween: 120,
       },
     },

    }
  }


  init(){
    let swiper = new Swiper(`${this.el}`, this.options)

  }
}

export default new sliderDetailsWhy()