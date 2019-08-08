import {RouterModule, Routes} from '@angular/router';
import {HolidayComponent} from './holiday/holiday.component';
import {NgModule} from '@angular/core';
import {HolidayCitiesListComponent} from './holiday/holiday-cities-list/holiday-cities-list.component';
import {HolidayListComponent} from './holiday/holiday-list/holiday-list.component';
import {HolidayDetailsComponent} from './holiday/holiday-details/holiday-details.component';
import {HolidayResolverService} from './holiday/holiday-resolver.service';

const routes: Routes = [
  { path: '', component: HolidayComponent,resolve:{holidaysList: HolidayResolverService}},
  { path: 'cities/:country', component: HolidayCitiesListComponent},
  { path: 'holidayDetails/:id', component: HolidayDetailsComponent},
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
