import Swiper from "swiper/swiper-bundle";

class sliderServices {
  constructor(){
    this.el = ".js-swiper-services",
    this.options = {
      loop: false,
      slidesPerView: 2.1, 
      
      freeMode:true,
      noSwiping: false,
      watchSlidesVisibility: true,
      spaceBetween: 15,
    }
  }


  init(){
    let that = this;
    let swiper = new Swiper(`${this.el}`, this.options)

  }
}

export default new sliderServices()