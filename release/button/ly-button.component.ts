import { Component, OnInit, Input} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
 
@Component({
  selector: 'ly-button',
  template: `
    <button>这是测试的按钮</button>
  `
})

export class LyButtonComponent implements OnInit{
  constructor(){
  }

  ngOnInit(){
  }
}
