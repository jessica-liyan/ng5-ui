import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { LyDatepickerComponent } from './ly-datepicker.component'
import { LyInputModule } from '../input/module'
import { LyIconModule } from '../icon/module'

@NgModule({
  declarations: [LyDatepickerComponent],
  exports: [LyDatepickerComponent],
  imports: [CommonModule, FormsModule, LyInputModule, LyIconModule],
  entryComponents: [LyDatepickerComponent],
})
export class LyDatepickerModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyDatepickerModule, providers: [] }
  }
}
