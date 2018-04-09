import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyButtonComponent } from './ly-button.component'

@NgModule({
  declarations: [LyButtonComponent],
  exports: [LyButtonComponent],
  imports: [CommonModule],
  entryComponents: [LyButtonComponent],
})
export class LyButtonModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyButtonModule, providers: [] }
  }
}
