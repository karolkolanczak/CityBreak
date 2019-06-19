import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Holiday} from './holiday.model';

@Injectable()
export class HolidayService {

  private url: string;

  constructor(private http: HttpClient){
    this.url = 'http://localhost:8080/api/';
  }

  // http://localhost:8080/api/holidays
  getListOfHolidays(): Observable<any>{
    return this.http.get(this.url+'holidays');
  }

  getListOfUniqueCountriesForHolidays(listOfHolidays: Holiday[]): string[]{
    let listOfUniqueCountriesForHolidays: string[] = [...new Set(listOfHolidays.map(item => item.country))];
    return listOfUniqueCountriesForHolidays;
  };

}
