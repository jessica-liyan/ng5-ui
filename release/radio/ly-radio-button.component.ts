import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'ly-radio-button',
  styleUrls: ['./radio.scss'],
  template: `
  <label 
    class="ly-radio-button" 
    *ngFor="let item of labelGroup" 
    [class.active]="model == item"
  >
    <input type="radio" name="radio" [ngModel]="model" (ngModelChange)="changeHandle(item)">
    <span class="ly-radio-inner" [ngStyle]="model == item && activeStyle">{{item}}</span>
  </label>
  `
})

export class LyRadioButtonComponent implements OnInit{
  @Input() model;
  @Input() labelGroup;
  @Output() modelChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() fill;
  @Input() textColor;
  activeStyle;
  
  constructor(){}

  ngOnInit(){
    this.activeStyle = {
      backgroundColor: this.fill,
      borderColor: this.fill,
      boxShadow: `-1px 0 0 0 ${this.fill}`,
      color: this.textColor
    }
  }

  changeHandle(item){
    this.model = item
    this.modelChange.emit(item)
  }
}