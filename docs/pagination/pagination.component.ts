import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { HtmlParser } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { query } from '@angular/animations/src/animation_metadata';
  
@Component({
  templateUrl: './pagination.component.html',
  styleUrls: ['./demo.scss']
})

export class PaginationComponent implements OnInit{
  page = 1
  page1 = 3
  page2 = 5

  big = 1

  base_Url = 'https://api.douban.com/v2/';
  bookList = [];
  bookTotal = 0;
  current = 1;
  q = 'angular';
  size = 12; // 默认一页12条

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    // 通过activatedRoute的queryParams获取传递的page参数
    this.activatedRoute.queryParams.subscribe(res => {
      this.current = +res.page || 1
      this.size = +res.size || 12
      this.searchBook(this.q, (this.current - 1)*this.size, this.size)
    }) 
  }

  searchBook(q, start, count) {
    let url = `${this.base_Url}book/search?q=${q}&start=${start}&count=${count}`
    this.http.jsonp(url,'callback').subscribe(res => {
      console.log(res)
      this.bookList = res['books']
      this.bookTotal = res['total']
    })
  }

  // input搜索图书
  // search(){
  //   console.log('search')
  //   this.searchBook(this.q, (this.current - 1)*this.size, this.size)
  // }

  // 页码改变
  handleChange(){
    this.router.navigate(['/components/pagination'],{queryParams: {page: this.current, size: this.size}})
    this.searchBook(this.q, (this.current - 1)*this.size, this.size)
  }

  // 每页条目数改变
  handleSize(){
    this.router.navigate(['/components/pagination'],{queryParams: {page: this.current, size: this.size}})
    this.searchBook(this.q, (this.current - 1)*this.size, this.size)
  }

  showMask = false; // 显示弹窗
  data = {// 选中的图书对象
    rating: {
      average: null
    }
  } 
  showDetail(item){
    this.showMask = true
    this.data = item
  }
}
