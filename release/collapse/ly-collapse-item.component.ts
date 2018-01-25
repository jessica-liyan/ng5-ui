import { Component, Input, OnInit, EventEmitter, Output, trigger, state, style, transition, animate, ContentChild} from '@angular/core';
import {LyCollapseComponent} from './ly-collapse.component'
 
@Component({
  selector: 'ly-collapse-item',
  styleUrls: ['./collapse.scss'],
  animations: [
    trigger('dropAnimation', [
      state('*', style({ // 默认状态
          opacity: 0,
          height: 0,
          border: 0,
          padding: 0,
          visibility: 'hidden',
      })),
      state('false', style({ //true状态
          opacity: 0,
          height: 0,
          border: 0,
          padding: 0,
          visibility: 'hidden',
      })),
      state('true', style({ //false状态
          opacity: 1,
          height: '*',
          border: '*',
          padding: '*',
          visibility: 'inherit',
      })),
      transition('* => *', animate(`250ms ease-out`)),
    ])
  ],
  template: `
  <dl class="ly-collapse-item" style="{{style}}">
    <dt (click)="handleClick()">
      <div *ngIf="!title">{{label}}</div>
      <ng-template [ngTemplateOutlet]="title" *ngIf="title"></ng-template>
      <i class="iconfont icon-right arrow" [class.active]="show"></i>
    </dt>
    <dd [@dropAnimation]="show">
      <div class="ly-collapse-content">
        <ng-content></ng-content>
      </div>
    </dd>
  </dl>
  `
})

export class LyCollapseItemComponent implements OnInit{
  @Input() label;
  @Input() value;
  @ContentChild('title') title;

  show = false;
  
  constructor(
    private root: LyCollapseComponent
  ){}

  ngOnInit(){
    const update = () => {
      this.show = this.root.model.findIndex(x => x == this.value) > -1
    }
    update()

    if(this.root.accordion){
      this.root.trigger.push(update)
    }
  }

  handleClick(){
    this.show = !this.show

    if(this.root.accordion){
      this.show && this.root.singleItem(this.value)
      !this.show && this.root.removeItem(this.value)
      this.root.handleSelect()
    }else{
      this.show && this.root.addItem(this.value)
      !this.show && this.root.removeItem(this.value)
    }
  }
}