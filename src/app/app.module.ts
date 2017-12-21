import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components.component';
import { ButtonComponent } from '../../release/button.component';
import { LyButtonComponent } from '../../release/ly-button.component';
import { RadioComponent } from '../../release/radio.component';

const routes: Routes = [
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
