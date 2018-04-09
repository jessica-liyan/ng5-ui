import {NgModule, ModuleWithProviders} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LySwiperComponent } from './ly-swiper.component'
import { LySwiperItemComponent } from './ly-swiper-item.component'

@NgModule({
  declarations: [LySwiperComponent, LySwiperItemComponent],
  exports: [LySwiperComponent, LySwiperItemComponent],
  imports: [CommonModule],
  entryComponents: [LySwiperComponent, LySwiperItemComponent],
})
export class LySwiperModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LySwiperModule, providers: [] }
  }
}
