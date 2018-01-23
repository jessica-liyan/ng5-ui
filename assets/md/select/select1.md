```html
<ly-select placeholder="请选择" (modelChange)="handleChange($event)">
  <ly-option *ngFor="let item of foods" [value]="item.value" [label]="item.label"></ly-option>
</ly-select>
```