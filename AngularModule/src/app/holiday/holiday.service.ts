import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import {forkJoin, of, interval, from} from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { map, concatAll } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {Holiday} from './holiday.model';
import {Router} from '@angular/router';

@Injectable()
export class HolidayService {

  private url: string;
  citySelected = new EventEmitter<Holiday>();
  countrySelected = new EventEmitter<Holiday>();
  listOfHolidaysChanged= new Subject<Holiday[]>();
  deletionOfHolidayCompleted=new Subject<Holiday>();
  updateOfHolidayCompleted=new Subject<Holiday>();

  constructor(private http: HttpClient,private router:Router){
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
    let tempListOfHolidays: Holiday []= [];
    let listOfUniqueCountries: string[] = [...new Set(listOfHolidays.map(value => value.country))];
    for (let uniqueCountry of listOfUniqueCountries) {
          for(let value of listOfHolidays){
            // value.country!=='Add holiday' ==> in json init data it indicates "add new Holiday" data
            if(value.country===uniqueCountry && value.country!=='Add holiday'){
              tempListOfHolidays.push(value);
              break;
            }
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

  convertDataFromAPI(data): Holiday[]{
    let listOfHolidays: Holiday[]=[];
    for(let value of data){
      let holidayTemp: Holiday={} as Holiday;
      let base64;
      let urlImage;
      // console.log( image instanceof Blob)

      if(value.imagePrimitveBytes!=undefined){
         base64 =value.imagePrimitveBytes
         urlImage = 'data:image/jpeg;base64,' + base64;
      }
      else{
        urlImage=null;
      }

      holidayTemp=new Holiday(value.id,value.city,value.country,value.capital,value.holidayDetails.id, value.holidayDetails.description,value.holidayDetails.priceForAdult,value.holidayDetails.priceForChild,urlImage)
      listOfHolidays.push(holidayTemp)
    }
    return listOfHolidays;
  }

  convertDataToAPI(holiday:Holiday){

    // Base64 url of image trimmed one without data:image/png;base64
    // base64="/9j/4AAQSkZJRgABAQE...";
    if(holiday.image !=undefined){
      let imgURL =holiday.image;
      var base64 = imgURL.split(';base64,').pop();
    }

    let dataToApi: any;
    dataToApi={
      id:holiday.id,
      city: holiday.city,
      country: holiday.country,
      capital: holiday.capital,
      holidayDetails: {
        id: holiday.holidayDetailsId,
        description: holiday.description,
        priceForAdult: holiday.priceForAdult,
        priceForChild: holiday.priceForChild
      },
      image:base64
    };
    return dataToApi;
  }

  addHolidayToDatabase(holiday:Holiday){

    let tempHoliday=this.convertDataToAPI(holiday);

    this.http.post(this.url+'addHoliday',tempHoliday)
      .subscribe(data=>{
        console.log("Add: response from Database: : ");
        console.log(data);
      },
      error=>{console.log(error.message);
      })
  }

  updateHolidayInDatabase(holiday:Holiday){

    let tempHoliday=this.convertDataToAPI(holiday);

    this.http.put(this.url+'updateHoliday',tempHoliday)
      .subscribe(data=>{
        console.log("Update: response from Database: ");
        console.log(data);
        let tempHolidayFromDatabase=this.convertDataFromAPI([data])[0]
        console.log("CONVERTED: ");
        console.log(tempHolidayFromDatabase);
          this.updateOfHolidayCompleted.next(tempHolidayFromDatabase);
      },
      error=>{console.log(error.message);
      })
  }

  deleteHoliday(holiday: Holiday){

    let tempHoliday: Holiday=holiday;

    this.http.delete(this.url+'deleteHoliday/'+holiday.id)
      .subscribe(data=>{
        console.log("Delete: response from Database: ");
        console.log(data);
        this.deletionOfHolidayCompleted.next(tempHoliday);
      },
      error=>{console.log(error.message);
        this.deletionOfHolidayCompleted.next(tempHoliday);
      })
  }

  getHolidayById(holidayId:number, listOfHolidays: Holiday []): Holiday{
    let holidayTemp: Holiday={} as Holiday;
    for(let value of listOfHolidays){
      if(value.id==holidayId){
        holidayTemp=value;
      }
    }
    return holidayTemp;
  }

  public requestDataFromMultipleSources(listOfHolidays:Holiday[]): Observable<any[]> {
    let tempListOfResponses = [];
    for( let value of listOfHolidays){
      tempListOfResponses.push(this.http.get(this.url+'image/'+value.id, { responseType: 'blob' }));
    }
    // let response1 =  this.http.get(this.url+'image/'+holidayId, { responseType: 'blob' });
    // let response2 = this.http.get(requestUrl2);
    // let response3 = this.http.get(requestUrl3);
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    // return forkJoin([response1, response2, response3]);
    return forkJoin(tempListOfResponses);
  }

  // getData(){
  //   return this.http.get(this.url+'holidays')
  //     .pipe(map(initData=>{
  //
  //       for(let value of initData){
  //         console.log(value.image)
  //         .pipe(map(value.image))
  //       }
  //         return initData;
  //       }))
  //     .subscribe(data=>{
  //       console.log(data);
  //     })
  // }

}
