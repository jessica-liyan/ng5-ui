import { Component } from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './checkbox.component.html',
})

export class CheckboxComponent{
  checked: boolean = false;
  city = ['上海', '北京'];
  city1 = ['上海'];

  catch(){
    console.log(this.city)
  }
  catch1(){
    console.log(this.city1)
  }
}
