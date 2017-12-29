import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {HashLocationStrategy , LocationStrategy} from '@angular/common';
import { MarkdownModule } from 'ngx-md';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components.component';

import { ButtonComponent } from '../../docs/button/button.component';
import { RadioComponent } from '../../docs/radio/radio.component';
import { CheckboxComponent } from '../../docs/checkbox/checkbox.component';

import { LyButtonComponent } from '../../release/button/ly-button.component';
import { LyRadioComponent } from '../../release/radio/ly-radio.component';
import { LyRadioGroupComponent } from '../../release/radio/ly-radio-group.component';
import { LyRadioButtonComponent } from '../../release/radio/ly-radio-button.component';
import { LyCheckboxComponent } from '../../release/checkbox/ly-checkbox.component';
import { LyCheckboxGroupComponent } from '../../release/checkbox/ly-checkbox-group.component';
import { LyCheckboxButtonComponent } from '../../release/checkbox/ly-checkbox-button.component';

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
    }]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
    LyCheckboxButtonComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
