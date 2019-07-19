import {Observable} from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {Holiday} from './holiday.model';

@Injectable()
export class HolidayService {

  private url: string;
  imageToShow: any;
  isImageLoading: boolean;

  citySelected = new EventEmitter<Holiday>();


  constructor(private http: HttpClient){
    this.url = 'http://localhost:8080/api/';
  }

  // http://localhost:8080/api/holidays
  getListOfHolidays(): Observable<any>{
    return this.http.get(this.url+'holidays');
  }

  getNew(): Observable<any>{
    return this.http.get(this.url+'holidays')
      // .pipe(map((response: Response) => <any>response.json()));
  }




  getImage(holidayId: number): Observable<Blob>{
    console.log(this.url+'image/'+holidayId);
    return this.http.get(this.url+'image/'+holidayId, { responseType: 'blob' });
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
  // convertData(data, image): Holiday[]{
  //   let listOfHolidays: Holiday[]=[];
  //     for(let value of data){
  //       let holidayTemp: Holiday=null;
  //       // this.getImageFromService();
  //       holidayTemp=new Holiday(value.id,value.city,value.country,value.holidayDetails.description,value.holidayDetails.priceForAdult,value.holidayDetails.priceForChild,image)
  //       listOfHolidays.push(holidayTemp)
  //     }
  //   return listOfHolidays;
  // }

  convertData(data): Holiday[]{
    let listOfHolidays: Holiday[]=[];
    for(let value of data){
      let holidayTemp: Holiday=null;

      holidayTemp=new Holiday(value.id,value.city,value.country,value.holidayDetails.description,value.holidayDetails.priceForAdult,value.holidayDetails.priceForChild,null,null)
      console.log("OOOO: "+value.id +" | "+value.city+" | "+value.country);
      listOfHolidays.push(holidayTemp)
    }
    return listOfHolidays;
  }

  // convertData2(data, image , lp): Holiday[]{

  convertData2(data, image , lp){

    console.log("INFO: "+lp);
    let listOfHolidays: Holiday[]=[];
    for(let value of data){
      let holidayTemp: Holiday=null;

      holidayTemp=new Holiday(value.id,value.city,value.country,value.holidayDetails.description,value.holidayDetails.priceForAdult,value.holidayDetails.priceForChild,image,null)
      console.log("OOOO: "+value.id +" | "+value.city+" | "+value.country);
      listOfHolidays.push(holidayTemp)
    }
    return listOfHolidays;
  }

  // getImageFromService() {
  //     this.isImageLoading = true;
  //     this.getImage().subscribe(data => {
  //       this.createImageFromBlob(data);
  //       this.isImageLoading = false;
  //       return this.imageToShow;
  //     }, error => {
  //       this.isImageLoading = false;
  //       console.log(error);
  //     });
  //
  //   }
  //
  //   createImageFromBlob(image: Blob) {
  //     let reader = new FileReader();
  //     reader.addEventListener("load", () => {
  //       this.imageToShow = reader.result;
  //     }, false);
  //
  //     if (image) {
  //       reader.readAsDataURL(image);
  //     }
  //   }g serve

}
