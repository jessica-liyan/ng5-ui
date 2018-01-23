import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'ly-menu',
  styleUrls: ['./menu.scss'],
  template: `
  <ul [class]="'ly-menu ' + class" 
    [ngStyle]="{backgroundColor: backgroundColor,color: textColor}" 
    [class.vertical]="mode == 'vertical'"> 
    <ng-content></ng-content>
  </ul>
  `
})

export class LyMenuComponent implements OnInit{
  @Input() model = 0;
  @Input() backgroundColor = '#fff';
  @Input() activeColor = '#4A8BFC';
  @Input() textColor = '#333';
  @Input() class;
  @Input() mode = 'horizontal';
  @Output() modelChange: EventEmitter<number> = new EventEmitter();
  updateArr = []; // 更新item中的model
  updateSub = []; // 更新submenu中的model
  openedMenus = [];

  ngOnInit(){}

  handleSelect(idx){
    console.log('选择了',idx, this.model)
    if(idx.split('-').length == 1){ // 一级标签
      this.model = idx
      this.updateArr.forEach(el => el())
      this.updateSub.forEach(el => el())
      this.modelChange.emit(this.model)
    }else{ // 二级标签
      this.model = idx
      this.updateArr.forEach(el => el())
      this.modelChange.emit(this.model)

      setTimeout(()=>{
        this.model = idx.split('-')[0]
        this.updateSub.forEach(el => el())
      },100)
    }
  }

  closeMenu(idx){ 
    this.openedMenus.splice(this.openedMenus.indexOf(idx), 1);
  }

  openMenu(idx){
    this.openedMenus.push(idx);
  }
}