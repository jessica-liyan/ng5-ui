import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyAlertComponent } from './ly-alert.component'

@NgModule({
  declarations: [LyAlertComponent],
  exports: [LyAlertComponent],
  imports: [CommonModule],
  entryComponents: [LyAlertComponent],
})
export class LyAlertModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyAlertModule, providers: [] }
  }
}
