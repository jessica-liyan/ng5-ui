import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './step.component.html',
})

export class StepComponent{
  model = 0;

  change(){
    this.model = this.model + 1
  }
}
