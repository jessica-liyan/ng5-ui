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
    LySwitchComponent
  ],
  entryComponents: [
    LyToastComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ToastService, DynamicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
