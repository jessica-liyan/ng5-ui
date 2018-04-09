import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyDialogComponent } from './ly-dialog.component'

@NgModule({
  declarations: [LyDialogComponent],
  exports: [LyDialogComponent],
  imports: [CommonModule],
  entryComponents: [LyDialogComponent],
})
export class LyDialogModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyDialogModule, providers: [] }
  }
}
