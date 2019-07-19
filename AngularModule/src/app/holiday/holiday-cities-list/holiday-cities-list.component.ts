import { Component, OnInit } from '@angular/core';
import {HolidayService} from '../holiday.service';
import {Holiday} from '../holiday.model';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-holiday-cities-list',
  templateUrl: './holiday-cities-list.component.html',
  styleUrls: ['./holiday-cities-list.component.css']
})
export class HolidayCitiesListComponent implements OnInit {

  listOfHolidays: Holiday[]=[];
  listOfHolidays2: Holiday[]=[];
  imageToShow: any;
  isImageLoading: boolean;


  constructor(private holidayService: HolidayService) {


  }

  ngOnInit() {

    // this.imageToShow=this.holidayService.getImageFromService();
    // this.getImageFromService(3);
    //
    // this.holidayService.getListOfHolidays().subscribe(data => {
    //   this.listOfHolidays=this.holidayService.convertData(data, this.imageToShow);
    // });
    this.holidayService.getListOfHolidays().subscribe(data => {
      this.listOfHolidays=this.holidayService.convertData(data);
      // console.log("SIZE: listOfHolidays:  "+this.listOfHolidays.length);
      //
      // for(let value of this.listOfHolidays){
      //   console.log("SIZE: listOfHolidays:  "+this.listOfHolidays.length +" | Checking id: "+value.id);
      //   this.getImageFromService(value.id);
      //   // this.listOfImages.push(this.imageToShow);
      //
      //   let holidayTemp: Holiday=null;
        //
        // holidayTemp=new Holiday(value.id+1,value.city,value.country,value.description,value.priceForAdult,value.priceForChild,this.imageToShow,this.imageToShow);

        // this.listOfHolidays.push(holidayTemp);
        // console.log("AAAAA: "+holidayTemp.id +" | "+holidayTemp.city+" | "+holidayTemp.country);

      // }
    });





//
//     for(let value of this.listOfHolidays){
//       this.getImageFromService(value.id);
//       this.listOfImages.push(this.imageToShow);
//     }
//
// console.log("IMAGES: "+this.listOfImages);





  }

  getListOfUniqueCitiesInSelectedCountry(): string[]{
      return this.holidayService.getListOfUniqueCitiesInSelectedCountry(this.listOfHolidays,"Spain");
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

    // getListOfImages(){
    //
    //     for( let value of this.listOfHolidays){
    //       this.getImageFromService(value.id)
    //       this.listOfImages.push(this.imageToShow);
    //     }
    //
    //    return this.listOfImages;
    // }
}
