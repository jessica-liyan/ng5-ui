import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './table.component.html'
})

export class TableComponent{
  keys = ['姓名','日期','地址'];
  width = ['20%', '40%', '40%'];

  tableData: any[] = [{
    name: '张三',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '李亚',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '刘璐',
    date: '2017-08-21',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '张默',
    date: '2017-08-22',
    address: '上海市普陀区金沙江路 1510 弄',
  }]
}
