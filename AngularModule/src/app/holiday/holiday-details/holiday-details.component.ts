import {Component, Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {HolidayService} from '../holiday.service';
import {Holiday} from '../holiday.model';
import {ActivatedRoute, Params,Router} from '@angular/router';
import {AuthorizationService} from '../../authorization/authorization.service';
import {User} from '../../authorization/user.model';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})


export class HolidayDetailsComponent implements OnInit {
  holiday: Holiday;
  initListOfHolidays: Holiday[]=[];
  refreschedListOfHolidays: Holiday[]=[];
  holidayId: number;
  isLoading=false;
  user: User=new User(null,null,null,false);

  constructor(private holidayService: HolidayService, private route:ActivatedRoute,private router: Router,private authorizationService:AuthorizationService ) {
    this.initListOfHolidays= this.holidayService.convertDataFromAPI(this.route.snapshot.data['holidaysList']);
  }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.holidayId = params['id'];
          this.holiday = this.holidayService.getHolidayById(this.holidayId, this.initListOfHolidays);
        },
        error => {
          console.log(error.message)
        }
      );

    this.holidayService.deletionOfHolidayCompleted
      .subscribe((tempHoliday) => {
        this.holidayService.getListOfHolidays().subscribe((data) => {
            this.refreschedListOfHolidays = data;
            this.navigationAfterDelete(tempHoliday);
          })}
      );

    this.authorizationService.user
      .subscribe((data)=>{
        this.user=data;
      });

  }

  redirectToEditHoliday(){
    this.router.navigate(['holidayDetails/'+this.holidayId+'/edit']);
  }

  deleteHoliday(){
    this.isLoading=true;
    this.holidayService.deleteHoliday(this.holiday)
  }

  navigationAfterDelete(tempHoliday: Holiday){

    let doesCountryHaveItemsAfterDeletionOfdHoliday=null;

    for(let value of  this.refreschedListOfHolidays){
      if(value.country == tempHoliday.country){
        doesCountryHaveItemsAfterDeletionOfdHoliday=true;
        break;
      }
      if(value.country != tempHoliday.country){
        doesCountryHaveItemsAfterDeletionOfdHoliday=false;
      }
    }

    if(doesCountryHaveItemsAfterDeletionOfdHoliday==false){
      this.router.navigate(['/']);
    }
    if(doesCountryHaveItemsAfterDeletionOfdHoliday==true){
      this.router.navigate(['cities/'+tempHoliday.country]);
    }
  }

}
