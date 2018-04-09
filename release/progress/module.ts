import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyProgressComponent } from './ly-progress.component'

@NgModule({
  declarations: [LyProgressComponent],
  exports: [LyProgressComponent],
  imports: [CommonModule],
  entryComponents: [LyProgressComponent],
})
export class LyProgressModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyProgressModule, providers: [] }
  }
}
