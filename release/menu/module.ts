import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LyMenuItemComponent } from './ly-menu-item.component'
import { LyMenuComponent } from './ly-menu.component'
import { LySubMenuComponent } from './sub-menu.component'

@NgModule({
  declarations: [LyMenuComponent, LyMenuItemComponent, LySubMenuComponent],
  exports: [LyMenuComponent, LyMenuItemComponent, LySubMenuComponent],
  imports: [CommonModule],
  entryComponents: [LyMenuComponent, LyMenuItemComponent, LySubMenuComponent],
})
export class LyMenuModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LyMenuModule, providers: [] }
  }
}
