import { Component, Input, OnInit, EventEmitter, Output, HostBinding, animate, AnimationEntryMetadata, state, style, transition, trigger, group, ContentChild, ElementRef, Renderer2, OnChanges } from '@angular/core';
 
@Component({
  selector: 'ly-switch',
  styleUrls: ['./switch.scss'],
  template: `
  <div class="ly-switch">
    <b *ngIf="inActiveTxt" class="ly-switch-label" [ngStyle]="labelLeftStyle">{{inActiveTxt}}</b>
    <span class="ly-switch-button" (click)="toggle()" [class.active]="model" [ngStyle]="style">
      <i class="circle" [ngStyle]="circleStyle"></i>
    </span>
    <b *ngIf="activeTxt" class="ly-switch-label" [ngStyle]="labelRightStyle">{{activeTxt}}</b>
  </div>
  `
})

export class LySwitchComponent implements OnInit{
  @Input() width = 40;
  @Input() height = 20;
  @Input() activeColor = '#409EFF';
  @Input() inActiveColor = '#ccc';
  @Input() model = false;
  @Input() activeTxt;
  @Input() inActiveTxt;
  @Output() modelChange: EventEmitter<boolean> = new EventEmitter();

  style = {}
  circleStyle = {}
  labelLeftStyle = {}
  labelRightStyle = {}

  toggle(){
    this.model = !this.model
    this.modelChange.emit(this.model)
    this.handleChange()
  }
  
  ngOnInit(){
    this.handleChange()
  }

  handleChange(){
    this.style = {
      width: this.width + 'px',
      height: this.height + 'px',
      borderRadius: this.height/2 + 'px',
      backgroundColor: this.model ? this.activeColor : this.inActiveColor
    }
    this.circleStyle = {
      width: this.height - 4 + 'px',
      height: this.height - 4 + 'px',
      left: this.model ? this.width - (this.height - 4) - 2 + 'px': 2 + 'px'
    }
    this.labelLeftStyle = {
      color: this.model ? this.inActiveColor : this.activeColor
    }
    this.labelRightStyle = {
      color: this.model ? this.activeColor : this.inActiveColor
    }
  }
}