```html
<ly-menu [(model)]="model" (modelChange)="handleChange($event)">
  <ly-menu-item index="0">首页</ly-menu-item>
  <sub-menu index="1" title="政策法规">
    <ly-menu-item index="1-1">政策</ly-menu-item>
    <ly-menu-item index="1-2">法规</ly-menu-item>
    <ly-menu-item index="1-3">政策法规3</ly-menu-item>
  </sub-menu>
  <ly-menu-item index="2">继续教育</ly-menu-item>
  <sub-menu index="3" title="联系方式">
    <ly-menu-item index="3-1">联系方式1</ly-menu-item>
    <ly-menu-item index="3-2">联系方式2</ly-menu-item>
    <ly-menu-item index="3-3">联系方式3</ly-menu-item>
  </sub-menu>
</ly-menu>
```