import {Component, Input, OnInit} from '@angular/core';
import {Holiday} from '../../holiday.model';
import {HolidayService} from '../../holiday.service';
import {Router} from '@angular/router';
import {HeaderService} from '../../header/header.service';

@Component({
  selector: 'app-holiday-item',
  templateUrl: './holiday-item.component.html',
  styleUrls: ['./holiday-item.component.css']
})
export class HolidayItemComponent implements OnInit {

  @Input() holiday:Holiday;
  constructor(private holidayService: HolidayService,private router: Router,private headerService:HeaderService) { }

  ngOnInit() {
  }

  selectedCountry(){
    this.headerService.isLoading.next(true);
    this.holidayService.countrySelected.emit(this.holiday)
    this.router.navigate(["cities/"+this.holiday.country]);
  }


}
