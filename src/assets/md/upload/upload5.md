```html
<ly-upload 
  list-type="card" 
  multiple="true" 
  [(fileList)]="fileList"
  (success)="handleSuccess($event)" 
  (remove)="handleRemove($event)"
>
  <ng-template #trigger>
    <img src="assets/img/add.png" alt="">
  </ng-template>
</ly-upload>
```