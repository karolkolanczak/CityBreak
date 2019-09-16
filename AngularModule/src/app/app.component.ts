import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from './authorization/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authorizationService:AuthorizationService){
  }

  ngOnInit(): void {
    this.authorizationService.autologin()
  }
}
