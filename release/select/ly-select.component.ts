import { Component, Input, OnInit, EventEmitter, Output, HostBinding, animate, AnimationEntryMetadata, state, style, transition, trigger, group, ContentChild, ElementRef, Renderer2, OnChanges } from '@angular/core';
 
@Component({
  selector: 'ly-select',
  styleUrls: ['./select.scss'],
  template: `
  <div class="ly-select">
    <ly-input class="pointer" (click)="handleClick($event)" [model]="chosenLabel" [placeholder]="placeholder"></ly-input>
    <ul class="ly-select-options" [class.show]="show">
      <ng-content></ng-content>
    </ul>
    <div class="icon" [class.hasClear]="clearable">
      <i class="iconfont icon-down down" [class.active]="show"></i>
      <i class="iconfont icon-delete clear" *ngIf="!show && clearable" (click)="clear()"></i>
    </div>
  </div>
  `
})

export class LySelectComponent implements OnInit, OnChanges{
  @Input() model;
  @Input() placeholder;
  @Input() clearable;
  @Output() modelChange: EventEmitter<string> = new EventEmitter();

  show = false;
  chosenLabel;
  triggerUpdate = [];
  globalListener;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ){}

  ngOnInit(){
    this.globalListener = this.renderer.listen('document', 'click', ()=>{
      this.show && this.handleClick()
    })
  }

  ngOnDestroy(){
    this.globalListener && this.globalListener()
  }

  clear(){
    this.model = ''
    this.chosenLabel = ''
    this.modelChange.emit(this.model)
  }

  handleClick(event = null){
    event && event.stopPropagation();
    this.show = !this.show
  }

  changeLabel(label, value){
    this.model = value
    this.chosenLabel = label
    this.modelChange.emit(this.model)
    this.show = false
  }

  ngOnChanges(x){
    this.triggerUpdate.forEach(sub => sub())
  }
}