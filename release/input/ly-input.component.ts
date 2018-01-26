import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'ly-input',
  styleUrls: ['./input.scss'],
  template: `
  <div class="ly-input" style="{{style}}">
    <input type="text" 
      class="{{class}}"
      placeholder="{{placeholder}}" 
      [(ngModel)]="model" 
      (ngModelChange)="changeHandle($event)"
      (focus)="focusHandle()"
      (keyup.enter)="enterHandle()"
    >
    <img src="{{icon}}" alt="">
  </div>
  `
})

export class LyInputComponent implements OnInit{
  @Input() icon;
  @Input() placeholder;
  @Input() model;
  @Input() style;
  @Input() class;
  @Output() modelChange: EventEmitter<string> = new EventEmitter();
  @Output() onFocus: EventEmitter<string> = new EventEmitter();
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  ngOnInit(){}

  changeHandle(){
    this.modelChange.emit(this.model)
  }
  focusHandle(){
    this.onFocus.emit('子组件事件')
  }
  enterHandle(){
    this.onEnter.emit(this.model)
  }
}