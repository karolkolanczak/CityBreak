import {Component, OnDestroy, OnInit} from '@angular/core';
import {HolidayService} from './holiday.service';
import {Holiday} from './holiday.model';
import {interval, Observable, Subscription} from 'rxjs';
import {JsonPipe} from '@angular/common';
import {DataStorageService} from '../shared/data-storage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  selectedCity: Holiday;
  selectedCountry;
  // imageToShow: any;
  // isImageLoading: boolean;
  listOfHolidays: Holiday[]=[];

  constructor(private router: Router, private holidayService: HolidayService, private dataStorageService: DataStorageService, private route: ActivatedRoute) {
    this.listOfHolidays=this.route.snapshot.data['holidaysList'];
  }

  ngOnInit() {

    // this.holidayService.getListOfHolidays()
    //   .subscribe(data => {
    //     this.listOfHolidays=this.holidayService.convertDataFromAPI(data);
    //   });

    this.holidayService.citySelected
      .subscribe(
        (holiday: Holiday)=>{
                this.selectedCity=new Holiday(holiday.id,holiday.city,holiday.country,holiday.capital,holiday.holidayDetailsId,holiday.description,holiday.priceForAdult,holiday.priceForChild,holiday.image)
        }
      );

    this.holidayService.countrySelected
      .subscribe((country )=>{
          this.selectedCountry=country;
          // console.log("Holiday Component: clicked -  "+this.selectedCountry);
        }
      );
  }

  // getImageFromService(holidayId: number) {
  //   // console.log("HolidayID: "+holidayId);
  //     this.isImageLoading = true;
  //     this.holidayService.getImage(holidayId).subscribe(data => {
  //       this.createImageFromBlob(data);
  //       this.isImageLoading = false;
  //     }, error => {
  //       this.isImageLoading = false;
  //       console.log(error);
  //     });
  //   }
  //
  //
  //   createImageFromBlob(image: Blob) {
  //     // console.log( image instanceof Blob)
  //     let reader = new FileReader();
  //     reader.addEventListener("load", () => {
  //        this.imageToShow = reader.result;
  //     }, false);
  //
  //     if (image) {
  //       reader.readAsDataURL(image);
  //     }
  //   }

    addCountry(){
      let tempHoliday: Holiday = {} as Holiday;
      tempHoliday=new Holiday(10,'gdynia',"Poland",'yes',100,'ladnie bardzo ladnie',100,80,null);
      this.listOfHolidays.push(tempHoliday);
      this.holidayService.setListOfAllfHolidays(this.listOfHolidays);
    }

  redirectToAddHoliday(){
    this.router.navigate(['/holiday/add']);
  }

}
