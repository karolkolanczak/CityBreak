import { Component, OnInit } from '@angular/core';
import {HolidayService} from '../holiday.service';
import {Holiday} from '../holiday.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HeaderService} from '../header/header.service';

@Component({
  selector: 'app-holiday-cities-list',
  templateUrl: './holiday-cities-list.component.html',
  styleUrls: ['./holiday-cities-list.component.css']
})
export class HolidayCitiesListComponent implements OnInit {

  listOfHolidays: Holiday[]=[];
  selectedCountry: string;

  constructor(private holidayService: HolidayService, private route:ActivatedRoute, private router: Router,private headerService:HeaderService) {
    this.listOfHolidays= this.holidayService.convertDataFromAPI(this.route.snapshot.data['holidaysList']);
    this.headerService.isLoading.next(false);
  }

  ngOnInit() {
    this.route.params.subscribe(
        (params: Params)=>{
          this.selectedCountry=params['country'];
        }
      );
  }

  getListOfUniqueCitiesInSelectedCountry(): string[]{
      return this.holidayService.getListOfUniqueCitiesInSelectedCountry(this.listOfHolidays,this.selectedCountry);
  }

  redirectToHomePage(){
    this.headerService.isLoading.next(true);
    this.router.navigate([""]);
  }

}
