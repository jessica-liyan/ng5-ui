```html
<ly-select [(model)]="city" (modelChange)="handleChange1($event)" [clearable]="true">
  <ly-option *ngFor="let item of cities" [value]="item.value" [label]="item.label"></ly-option>
</ly-select>
```
```js
handleChange1(ev){
  console.log('改变后的option1',ev)
}
```