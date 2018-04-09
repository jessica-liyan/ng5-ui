import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyTooltipComponent } from './ly-tooltip.component'

@NgModule({
  declarations: [LyTooltipComponent],
  exports: [LyTooltipComponent],
  imports: [CommonModule],
  entryComponents: [LyTooltipComponent],
})
export class LyTooltipModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyTooltipModule, providers: [] }
  }
}
