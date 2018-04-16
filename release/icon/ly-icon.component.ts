import { Component, Input} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
 
@Component({
  selector: 'icon',
  styleUrls: ['./iconfont.css'],
  template: `
    <i [class]="'iconfont icon-' + name"></i>
  `
})

export class LyIconComponent{
  @Input() name;
}
