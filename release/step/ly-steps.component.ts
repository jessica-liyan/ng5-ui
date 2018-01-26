import { Component, Input, OnInit, EventEmitter, Output, Inject, Injectable, ElementRef, ContentChildren, QueryList, Renderer2} from '@angular/core';
import { LyStepComponent } from './ly-step.component';

@Component({
  selector: 'ly-steps',
  styleUrls: ['./step.scss'],
  template: `
  <div [class]="'ly-steps ' + class" [class.vertical]="mode == 'vertical'">
    <ng-content></ng-content>
  </div>
  `
})

export class LyStepsComponent implements OnInit{
  @Input() model = 0;
  @Input() mode = 'horizontal';
  @Input() class = '';
  count; // 步骤总数

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ){}

  ngOnInit(){
    let children = this.el.nativeElement.querySelectorAll('ly-step');
    this.count = children.length
    if (!children || !children.length) {
      return console.warn('steps components required children');
    }
    children.forEach((el,index)=> {
      this.render.setAttribute(el, 'index', index)
    })
  }
}