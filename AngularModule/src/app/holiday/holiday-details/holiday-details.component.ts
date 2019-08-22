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
    this.listOfHolidays= this.holidayService.convertDataFromAPI(this.route.snapshot.data['holidaysList']);
  }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params)=>{
          // this.imageToShow=this.getImageFromService(params['id']);
          this.holidayId=params['id'];
          this.holiday=this.holidayService.getHolidayById(this.holidayId, this.listOfHolidays);
          // this.holiday= this.listOfHolidays[this.holidayId-1];
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
    console.log("Button: Edit\" ");
    this.router.navigate(['holidayDetails/'+this.holidayId+'/edit']);
  }

  deleteHoliday(){
    console.log("Button: delete");
    // console.log(this.listOfHolidays);
    this.holidayService.deleteHoliday(this.holidayId);
    // this.router.navigate(['cities/'+this.holiday.country]);
  }

}
