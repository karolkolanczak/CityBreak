import { Component, OnInit } from '@angular/core';
import {HolidayService} from '../holiday.service';
import {Holiday} from '../holiday.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-holiday-cities-list',
  templateUrl: './holiday-cities-list.component.html',
  styleUrls: ['./holiday-cities-list.component.css']
})
export class HolidayCitiesListComponent implements OnInit {

  listOfHolidays: Holiday[]=[];
  selectedCountry;

  constructor(private holidayService: HolidayService, private route:ActivatedRoute) {
  }

  ngOnInit() {

    this.holidayService.getListOfHolidays().subscribe(data => {
      this.listOfHolidays=this.holidayService.convertData(data);
    });

    this.route.params.subscribe(
        (params: Params)=>{
          // console.log("@@@@@@@@@@@: "+ params['country']);
          this.selectedCountry=params['country'];
        }
      );
  }

  getListOfUniqueCitiesInSelectedCountry(): string[]{
    // console.log("++++"+this.selectedCountry);
      return this.holidayService.getListOfUniqueCitiesInSelectedCountry(this.listOfHolidays,this.selectedCountry);
    // return this.holidayService.getListOfUniqueCitiesInSelectedCountry(this.listOfHolidays,"Spain");
  }


}
