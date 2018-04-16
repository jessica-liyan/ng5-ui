import { Component, Input, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'ly-input',
  styleUrls: ['./input.scss'],
  template: `
  <div class="ly-input" style="{{style}}">
    <input type="text" 
      class="{{class}}"
      [placeholder]="placeholder" 
      [(ngModel)]="model" 
      (ngModelChange)="changeHandle($event)"
      (focus)="focusHandle()"
      (keyup.enter)="enterHandle()"
    >
    <img src="{{icon}}" alt="" *ngIf="icon">
  </div>
  `
})

export class LyInputComponent{
  @Input() icon;
  @Input() placeholder;
  @Input() model;
  @Input() style;
  @Input() class;
  @Output() modelChange: EventEmitter<string> = new EventEmitter();
  @Output() onFocus: EventEmitter<string> = new EventEmitter();
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  changeHandle(){
    this.modelChange.emit(this.model)
  }
  focusHandle(){
    this.onFocus.emit(this.model)
  }
  enterHandle(){
    this.onEnter.emit(this.model)
  }
}