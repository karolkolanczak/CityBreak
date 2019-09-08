import {Component, OnInit, ViewChild} from '@angular/core';
import {HolidayService} from '../holiday.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Holiday} from '../holiday.model';
import {AuthorizationService} from '../../authorization/authorization.service';

@Component({
  selector: 'app-holiday-add',
  templateUrl: './holiday-add.component.html',
  styleUrls: ['./holiday-add.component.css']
})
export class HolidayAddComponent implements OnInit {

  @ViewChild('holidayForm',{ static: false}) addHolidayForm:NgForm;
  holiday: Holiday={} as Holiday;
  listOfHolidays: Holiday[]=[];
  listOfUniqueCountriesForHolidays: Holiday[]=[];
  isLoading=false;

  public imagePath;
  imgURL: any;
  public notImageMessage: string;
  public exceedSizeLimitMessage: string;

  constructor(private holidayService: HolidayService,private route: ActivatedRoute, private router:Router,private authorizationService:AuthorizationService,) {
    this.listOfHolidays= this.holidayService.convertDataFromAPI(this.route.snapshot.data['holidaysList']);
    this.listOfUniqueCountriesForHolidays=this.getListOfUniqueCountriesForHolidays();
}

  ngOnInit() {
    this.holidayService.listOfHolidaysChanged.subscribe((data)=>{
        this.listOfHolidays=data;
      }
    );
    this.holidayService.addHolidayCompleted
      .subscribe((data)=>{
        this.router.navigate(["cities/"+data.country]);
      });
  }

  addHoliday(){
    this.holiday.city=this.holidayService.convertText(this.addHolidayForm.value.city)
    this.holiday.country=this.holidayService.convertText(this.addHolidayForm.value.country)
    this.holiday.priceForAdult=this.addHolidayForm.value.priceForAdult;
    this.holiday.priceForChild=this.addHolidayForm.value.priceForChild;
    this.holiday.description=this.addHolidayForm.value.description;
    this.holiday.image=this.imgURL;
    this.isLoading=true;
    this.holidayService.addHolidayToDatabase(this.holiday);
  }

  uploadImageFile(event){
    this.notImageMessage=null;
    this.exceedSizeLimitMessage=null;
    this.imgURL=null;
    this.addHolidayForm.form.controls['image'].setErrors( null);
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
      this.addHolidayForm.form.controls['image'].setErrors({'incorrect': true});
    }


    var mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      this.notImageMessage = "Only images are supported.";
      this.addHolidayForm.form.controls['image'].setErrors({'incorrect': true});
      return;
    }

    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  getListOfUniqueCountriesForHolidays(): Holiday[]{
    return this.holidayService.getListOfUniqueCountriesForHolidays(this.listOfHolidays);
  }
}

