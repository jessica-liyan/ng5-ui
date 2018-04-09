import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { LyCheckboxButtonComponent } from './ly-checkbox-button.component'
import { LyCheckboxGroupComponent } from './ly-checkbox-group.component'
import { LyCheckboxComponent } from './ly-checkbox.component'

@NgModule({
  declarations: [LyCheckboxComponent, LyCheckboxGroupComponent, LyCheckboxButtonComponent],
  exports: [LyCheckboxComponent, LyCheckboxGroupComponent, LyCheckboxButtonComponent],
  imports: [CommonModule, FormsModule],
  entryComponents: [LyCheckboxComponent, LyCheckboxGroupComponent, LyCheckboxButtonComponent],
})
export class LyCheckboxModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyCheckboxModule, providers: [] }
  }
}
