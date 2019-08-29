import {Component, OnInit, ViewChild} from '@angular/core';
import {HolidayService} from '../holiday.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Holiday} from '../holiday.model';

@Component({
  selector: 'app-holiday-details-edit',
  templateUrl: './holiday-details-edit.component.html',
  styleUrls: ['./holiday-details-edit.component.css']
})
export class HolidayDetailsEditComponent implements OnInit {

  @ViewChild('holidayUpdateForm', {static: false}) updateHolidayForm: NgForm;
  holiday: Holiday = {} as Holiday;
  listOfHolidays: Holiday[] = [];
  listOfUniqueCountriesForHolidays: Holiday[] = [];
  holidayId: number;
  public imagePath;
  imgURL: any;
  public notImageMessage: string;
  public exceedSizeLimitMessage: string;
  tempHolidayImage;

  constructor(private holidayService: HolidayService, private route: ActivatedRoute, private router: Router) {
    this.listOfHolidays = this.holidayService.convertDataFromAPI(this.route.snapshot.data['holidaysList']);
    this.listOfUniqueCountriesForHolidays = this.getListOfUniqueCountriesForHolidays();
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params)=>{
          this.holidayId=params['id'];
          this.holiday=this.holidayService.getHolidayById(this.holidayId, this.listOfHolidays);
          this.tempHolidayImage=this.holiday.image;
          console.log("Edited image");
          // console.log(this.holiday.image);
        },
        error=>{console.log(error.message)}
      );

    this.holidayService.listOfHolidaysChanged.subscribe((data)=>{
        this.listOfHolidays=data;
      },
      error=>{console.log(error.message)}
    );

    this.holidayService.updateOfHolidayCompleted
      .subscribe((data)=>{
        this.router.navigate(["holidayDetails/"+data.id]);
    })
  }

  updateHoliday() {
    console.log("Updated Holiday: ");
    this.holiday.city = this.updateHolidayForm.value.city;
    this.holiday.country = this.updateHolidayForm.value.country;
    this.holiday.priceForAdult = this.updateHolidayForm.value.priceForAdult;
    this.holiday.priceForChild = this.updateHolidayForm.value.priceForChild;
    this.holiday.description = this.updateHolidayForm.value.description;
    this.holiday.image=this.imgURL;

    this.holidayService.updateHolidayInDatabase(this.holiday)

    // this.router.navigate(["holidayDetails/"+this.holidayId]);
    // this.holidayUpdateForm.reset();
  }

  getListOfUniqueCountriesForHolidays(): Holiday[] {
    return this.holidayService.getListOfUniqueCountriesForHolidays(this.listOfHolidays);
  }

  uploadImageFile(event){
    this.notImageMessage=null;
    this.exceedSizeLimitMessage=null;
    this.imgURL=null;
    this.tempHolidayImage=null;
    this.updateHolidayForm.form.controls['image'].setErrors( null);
    let file=event.target.files[0];
    this.imagePreview(file);
  }

  imagePreview(file){
    if (file.length === 0)
      return;

    let imgSizeBajt=file.size;
    let imgSizeKiloBajt=imgSizeBajt/1024;
    let imgSizeMegaBajt=imgSizeKiloBajt/1024
    console.log("imgSizeBajt: "+imgSizeBajt);
    console.log("imgSizeKiloBajt: "+imgSizeKiloBajt);
    console.log("imgSizeMegaBajt: "+imgSizeMegaBajt);

    if(imgSizeMegaBajt>=3.9){
      this.exceedSizeLimitMessage="Max size of image is: 3.9 MB | yours is: "+(Math.round(imgSizeMegaBajt * 100) / 100)+" MB"
      this.updateHolidayForm.form.controls['image'].setErrors({'incorrect': true});
    }

    var mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      this.notImageMessage = "Only images are supported.";
      this.updateHolidayForm.form.controls['image'].setErrors({'incorrect': true});
      return;
    }

    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
}
