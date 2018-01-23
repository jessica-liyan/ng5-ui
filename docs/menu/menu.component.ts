import { Component } from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.scss']
})

export class MenuComponent{
  model = 0;
  model1 = 1;

  handleChange(index){
    console.log('标签改变了', index)
  }
}
