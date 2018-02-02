import { Component, Input, ElementRef, OnInit, EventEmitter, Output, ViewChild, ContentChildren, ContentChild, forwardRef, QueryList} from '@angular/core';

@Component({
  selector: 'ly-swiper',
  styleUrls: ['./swiper.scss'],
  template: `
  <div class="ly-swiper">
    <ul class="ly-swiper-list" #swiper [ngStyle]="{height: height}">
      <ng-content></ng-content>
    </ul>
    <div 
      class="ly-swiper-lr" 
      *ngIf="arrow !== 'never'" 
      [class.hide] ="arrow == 'hover'"
      [class.active]="arrow == 'hover' && hover"
    >
      <i class="iconfont icon-left" (click)="prev()"></i>
      <i class="iconfont icon-right" (click)="next()"></i>
    </div>
    <ul class="ly-swiper-pages">
      <li 
        *ngFor="let item of items; let i = index" 
        [class.active]="i === model"
        (mouseenter)="handleEnter(i)"
        (mouseleave)="handleLeave()"
      >
      </li>
    </ul>
  </div>
  `
})

// 区分ViewChild  ContentChild  ContentChildren
export class LySwiperComponent implements OnInit{
  @Input() height;
  @Input() arrow = 'always';
  @Input() interval = 3000;
  @Input() autoplay = true;

  @ViewChild('swiper') swiper;
  hover = false;

  count = 0; // 子组件的个数
  model = 0; // 当前激活的子组件
  wid; // 容器的宽度
  timer; // 计时器
  items = [];
  trigger = []
 
  ngOnInit(){}

  constructor(
    private el: ElementRef
  ){}

  ngAfterContentInit(){
    let children = this.el.nativeElement.querySelectorAll('li')
    this.count = children.length
    for(let i = 0; i< this.count; i++){
      this.items.push(i)
    }
    this.wid = this.swiper.nativeElement.offsetWidth
    this.autoplay && this.step()
  }

  // 定时器
  step(){
    clearInterval(this.timer)
    this.timer = setInterval(()=> {
      this.model = this.model < this.count - 1 ? this.model + 1 : 0
      this.trigger.forEach(el => el())
    }, this.interval)
  }

  // updateMove(){
  //   this.left = - this.model * this.wid
  //   this.style.transform = `translateX(${this.left}px)`
  // }

  // 分页移入，停止定时器
  handleEnter(i){
    clearInterval(this.timer)
    this.model = i
    this.trigger.forEach(el => el())
  }

  // 分页移出，继续定时器
  handleLeave(){
    this.autoplay && this.step()
  }

  // 前进按钮
  next(){
    this.model = this.model < this.count - 1 ? this.model + 1 : 0
    this.trigger.forEach(el => el())
    clearInterval(this.timer)
  }

  // 后退按钮
  prev(){
    this.model = this.model > 0 ? this.model - 1 : this.count - 1 
    this.trigger.forEach(el => el())
    clearInterval(this.timer)
  }
}