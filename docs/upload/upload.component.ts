import { Component } from '@angular/core';
import { HtmlParser } from '@angular/compiler';
  
@Component({
  templateUrl: './upload.component.html',
})

export class UploadComponent{
  fileList = [{
    name: 'left.png',
    url: 'http://localhost:4200/assets/img/left.png'
  },{
    name: 'right.png',
    url: 'http://localhost:4200/assets/img/right.png'
  }]


  handleSuccess(ev){
    console.log('handleSuccess',this.fileList)
  }

  handleRemove(ev){
    console.log(this.fileList)
  }
}
