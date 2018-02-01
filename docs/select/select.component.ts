import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './select.component.html'
})

export class SelectComponent{
  food1 = '';
  
  food = 'fish';
  foods = [{
    label: '红烧武昌鱼',
    value: 'wuchang',
  },{
    label: '剁椒鱼头',
    value: 'fish',
  },{
    label: '碳烤牛蛙',
    value: 'niuwa',
  },{
    label: '黄豆焖猪蹄',
    value: 'zhuti',
  }]
  handleChange(ev){
    console.log('改变后的option',ev)
  }

  city = 'bj'
  cities = [{
    label: '北京',
    value: 'bj',
  },{
    label: '上海',
    value: 'sh',
  },{
    label: '广州',
    value: 'gz',
  },{
    label: '深圳',
    value: 'sz',
  }]
  handleChange1(ev){
    console.log('改变后的option1',ev)
  }

  options = [{
    value: 'hubei',
    label: '湖北',
    children: [{
      value: 'wuhan',
      label: '武汉',
      children: [{
        value: 'wuchang',
        label: '武昌区',
      },{
        value: 'hankou',
        label: '汉口区',
      },{
        value: 'hanyang',
        label: '汉阳区',
      }]
    },{
      value: 'xiangyang',
      label: '襄阳',
      children: [{
        value: 'fancheng',
        label: '樊城区',
      },{
        value: 'laohekou',
        label: '老河口区',
      }]
    }]
  },{
    value: 'henan',
    label: '河南',
    children: [{
      value: 'zhengzhou',
      label: '郑州',
      children: [{
        value: 'zz1',
        label: '郑州1区',
      },{
        value: 'zz2',
        label: '郑州2区',
      },{
        value: 'zz3',
        label: '郑州3区',
      }]
    },{
      value: 'anyang',
      label: '安阳',
      children: [{
        value: 'ay1',
        label: '安阳1区',
      },{
        value: 'ay2',
        label: '安阳2区',
      }]
    }]
  }]

  chosen1;
  chosen1Child;
  chosen2;
  chosen2Child;
  chosen3;
  
  handle1(val){
    this.chosen1 = val
    this.chosen1Child = this.options.find(item => item.value == val).children
  }

  handle2(val){
    this.chosen2 = val
    this.chosen2Child = this.chosen1Child.find(item => item.value == val).children
  }

  handle3(val){
    this.chosen3 = val
  }
  
}
