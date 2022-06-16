import Swiper from "swiper/swiper-bundle";

class sliderMainIntro {
  constructor(){
    this.el = ".js-swiper-intro",
    this.options = {
      loop: false,
      slidesPerView: 1, 
      noSwiping: false,
      watchSlidesVisibility: true,
      spaceBetween: 0,
      speed: 1300,
      parallax: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
    }
  }


  init(){
    let that = this;
    this.options.navigation = {
      prevEl: `.main-intro [ref="prev"]`,
      nextEl: `.main-intro [ref="next"]`,
    }
    let swiper = new Swiper(`${this.el}`, this.options)

  }
}

export default new sliderMainIntro()