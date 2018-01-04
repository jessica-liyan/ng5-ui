import { Component, Directive, Input, OnInit, EventEmitter, Output , ElementRef, Renderer, HostListener} from '@angular/core';
 
@Directive({
  selector: '[lyRow]',
  host: {
    '[class.ly-row]': 'true'
  }
})

export class LyRowDirective implements OnInit{
  @Input('lyRow') lyRow;
  @Input() gutter;
  @Input() type;
  @Input() justify;
  @Input() align;

  constructor(
    private el: ElementRef, 
    private renderer: Renderer
  ){}
  
  ngOnInit(){
    if(this.type && this.type == 'flex'){
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'flex')
      this.renderer.setElementStyle(this.el.nativeElement, 'justify-content', this.justify || 'flex-start')
      this.renderer.setElementStyle(this.el.nativeElement, 'align-items', this.align || 'flex-start')
    }
  }
}