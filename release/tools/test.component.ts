import { Component, Input, ElementRef, ViewChild} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser'
import { OnInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { LyButtonComponent } from '../button/ly-button.component';
import { prototype } from 'stream';
 
@Component({
  selector: 'test',
  template:  `
    <div #html>里面是什么</div>
    <div>{{html}}</div>
  `
})

export class TestComponent implements OnInit, AfterViewInit{
  @Input() html: string;

  safehtml: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    private elementRef: ElementRef
  ){}

  @ViewChild('html')
    htmlDiv: ElementRef

  ngAfterViewInit(){
    console.log(this.html,typeof this.html)
    // var parser = new DOMParser();
    // var doc=parser.parseFromString(this.html, "text/xml");
    

    this.htmlDiv.nativeElement.innerHTML = this.html

    console.log(parseToDOM(this.html))
    this.htmlDiv.nativeElement.append(parseToDOM(this.html)[0])

    function parseToDOM(str){
      var div = document.createElement("div");
      if(typeof str == "string")
          div.innerHTML = str;
      return div.childNodes;
    }
  }

  ngOnInit(){
    console.log()
  }
}
