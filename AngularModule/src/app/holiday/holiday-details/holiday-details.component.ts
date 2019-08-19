import {Component, Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {HolidayService} from '../holiday.service';
import {Holiday} from '../holiday.model';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})


export class HolidayDetailsComponent implements OnInit {
  holiday: Holiday;
  // @Input() holiday: Holiday;
  imageToShow: any;
  isImageLoading: boolean;
  listOfHolidays: Holiday[]=[];
  holidayId: number;
  text;

  constructor(private holidayService: HolidayService, private route:ActivatedRoute, private router: Router) {
    this.listOfHolidays= this.holidayService.convertData(this.route.snapshot.data['holidaysList']);
  }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params)=>{
          // this.imageToShow=this.getImageFromService(params['id']);
          this.holidayId=params['id'];
          this.holiday=this.getHolidayById(this.holidayId);
        }
      );
  }

  getImageFromService(holidayId:number) {
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

  redirectToEditHoliday(){
    console.log("Redirected to: ");
    this.router.navigate(['/holidayDetails/'+this.holidayId+'/edit']);
  }

  getHolidayById(holidayId: number): Holiday {
    let tempHoliday: Holiday = {} as Holiday;
    for (let value of this.listOfHolidays) {
      if (value.id == holidayId) {
        tempHoliday=value;
      }
    }
    return tempHoliday;
  }

}
