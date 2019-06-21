import { Component, OnInit } from '@angular/core';
import {HolidayService} from './holiday.service';
import {Holiday} from './holiday.model';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  selectedCity: Holiday;

  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
    this.holidayService.citySelected

      .subscribe(
        (holiday: Holiday)=>{
          this.selectedCity=holiday;
          console.log("Clicked -  HolidayComponent " +this.selectedCity.country+" "+this.selectedCity.city+this.selectedCity.priceForAdult);
        }
      );
  }

}
