import { Component } from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './input.component.html',
})

export class InputComponent{
  model = '麦芽糖'
  name = '火星'
  name1 = '木星'
  name2 = '水星'

  change(){
    console.log('change' + this.name)
  }
  focus(){
    console.log('focus' + this.name1)
  }
  enter(){
    console.log('enter' + this.name2)
  }
}
