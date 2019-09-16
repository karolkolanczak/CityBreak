import {Component, Input, OnInit} from '@angular/core';
import {Holiday} from '../holiday.model';
import {HolidayService} from '../holiday.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../authorization/user.model';
import {AuthorizationService} from '../../authorization/authorization.service';
import {HeaderService} from '../header/header.service';


@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {

  listOfHolidays: Holiday[]=[];
  user:User;

  constructor(private authorizationService:AuthorizationService,private holidayService: HolidayService, private route: ActivatedRoute,private router: Router,private headerService:HeaderService) {
    this.listOfHolidays= this.holidayService.convertDataFromAPI(this.route.snapshot.data['holidaysList']);
  }

  ngOnInit() {

    this.holidayService.listOfHolidaysChanged
      .subscribe(
        (listOfHolidays: Holiday[])=>{
          this.listOfHolidays=listOfHolidays;
        }
      );

    this.authorizationService.user
      .subscribe((data)=>{
        this.user=data;
        }
      );

    this.route.data.subscribe((data) => {
      // when init data uploads spinner can be turned off
      this.headerService.isLoading.next(false);
    })
  }

  getListOfUniqueCountriesForHolidays(): Holiday[]{
    return this.holidayService.getListOfUniqueCountriesForHolidays(this.listOfHolidays);
  }

  redirectToAddHoliday(){
    this.headerService.isLoading.next(true);
    this.router.navigate(['/holiday/add']);
  }

}
