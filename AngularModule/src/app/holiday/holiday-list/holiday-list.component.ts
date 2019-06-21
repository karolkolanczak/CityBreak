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


  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
    this.holidayService.getListOfHolidays().subscribe(data => {

      for(let value of data){

        let holidayTemp: Holiday=null;
        holidayTemp.country=value.country;
        holidayTemp.city=value.city;
        holidayTemp.description=value.holidayDetails.description;
        holidayTemp.priceForAdult=value.holidayDetails.priceForAdult
        holidayTemp.priceForChild=value.holidayDetails.priceForChild
        this.listOfHolidays.push(holidayTemp);
        console.log(holidayTemp.country+" "+ holidayTemp.city+" "+holidayTemp.priceForAdult+" "+holidayTemp.priceForChild)
      }

      // this.listOfHolidays = data;
    });
  }

  getListOfUniqueCountriesForHolidays(): string[]{
    return this.holidayService.getListOfUniqueCountriesForHolidays(this.listOfHolidays);
  }






}
