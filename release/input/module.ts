import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { LyInputComponent } from './ly-input.component'

@NgModule({
  declarations: [LyInputComponent],
  exports: [LyInputComponent],
  imports: [CommonModule, FormsModule],
  entryComponents: [LyInputComponent],
})
export class LyInputModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyInputModule, providers: [] }
  }
}
