```html
<ly-input placeholder="请输入用户名" [(model)]="name" (modelChange)="change($event)"></ly-input>
<ly-input placeholder="请输入用户名" [(model)]="name1" (focusChange)="focus($event)"></ly-input>
```