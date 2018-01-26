import { Component, Input, OnInit, EventEmitter, Output, Inject, Injectable, ElementRef, ContentChildren, QueryList, Renderer2, OnChanges } from '@angular/core';

@Component({
  selector: 'ly-pagination',
  styleUrls: ['./pagination.scss'],
  template: `
  <div [class]="'ly-pagination ' + class">
    <div class="txt" *ngIf="layout.indexOf('total') > -1">共{{total}}条</div>

    <ly-select
       *ngIf="layout.indexOf('size') > -1" 
       [(model)]="size" 
       (modelChange)="handlePage()"
    >
      <ly-option *ngFor="let item of pageSizes;let i = index" [value]="i" [label]="item + '条/页'"></ly-option>
    </ly-select>

    <a class="btn" (click)="prev()">上一页</a>

    <ul class="ly-pagination-list"> 
      <li class="btn" [class.active]="model === 1" (click)="handleSelect(1)">1</li>
      <li class="btn" *ngIf="showPrevMore" (click)="handlejump(-5)">...</li>
      <li class="btn" 
        *ngFor="let item of pages"
        (click)="handleSelect(item)"
        [class.active]="model === item"
      >
        {{item}}
      </li>
      <li class="btn" *ngIf="showNextMore" (click)="handlejump(5)">...</li>
      <li class="btn" [class.active]="model === n" (click)="handleSelect(n)">{{n}}</li>
    </ul>

    <a class="btn" (click)="next()">下一页</a>

    <div *ngIf="layout.indexOf('jumper') > -1" class="txt">
      <span>前往</span>
      <ly-input [(model)]="input" (onEnter)="handleInput($event)"></ly-input>
      <span>页</span>
    </div>
  </div>
  `
})

export class LyPaginationComponent implements OnInit{
  @Input() model = 1; // 当前页码
  @Input() total; // 总条目
  @Input() pageSize = 10; // 每页条目
  @Input() pageSizes = [10, 20, 30, 40]; // 每页条目选择数组
  @Input() layout = [];
  @Output() modelChange : EventEmitter<number> = new EventEmitter();
  n; // 总页数
  pages = []; // 存放页数数组
  size = 0; // 每页条目下拉的选中索引
  input;
  showPrevMore = false;
  showNextMore = false;

  ngOnInit(){
    this.renderPage()
  }

  renderPage(){
    this.pages = []
    this.n = Math.ceil(this.total/this.pageSize)
    // 总页数不超过7，全部显示 1 | 2 3 4 5 6 | 7  。如果总页数超过7，中间固定显示5个数
    if(this.n <= 7){
      for(let i = 2; i <= this.n-1; i++){
        this.pages.push(i)
      }
    }else{
      if(this.model >= this.n - 3){
        this.showPrevMore = true
        this.showNextMore = false
        for(let i = this.n - 5; i <= this.n - 1; i++){
          this.pages.push(i)
        }

      }else if(this.model < this.n - 3 && this.model > 4){
        this.showPrevMore = true
        this.showNextMore = true
        for(let i = this.model - 2; i <= this.model + 2; i++){
          this.pages.push(i)
        }

      }else if(this.model <= 4){
        this.showPrevMore = false
        this.showNextMore = true
        for(let i = 2; i <= 6; i++){
          this.pages.push(i)
        }
      }
    }
  }

  // 改变页码
  handleSelect(i){
    this.model = i
    this.modelChange.emit(this.model)
    this.renderPage()
  }

  // ...省略号更新页码
  handlejump(d){
    this.model = this.model + d
    if(this.model > this.n){
      this.model = this.n
    }
    if(this.model < 0){
      this.model = 0
    }
    this.renderPage()
    this.modelChange.emit(this.model)
  }

  // 改变每条显示的页数
  handlePage(){
    this.pageSize = this.pageSizes[this.size]
    this.renderPage()
  }

  // 监听跳转页面
  handleInput(){
    this.model = +this.input
    this.modelChange.emit(this.model)
    this.renderPage()
  }

  // 上一页
  prev(){
    this.model = this.model > 1 ? this.model - 1 : 1
    this.modelChange.emit(this.model)
    this.renderPage()
  }

  // 下一页
  next(){
    this.model = this.model < this.n ? this.model + 1 : this.n
    this.modelChange.emit(this.model)
    this.renderPage()
  }
}