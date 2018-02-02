import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HashLocationStrategy , LocationStrategy} from '@angular/common';

import { LyButtonModule } from './button/module';

import { LyButtonComponent } from './button/ly-button.component';
import { LyRadioComponent } from './radio/ly-radio.component';
import { LyRadioGroupComponent } from './radio/ly-radio-group.component';
import { LyRadioButtonComponent } from './radio/ly-radio-button.component';
import { LyCheckboxComponent } from './checkbox/ly-checkbox.component';
import { LyCheckboxGroupComponent } from './checkbox/ly-checkbox-group.component';
import { LyCheckboxButtonComponent } from './checkbox/ly-checkbox-button.component';
import { LyDatepickerComponent } from './datepicker/ly-datepicker.component';
import { LyInputComponent } from './input/ly-input.component';
import { LyRowDirective } from './layout/ly-row.directive';
import { LyColDirective } from './layout/ly-col.directive';
import { LyProgressComponent } from './progress/ly-progress.component';
import { LyUploadComponent } from './upload/ly-upload.component';
import { LyToastComponent } from './toast/ly-toast.component';
import { LyAlertComponent } from './alert/ly-alert.component';
import { LySelectComponent } from './select/ly-select.component';
import { LyOptionComponent } from './select/ly-option.component';
import { LySwitchComponent } from './switch/ly-switch.component';
import { LyTableComponent } from './table/ly-table.component';
import { LyTableRowComponent } from './table/ly-table-row.component';
import { LyMenuComponent } from './menu/ly-menu.component';
import { LySubMenuComponent } from './menu/sub-menu.component';
import { LyMenuItemComponent } from './menu/ly-menu-item.component';
import { LyTooltipComponent } from './tooltip/ly-tooltip.component';
import { LyCollapseComponent } from './collapse/ly-collapse.component';
import { LyCollapseItemComponent } from './collapse/ly-collapse-item.component';
import { LySwiperComponent } from './swiper/ly-swiper.component';
import { LySwiperItemComponent } from './swiper/ly-swiper-item.component';
import { LyStepsComponent } from './step/ly-steps.component';
import { LyStepComponent } from './step/ly-step.component';
import { LyPaginationComponent } from './pagination/ly-pagination.component';
import { LyDialogComponent } from './dialog/ly-dialog.component';
import { LyRateComponent } from './rate/ly-rate.component';

import { ToastService } from './toast/toast.service';
import { DynamicService } from './tools/dynamic.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    LyButtonComponent,
    LyRadioComponent,
    LyRadioGroupComponent,
    LyRadioButtonComponent,
    LyCheckboxComponent,
    LyCheckboxGroupComponent,
    LyCheckboxButtonComponent,
    LyDatepickerComponent,
    LyInputComponent,
    LyRowDirective,
    LyColDirective,
    LyProgressComponent,
    LyUploadComponent,
    LyAlertComponent,
    LySelectComponent,
    LyOptionComponent,
    LySwitchComponent,
    LyTableComponent,
    LyTableRowComponent,
    LyMenuComponent,
    LySubMenuComponent,
    LyMenuItemComponent,
    LyTooltipComponent,
    LyCollapseComponent,
    LyCollapseItemComponent,
    LySwiperComponent,
    LySwiperItemComponent,
    LyStepsComponent,
    LyStepComponent,
    LyPaginationComponent,
    LyDialogComponent,
    LyRateComponent,
    LyToastComponent
  ],
  exports: [
    LyButtonComponent,
    LyRadioComponent,
    LyRadioGroupComponent,
    LyRadioButtonComponent,
    LyCheckboxComponent,
    LyCheckboxGroupComponent,
    LyCheckboxButtonComponent,
    LyDatepickerComponent,
    LyInputComponent,
    LyRowDirective,
    LyColDirective,
    LyProgressComponent,
    LyUploadComponent,
    LyAlertComponent,
    LySelectComponent,
    LyOptionComponent,
    LySwitchComponent,
    LyTableComponent,
    LyTableRowComponent,
    LyMenuComponent,
    LySubMenuComponent,
    LyMenuItemComponent,
    LyTooltipComponent,
    LyCollapseComponent,
    LyCollapseItemComponent,
    LySwiperComponent,
    LySwiperItemComponent,
    LyStepsComponent,
    LyStepComponent,
    LyPaginationComponent,
    LyDialogComponent,
    LyRateComponent
  ],
  entryComponents: [
    LyToastComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ToastService, DynamicService],
})

export class LyModule {}
