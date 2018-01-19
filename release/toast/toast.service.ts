import { Injectable } from '@angular/core';
import { DynamicService } from '../tools/dynamic.service'
import { LyToastComponent } from './ly-toast.component'

@Injectable()
// 服务：将提示框的组件动态添加到body的最后
export class ToastService {

  component = [];

  constructor(
    private dynamic: DynamicService
  ){}

  show(txt,type = ''){
    // com.instance = LyToastComponent
    // com.instance['info'] = txt 将信息传入到LyToastComponent实例中
    let com = this.dynamic.generate(LyToastComponent)
    com.instance['info'] = txt
    com.instance['type'] = type
    console.log('com',com,txt)
  }
}