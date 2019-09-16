import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../authorization/user.model';
import {AuthorizationService} from '../../authorization/authorization.service';
import {Subscription} from 'rxjs';
import {HeaderService} from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  user: User;
  isLoading=true;
  private userSubscription: Subscription;

  constructor(private router:Router,private authorizationService:AuthorizationService, private headerService: HeaderService) {
  }

  ngOnInit() {

    this.authorizationService.user
      .subscribe((data)=>{
        this.user=data;
      });

    this.headerService.isLoading
      .subscribe(data=>{
        this.isLoading=data;
      })
  }

  redirectToLoginPage(){
    this.router.navigate(["login"]);
  }

  redirectToHomePage(){
    if(this.router.url!="/"){
      this.isLoading=true;
    }
    this.router.navigate([""]);
  }

  logout(){
    if(this.router.url!="/"){
      this.isLoading=true;
    }
    this.authorizationService.logOut()
    this.router.navigate([""]);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
