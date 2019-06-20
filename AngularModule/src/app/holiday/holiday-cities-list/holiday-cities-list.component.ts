import { Component, OnInit } from '@angular/core';
import {HolidayService} from '../holiday.service';
import {Holiday} from '../holiday.model';

@Component({
  selector: 'app-holiday-cities-list',
  templateUrl: './holiday-cities-list.component.html',
  styleUrls: ['./holiday-cities-list.component.css']
})
export class HolidayCitiesListComponent implements OnInit {

  listOfHolidays: Holiday[]=[];

  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
    this.holidayService.getListOfHolidays().subscribe(data => {
      this.listOfHolidays=this.holidayService.convertData(data);
    });
  }

  getListOfUniqueCitiesInSelectedCountry(): string[]{
      return this.holidayService.getListOfUniqueCitiesInSelectedCountry(this.listOfHolidays,"Spain");
  }
}
