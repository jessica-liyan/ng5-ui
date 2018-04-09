import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyRowDirective } from './ly-row.directive'
import { LyColDirective } from './ly-col.directive'

@NgModule({
  declarations: [LyRowDirective, LyColDirective],
  exports: [LyRowDirective, LyColDirective],
  imports: [CommonModule],
  entryComponents: [],
})
export class LyLayoutModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyLayoutModule, providers: [] }
  }
}
