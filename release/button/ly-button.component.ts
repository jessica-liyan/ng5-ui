import { Component, OnInit, Input} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
 
@Component({
  selector: 'ly-button',
  styleUrls: ['./button.scss'],
  template: `
    <button 
      [class]="'ly-button ' + type + ' ' + size + ' ' + nativeClass"
      [class.plain]="plain"
      [class.round]="round"
    >
      <ng-content></ng-content>
    </button>
  `
})

export class LyButtonComponent implements OnInit{
  @Input() type: string = '';
  @Input() size: string = '';
  @Input() plain: string;
  @Input() round: string;
  @Input('class') nativeClass: string = '';

  constructor(){
  }

  ngOnInit(){
  }
}
