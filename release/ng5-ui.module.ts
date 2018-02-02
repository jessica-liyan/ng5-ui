import { NgModule } from '@angular/core';
import { LyButtonModule } from './button/module';

@NgModule({
  imports: [
    LyButtonModule.forRoot()
  ],
  exports:[
    LyButtonModule
  ]
})

export class LyModule {
  static forRoot() {
    return { ngModule: LyModule, providers: [] };
  }
}


