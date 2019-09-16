import {Component, Input, OnInit} from '@angular/core';
import {Holiday} from '../../holiday.model';
import {HolidayService} from '../../holiday.service';
import {Router} from '@angular/router';
import {HeaderService} from '../../header/header.service';

@Component({
  selector: 'app-holiday-cities-item',
  templateUrl: './holiday-cities-item.component.html',
  styleUrls: ['./holiday-cities-item.component.css']
})
export class HolidayCitiesItemComponent implements OnInit {

  @Input() holiday: Holiday;

  constructor(private holidayService: HolidayService,private router: Router,private headerService:HeaderService) { }

  ngOnInit() {
  }

  selectedCity(){
    this.headerService.isLoading.next(true);
    this.holidayService.citySelected.emit(this.holiday)
    this.router.navigate(["holidayDetails/"+this.holiday.id]);
  }
}
