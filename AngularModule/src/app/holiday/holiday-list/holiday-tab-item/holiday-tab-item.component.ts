import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-holiday-tab-item',
  templateUrl: './holiday-tab-item.component.html',
  styleUrls: ['./holiday-tab-item.component.css']
})
export class HolidayTabItemComponent implements OnInit {

  @Input() country;

  constructor() { }

  ngOnInit() {
  }

}
