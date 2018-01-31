import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./demo.scss']
})

export class DialogComponent implements OnInit{
  show = false
  show1 = false
  
  pop = false; // 弹窗是否显示
  isModify = false; // 是否正在修改
  title;
  users = []; // 用户数组
  user = { // 单个用户
    name: '',
    sex: '男',
    birthday: ''
  }

  ngOnInit(){
    let local = JSON.parse(window.localStorage.getItem('users'))
    if(local){this.users = local}
  }

  // 新增
  add(){
    this.pop = true
    this.isModify = false
    this.title = '新增用户'
    this.user = { // 清空
      name: '',
      sex: '男',
      birthday: ''
    }
  }
  // 修改
  modify(name){
    this.pop = true
    this.user = this.users.find(x => x.name == name)
    this.isModify = true
  }
  // 删除
  delete(name){
    this.users.splice(this.users.findIndex(x => x.name == name), 1)

    let store = JSON.parse(window.localStorage.getItem('users'))
    store.splice(store.findIndex(x => x.name == name), 1)
    window.localStorage.setItem('users',JSON.stringify(store))
  }
  // 确定，提交
  submit(){
    this.pop = false
    if(this.isModify){
      console.log(this.user)
    }else{
      this.users.push(this.user)
    }

    window.localStorage.setItem('users',JSON.stringify(this.users))

    this.user = { // 清空
      name: '',
      sex: '男',
      birthday: ''
    }
  }
  // 取消
  cancel(){
    this.pop = false
  }
}
