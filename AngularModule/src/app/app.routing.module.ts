import {RouterModule, Routes} from '@angular/router';
import {HolidayComponent} from './holiday/holiday.component';
import {NgModule} from '@angular/core';
import {HolidayCitiesListComponent} from './holiday/holiday-cities-list/holiday-cities-list.component';
import {HolidayListComponent} from './holiday/holiday-list/holiday-list.component';
import {HolidayDetailsComponent} from './holiday/holiday-details/holiday-details.component';
import {HolidayResolverService} from './holiday/holiday-resolver.service';
import {HolidayDetailsEditComponent} from './holiday/holiday-details-edit/holiday-details-edit.component';
import {HolidayAddComponent} from './holiday/holiday-add/holiday-add.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {AuthorizationGuard} from './authorization/authorization-guard';

const routes: Routes = [
  { path: '', component: HolidayComponent,resolve:{holidaysList: HolidayResolverService}},
  { path: 'cities/:country', component: HolidayCitiesListComponent,resolve:{holidaysList: HolidayResolverService}},
  { path: 'holidayDetails/:id', component: HolidayDetailsComponent,resolve:{holidaysList: HolidayResolverService}},
  { path: 'holidayDetails/:id/edit',component: HolidayDetailsEditComponent,resolve:{holidaysList: HolidayResolverService},canActivate: [AuthorizationGuard]},
  { path: 'holiday/add',component: HolidayAddComponent,resolve:{holidaysList: HolidayResolverService},canActivate: [AuthorizationGuard]},
  { path: 'holidays',component: HolidayListComponent},
  { path: 'login',component: AuthorizationComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
