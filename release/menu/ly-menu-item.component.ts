import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { LyMenuComponent } from './ly-menu.component';
import { LySubMenuComponent } from './sub-menu.component';
 
@Component({
  selector: 'ly-menu-item',
  styleUrls: ['./menu.scss'],
  providers: [LySubMenuComponent],
  template: `
  <li class="ly-menu-item" 
    [class.active]="model == index" 
    [ngStyle]="model == index && activeStyle"
    (click)="click()"
  > 
    <ng-content></ng-content>
  </li>
  `
})

export class LyMenuItemComponent implements OnInit{
  @Input() index;
  model;
  activeStyle;

  constructor(
    private menu: LyMenuComponent,
    private submenu: LySubMenuComponent
  ){}
  

  ngOnInit(){
    const update = () => {
      this.model = this.menu.model
    }
    update()
    this.menu.updateArr.push(update)

    this.activeStyle = {
      backgroundColor: this.menu.backgroundColor,
      color: this.menu.activeColor,
      borderBottomColor: this.menu.activeColor
    }
  }

  click(){ 
    const ref = this.menu || this.submenu;
    ref.handleSelect(this.index)
  }
}