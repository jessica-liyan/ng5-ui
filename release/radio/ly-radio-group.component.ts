import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'ly-radio-group',
  styleUrls: ['./radio.scss'],
  template: `
  <label class="ly-radio" *ngFor="let item of labelGroup">
    <span class="ly-radio-input" [class.active]="model == item">
      <input type="radio" name="radio" [ngModel]="model" (ngModelChange)="changeHandle(item)">
      <span class="ly-radio-inner" [ngStyle]="model == item && activeStyle"></span>
    </span>
    <span class="ly-radio-label">
      {{item}}
    </span>
  </label>
  `
})

export class LyRadioGroupComponent implements OnInit{
  @Input() model;
  @Input() labelGroup;
  @Output() modelChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() fill;
  @Input() textColor;
  activeStyle;

  ngOnInit(){
    this.activeStyle = {
      borderColor: this.fill
    }
  }

  changeHandle(label){
    this.model = label
    this.modelChange.emit(label)
  }
}