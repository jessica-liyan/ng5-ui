import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { HtmlParser } from '@angular/compiler';
import { ToastService } from '../../release/toast/toast.service';
  
@Component({
  templateUrl: './toast.component.html',
})

export class ToastComponent{
  constructor(
    private toast : ToastService,
  ){}

  show(){
    this.toast.show('这是一条消息提示show')
  }

  success(){
    this.toast.show('这是一条成功消息', 'success')
  }
  warn(){
    this.toast.show('这是一条警示消息', 'warning')
  }
  error(){
    this.toast.show('这是一条错误消息', 'error')
  }
}
