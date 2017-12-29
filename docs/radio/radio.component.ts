import { Component } from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './radio.component.html',
})

export class RadioComponent{
  type: string = 'css';
  city: string = '武汉';
}
