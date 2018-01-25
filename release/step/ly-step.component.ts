import { Component, Input, OnInit, EventEmitter, Output, Inject, Injectable, forwardRef, ElementRef} from '@angular/core';
import { LyStepsComponent } from './ly-steps.component';

@Component({
  selector: 'ly-step',
  styleUrls: ['./step.scss'],
  template: `
  <li class="ly-step">
    <dl>
      <dt>{{index}}</dt>
      <dd>
        {{title}}
      </dd>
    </dl>
  </li>
  `
})

// 每个状态是wait progress success
export class LyStepComponent implements OnInit{
  constructor(
    @Inject(forwardRef(() => LyStepsComponent)) private root: LyStepsComponent,
    private el: ElementRef
  ){}

  @Input() title;
  index;

  ngOnInit(){
    this.index = this.el.nativeElement.getAttribute('index')
  }
}