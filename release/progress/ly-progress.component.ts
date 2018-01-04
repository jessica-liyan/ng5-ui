import { Component, Input, OnInit, AfterViewInit, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';
 
@Component({
  selector: 'ly-progress',
  styleUrls: ['./progress.scss'],
  template: `
  <div *ngIf="!type">
    <div class="ly-progress" [class.inside]="textInside">
      <span class="ly-progress-bar" [ngStyle]="style">
        <i class="ly-progress-label" *ngIf="textInside">{{percent}}</i>
      </span>
    </div>
    <i class="ly-progress-label" *ngIf="!textInside">{{percent}}</i>
  </div>
  <svg width="100%" height="100%" *ngIf="type">
    <path #circle></path>
    <path #gray></path>
    <circle cx="60" cy="60" r="50" fill="#FFF" />
  </svg>
  `
})

export class LyProgressComponent implements OnInit, AfterViewInit{
  @Input() percent;
  @Input() backgroundColor;
  @Input() textInside;
  @Input() type;
  style;

  constructor(
    private el: ElementRef
  ){}

  @ViewChild('circle')
  circle: ElementRef

  @ViewChild('gray')
  gray: ElementRef

  ngOnInit(){
    this.style = {
      width: this.percent,
      backgroundColor: this.backgroundColor
    }
  }

  ngAfterViewInit(){
    // 环形进度图
    if(this.type){
      this.draw(this.circle.nativeElement, parseInt(this.percent), 60, this.backgroundColor)
      //this.draw(this.gray.nativeElement, 100, 60, '#ccc')
    }
  }

  draw (path,progress,r,bg) {
    var degrees = progress * (360/100);  
    var rad = degrees* (Math.PI / 180);
    var x = -(Math.cos(rad) * r).toFixed(2);
    var y = -(Math.sin(rad) * r).toFixed(2);
    var lenghty = Number(degrees > 180);
    console.log(x,y)
    var descriptions = ['M', r, r, 'v', -r, 'A', r, r, 0, lenghty, 1, x, y];
    path.setAttribute('d', descriptions.join(' '));
    path.setAttribute('fill', bg);
  }  
}

// M x y 绝对位置，需要移动到的点的x轴和y轴的坐标 M 60 60 v -60 A 60 60 0 1 1 0 60
// A rx ry xrotation 1大弧0小弧  1顺0逆 x y
// M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94