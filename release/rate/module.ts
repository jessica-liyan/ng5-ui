import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyRateComponent } from './ly-rate.component'

@NgModule({
  declarations: [LyRateComponent],
  exports: [LyRateComponent],
  imports: [CommonModule],
  entryComponents: [LyRateComponent],
})
export class LyRateModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyRateModule, providers: [] }
  }
}
