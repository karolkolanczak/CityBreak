import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HolidayService} from '../holiday/holiday.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private url: string;

  constructor(private http: HttpClient, private holidayService: HolidayService) {
    this.url = 'http://localhost:8080/api/';
  }

  getListOfAllHolidays(): Observable<any>{
      return this.http.get(this.url+'holidays')
  }
}
