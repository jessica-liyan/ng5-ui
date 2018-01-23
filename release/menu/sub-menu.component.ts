import { Component, Input, OnInit, EventEmitter, Output, HostBinding, animate, AnimationEntryMetadata, state, style, transition, trigger, group} from '@angular/core';
import { LyMenuComponent } from './ly-menu.component';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
 
@Component({
  selector: 'sub-menu',
  styleUrls: ['./menu.scss'],
  template: `
  <li class="ly-menu-item" 
    [class.active]="model == index"
    [ngStyle]="model == index && activeStyle"
    (click)="handleClick($event)"
  >
    <div class="sub-menu-tit">
      <span class="v-m">{{title}}</span>
      <i class="iconfont icon-down v-m" [class.active]="opened"></i>
    </div>
    <ul class="sub-menu" [class.show]="opened" *ngIf="show" [ngStyle]="activeItemStyle"> 
      <ng-content></ng-content>
    </ul>
  </li>
  `
})

// item点击状态变化
export class LySubMenuComponent implements OnInit{
  @Input() index;
  @Input() title;
  model = 0; // 一级标签
  opened = false;
  show = true;
  activeStyle;
  activeItemStyle;

  constructor(
    private menu: LyMenuComponent
  ){}

  ngOnInit(){
    const update = () => {
      this.model = this.menu.model;
    }
    update()
    this.menu.updateSub.push(update)

    this.activeStyle = {
      backgroundColor: this.menu.backgroundColor,
      color: this.menu.activeColor,
      borderBottomColor: this.menu.activeColor
    }
    this.activeItemStyle = {
      backgroundColor: this.menu.backgroundColor,
      color: this.menu.textColor
    }
    this.updateOpened()
  }

  handleClick(){
    if(this.opened){
      this.menu.closeMenu(this.index)
    }else{
      this.menu.openMenu(this.index)
    }
    this.updateOpened()
  }

  // 更新展开折叠状态
  updateOpened(){
    this.opened = this.menu.openedMenus.indexOf(this.index) > -1;
  }

  // 选择了下拉列表后的处理
  handleSelect(idx){
    if (this.menu.mode !== 'vertical') {
      this.menu.closeMenu(this.index);
    }
    this.updateOpened()
  }
}