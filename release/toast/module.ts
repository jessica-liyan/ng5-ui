import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyToastComponent } from './ly-toast.component'
import { ToastService } from './toast.service'

@NgModule({
  declarations: [LyToastComponent],
  exports: [LyToastComponent],
  imports: [CommonModule],
  entryComponents: [LyToastComponent],
})

export class LyToastModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyToastModule, providers: [ToastService] }
  }
}
