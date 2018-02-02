import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { LySwiperComponent } from './ly-swiper.component';

@Component({
  selector: 'ly-swiper-item',
  styleUrls: ['./swiper.scss'],
  template: `
  <li class="ly-swiper-item" 
    [ngStyle]="style"
    (mouseenter)="handleEnter()"
    (mouseleave)="handleLeave()"
    [class.active]="root.model === index"
  >
    <ng-content></ng-content>
  </li>
  `
})

// 关键点：所有li绝对定位在左上角，通过transform确定每个li的位置
// 为避免从前往后移动的li跟从后向前移动的li重影，设置激活态的z-index:2(层级高)
export class LySwiperItemComponent implements OnInit{
  @Input() index;
  style = {};

  constructor(
    private root: LySwiperComponent
  ){}

  ngOnInit(){
    const update = () => {
      setTimeout(()=>{
        let dist = this.index - this.root.model
        if(dist == this.root.count - 1){
          dist = -1
        }else if(dist == -this.root.count + 1){
          dist = 1
        }else if(this.root.count >= 4 && dist >= -this.root.count + 2 && dist <= -2){
          dist = dist + this.root.count
        }else{
          dist = dist
        }

        let left = dist * this.root.wid
        this.style = {transform: `translateX(${left}px)`}
      }, 100) 
    }
    update()
    this.root.trigger.push(update)
  }

  handleEnter(){
    this.root.handleEnter(this.index)
    this.root.hover = true
  }

  handleLeave(){
    this.root.handleLeave()
    this.root.hover = false
  }
}

/*

横轴是index，纵轴是model
     0   1   2
0    0  -1   1   -2 => 1
1    1   0  -1   
2   -1   1   0    2 => -1


    0   1  2  3
0    0  -1  2  1  index= 0  model= 0   -3 =>1  -2 => 2 
1    1  0  -1  2  index= 1  model= 1  
2    2  1  0  -1  index= 2  model= 2  
3    -1  2  1  0  index= 3  model= 3   3 =>1


     0  1  2  3  4
0    0  -1  3  2  1   -2 => 3   -3=> 2  -4=>1
1    1  0  -1  3  2   -3 => 2
2    2  1  0  -1  3   -2 => 3
3    3  2  1   0 -1
4   -1  3  2   1  0    4 => -1

4个  -2 => 2
5个  -2 => 3  -3 => 2
6个  -2 => 4  -3 => 3  -4 => 4

*/