import {Component, Input, OnInit} from '@angular/core';
import {Holiday} from '../../holiday.model';
import {HolidayService} from '../../holiday.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-holiday-cities-item',
  templateUrl: './holiday-cities-item.component.html',
  styleUrls: ['./holiday-cities-item.component.css']
})
export class HolidayCitiesItemComponent implements OnInit {

  @Input() holiday: Holiday;

  constructor(private holidayService: HolidayService,private router: Router) { }

  ngOnInit() {
  }

  selectedCity(){
    console.log("Selected City " +this.holiday.country+" "+this.holiday.city+" "+this.holiday.priceForAdult);
    console.log(this.holiday);
    this.holidayService.citySelected.emit(this.holiday)
    this.router.navigate(["holidayDetails/"+this.holiday.id]);
  }
}
