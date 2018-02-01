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
        let left = - this.root.model * this.root.wid
        this.style = {transform: `translateX(${left}px)`}
      }, 100) 
    }
    update()
    this.root.trigger.push(update)
  }

  handleEnter(){
    this.root.stop(this.index)
    this.root.hover = true
  }

  handleLeave(){
    this.root.move()
    this.root.hover = false
  }
}