import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {tap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private url: string;
  initDataUser: User=new User(null,null,null,false);
  user=new BehaviorSubject<User>(this.initDataUser);

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/';
  }

  verifyUser(user:User): Observable<any>{
    return this.http.post(this.url+'user',user)
      .pipe(
        tap((userData)=>{
           let tempUser: User =new User(userData.id,userData.login,userData.password,userData.userVerified);
           this.user.next(tempUser);
           localStorage.setItem('userData',JSON.stringify(tempUser))
          }
        ));
  }

  logOut(){
    let tempUser: User=new User(null,null,null,false);
    this.user.next(tempUser);
    // localStorage.clear(); --> alternative
    localStorage.removeItem('userData');
  }

  autologin(){

    let userData=JSON.parse(localStorage.getItem('userData'));

    if(!userData ){
      return;
    }

    let tempUser: User =new User(userData._id,userData._login,userData._password,userData._userVerified);
    this.user.next(tempUser);
  }

}
