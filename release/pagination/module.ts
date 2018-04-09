import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyPaginationComponent } from './ly-pagination.component'
import { LyInputModule } from '../input/module'
import { LySelectModule } from '../select/module'

@NgModule({
  declarations: [LyPaginationComponent],
  exports: [LyPaginationComponent],
  imports: [CommonModule, LyInputModule, LySelectModule],
  entryComponents: [LyPaginationComponent],
})
export class LyPaginationModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyPaginationModule, providers: [] }
  }
}
