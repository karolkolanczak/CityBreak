import {RouterModule, Routes} from '@angular/router';
import {HolidayComponent} from './holiday/holiday.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: 'holidays', component: HolidayComponent }
  // ,
  // { path: 'add', component: AddUserComponent }
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
