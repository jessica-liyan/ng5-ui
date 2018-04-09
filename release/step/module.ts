import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyStepComponent } from './ly-step.component'
import { LyStepsComponent } from './ly-steps.component'

@NgModule({
  declarations: [LyStepComponent, LyStepsComponent],
  exports: [LyStepComponent, LyStepsComponent],
  imports: [CommonModule],
  entryComponents: [LyStepComponent, LyStepsComponent],
})
export class LyStepModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyStepModule, providers: [] }
  }
}
