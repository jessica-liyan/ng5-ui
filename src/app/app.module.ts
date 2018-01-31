import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {HashLocationStrategy , LocationStrategy} from '@angular/common';
import { HttpModule, JsonpModule} from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { MarkdownModule } from 'ngx-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components.component';

import { LyButtonComponent } from '../../release/button/ly-button.component';
import { LyRadioComponent } from '../../release/radio/ly-radio.component';
import { LyRadioGroupComponent } from '../../release/radio/ly-radio-group.component';
import { LyRadioButtonComponent } from '../../release/radio/ly-radio-button.component';
import { LyCheckboxComponent } from '../../release/checkbox/ly-checkbox.component';
import { LyCheckboxGroupComponent } from '../../release/checkbox/ly-checkbox-group.component';
import { LyCheckboxButtonComponent } from '../../release/checkbox/ly-checkbox-button.component';
import { LyDatepickerComponent } from '../../release/datepicker/ly-datepicker.component';
import { LyInputComponent } from '../../release/input/ly-input.component';
import { LyRowDirective } from '../../release/layout/ly-row.directive';
import { LyColDirective } from '../../release/layout/ly-col.directive';
import { LyProgressComponent } from '../../release/progress/ly-progress.component';
import { LyUploadComponent } from '../../release/upload/ly-upload.component';
import { LyToastComponent } from '../../release/toast/ly-toast.component';
import { LyAlertComponent } from '../../release/alert/ly-alert.component';
import { LySelectComponent } from '../../release/select/ly-select.component';
import { LyOptionComponent } from '../../release/select/ly-option.component';
import { LySwitchComponent } from '../../release/switch/ly-switch.component';
import { LyTableComponent } from '../../release/table/ly-table.component';
import { LyTableRowComponent } from '../../release/table/ly-table-row.component';
import { LyMenuComponent } from '../../release/menu/ly-menu.component';
import { LySubMenuComponent } from '../../release/menu/sub-menu.component';
import { LyMenuItemComponent } from '../../release/menu/ly-menu-item.component';
import { LyTooltipComponent } from '../../release/tooltip/ly-tooltip.component';
import { LyCollapseComponent } from '../../release/collapse/ly-collapse.component';
import { LyCollapseItemComponent } from '../../release/collapse/ly-collapse-item.component';
import { LySwiperComponent } from '../../release/swiper/ly-swiper.component';
import { LySwiperItemComponent } from '../../release/swiper/ly-swiper-item.component';
import { LyStepsComponent } from '../../release/step/ly-steps.component';
import { LyStepComponent } from '../../release/step/ly-step.component';
import { LyPaginationComponent } from '../../release/pagination/ly-pagination.component';
import { LyDialogComponent } from '../../release/dialog/ly-dialog.component';
import { LyRateComponent } from '../../release/rate/ly-rate.component';

import { ButtonComponent } from '../../docs/button/button.component';
import { RadioComponent } from '../../docs/radio/radio.component';
import { CheckboxComponent } from '../../docs/checkbox/checkbox.component';
import { DatepickerComponent } from '../../docs/datepicker/datepicker.component';
import { InputComponent } from '../../docs/input/input.component';
import { LayoutComponent } from '../../docs/layout/layout.component';
import { ProgressComponent } from '../../docs/progress/progress.component';
import { UploadComponent } from '../../docs/upload/upload.component';
import { ToastComponent } from '../../docs/toast/toast.component';
import { AlertComponent } from '../../docs/alert/alert.component';
import { SelectComponent } from '../../docs/select/select.component';
import { SwitchComponent } from '../../docs/switch/switch.component';
import { TableComponent } from '../../docs/table/table.component';
import { MenuComponent } from '../../docs/menu/menu.component';
import { TooltipComponent } from '../../docs/tooltip/tooltip.component';
import { CollapseComponent } from '../../docs/collapse/collapse.component';
import { SwiperComponent } from '../../docs/swiper/swiper.component';
import { StepComponent } from '../../docs/step/step.component';
import { PaginationComponent } from '../../docs/pagination/pagination.component';
import { DialogComponent } from '../../docs/dialog/dialog.component';
import { RateComponent } from '../../docs/rate/rate.component';

import { ToastService } from '../../release/toast/toast.service';
import { DynamicService } from '../../release/tools/dynamic.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/components',
    pathMatch: 'full'
  },
  {
    path: 'components',
    component: ComponentsComponent,
    children: [{
      path: 'button',
      component: ButtonComponent
    },{
      path: 'radio',
      component: RadioComponent
    },{
      path: 'checkbox',
      component: CheckboxComponent
    },{
      path: 'switch',
      component: SwitchComponent
    },{
      path: 'input',
      component: InputComponent
    },{
      path: 'select',
      component: SelectComponent
    },{
      path: 'datepicker',
      component: DatepickerComponent
    },{
      path: 'table',
      component: TableComponent
    },{
      path: 'layout',
      component: LayoutComponent
    },{
      path: 'progress',
      component: ProgressComponent
    },{
      path: 'upload',
      component: UploadComponent
    },{
      path: 'toast',
      component: ToastComponent
    },{
      path: 'alert',
      component: AlertComponent
    },{
      path: 'menu',
      component: MenuComponent
    },{
      path: 'tooltip',
      component: TooltipComponent
    },{
      path: 'collapse',
      component: CollapseComponent
    },{
      path: 'swiper',
      component: SwiperComponent
    },{
      path: 'step',
      component: StepComponent
    },{
      path: 'pagination',
      component: PaginationComponent
    },{
      path: 'dialog',
      component: DialogComponent
    },{
      path: 'rate',
      component: RateComponent
    }]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ComponentsComponent,
    ButtonComponent,
    RadioComponent,
    CheckboxComponent,
    LyButtonComponent,
    LyRadioComponent,
    LyRadioGroupComponent,
    LyRadioButtonComponent,
    LyCheckboxComponent,
    LyCheckboxGroupComponent,
    LyCheckboxButtonComponent,
    DatepickerComponent,
    LyInputComponent,
    LyDatepickerComponent,
    LayoutComponent,
    InputComponent, 
    LyRowDirective,
    LyColDirective,
    ProgressComponent,
    LyProgressComponent,
    UploadComponent,
    LyUploadComponent,
    ToastComponent,
    LyToastComponent,
    AlertComponent,
    LyAlertComponent,
    SelectComponent,
    LySelectComponent,
    LyOptionComponent,
    SwitchComponent,
    LySwitchComponent,
    TableComponent,
    LyTableComponent,
    LyTableRowComponent,
    LyMenuComponent,
    LyMenuItemComponent,
    LySubMenuComponent,
    MenuComponent,
    TooltipComponent,
    LyTooltipComponent,
    CollapseComponent,
    LyCollapseComponent,
    LyCollapseItemComponent,
    SwiperComponent,
    LySwiperComponent,
    LySwiperItemComponent,
    StepComponent,
    LyStepComponent,
    LyStepsComponent,
    PaginationComponent,
    LyPaginationComponent,
    DialogComponent,
    LyDialogComponent,
    RateComponent,
    LyRateComponent
  ],
  entryComponents: [
    LyToastComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ToastService, DynamicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
