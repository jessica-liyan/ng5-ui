import { Component, Input, OnInit, EventEmitter, Output, HostBinding, animate, AnimationEntryMetadata, state, style, transition, trigger, group, ContentChild} from '@angular/core';
 
@Component({
  selector: 'ly-alert',
  styleUrls: ['./alert.scss'],
  animations: [
    trigger('fadeOut',[
      state('out', style({
        opacity: 0,
        padding: 0,
        margin: 0,
        height: 0
      })),
      transition('* => out', [
        animate('0.2s ease')
      ])
    ])
  ],
  template: `
  <div [class]="'ly-alert ' + type" [@fadeOut]="state">
    <i class="iconfont icon-success v-m" *ngIf="type == 'success'"></i>
    <i class="iconfont icon-warn v-m" *ngIf="type == 'warning'"></i>
    <i class="iconfont icon-delete v-m" *ngIf="type == 'error'"></i>
    <ng-content></ng-content>
    <i class="iconfont icon-delete v-m del" (click)="remove()"></i>

    <ng-template [ngTemplateOutlet]="content"></ng-template>
  </div>
  `
})

export class LyAlertComponent implements OnInit{
  @Input() type;
  @ContentChild('content') content;

  state:string;
  ngOnInit(){}

  remove(){
    this.state = 'out'
  }
}