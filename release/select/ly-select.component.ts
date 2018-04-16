import { Component, Input, OnInit, EventEmitter, Output, HostBinding, animate, AnimationEntryMetadata, state, style, transition, trigger, group, ContentChild, ElementRef, Renderer2, OnChanges } from '@angular/core';
 
@Component({
  selector: 'ly-select',
  styleUrls: ['./select.scss'],
  template: `
  <div class="ly-select">
    <ly-input class="pointer" 
      [(model)]="chosenLabel" 
      (modelChange)="searchItem($event)" 
      [placeholder]="placeholder"
      (click)="handleClick($event)" 
    ></ly-input>
    <ul class="ly-select-options" [class.show]="show">
      <ng-content></ng-content>
    </ul>
    <div class="icon" [class.hasClear]="clearable">
      <icon name="down" class="down" [class.active]="show"></icon>
      <icon name="delete" class="clear" *ngIf="!show && clearable" (click)="clear()"></icon>
    </div>
  </div>
  `
})

export class LySelectComponent implements OnInit, OnChanges{
  @Input() model; //选中的value
  @Input() placeholder;
  @Input() clearable;
  @Output() modelChange: EventEmitter<string> = new EventEmitter();

  show = false;
  chosenLabel; //选中的label
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

  // 清空input
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
    console.log('改变了',this.chosenLabel)
  }

  ngOnChanges(){
    this.triggerUpdate.forEach(sub => sub())
  }

  matching = []; //列表中匹配的搜索项
  triggerMatch = [];
  searchItem(label){
    let childrenList = this.el.nativeElement.querySelectorAll('li')
    this.matching = []

    label && childrenList.forEach(x => {
      if(x.innerHTML.indexOf(label) > -1){
        this.matching.push(x.innerHTML)
      }
    })
    // 有label值时，调用子集匹配。
    // 匹配有值，显示匹配，匹配为空，显示为空。
    // label清空时，显示全部，不调用匹配

    this.triggerMatch.forEach(sub => sub())
  }
}