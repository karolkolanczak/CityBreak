import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../authorization/user.model';
import {AuthorizationService} from '../../authorization/authorization.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  user: User;

  private userSubscription: Subscription;

  constructor(private router:Router,private authorizationService:AuthorizationService) { }

  ngOnInit() {

    this.authorizationService.user
      .subscribe((data)=>{
        this.user=data;
      });
  }

  redirectToLoginPage(){
    this.router.navigate(["login"]);
  }

  logout(){
    this.authorizationService.logOut()
    this.router.navigate([""]);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
