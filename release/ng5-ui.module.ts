import { NgModule, ModuleWithProviders} from '@angular/core';

import { LyIconModule } from './icon/module';
import { LyButtonModule } from './button/module';
import { LyRadioModule } from './radio/module';
import { LyCheckboxModule } from './checkbox/module';
import { LyInputModule } from './input/module';
import { LyDatepickerModule } from './datepicker/module';
import { LyProgressModule } from './progress/module';
import { LyUploadModule } from './upload/module';
import { LyAlertModule } from './alert/module';
import { LySelectModule } from './select/module';
import { LySwitchModule } from './switch/module';
import { LyTableModule } from './table/module';
import { LyMenuModule } from './menu/module';
import { LyTooltipModule } from './tooltip/module';
import { LyCollapseModule } from './collapse/module';
import { LySwiperModule } from './swiper/module';
import { LyStepModule } from './step/module';
import { LyRateModule } from './rate/module';
import { LyDialogModule } from './dialog/module';
import { LyPaginationModule } from './pagination/module';
import { LyLayoutModule } from './layout/module';
import { LyToastModule } from './toast/module';

import { ToastService } from './toast/toast.service';
import { DynamicService } from './tools/dynamic.service';

@NgModule({
  imports: [
    LyIconModule.forRoot(),
    LyButtonModule.forRoot(),
    LyRadioModule.forRoot(),
    LyCheckboxModule.forRoot(),
    LyInputModule.forRoot(),
    LyDatepickerModule.forRoot(),
    LyProgressModule.forRoot(),
    LyUploadModule.forRoot(),
    LyAlertModule.forRoot(),
    LySelectModule.forRoot(),
    LySwitchModule.forRoot(),
    LyTableModule.forRoot(),
    LyMenuModule.forRoot(),
    LyTooltipModule.forRoot(),
    LyCollapseModule.forRoot(),
    LySwiperModule.forRoot(),
    LyStepModule.forRoot(),
    LyRateModule.forRoot(),
    LyDialogModule.forRoot(),
    LyPaginationModule.forRoot(),
    LyLayoutModule.forRoot(),
    LyToastModule.forRoot()
  ],
  exports: [
    LyIconModule,
    LyButtonModule,
    LyRadioModule,
    LyCheckboxModule,
    LyInputModule,
    LyDatepickerModule,
    LyProgressModule,
    LyUploadModule,
    LyAlertModule,
    LySelectModule,
    LySwitchModule,
    LyTableModule,
    LyMenuModule,
    LyTooltipModule,
    LyCollapseModule,
    LySwiperModule,
    LyStepModule,
    LyRateModule,
    LyDialogModule,
    LyPaginationModule,
    LyLayoutModule,
    LyToastModule
  ]
})

export class LyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LyModule,
      providers: [ToastService, DynamicService]
    }
  }
}
