```html
<ly-upload list-type="picture" multiple="true">
  <ng-template #trigger>
    <ly-button type="primary">点击上传</ly-button>
  </ng-template>
  <ng-template #tip>
    <div style="font-size:14px;color:#666;padding:10px 0;">只能上传jpg/png文件，且不超过500kb</div>
  </ng-template>
</ly-upload>
```