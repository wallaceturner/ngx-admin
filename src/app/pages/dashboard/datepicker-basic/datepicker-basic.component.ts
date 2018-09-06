import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'datepicker-basic',
  templateUrl: './datepicker-basic.component.html'
})
export class DatepickerBasicComponent implements OnInit {



  ngOnInit() {
  }
  model: NgbDateStruct;
  date: {year: number, month: number};
  time = {hour: 13, minute: 30};

  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}


/*
import {Component} from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-basic',
  templateUrl: './datepicker-basic.component.html'
})
export class DatepickerBasicComponent {


}

*/
