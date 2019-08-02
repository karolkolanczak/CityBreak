import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import {forkJoin, of, interval, from} from 'rxjs';
import { map, concatAll } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {Holiday} from './holiday.model';

@Injectable()
export class HolidayService {

  private url: string;

  citySelected = new EventEmitter<Holiday>();
  countrySelected = new EventEmitter<Holiday>();

  constructor(private http: HttpClient){
    this.url = 'http://localhost:8080/api/';
  }

  // http://localhost:8080/api/holidays
  getListOfHolidays(): Observable<any>{
    return this.http.get(this.url+'holidays');
  }

  getImage(holidayId: number): Observable<Blob>{
    console.log(this.url+'image/'+holidayId);
    return this.http.get(this.url+'image/'+holidayId, { responseType: 'blob' });
  }

  getListOfUniqueCountriesForHolidays(listOfHolidays: Holiday[]): Holiday[] {
    let tempListOfHolidays = [];

    for (let value of listOfHolidays) {
      if (value.capital === 'yes') {
        tempListOfHolidays.push(value);
      }
    }
    return tempListOfHolidays;
  }

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


  convertData(data): Holiday[]{
    let listOfHolidays: Holiday[]=[];
    for(let value of data){
      let holidayTemp: Holiday=null;

      holidayTemp=new Holiday(value.id,value.city,value.country,value.capital,value.holidayDetails.description,value.holidayDetails.priceForAdult,value.holidayDetails.priceForChild,null,null)
      console.log("OOOO: "+value.id +" | "+value.city+" | "+value.country);
      listOfHolidays.push(holidayTemp)
    }
    return listOfHolidays;
  }
}
