```html
<ly-select [(model)]="food" (modelChange)="handleChange1($event)">
  <ly-option *ngFor="let item of foods" [value]="item.value" [label]="item.label"></ly-option>
</ly-select>
```
```js
handleChange(ev){
  console.log('改变后的option',ev)
}
```
