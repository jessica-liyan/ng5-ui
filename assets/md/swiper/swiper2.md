```html
<div style="width:800px;">
  <ly-swiper height="120px" arrow="hover">
    <ly-swiper-item *ngFor="let item of data; let i = index" [index]="i">
      <img [src]="item.src" alt="" class="w v-m">
    </ly-swiper-item>
  </ly-swiper>
</div>
```