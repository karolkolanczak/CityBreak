import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {Holiday} from './holiday.model';

@Injectable()
export class HolidayService {

  private url: string;

  citySelected = new EventEmitter<Holiday>();


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

  getListOfUniqueCitiesInSelectedCountry(listOfHolidays: Holiday[], country: string){
    let tempListOfHolidays=[];
    for( let value of listOfHolidays){
        if(value.country===country){
          tempListOfHolidays.push(value);
        }
    }
    // let listOfUniqueCitiesInSelectedCountry: string[] = [...new Set(tempListOfHolidays.map(item => item.city))];
    return tempListOfHolidays;
  };

  // converts data (model 'Holiday') from Rest from Spring to Angular mmodel of 'Holiday'
  convertData(data): Holiday[]{
    let listOfHolidays: Holiday[]=[];
      for(let value of data){
        let holidayTemp: Holiday=null;
        holidayTemp=new Holiday(value.city,value.country,value.holidayDetails.description,value.holidayDetails.priceForAdult,value.holidayDetails.priceForChild)
        listOfHolidays.push(holidayTemp)
      }
    return listOfHolidays;
  }


}
