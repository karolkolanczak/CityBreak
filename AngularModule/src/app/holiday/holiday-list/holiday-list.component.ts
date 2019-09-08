import {Component, Input, OnInit} from '@angular/core';
import {Holiday} from '../holiday.model';
import {HolidayService} from '../holiday.service';
import {DataStorageService} from '../../shared/data-storage.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../authorization/user.model';
import {AuthorizationService} from '../../authorization/authorization.service';


@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {

  listOfHolidays: Holiday[]=[];
  imageBlobUrl: any;
  isImageLoading: boolean;
  user:User;

  constructor(private authorizationService:AuthorizationService,private holidayService: HolidayService, private route: ActivatedRoute, private dataStorageService: DataStorageService,private router: Router) {
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

  }

  getListOfUniqueCountriesForHolidays(): Holiday[]{
    return this.holidayService.getListOfUniqueCountriesForHolidays(this.listOfHolidays);
  }

  redirectToAddHoliday(){
    this.router.navigate(['/holiday/add']);
  }

}
