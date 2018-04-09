import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyTableRowComponent } from './ly-table-row.component'
import { LyTableComponent } from './ly-table.component'

@NgModule({
  declarations: [LyTableComponent, LyTableRowComponent],
  exports: [LyTableComponent, LyTableRowComponent],
  imports: [CommonModule],
  entryComponents: [LyTableComponent, LyTableRowComponent],
})
export class LyTableModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyTableModule, providers: [] }
  }
}
