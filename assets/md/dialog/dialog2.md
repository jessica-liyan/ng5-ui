```html
<ly-dialog title="自定义标题名称" [(visible)]="show1">
  <ng-template #title>
    <i>自定义标题名称</i>
  </ng-template>
  <ng-template #content>
    <p>你可以通过ng-template 插入 html 片段甚至是组件来构建自定义的对话框。</p>
  </ng-template>
  <ng-template #footer>
    <ly-button (click)="change1()" type="primary">确定</ly-button>
    <ly-button (click)="change1()" plain="true">取消</ly-button>
  </ng-template>
</ly-dialog>
```