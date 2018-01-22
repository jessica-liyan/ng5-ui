import { Component, Input, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import { LyTableComponent } from './ly-table.component';

@Component({
  selector: 'ly-table-row',
  styleUrls: ['./table.scss'],
  template: `
  <div>
    <table class="ly-table-row">
      <colgroup>
        <col *ngFor="let wid of width" width="{{wid}}"/>
      </colgroup>
      <tr>
        <th *ngFor="let key of keys" [class.center]="center == 'all' || center == 'header'" [class.border]="border">{{key}}</th>
      </tr>
    </table>
  </div>
  <div [ngStyle]="bodyStyle">
    <table class="ly-table-row">
      <colgroup>
        <col *ngFor="let wid of width" width="{{wid}}"/>
      </colgroup>
      <tr *ngFor="let row of model">
        <td 
          *ngFor="let key of modelKeys" 
          [class.center]="center == 'all'" 
          [class.border]="border"
        >{{row[key]}}</td>
      </tr>
    </table>
  </div>
  `
})

export class LyTableRowComponent implements OnInit{
  @Input() keys; // 中文字段名
  @Input() width; // 每个字段宽度
  model = [];
  modelKeys = []; // 数组中的字段名
  center = '';
  bodyStyle;
  border;

  constructor(
    private table: LyTableComponent
  ){}

  ngOnInit(){
    this.model = this.table.model
    this.modelKeys = Object.keys(this.model[0])
    this.center = this.table.center
    this.border = this.table.border
    this.bodyStyle = {
      height: this.table.height - 40 + 'px',
      overflow: 'auto'
    }
  }
}