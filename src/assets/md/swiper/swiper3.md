```html
<div style="width:800px;">
  <ly-swiper height="120px" arrow="hover" interval="4000">
    <ly-swiper-item *ngFor="let item of data; let i = index" [index]="i">
      <img [src]="item.src" alt="" class="w v-m">
    </ly-swiper-item>
  </ly-swiper>
</div>
<div style="width:800px;margin-top:20px;">
  <ly-swiper height="120px" arrow="hover" [autoplay]="false">
    <ly-swiper-item *ngFor="let item of data; let i = index" [index]="i">
      <img [src]="item.src" alt="" class="w v-m">
    </ly-swiper-item>
  </ly-swiper>
</div>
```