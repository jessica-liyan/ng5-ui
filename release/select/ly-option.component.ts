import { Component, Input, OnInit, EventEmitter, Output, HostBinding, animate, AnimationEntryMetadata, state, style, transition, trigger, group, ContentChild, ElementRef, Renderer2, OnChanges } from '@angular/core';
import {LySelectComponent} from './ly-select.component';
 
@Component({
  selector: 'ly-option',
  styleUrls: ['./select.scss'],
  template: `
    <li class="ly-option" 
      [class.active]="isactive"
      (click)="handleClick($event)" 
      [value]="value"
      *ngIf="matching"
    >{{label}}</li>
  `
})


export class LyOptionComponent implements OnInit{
  @Input() label;
  @Input() value;
  isactive = false;
  matching = true;

  constructor(// 注入即可获取父级的对象
    private root: LySelectComponent
  ){}
  
  // update方法：从父级再传进来model判断是否激活，如果激活态把选中值传入父级
  // 把四个标签的update方法都传入父级储存起来，父级的model改变的时候，就调用所有的update方法更新
  ngOnInit(){
    const update = () => {
      this.isactive = this.root.model == this.value
      this.isactive && this.root.changeLabel(this.label,this.value)
    }
    update()
    this.root.triggerUpdate.push(update)

    // 根据父级input搜索功能
    const match = () => {
      if(this.root.chosenLabel){
        this.matching = this.root.matching && this.root.matching.length ? this.root.matching.findIndex(x => x== this.label) > -1 : false
      }else{
        this.matching = true
      }
    }
    this.root.triggerMatch.push(match)
  }

  handleClick(e){
    this.root.changeLabel(this.label, this.value)
  }
}