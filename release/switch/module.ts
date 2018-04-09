import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LySwitchComponent } from './ly-switch.component'

@NgModule({
  declarations: [LySwitchComponent],
  exports: [LySwitchComponent],
  imports: [CommonModule],
  entryComponents: [LySwitchComponent],
})
export class LySwitchModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LySwitchModule, providers: [] }
  }
}
