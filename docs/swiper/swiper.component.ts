import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './swiper.component.html',
})

export class SwiperComponent{
  data = [{
    src: 'assets/img/banner1.png'
  },{
    src: 'assets/img/banner2.png'
  },{
    src: 'assets/img/banner3.png'
  },{
    src: 'assets/img/banner2.png'
  }]

  data1 = [{
    src: 'assets/img/img1.png'
  },{
    src: 'assets/img/img2.png'
  },{
    src: 'assets/img/img3.png'
  }]
}
