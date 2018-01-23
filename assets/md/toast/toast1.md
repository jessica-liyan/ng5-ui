```html
<ly-button (click)="show()">点击显示消息提示框</ly-button>
```
```js
show(){
  this.toast.show('这是一条消息提示show')
}
```