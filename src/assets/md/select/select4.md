```html
<ly-select placeholder="请选择省" (modelChange)="handle1($event)">
  <ly-option *ngFor="let item of options" [value]="item.value" [label]="item.label"></ly-option>
</ly-select>
<ly-select placeholder="请选择市" *ngIf="chosen1" (modelChange)="handle2($event)">
  <ly-option *ngFor="let item of chosen1Child" [value]="item.value" [label]="item.label"></ly-option>
</ly-select>
<ly-select placeholder="请选择区" *ngIf="chosen2" (modelChange)="handle3($event)">
  <ly-option *ngFor="let item of chosen2Child" [value]="item.value" [label]="item.label"></ly-option>
</ly-select>
```