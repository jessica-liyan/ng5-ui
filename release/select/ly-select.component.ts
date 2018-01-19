import { Component, Input, OnInit, EventEmitter, Output, HostBinding, animate, AnimationEntryMetadata, state, style, transition, trigger, group, ContentChild, ElementRef, Renderer2, OnChanges } from '@angular/core';
 
@Component({
  selector: 'ly-select',
  styleUrls: ['./select.scss'],
  template: `
  <div class="ly-select">
    <ly-input class="pointer" (click)="handleClick()" [model]="chosenLabel" [placeholder]="placeholder"></ly-input>
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

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ){}

  ngOnInit(){}

  clear(){
    this.model = ''
    this.chosenLabel = ''
    this.modelChange.emit(this.model)
  }

  handleClick(){
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