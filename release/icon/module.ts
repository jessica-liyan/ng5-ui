import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyIconComponent } from './ly-icon.component'

@NgModule({
  declarations: [LyIconComponent],
  exports: [LyIconComponent],
  imports: [CommonModule],
  entryComponents: [LyIconComponent],
})
export class LyIconModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyIconModule, providers: [] }
  }
}
