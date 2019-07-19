import {Component, OnDestroy, OnInit} from '@angular/core';
import {HolidayService} from './holiday.service';
import {Holiday} from './holiday.model';
import {interval, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  selectedCity: Holiday;
  // listOfHolidays: Holiday[]=[];
  imageToShow: any;
  isImageLoading: boolean;
  dataSubscription: Subscription;
  dataData: Subscription;

  constructor(private holidayService: HolidayService) { }

  ngOnInit() {

    // this.holidayService.getListOfHolidays()
    //   .subscribe(data => {
    //     this.listOfHolidays=this.holidayService.convertData(data);
    // });

    this.holidayService.citySelected
      .subscribe(
        (holiday: Holiday)=>{
          this.imageToShow=this.getImageFromService(holiday.id);
          console.log("HOLIDAY ID: : "+holiday.id)
            if(this.imageToShow===undefined){
              setTimeout(()=>{
                this.selectedCity=new Holiday(holiday.id,holiday.city,holiday.country,holiday.description,holiday.priceForAdult,holiday.priceForChild,this.imageToShow,this.imageToShow)
                console.log("Clicked -  HolidayComponent " +this.selectedCity.country+" "+this.selectedCity.city+this.selectedCity.priceForAdult);
              }, 200);
          }
        }
      );
  }

  getImageFromService(holidayId: number) {
    console.log("HolidayID: "+holidayId);
      this.isImageLoading = true;
      this.holidayService.getImage(holidayId).subscribe(data => {
        this.createImageFromBlob(data);
        this.isImageLoading = false;
      }, error => {
        this.isImageLoading = false;
        console.log(error);
      });
    }

    createImageFromBlob(image: Blob) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
         this.imageToShow = reader.result;
      }, false);

      if (image) {
        reader.readAsDataURL(image);
      }
    }

  clicked(event){
    console.log("?????? CLICKED");
  }
}
