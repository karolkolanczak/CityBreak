import {Component, OnInit, ViewChild} from '@angular/core';
import {HolidayService} from '../holiday.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Holiday} from '../holiday.model';

@Component({
  selector: 'app-holiday-details-edit',
  templateUrl: './holiday-details-edit.component.html',
  styleUrls: ['./holiday-details-edit.component.css']
})
export class HolidayDetailsEditComponent implements OnInit {

  @ViewChild('holidayUpdateForm', {static: false}) updateHolidayForm: NgForm;
  holiday: Holiday = {} as Holiday;
  listOfHolidays: Holiday[] = [];
  listOfUniqueCountriesForHolidays: Holiday[] = [];
  holidayId: number;

  constructor(private holidayService: HolidayService, private route: ActivatedRoute, private router: Router) {
    this.listOfHolidays = this.holidayService.convertDataFromAPI(this.route.snapshot.data['holidaysList']);
    this.listOfUniqueCountriesForHolidays = this.getListOfUniqueCountriesForHolidays();
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params)=>{
          // this.imageToShow=this.getImageFromService(params['id']);
          this.holidayId=params['id'];
          // this.holiday=this.holidayService.getHolidayById(this.holidayId, this.listOfHolidays);
          this.holiday= this.listOfHolidays[this.holidayId-1];
        }
      );

    this.holidayService.listOfHolidaysChanged.subscribe((data)=>{
        this.listOfHolidays=data;
      }
    );
  }

  updateHoliday() {
    console.log("Updated Holiday: ");
    this.holiday.city = this.updateHolidayForm.value.city;
    this.holiday.country = this.updateHolidayForm.value.country;
    this.holiday.priceForAdult = this.updateHolidayForm.value.priceForAdult;
    this.holiday.priceForChild = this.updateHolidayForm.value.priceForChild;
    this.holiday.description = this.updateHolidayForm.value.description;

    this.listOfHolidays[this.holidayId-1]=this.holiday;
    this.holidayService.setListOfAllfHolidays(this.listOfHolidays);
    // console.log(this.holiday);
    console.log(this.listOfHolidays);
    this.holidayService.updateHolidayInDatabase(this.holiday)
    // this.holidayUpdateForm.reset();
    // this.router.navigate(["holidayDetails/"+this.holidayId]);
  }

  getListOfUniqueCountriesForHolidays(): Holiday[] {
    return this.holidayService.getListOfUniqueCountriesForHolidays(this.listOfHolidays);
  }

}
