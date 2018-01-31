import { Component, Input, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'ly-rate',
  styleUrls: ['./rate.scss'],
  template: `
  <ul class="ly-rate">
    <li *ngFor="let item of [0,1,2,3,4];let i = index" 
      [class.active]="i < current" 
      (mouseenter)="handleEnter(i)"
      (mouseleave)="handleLeave()"
      (click)="handleClick(i)"
    > 
      <span *ngIf="!hasHalf">
        <i [class]="'iconfont off ' + inactiveIcon" [ngStyle]="{color: inactiveColor}"></i>
        <i [class]="'iconfont on ' + activeIcon" [ngStyle]="{color: activeColor}"></i>
      </span>
      <span *ngIf="hasHalf && i == current">
        <i [class]="'iconfont ' + inactiveIcon" *ngIf="isHalf == 0 " [ngStyle]="{color: inactiveColor}"></i>
        <i [class]="'iconfont ' + halfIcon" *ngIf="isHalf == 1" [ngStyle]="{color: activeColor}"></i>
        <i [class]="'iconfont ' + activeIcon" *ngIf="isHalf == 2" [ngStyle]="{color: activeColor}"></i>
      </span>
      <span *ngIf="hasHalf && i < current">
        <i [class]="'iconfont ' + activeIcon" [ngStyle]="{color: activeColor}"></i>
      </span>
      <span *ngIf="hasHalf && i > current">
        <i [class]="'iconfont ' + inactiveIcon" [ngStyle]="{color: inactiveColor}"></i>
      </span>
    </li>
  </ul>
  <div class="ly-rate-txt" *ngIf="text">{{activeText}}</div>
  `
})

export class LyRateComponent implements OnInit, OnChanges{
  @Input() model;
  @Input() text;
  @Input() inactiveIcon = "icon-star-off";
  @Input() activeIcon = "icon-star";
  @Input() halfIcon = "icon-star-half";
  @Input() inactiveColor = '#ccc';
  @Input() activeColor = '#F7BA2A';
  @Input() disabled = false;
  @Input() hasHalf = false;
  @Output() modelChange: EventEmitter<number>= new EventEmitter();
  current;
  activeText;

  isHalf = 0;

  ngOnInit(){
    this.init()
  }

  ngOnChanges(){
    this.init()
  }

  init(){
    this.current = this.model

    if(this.text){
      this.activeText = this.text[this.model - 1]
    }

    if(this.hasHalf){
      this.current = Math.floor(this.model) // 就近取整
      if(this.current == this.model){
        this.isHalf = 0
      }else if(this.model - this.current <= 0.5){
        this.isHalf = 1
      }else{
        this.isHalf = 2
      }
    }
  }

  handleEnter(i){
    if(this.disabled){return;}
    this.current = i + 1
    if(this.text){
      this.activeText = this.text[i]
    }
  }

  handleLeave(){
    if(this.disabled){return;}
    this.current = this.model
    if(this.text){
      this.activeText = this.text[this.model - 1]
    }
  }

  handleClick(i){
    if(this.disabled){return;}
    if(this.text){
      this.activeText = this.text[i]
    }
    this.model = i + 1
    this.modelChange.emit(this.model)
  }
}