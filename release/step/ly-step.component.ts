import { Component, Input, OnInit, EventEmitter, Output, Inject, Injectable, forwardRef, ElementRef, HostBinding} from '@angular/core';
import { LyStepsComponent } from './ly-steps.component';

@Component({
  selector: 'ly-step',
  styleUrls: ['./step.scss'],
  template: `
  <dl [class.progress]="root.model == index" [class.success]="root.model >= 1 && root.model - 1 >= index">
    <dt *ngIf="!icon">
      <span *ngIf="root.model <= index">{{index+1}}</span>
      <i class="iconfont icon-success" *ngIf="root.model >= 1 && root.model - 1 >= index"></i>
    </dt>
    <dt *ngIf="icon" class="icon">
      <i [class]="'iconfont ' + icon"></i>
    </dt>
    <dd>
      <div>{{title}}</div>
    </dd>
  </dl>
  `
})

// 每个状态是wait progress success
export class LyStepComponent implements OnInit{
  @HostBinding('class.flex')  true;

  @Input() icon;
  @Input() title;
  index;

  constructor(
    private root: LyStepsComponent,
    private el: ElementRef
  ){}
  
  ngOnInit(){
    this.index = +this.el.nativeElement.getAttribute('index')
  }
}