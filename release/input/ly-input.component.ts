import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'ly-input',
  styleUrls: ['./input.scss'],
  template: `
  <div class="ly-input" style="{{style}}">
    <input type="text" 
      placeholder="{{placeholder}}" 
      [(ngModel)]="model" 
      (ngModelChange)="changeHandle($event)"
      (focus)="focusHandle()"
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
  @Output() modelChange: EventEmitter<string> = new EventEmitter();
  @Output() focusChange: EventEmitter<string> = new EventEmitter();

  ngOnInit(){}

  changeHandle(){
    this.modelChange.emit(this.model)
  }
  focusHandle(){
    this.focusChange.emit('子组件事件')
  }
}