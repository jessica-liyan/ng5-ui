import { Component } from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './input.component.html',
})

export class InputComponent{
  model = '麦芽糖'
  name = '火星'
  name1 = '木星'

  change(){
    console.log('change' + this.name)
  }
  focus(){
    console.log('focus' + this.name1)
  }
}
