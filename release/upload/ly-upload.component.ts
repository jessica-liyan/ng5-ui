import { Component, Input, OnInit, OnChanges, EventEmitter, Output, ContentChild, ViewChild, ElementRef, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams} from '@angular/common/http';
 
@Component({
  selector: 'ly-upload',
  styleUrls: ['./upload.scss'],
  template: `
  <div class="ly-upload" (click)="handleClick()">
    <ng-template [ngTemplateOutlet]="trigger"></ng-template>
    <input type="file" name="upFile" #input (change)="handleChange($event)">
  </div>
  <ng-template [ngTemplateOutlet]="tip"></ng-template>
  <ul class="ly-upload-list">
    <li *ngFor="let file of fileList">
      <img src="{{file.url}}" class="v-m"/>
      <span class="v-m">{{file.name}}</span>
      <ly-progress *ngIf="type == 'picture'" [percent]="file.percentage"></ly-progress>
    </li>
  </ul>
  `
})

export class LyUploadComponent implements OnInit{
  @ContentChild('trigger') trigger;
  @ContentChild('tip') tip;
  @Input('list-type') type;
  fileList = []

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(){
    // 初始化测试
    this.fileList = [{
      name: '测试',
      size: null,
      raw: null,
      url: '',
      percentage: 20
    }]
  }

  @ViewChild('input')
  input: ElementRef

  handleClick(){
    this.input.nativeElement.click()
  }

  handleChange(e){
    let files = e.target.files[0]
    let formdata = new FormData()
    formdata.append('file', files)
    let file = {
      name: files.name,
      size: files.size,
      raw: files,
      percentage: 0,
      url: ''
    }
    this.fileList.push(file)

    this.request('http://192.168.3.187/api/public/api/upfile', formdata).subscribe((event) => {
      console.log('返回',typeof event,event)
      if(event['body']){
        file.url = event['body'].data.path + '/' + event['body'].data.file
      }
      if( event['loaded'] && event['total']){
        file.percentage =  LyUploadComponent.updatePercentage(event)
        if(file.percentage == 100){
          console.log('上传成功')
        }
      }
      console.log('file',file,this.fileList)
    })
  }

  static updatePercentage(res){
    const { loaded, total } = res;
    if(loaded == undefined || !total){
      return 0;
    }else{
      return Math.round(loaded / total * 100);
    }
  }

  request(path, file){
    const req = new HttpRequest('POST', path, file, {
      reportProgress: true
    });
    return this.http.request(req);
  }
}