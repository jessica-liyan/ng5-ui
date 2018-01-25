import { Component, Input, OnInit, EventEmitter, Output, ContentChild} from '@angular/core';
 
@Component({
  selector: 'ly-tooltip',
  styleUrls: ['./tooltip.scss'],
  template: `
  <div class="ly-tooltip" (mouseenter)="handleEnter()" (mouseleave)="handleLeave()">
    <ng-content></ng-content>
    <div 
      [class]="'ly-tooltip-panel ' + poperClass + ' ' + place" 
      *ngIf="show"
    >
      <div class="info" [class.light]="theme == 'light'">
        <ng-template [ngTemplateOutlet]="tip"></ng-template>
      </div>
    </div> 
  </div>
  `
})

export class LyTooltipComponent implements OnInit{
  @Input() place;
  @Input() poperClass;
  @Input() theme = 'dark';
  show = false;

  @ContentChild('tip') tip;

  ngOnInit(){}

  handleEnter(){
    this.show = true
  }

  handleLeave(){
    this.show = false
  }
}