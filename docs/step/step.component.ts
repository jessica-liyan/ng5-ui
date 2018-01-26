import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './step.component.html',
  styleUrls: ['./demo.scss']
})

export class StepComponent{
  model = 0;
  model1 = 0;
  model2 = 0;
  model3 = 0;
  model4 = 0;

  next(){
    this.model = this.model < 4 ? this.model + 1 : 0
  }

  next1(){
    this.model1 = this.model1 < 3 ? this.model1 + 1 : 0
  }
  back(){
    this.model1 = this.model1 > 0 ? this.model1 -1 : 0
  }

  next2(){
    this.model2 = this.model2 < 3 ? this.model2 + 1 : 0
  }

  next3(){
    this.model3 = this.model3 < 4 ? this.model3 + 1 : 0
  }
  next4(){
    this.model4 = this.model4 < 4 ? this.model4 + 1 : 0
  }
}
