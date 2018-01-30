import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./demo.scss']
})

export class DialogComponent{
  show = false
  change(){
    this.show = true
  }
  
  show1 = false
  change1(){
    this.show1 = true
  }
}
