```html
<ly-button (click)="success()" type="primary">成功</ly-button>
<ly-button (click)="warn()" type="primary">警告</ly-button>
<ly-button (click)="error()" type="primary">错误</ly-button>
```
```js
success(){
  this.toast.show('这是一条成功消息', 'success')
}
warn(){
  this.toast.show('这是一条警示消息', 'warning')
}
error(){
  this.toast.show('这是一条错误消息', 'error')
}
```