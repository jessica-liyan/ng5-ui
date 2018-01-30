import { Component } from '@angular/core';
 
@Component({
  selector: 'compo',
  template: `
    <div class="aside">
      <a class="aside-item" *ngFor="let item of components" [routerLink]="['/components', item.name]" routerLinkActive="active">{{item.name}}</a>
    </div>
    <div class="main">
      <router-outlet></router-outlet>
    </div>
  `
})

export class ComponentsComponent{
  components = [{
    name: 'button'
  },{
    name: 'radio'
  },{
    name: 'checkbox'
  },{
    name: 'switch'
  },{
    name: 'input'
  },{
    name: 'select'
  },{
    name: 'datepicker'
  },{
    name: 'upload'
  },{
    name: 'menu'
  },{
    name: 'table'
  },{
    name: 'layout'
  },{
    name: 'progress'
  },{
    name: 'toast'
  },{
    name: 'alert'
  },{
    name: 'tooltip'
  },{
    name: 'dialog'
  },{
    name: 'collapse'
  },{
    name: 'swiper'
  },{
    name: 'step'
  },{
    name: 'pagination'
  }]

  constructor(){}
}
