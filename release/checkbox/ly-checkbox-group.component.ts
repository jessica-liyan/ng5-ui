import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'ly-checkbox-group',
  styleUrls: ['./checkbox.scss'],
  template: `
  <div>
    <label class="ly-checkbox" *ngFor="let item of labelGroup; let i = index; ">
      <span class="ly-checkbox-input" [class.checked]="checkArr[i]">
        <input type="checkbox" name="checkbox" (click)="changeHandle(i)">
        <span class="ly-checkbox-inner"></span>
      </span>
      <span class="ly-checkbox-label">
        {{item}}
      </span>
    </label>
  </div>
  `
})

export class LyCheckboxGroupComponent implements OnInit{
  @Input() labelGroup: string[];
  @Input() model: string[];
  @Output() modelChange: EventEmitter<string[]> = new EventEmitter();

  checkArr = [];
  constructor(){}

  ngOnInit(){
    this.labelGroup.map(x => {
      this.checkArr.push(this.model.includes(x))
    })
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