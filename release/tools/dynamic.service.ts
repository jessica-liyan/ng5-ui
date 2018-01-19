import { Component, Injectable, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector, ApplicationRef} from '@angular/core';

@Injectable()
export class DynamicService{
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef
  ){}

  // 参数是动态组件
  generate(container){
    let id = this.makeID()
    let factory = this.resolver.resolveComponentFactory(container)
    let newNode = document.createElement('div')
    newNode.id = id
    document.body.appendChild(newNode)
    
    const ref = factory.create(this.injector, [], newNode)
    ref.instance['id'] = id
    this.app.attachView(ref.hostView)

    // 3s秒钟后自动销毁添加的dom(先用300完成动画)
    setTimeout(() => {
      newNode.remove()
    }, 3300)

    return ref;
  }
  
  makeID() {
    return Math.random().toString(16).substr(2, 8);
  }
}
