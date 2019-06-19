import { Component, OnInit } from '@angular/core';
import {Holiday} from '../holiday.model';
import {HolidayService} from '../holiday.service';


@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {

  listOfHolidays: Holiday[]=[];
  listOfCountriesForHolidays: string []=[];

  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
    this.holidayService.getListOfHolidays().subscribe(data => {
      this.listOfHolidays = data;
    });
  }

  getListOfUniqueCountriesForHolidays(): string[]{
    return this.holidayService.getListOfUniqueCountriesForHolidays(this.listOfHolidays);
  }







}
