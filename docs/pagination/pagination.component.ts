import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './pagination.component.html',
})

export class PaginationComponent{
  page = 1
  page1 = 3
  page2 = 5

  big = 1
}
