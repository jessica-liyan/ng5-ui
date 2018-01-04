import { Component, Directive, Input, OnInit, EventEmitter, Output , ElementRef, Renderer, HostListener} from '@angular/core';
 
@Directive({
  selector: '[lyCol]',
  host: {
    '[class.ly-col]': 'true'
  }
})

export class LyColDirective implements OnInit{
  @Input('lyCol') lyCol;
  @Input() span;

  constructor(
    private el: ElementRef, 
    private renderer: Renderer
  ){}

  ngOnInit(){
    let w = this.span/24*100 + '%';
    let padding = this.el.nativeElement.parentElement.getAttribute('gutter') + 'px'
    this.renderer.setElementStyle(this.el.nativeElement, 'width', w)
    this.renderer.setElementStyle(this.el.nativeElement, 'padding', padding)
  }
}