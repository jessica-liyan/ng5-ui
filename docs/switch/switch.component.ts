import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './switch.component.html'
})

export class SwitchComponent{
  active = true;
  active1 = false;
  active2 = false;
}
