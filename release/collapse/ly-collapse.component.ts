import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'ly-collapse',
  styleUrls: ['./collapse.scss'],
  template: `
  <div class="ly-collapse" style="{{style}}">
    <ng-content></ng-content>
  </div>
  `
})

export class LyCollapseComponent implements OnInit{
  @Input() model;
  @Input() accordion = false;
  @Output() modelChange = new EventEmitter();
  trigger = []

  ngOnInit(){
  }

  handleSelect(){
    this.trigger.forEach(el => el())
  }

  addItem(idx){
    this.model.push(idx)
    this.modelChange.emit(this.model)
  }

  removeItem(idx){
    this.model.splice(this.model.indexOf(idx), 1)
    this.modelChange.emit(this.model)
  }

  singleItem(idx){
    this.model = [idx]
    this.modelChange.emit(this.model)
  }
}