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
import { TableComponent } from '../../docs/table/table.component';
import { MenuComponent } from '../../docs/menu/menu.component';
import { TooltipComponent } from '../../docs/tooltip/tooltip.component';
import { CollapseComponent } from '../../docs/collapse/collapse.component';
import { SwiperComponent } from '../../docs/swiper/swiper.component';
import { StepComponent } from '../../docs/step/step.component';
import { PaginationComponent } from '../../docs/pagination/pagination.component';
import { DialogComponent } from '../../docs/dialog/dialog.component';
import { RateComponent } from '../../docs/rate/rate.component';

import {LyModule} from '../../index'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/components/button',
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
    LyModule
  ],
  declarations: [
    AppComponent,
    ComponentsComponent,
    ButtonComponent,
    RadioComponent,
    CheckboxComponent,
    DatepickerComponent,
    LayoutComponent,
    InputComponent, 
    ProgressComponent,
    UploadComponent,
    ToastComponent,
    AlertComponent,
    SelectComponent,
    SwitchComponent,
    TableComponent,
    MenuComponent,
    TooltipComponent,
    CollapseComponent,
    SwiperComponent,
    StepComponent,
    PaginationComponent,
    DialogComponent,
    RateComponent,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
