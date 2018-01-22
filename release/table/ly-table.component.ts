import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
 
@Component({
  selector: 'ly-table',
  styleUrls: ['./table.scss'],
  template: `
  <div class="ly-table" [ngStyle]="{height: this.height + 'px'}">
    <ng-content></ng-content>
  </div>
  `
})

export class LyTableComponent implements OnInit{
  @Input() model;
  @Input() height;
  @Input() center;
  @Input() border;

  ngOnInit(){
  }
}