import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'ly-radio',
  styleUrls: ['./radio.scss'],
  outputs: ['change'],
  template: `
    <label class="ly-radio">
      <span class="ly-radio-input" [class.active]="model === label">
        <input type="radio" name="radio" [(ngModel)]="model" (ngModelChange)="modelChange($event)">
        <span class="ly-radio-inner"></span>
      </span>
      <span class="ly-radio-label">
        <ng-content></ng-content>
      </span>
    </label>
  `
})

// 子组件触发事件传递给父组件，用事件监听EventEmitter
// 子组件点击的label，传递给父组件

export class LyRadioComponent{
  @Input() label;
  @Input() model;

  change: EventEmitter<string>;

  constructor(){
    this.change = new EventEmitter<string>();
  }

  modelChange(){
    this.model = this.label
    this.change.emit(this.label)
  }
}
