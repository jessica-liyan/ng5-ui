import { Component, Input, OnInit, EventEmitter, Output, Inject, Injectable, forwardRef, AfterViewInit} from '@angular/core';
import { LySwiperComponent } from './ly-swiper.component';

@Component({
  selector: 'ly-swiper-item',
  styleUrls: ['./swiper.scss'],
  template: `
  <li class="ly-swiper-item" 
    [ngStyle]="style"
    (mouseenter)="handleEnter()"
    (mouseleave)="handleLeave()"
  >
    <ng-content></ng-content>
  </li>
  `
})

@Injectable()
export class LySwiperItemComponent implements OnInit{
  @Input() index;
  style = {};

  constructor(
    private root: LySwiperComponent
  ){}

  ngOnInit(){
    const update = () => {
      setTimeout(()=>{
        let arr = []
        for(let i = 0; i < this.root.count; i++){
          arr[i] = i
        } 
        arr[this.root.count - 1] = -1
        console.log(arr)

        let dist = this.index - this.root.model
        if(dist == -2){dist = 2}
        if(dist == 3){dist = -1}
        if(dist == -3){dist = 1}
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
0  left  0  -1  1
1       1   0  -1
2       -1  1  0 

数组是  [0 1 2 -1]
    0   1  2  3

0    0  -1  2  1   index= 0  model= 0  arr0  arr1 arr2 arr3
1    1  0  -1  2  index= 1  model= 1  arr3  arr0  arr1 arr2
2    2  1  0  -1  index= 2  model= 2  arr2  arr3  arr0  arr1
3    -1  2  1  0  index= 3  model= 3  arr1  arr2 arr3  arr0

model改变
index/model   arr[model]


5  0 -1  3  2 1
*/