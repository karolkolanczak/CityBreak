import {Component, OnInit, ViewChild} from '@angular/core';
import {HolidayService} from '../holiday.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Holiday} from '../holiday.model';

@Component({
  selector: 'app-holiday-add',
  templateUrl: './holiday-add.component.html',
  styleUrls: ['./holiday-add.component.css']
})
export class HolidayAddComponent implements OnInit {
// alternative 1
  @ViewChild('holidayForm',{ static: false}) addHolidayForm:NgForm;
  holiday: Holiday={} as Holiday;
  listOfHolidays: Holiday[]=[];
  listOfUniqueCountriesForHolidays: Holiday[]=[];

  constructor(private holidayService: HolidayService,private route: ActivatedRoute) {
    this.listOfHolidays= this.holidayService.convertData(this.route.snapshot.data['holidaysList']);
    this.listOfUniqueCountriesForHolidays=this.getListOfUniqueCountriesForHolidays();
    // this.addHolidayForm.value.city="Gdynia"
  }

  ngOnInit() {

  }
  // alternative 2
  // addHoliday(form:NgForm){
  //   console.log("Added Holiday: ");
  //   console.log(form);
  // }

// alternative 1
  addHoliday(){
    console.log("Added Holiday: ");
    this.holiday.city=this.addHolidayForm.value.city;
    this.holiday.country=this.addHolidayForm.value.country;
    this.holiday.priceForAdult=this.addHolidayForm.value.priceForAdult;
    this.holiday.priceForChild=this.addHolidayForm.value.priceForChild;
    this.holiday.description=this.addHolidayForm.value.description;
    console.log(this.holiday);
    // this.addHolidayForm.reset();
  }

  getListOfUniqueCountriesForHolidays(): Holiday[]{
    return this.holidayService.getListOfUniqueCountriesForHolidays(this.listOfHolidays);
  }
}

