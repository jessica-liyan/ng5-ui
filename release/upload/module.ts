import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyUploadComponent } from './ly-upload.component'
import { LyProgressModule } from '../progress/module'

@NgModule({
  declarations: [LyUploadComponent],
  exports: [LyUploadComponent],
  imports: [CommonModule, LyProgressModule],
  entryComponents: [LyUploadComponent],
})
export class LyUploadModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyUploadModule, providers: [] }
  }
}
