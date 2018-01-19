import { Component, Input, OnInit, OnChanges, EventEmitter, Output, ContentChild, ViewChild, ElementRef, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams} from '@angular/common/http';
 
@Component({
  selector: 'ly-upload',
  styleUrls: ['./upload.scss'],
  template: `
  <div class="ly-upload" (click)="handleClick()" *ngIf="type !== 'card'">
    <ng-template [ngTemplateOutlet]="trigger"></ng-template>
    <input type="file" name="upFile" #input (change)="fileListChange($event)" [multiple]="multiple">
  </div>
  <ng-template [ngTemplateOutlet]="tip"></ng-template>

  <ul class="ly-upload-list" [class.picture]="type == 'picture'" [class.card]="type == 'card'">
    <li *ngFor="let file of fileList">
      <i [class]="'icon-type iconfont icon-' + file.type" *ngIf="!type"></i>
      <img src="{{file.url}}" class="icon v-m" *ngIf="type && file.status == 'success'"/>
      <div>
        <span class="v-m" *ngIf="type !== 'card'">{{file.name}}</span>
        <ly-progress *ngIf="type && file.status == 'loading'" [percent]="file.percentage" [type]="type === 'card' ? 'circle' : ''"></ly-progress>
      </div>
      <span class="tools" *ngIf="file.status == 'success'" [class.corner]="type">
        <i class="iconfont icon-success"></i>
        <i class="iconfont icon-delete" (click)="delete(file.rename)"></i>
      </span>
    </li>
  </ul>

  <div class="ly-upload" (click)="handleClick()" *ngIf="type == 'card'">
    <div class="ly-upload-card">
      <ng-template [ngTemplateOutlet]="trigger"></ng-template>
    </div>
    <input type="file" name="upFile" #input (change)="fileListChange($event)" [multiple]="multiple">
  </div>
  `
})

export class LyUploadComponent implements OnInit{
  @ContentChild('trigger') trigger;
  @ContentChild('tip') tip;
  @Input('list-type') type;
  @Input() multiple;
  @Input() fileList = [];
  @Output() success: EventEmitter<object[]> = new EventEmitter();
  @Output() remove: EventEmitter<object[]> = new EventEmitter();

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(){
    if(this.fileList){
      this.fileList.forEach((el,idx) => {
        this.fileList[idx] = {
          name: el.name,
          size: 0,
          raw: null,
          rename: '',
          percentage: 0,
          url: el.url,
          status: 'success'
        }
      })
    }
  }

  @ViewChild('input')
  input: ElementRef

  handleClick(){
    this.input.nativeElement.click()
  }

  fileListChange(e){
    let files = e.target.files
    this.submitMulti(files)
    this.success.emit(this.fileList)
  }

  // 多个文件提交服务器
  submitMulti(fileArr){
    let formdata = new FormData()
    for(var i=0;i<fileArr.length;i++){
      formdata.append('file', fileArr[i])
      let file = {
        name: fileArr[i].name,
        size: fileArr[i].size || 0,
        type: '',
        raw: null,
        rename: '',
        percentage: 0,
        url: '',
        status: 'loading'
      }
      this.fileList.push(file)
      this.submit(file, formdata)
    }
  }
  // 单个文件提交服务器
  submit(file,formdata){
    this.request('http://192.168.3.187/api/public/api/upfile', formdata).subscribe((event) => {
      if(event['body']){
        file.rename = event['body'].data.file
        file.type = this.fetchType(file.rename.split('.')[1]),
        file.url = event['body'].data.path + '/' + event['body'].data.file
      }
      if( event['loaded'] && event['total']){
        file.percentage =  LyUploadComponent.updatePercentage(event)
        if(file.percentage == 100){
          file.status = 'success'
        }
      }
    })
  }

  // 获取文件类型
  fetchType(type){
    if(type == 'png' || type == 'jpg'){
      return 'image'
    }else if(type == 'svg'){
      return 'svg'
    }else if(type == 'gif'){
      return 'gif'
    }else if(type == 'docx'){
      return 'word'
    }else if(type == 'xls'){
      return 'excel'
    }else if(type == 'pdf'){
      return 'pdf'
    }else if(type == 'xls'){
      return 'excel'
    }else if(type == 'zip'){
      return 'zip'
    }else if(type == 'html'){
      return 'html'
    }else if(type == 'txt'){
      return 'txt'
    }
  }

  // 更新进度条
  static updatePercentage(res){
    const { loaded, total } = res;
    if(loaded == undefined || !total){
      return 0;
    }else{
      return Math.round(loaded / total * 100);
    }
  }

  // 单个删除，批量删除
  delete(name){
    this.http.get('http://192.168.3.187/api/public/api/delete', {
      params: {
        url: name
      }
    }).subscribe(res => {
      if(res['status'] == 1){
        name.split(',').forEach(el => {
          let idx = this.fileList.findIndex(item => item.rename == el)
          this.fileList.splice(idx,1)
        });
        this.remove.emit(this.fileList)
      }
    })
  }
  
  request(path, file){
    const req = new HttpRequest('POST', path, file, {
      reportProgress: true
    });
    return this.http.request(req);
  }
}


/*
      <i class="iconfont icon-svg mr-10" *ngIf="!type && file.type == 'svg'"></i>
      <i class="iconfont icon-word mr-10" *ngIf="!type && file.type == 'docx'"></i>
      <i class="iconfont icon-excel mr-10" *ngIf="!type && file.type == 'xls'"></i>
      <i class="iconfont icon-pdf mr-10" *ngIf="!type && file.type == 'pdf'"></i>
      <i class="iconfont icon-zip mr-10" *ngIf="!type && file.type == 'zip'"></i>
      <i class="iconfont icon-gif mr-10" *ngIf="!type && file.type == 'gif'"></i> */