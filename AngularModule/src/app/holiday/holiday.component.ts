import {Component, OnDestroy, OnInit} from '@angular/core';
import {HolidayService} from './holiday.service';
import {Holiday} from './holiday.model';
import {interval, Observable, Subscription} from 'rxjs';
import {JsonPipe} from '@angular/common';
import {DataStorageService} from '../shared/data-storage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  selectedCity: Holiday;
  selectedCountry;
  listOfHolidays: Holiday[]=[];
  isLoading=false;

  constructor( private holidayService: HolidayService, private dataStorageService: DataStorageService, private route: ActivatedRoute) {
    this.listOfHolidays=this.route.snapshot.data['holidaysList'];
  }

  ngOnInit() {

    this.holidayService.citySelected
      .subscribe(
        (holiday: Holiday)=>{
                this.selectedCity=new Holiday(holiday.id,holiday.city,holiday.country,holiday.capital,holiday.holidayDetailsId,holiday.description,holiday.priceForAdult,holiday.priceForChild,holiday.image)
        }
      );

    this.holidayService.countrySelected
      .subscribe((country )=>{
          this.selectedCountry=country;
        }
      );
  }
}
