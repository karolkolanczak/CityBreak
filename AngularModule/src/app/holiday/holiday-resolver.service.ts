import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Holiday} from './holiday.model';
import {Observable} from 'rxjs';
import {HolidayService} from './holiday.service';

@Injectable({
  providedIn: 'root'
})
export class HolidayResolverService implements Resolve<Holiday[]>{

  constructor(private holidayService:HolidayService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Holiday[]> {
    return this.holidayService.getListOfHolidays();
  }
}
