import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {HashLocationStrategy , LocationStrategy} from '@angular/common';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components.component';
import { ButtonComponent } from '../../release/button/button.component';
import { LyButtonComponent } from '../../release/button/ly-button.component';
import { RadioComponent } from '../../release/radio/radio.component';

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
    LyButtonComponent,
    RadioComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
