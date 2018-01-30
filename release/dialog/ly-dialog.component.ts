import { Component, Input, OnInit, OnDestroy, EventEmitter, Output, trigger, state, style, transition, animate, ContentChild, ViewChild, Renderer2} from '@angular/core';
import { inherits } from 'util';
 
@Component({
  selector: 'ly-dialog',
  styleUrls: ['./dialog.scss'],
  animations: [
    trigger('dropAnimation', [
      state('*', style({ // 默认状态
          opacity: 0,
          transform: 'translate3d(0, -25px, 0)',
          visibility: 'hidden'
      })),
      state('false', style({ //true状态
          opacity: 0,
          transform: 'translate3d(0, -25px, 0)',
          visibility: 'hidden'
      })),
      state('true', style({ //false状态
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
          visibility: 'inherit'
      })),
      transition('* => *', animate(`250ms ease-out`)),
    ]),
    trigger('maximum', [
      state('*', style({ //默认状态
        width: '*',
        height: '*',
        left: '*',
        top: '*'
      })),
      state('true', style({ //最大化状态
          width: '100%',
          height: '100%',
          left: '0px',
          top: '0px'
      })),
      state('false', style({ //返回默认状态
          width: '*',
          height: '*',
          left: '*',
          top: '*'
      })),
      transition('* => *', animate(`200ms ease-out`)),
    ])
  ],
  template: `
  <div class="ly-dialog-info" [@dropAnimation]="visible" [@maximum]="isMax" #dialog>
    <h2 class="ly-dialog-header" (mousedown)="start($event)" (mouseup)="end($event)">
      <span *ngIf="!customTitle">{{title}}</span>
      <ng-template [ngTemplateOutlet]="customTitle"></ng-template>
      <div class="icon">
        <i class="iconfont icon-min" (click)="handleMin()"></i>
        <i class="iconfont icon-max" (click)="handleMax($event)"></i>
        <i class="iconfont icon-delete" (click)="hide()"></i>
      </div>
    </h2>
    <div class="ly-dialog-body">
      <ng-content *ngIf="!content"></ng-content>
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </div>
    <div class="ly-dialog-footer">
      <ng-template [ngTemplateOutlet]="footer"></ng-template>
    </div>
  </div>
  <div class="ly-dialog-mask" *ngIf="visible"></div>
  `
})

export class LyDialogComponent implements OnInit, OnDestroy{
  @Input() class = '';
  @Input() title = '';
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter();

  isMax = false;
  isMin = false;
  minList = []

  @ContentChild('content') content;
  @ContentChild('title') customTitle;
  @ContentChild('footer') footer;
  @ViewChild('dialog') dialog;

  mx;my; //鼠标坐标
  dx;dy; //对话框坐标
  maxX;maxY; //最大移动距离

  isDraging = false;
  globalListener;

  constructor(
    private renderer: Renderer2
  ){}

  ngOnInit(){
    var pageW = document.documentElement.clientWidth;
    var pageH = document.documentElement.clientHeight;
    var dialogW = this.dialog.nativeElement.offsetWidth;
    var dialogH = this.dialog.nativeElement.offsetHeight;
    this.maxX = pageW - dialogW;
    this.maxY = pageH - dialogH;
    
    this.dialog.nativeElement.style.left = (pageW - dialogW)/2 + 'px';
    this.dialog.nativeElement.style.top =  (pageH - dialogH)/2 + 'px';
    
    this.globalListener = this.renderer.listen(document, 'mousemove', (e)=>{
      this.move(e)
    })
  }

  ngOnDestroy(){
    this.globalListener && this.globalListener();
  }

  hide(){
    this.visible = false
    this.visibleChange.emit(this.visible)
  }

  // 最大化
  handleMax(e){
    e.stopPropagation();
    this.isMax = !this.isMax
    setTimeout(()=>{
      this.dx = this.dialog.nativeElement.offsetLeft
      this.dy = this.dialog.nativeElement.offsetTop
    },500)
  } 

  // 最小化
  handleMin(){
    this.visible = false
    this.visibleChange.emit(this.visible)
    this.isMin = true
    this.minList.push({title: this.title})
    console.log(this.minList)
    let list = document.createElement('ul')
    list.className = 'min-list'
    let child = ''
    child += `<li>${this.title}<div class="icon"><i class="iconfont icon-max" (click)="handleMax($event)"></i><i class="iconfont icon-delete" (click)="hide()"></i></div></li>`
    list.innerHTML = child
    document.body.appendChild(list)
  }

  // 拖拽开始
  start(e){
    e.stopPropagation();
    this.dx = this.dialog.nativeElement.offsetLeft
    this.dy = this.dialog.nativeElement.offsetTop
    this.mx = e.pageX
    this.my = e.pageY
    this.isDraging = true;
  }
  // 拖拽
  move(e){
    e.stopPropagation();
    if(this.isMax){
      return;
    }
    let x = e.pageX;      //移动时鼠标X坐标
    let y = e.pageY;      //移动时鼠标Y坐标

    if(this.isDraging){
      let moveX = this.dx + x - this.mx;      //移动后对话框新的left值
      let moveY = this.dy + y - this.my;      //移动后对话框新的top值
      
      moveX = Math.min(Math.max(0,moveX),this.maxX);     //X轴可拖动范围
      moveY = Math.min(Math.max(0,moveY),this.maxY);     //Y轴可拖动范围
      
      this.dialog.nativeElement.style.left = moveX +'px';       //重新设置对话框的left
      this.dialog.nativeElement.style.top =  moveY +'px';     //重新设置对话框的top
    } 
  }
  // 拖拽结束
  end(e){
    e.stopPropagation();
    this.isDraging = false;
    this.dx = parseInt(this.dialog.nativeElement.style.left)
    this.dy = parseInt(this.dialog.nativeElement.style.top)
  }
}