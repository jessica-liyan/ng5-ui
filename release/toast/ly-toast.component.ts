import { Component, Input, OnInit, EventEmitter, Output, HostBinding, animate, AnimationEntryMetadata, state, style, transition, trigger, group} from '@angular/core';
 
@Component({
  selector: 'ly-toast',
  styleUrls: ['./toast.scss'],
  animations: [
    trigger('flyInOut',[
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(-100%)'})),
      transition('void => *', [
        style({
          transform: 'translateY(-100%)'
        }),
        animate('0.2s ease')
      ])
    ])
  ],
  template: `
  <div [class]="'ly-toast ' + type" [@flyInOut]="state">
    <i class="iconfont icon-success v-m" *ngIf="type == 'success'"></i>
    <i class="iconfont icon-warn v-m" *ngIf="type == 'warning'"></i>
    <i class="iconfont icon-delete v-m" *ngIf="type == 'error'"></i>
    <span class="v-m">{{info}}</span>
  </div>
  `
})

export class LyToastComponent implements OnInit{
  state = 'in';

  ngOnInit(){
    setTimeout(()=>{
      this.state = 'out'
    },3000)
  }

}