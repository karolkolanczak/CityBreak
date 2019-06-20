import {Component, Input, OnInit} from '@angular/core';
import {HolidayService} from '../holiday.service';
import {Holiday} from '../holiday.model';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {

  @Input() holiday: Holiday;

  constructor() { }

  ngOnInit() {

  }

}
