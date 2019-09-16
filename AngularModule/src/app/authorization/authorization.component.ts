import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from './user.model';
import {AuthorizationService} from './authorization.service';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {HeaderService} from '../holiday/header/header.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  @ViewChild('loginForm',{ static: false}) formToLogin:NgForm;
  userFromForm: User={} as User;
  user: User=new User(null,null,null,false);
  errorMessage:string;
  isPassword=true;

  constructor(private authorizationService:AuthorizationService, private router: Router, private headerService: HeaderService) {
  }

  ngOnInit() {
  }

  checkLoginData(){
    this.errorMessage=null;
    this.headerService.isLoading.next(true);
    if(!this.formToLogin.valid){
      return;
    }

   this.userFromForm.login=this.formToLogin.value.login;
   this.userFromForm.password=this.formToLogin.value.password;

   this.authorizationService.verifyUser(this.userFromForm)
     .subscribe((data)=>{
       if(data.userVerified==false){
         this.errorMessage="Login or password is incorrect"
       }
       if(data.userVerified==true){
         this.router.navigate(['']);
       }
     },
 errorMessage=>{
       this.errorMessage=errorMessage.statusText + " | "+ errorMessage.message;
       }
     );
    // this.formToLogin.reset();
  }

  showPassword(){
    this.isPassword = false;
  }

  hidePassword(){
    this.isPassword = true;
  }

}
