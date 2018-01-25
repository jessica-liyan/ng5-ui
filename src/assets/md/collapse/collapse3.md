```html
<ly-collapse [(model)]="model" accordion="true">
  <ly-collapse-item label="一致性" value="1">
    <ng-template #title>
      <i class="iconfont icon-image mr-10"></i>一致性
    </ng-template>
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
  </ly-collapse-item>
  <ly-collapse-item label="反馈" value="2">
    <ng-template #title>
      <i class="iconfont icon-image mr-10"></i>反馈
    </ng-template>
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
  </ly-collapse-item>
  <ly-collapse-item label="效率" value="3">
    <ng-template #title>
      <i class="iconfont icon-image mr-10"></i>效率
    </ng-template>
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </ly-collapse-item>
</ly-collapse>
```