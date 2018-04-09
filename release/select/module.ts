import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LySelectComponent } from './ly-select.component'
import { LyOptionComponent } from './ly-option.component'
import { LyInputModule } from '../input/module'

@NgModule({
  declarations: [LySelectComponent, LyOptionComponent],
  exports: [LySelectComponent, LyOptionComponent],
  imports: [CommonModule, LyInputModule],
  entryComponents: [LySelectComponent, LyOptionComponent],
})
export class LySelectModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LySelectModule, providers: [] }
  }
}
