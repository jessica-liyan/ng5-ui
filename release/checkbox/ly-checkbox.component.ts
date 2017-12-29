import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'ly-checkbox',
  styleUrls: ['./checkbox.scss'],
  template: `
    <label class="ly-checkbox">
      <span class="ly-checkbox-input" [class.checked]="model">
        <input type="checkbox" name="checkbox" (click)="changeHandle()">
        <span class="ly-checkbox-inner"></span>
      </span>
      <span class="ly-checkbox-label">
        <ng-content></ng-content>
      </span>
    </label>
  `
})

export class LyCheckboxComponent implements OnInit{
  @Input() model;
  @Output() modelChange: EventEmitter<boolean> =  new EventEmitter();

  constructor(){}

  ngOnInit(){}

  changeHandle(){
    this.model = !this.model
    this.modelChange.emit(this.model)
  }
}