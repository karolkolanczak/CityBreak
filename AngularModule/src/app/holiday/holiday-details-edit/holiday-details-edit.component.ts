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
    console.log(this.listOfHolidays);

    // this.listOfHolidays[this.holidayId-1]=this.holiday;
    // this.holidayService.setListOfAllfHolidays(this.listOfHolidays);
    // console.log(this.holiday);
    // this.holidayUpdateForm.reset();
    // this.router.navigate(["holidayDetails/"+this.holidayId]);
  }

  getListOfUniqueCountriesForHolidays(): Holiday[] {
    return this.holidayService.getListOfUniqueCountriesForHolidays(this.listOfHolidays);
  }

  uploadImageFile(event){
    this.notImageMessage=null;
    this.imgURL=null;
    this.tempHolidayImage=null
    console.log("UPLOAD");
    console.log(event.target.files[0])
    let file=event.target.files[0];
    this.imagePreview(file);
  }

  imagePreview(file){
    if (file.length === 0)
      return;

    var mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      this.notImageMessage = "Only images are supported.";
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
