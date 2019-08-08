import {Component, Input, OnInit} from '@angular/core';
import {Holiday} from '../holiday.model';
import {HolidayService} from '../holiday.service';
import {DataStorageService} from '../../shared/data-storage.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {

  listOfHolidays: Holiday[]=[];

  constructor(private holidayService: HolidayService, private route: ActivatedRoute, private dataStorageService: DataStorageService,) {
    this.listOfHolidays=this.route.snapshot.data['holidaysList'];
  }

  ngOnInit() {

    this.holidayService.listOfHolidaysChanged
      .subscribe(
        (listOfHolidays: Holiday[])=>{
          this.listOfHolidays=listOfHolidays;
        }
      );

    // this.holidayService.getListOfHolidays()
    //   .subscribe(data => {
    //   this.listOfHolidays=this.holidayService.convertData(data);
    // });


  }

  getListOfUniqueCountriesForHolidays(): Holiday[]{
    console.log("0 Unigue");
    console.log(this.listOfHolidays);
    return this.holidayService.getListOfUniqueCountriesForHolidays(this.listOfHolidays);
  }

}
