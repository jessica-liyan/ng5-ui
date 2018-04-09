import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyCollapseComponent } from './ly-collapse.component'
import { LyCollapseItemComponent } from './ly-collapse-item.component'

@NgModule({
  declarations: [LyCollapseComponent, LyCollapseItemComponent],
  exports: [LyCollapseComponent, LyCollapseItemComponent],
  imports: [CommonModule],
  entryComponents: [LyCollapseComponent, LyCollapseItemComponent],
})
export class LyCollapseModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyCollapseModule, providers: [] }
  }
}
