```html
<ly-datepicker></ly-datepicker>
<ly-datepicker [(model)]="date"></ly-datepicker> 
<ly-datepicker [(model)]="date" (modelChange)="handle($event)"></ly-datepicker>  
```