import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthorizationService} from './authorization.service';
import {map} from 'rxjs/operators';

@Injectable({  providedIn: 'root'})
export class AuthorizationGuard implements CanActivate {

  constructor(private authorizationService: AuthorizationService, private router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, router: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {

    return this.authorizationService.user
      .pipe(map(
        (data)=>{
          // console.log("Authorization checking");
          if (data.userVerified==true) {
            console.log("User is authenticated");
            return true;
          }

          if(data.userVerified==false){
            console.log("User is NOT authenticated");
            this.router.navigate(['login']);
            // this.router.createUrlTree(['/login']);
            return false;
          }
        }
      ));
  }
}
