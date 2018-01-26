```html
<ly-input placeholder="请输入用户名" [(model)]="name" (modelChange)="change($event)"></ly-input>
<ly-input placeholder="请输入用户名" [(model)]="name1" (onFocus)="focus($event)"></ly-input>
<ly-input placeholder="请输入用户名" [(model)]="name2" (onEnter)="enter($event)"></ly-input>
```