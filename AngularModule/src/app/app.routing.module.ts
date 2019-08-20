import {RouterModule, Routes} from '@angular/router';
import {HolidayComponent} from './holiday/holiday.component';
import {NgModule} from '@angular/core';
import {HolidayCitiesListComponent} from './holiday/holiday-cities-list/holiday-cities-list.component';
import {HolidayListComponent} from './holiday/holiday-list/holiday-list.component';
import {HolidayDetailsComponent} from './holiday/holiday-details/holiday-details.component';
import {HolidayResolverService} from './holiday/holiday-resolver.service';
import {HolidayDetailsEditComponent} from './holiday/holiday-details-edit/holiday-details-edit.component';
import {HolidayAddComponent} from './holiday/holiday-add/holiday-add.component';

const routes: Routes = [
  { path: '', component: HolidayComponent,resolve:{holidaysList: HolidayResolverService}},
  { path: 'cities/:country', component: HolidayCitiesListComponent,resolve:{holidaysList: HolidayResolverService}},
  { path: 'holidayDetails/:id', component: HolidayDetailsComponent,resolve:{holidaysList: HolidayResolverService}},
  { path: 'holidayDetails/:id/edit', component: HolidayDetailsEditComponent,resolve:{holidaysList: HolidayResolverService}},
  { path: 'holiday/add',component: HolidayAddComponent,resolve:{holidaysList: HolidayResolverService}},
  { path: 'holidays',component: HolidayListComponent}
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
