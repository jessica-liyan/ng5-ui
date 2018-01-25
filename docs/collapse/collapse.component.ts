import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './collapse.component.html',
})

export class CollapseComponent{
  model1 = ['1', '2'];
  model = ['2'];

  handleChange(){
    console.log(this.model1)
  }
  handle(){
    console.log(this.model)
  }
}
