import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
 
@Component({
  selector: 'ly-progress',
  styleUrls: ['./progress.scss'],
  template: `
  <div *ngIf="!type || type !== 'circle'">
    <div class="ly-progress" [class.inside]="textInside" [ngStyle]="{'height': strokeWidth + 'px',borderRadius: strokeWidth/2 + 'px'}">
      <span class="ly-progress-bar" [ngStyle]="barStyle">
        <i class="ly-progress-label" *ngIf="textInside">{{percent}}%</i>
      </span>
    </div>
    <i class="ly-progress-label" *ngIf="!textInside">{{percent}}%</i>
  </div>
  <div *ngIf="type == 'circle'" class="ly-progress-circle">
    <svg viewBox="0 0 100 100">
      <path [attr.d]="makePath()" stroke="#e5e9f2" [attr.stroke-width]="relativeStrokeWidth" fill="none"></path>
      <path [attr.d]="makePath()" stroke-linecap="round" fill="none" [ngStyle]="circleStyle"></path>
    </svg>
    <div class="ly-progress-label" [ngStyle]="{'color':backgroundColor}">{{percent}}%</div>
  </div>
  
  `
})

export class LyProgressComponent implements OnInit{
  @Input() percent; // 0-100
  @Input() backgroundColor;
  @Input() strokeWidth = 6;
  @Input() textInside;
  @Input() type;
  @Input() width = 126; // type = 'circle'适用
  relativeStrokeWidth;
  
  barStyle;
  circleStyle;

  constructor(){}

  ngOnInit(){
    if(this.textInside && this.strokeWidth == 6){
      this.strokeWidth = 18
    }
    console.log(this.strokeWidth)

    this.percent = parseInt(this.percent)
    this.barStyle = {
      width: `${this.percent}%`,
      height: `${this.strokeWidth}px`,
      borderRadius: `${this.strokeWidth/2}px`,
      backgroundColor: this.backgroundColor
    }

    // 环形
    if(this.type == 'circle'){
      this.relativeStrokeWidth = (this.strokeWidth/this.width)*100; // 在100*100区域内的相对描边宽度

      const array =  (50 - this.relativeStrokeWidth / 2) * 2 * Math.PI;
      const offset = (1 - this.percent/100 ) * array
      this.circleStyle = {
        stroke: this.backgroundColor || '#409EFF',
        strokeWidth: this.relativeStrokeWidth,
        strokeDasharray: `${array}px, ${array}px`,
        strokeDashoffset: `${offset}px`,
        transition: '0.6s ease'
      }
    }
  }

  makePath(){
    let radius = ~~(50 - Number.parseFloat(this.relativeStrokeWidth)/2)
    return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius*2} a ${radius} ${radius} 0 1 1 0 -${radius*2}`
  }
}

