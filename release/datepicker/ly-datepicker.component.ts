import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'ly-datepicker',
  styleUrls: ['./datepicker.scss'],
  template: `
  <div class="date">
    <ly-input icon="assets/img/date.png" [(model)]="model" [placeholder]="'选择日期'" (onFocus)="showPanel($event)" style="position:relative;z-index:2;"></ly-input>
    <div class="date-picker" [class.show]="show">
      <div class="date-picker-header row w">
        <div class="col v-m t-l">
          <div *ngIf="showDate && !hiddenDay">
            <a class="iconfont icon-home v-m" (click)="yearMinus()"></a>
            <a class="iconfont icon-left v-m" (click)="monthMinus()"></a>
          </div>
          <div *ngIf="showYear">
            <a class="iconfont icon-home v-m" (click)="minyearMinus()"></a>
          </div>
          <div *ngIf="showMonth">
            <a class="iconfont icon-home v-m" (click)="onlyYearMinus()"></a>
          </div> 
        </div>
        <div class="col v-m t-c title">
          <div *ngIf="showDate && !hiddenDay">
            <i class="v-m" (click)="renderYear()">{{chosenYear}}年</i>
            <i class="v-m" (click)="renderMonth()">{{chosenMonth}}月</i>
          </div>
          <div *ngIf="showYear">
            <i class="v-m" (click)="renderYear()">{{minYear}}-{{minYear+10}}年</i>
          </div>
          <div *ngIf="showMonth">
            <i class="v-m" (click)="renderYear()">{{chosenYear}}年</i>
          </div>
        </div>
        <div class="col v-m t-r">
          <div *ngIf="showDate && !hiddenDay">
            <a class="iconfont icon-right v-m" (click)="monthPlus()"></a>
            <a class="iconfont icon-end v-m" (click)="yearPlus()"></a>
          </div>
          <div *ngIf="showYear">
            <a class="iconfont icon-end v-m" (click)="minyearPlus()"></a>
          </div>
          <div *ngIf="showMonth">
            <a class="iconfont icon-end v-m" (click)="onlyYearPlus()"></a>
          </div> 
        </div>
      </div>
      <div class="date-picker-main">
        <table class="date-picker-table" *ngIf="showDate && !hiddenDay">
          <tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>
          <tr *ngFor="let week of dateArr">
            <td 
              *ngFor="let day of week" 
              [class.other]="day.type == 'prev' || day.type =='next'"
              [class.current]="chosenDate == day.date && day.type == 'current'"
              (click)="fetchDate(day.date)"
            >
              <span>{{day.date}}</span>
            </td>
          </tr>
        </table>
        <table class="date-picker-table large month" *ngIf="showMonth">
          <tr *ngFor="let item of monthArr">
            <td *ngFor="let month of item" (click)="fetchMonth(month.key)">
              {{month.name}}
            </td>
          </tr>
        </table>
        <table class="date-picker-table large year" *ngIf="showYear">
          <tr *ngFor="let item of yearArr">
            <td *ngFor="let year of item" (click)="fetchYear(year)">
              {{year}}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  `
})

// 页面其他位置点击事件，面板隐藏处理？

export class LyDatepickerComponent implements OnInit{
  @Input() model;
  @Input() hiddenDay;
  @Input() format;
  @Output() modelChange: EventEmitter<string> = new EventEmitter();

  show = false;
  showDate = true;
  showYear = false;
  showMonth = false;
  date;
  chosenYear; // 2017
  chosenMonth; // 12
  chosenDate;// 29
  chosen; // 2017-12-29
  minYear;

  dateArr = []
  yearArr = []
  monthArr = [
    [{name: '一月', key: 1},{name: '二月', key: 2},{name: '三月', key: 3},{name: '四月', key: 4}],
    [{name: '五月', key: 5},{name: '六月', key: 6},{name: '七月', key: 7},{name: '八月', key: 8}],
    [{name: '九月', key: 9},{name: '十月', key: 10},{name: '十一月', key: 11},{name: '十二月', key: 12}]
  ]

  showPanel(){
    this.show = true;
  }
  renderYear(){
    this.showYear = true;
    this.showMonth = false;
    this.showDate = false;

    for(let i = 0; i < 3 ; i++){
      this.yearArr[i] = []
      for(let j = 0; j < 4 ; j++){
        this.yearArr[i][j] = this.minYear + 4*i + j
      }
    }
  }
  renderMonth(){
    this.showMonth = true;
    this.showYear = false;
    this.showDate = false;
  }
  renderDate(){
    this.showDate = true;
    this.showYear = false;
    this.showMonth = false;

    let MonthDay = new Date(this.chosenYear, this.chosenMonth, 0).getDate(); // 当月天数
    let prevMonthDay = new Date(this.chosenYear, this.chosenMonth - 1, 0).getDate();// 上月天数
    let firstDayWeek = new Date(this.chosenYear, this.chosenMonth - 1, 1).getDay(); //当月1号周几
    for(let i = 0; i < 6; i++){
      this.dateArr[i] = []
      for(let j = 0; j < 7; j++){
        let real = 7*i + j - firstDayWeek + 1
        if(real <= 0){
          this.dateArr[i][j] = {
            date: real + prevMonthDay,
            type: 'prev'
          }
        }else if(real > MonthDay){
          this.dateArr[i][j] = {
            date: real - MonthDay,
            type: 'next'
          }
        }else{
          this.dateArr[i][j] = {
            date: real,
            type: 'current'
          }
        }
      } 
    }
  }

  ngOnInit(){
    this.date = this.model && this.model.length ? new Date(this.model) : new Date();
    this.chosenYear = this.date.getFullYear();
    this.chosenMonth = this.date.getMonth() + 1;
    this.chosenDate = this.date.getDate();
    this.minYear = Math.floor(this.chosenYear/10)*10
    this.chosen = this.hiddenDay ? this.chosenYear + '-' + this.chosenMonth : this.chosenYear + '-' + this.chosenMonth + '-' + this.chosenDate;

    if(this.format){
      this.model = this.formatDate(this.chosen, this.format)
    }
    
    if(this.hiddenDay){
      this.renderMonth()
    }else{
      this.renderDate()
    }
  }

  // 格式化日期
  formatDate(input,format){
    const d = new Date(input);
    if (String(d) === 'Invalid Date'){
      return '';
    }
    if(format == undefined || format == ''){
      return input;
    }
    const makeReg = (value) => new RegExp(`(${value})`);
    const keys = ['M+', 'd+', 'h+', 'm+', 's+', 'q+', 'S'];
    const values = [
        d.getMonth() + 1,
        d.getDate(),
        d.getHours(),
        d.getMinutes(),
        d.getSeconds(),
        Math.floor((d.getMonth() + 3) / 3),
        d.getMilliseconds(),
    ];
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let len = 0, key, val;
    while (len < keys.length) {
        key = keys[len];
        val = values[len];
        if (makeReg(key).test(format)) {
          format = ((format)).replace(RegExp.$1, (RegExp.$1.length === 1) ? val : ('00' + val).substr(('' + val).length));
        }
        len++;
    }
    return format;
  }
  

  fetchDate(date){
    this.show = false;
    this.chosenDate = date;
    this.chosen = this.chosenYear + '-' + this.chosenMonth + '-' + this.chosenDate
    this.model = this.formatDate(this.chosen, this.format)
    this.modelChange.emit(this.model)
  }

  fetchYear(year){
    this.chosenYear = year
    this.renderMonth()
  }

  fetchMonth(month){
    this.chosenMonth = month
    if(!this.hiddenDay){
      this.renderDate()
    }else{
      this.show = false;
      this.chosen = this.chosenYear + '-' + this.chosenMonth;
      this.model = this.formatDate(this.chosen, this.format)
      this.modelChange.emit(this.model)
    } 
  }

  yearMinus(){
    this.chosenYear --;
    this.renderDate()
  }
  minyearMinus(){
    this.minYear -= 10;
    this.renderYear()
  }
  yearPlus(){
    this.chosenYear ++;
    this.renderDate()
  }
  minyearPlus(){
    this.minYear += 10;
    this.renderYear()
  }
  onlyYearMinus(){
    this.chosenYear --;
  }
  onlyYearPlus(){
    this.chosenYear ++;
  }
  monthMinus(){
    this.chosenMonth --;
    if(this.chosenMonth > 1){
      this.chosenMonth --
    }else{
      this.chosenMonth = 12
      this.chosenYear --
    }
    this.renderDate()
  }
  monthPlus(){
    if(this.chosenMonth < 12 ){
      this.chosenMonth ++
    }else{
      this.chosenMonth = 1
      this.chosenYear ++
    }
    this.renderDate()
  }
}