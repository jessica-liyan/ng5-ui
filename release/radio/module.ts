import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { LyRadioButtonComponent } from './ly-radio-button.component'
import { LyRadioGroupComponent } from './ly-radio-group.component'
import { LyRadioComponent } from './ly-radio.component'

@NgModule({
  declarations: [LyRadioComponent, LyRadioGroupComponent, LyRadioButtonComponent],
  exports: [LyRadioComponent, LyRadioGroupComponent, LyRadioButtonComponent],
  imports: [CommonModule, FormsModule],
  entryComponents: [LyRadioComponent, LyRadioGroupComponent, LyRadioButtonComponent],
})
export class LyRadioModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyRadioModule, providers: [] }
  }
}
