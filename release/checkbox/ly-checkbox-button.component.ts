import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'ly-checkbox-button',
  styleUrls: ['./checkbox.scss'],
  template: `
  <div>
    <label class="ly-checkbox-button" *ngFor="let item of labelGroup; let i = index;" [class.checked]="checkArr[i]">
      <input type="checkbox" name="checkbox" (click)="changeHandle(i)">
      <span class="ly-checkbox-inner" [ngStyle]="checkArr[i] && activeStyle">{{item}}</span>
    </label>
  </div>
  `
})

export class LyCheckboxButtonComponent implements OnInit{
  @Input() labelGroup: string[];
  @Input() model: string[];
  @Output() modelChange: EventEmitter<string[]> = new EventEmitter();

  @Input() fill;
  @Input() textColor;
  activeStyle;

  checkArr = [];
  constructor(){}

  ngOnInit(){
    this.labelGroup.map(x => {
      this.checkArr.push(this.model.includes(x))
    })
    this.activeStyle = {
      backgroundColor: this.fill,
      borderColor: this.fill,
      boxShadow: `-1px 0 0 0 ${this.fill}`,
      color: this.textColor
    }
  }

  changeHandle(i){
    this.checkArr[i] = !this.checkArr[i]
    if(this.checkArr[i]){
      this.model.push(this.labelGroup[i])
      this.modelChange.emit(this.model)
    }else{
      this.model.splice(this.model.findIndex(x => x == this.labelGroup[i]),1)
      this.modelChange.emit(this.model)
    }
  }
}