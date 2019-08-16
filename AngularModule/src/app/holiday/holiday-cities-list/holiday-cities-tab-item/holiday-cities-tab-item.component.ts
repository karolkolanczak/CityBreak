import {Component, Inject, Input, OnInit} from '@angular/core';
import {Holiday} from '../../holiday.model';
import {HolidayService} from '../../holiday.service';

@Component({
  selector: 'app-holiday-cities-tab-item',
  templateUrl: './holiday-cities-tab-item.component.html',
  styleUrls: ['./holiday-cities-tab-item.component.css']
})
export class HolidayCitiesTabItemComponent implements OnInit {

  @Input() holiday: Holiday;

  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
  }

  selectedCity(){
    // console.log("Clicked - HolidayCitiesTabItemComponent " +this.holiday.country+" "+this.holiday.city+" "+this.holiday.priceForAdult);
    this.holidayService.citySelected.emit(this.holiday)
   }


}
