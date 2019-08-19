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
  selectedCountry: string;

  constructor(private holidayService: HolidayService, private route:ActivatedRoute) {
    this.listOfHolidays= this.holidayService.convertData(this.route.snapshot.data['holidaysList']);
  }

  ngOnInit() {
    this.route.params.subscribe(
        (params: Params)=>{
          console.log("Param country selected: : "+ params['country']);
          this.selectedCountry=params['country'];
        }
      );
  }

  getListOfUniqueCitiesInSelectedCountry(): string[]{
      return this.holidayService.getListOfUniqueCitiesInSelectedCountry(this.listOfHolidays,this.selectedCountry);
  }


}
