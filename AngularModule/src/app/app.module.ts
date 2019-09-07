import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HolidayComponent } from './holiday/holiday.component';

import {HttpClientModule} from '@angular/common/http';
import { HolidayListComponent } from './holiday/holiday-list/holiday-list.component';
import { HolidayItemComponent } from './holiday/holiday-list/holiday-item/holiday-item.component';
import {HolidayService} from './holiday/holiday.service';
import {AppRoutingModule} from './app.routing.module';
import {HolidayCitiesListComponent} from './holiday/holiday-cities-list/holiday-cities-list.component';
import {HolidayDetailsComponent} from './holiday/holiday-details/holiday-details.component';
import {DataStorageService} from './shared/data-storage.service';

import {HolidayDetailsEditComponent} from './holiday/holiday-details-edit/holiday-details-edit.component';
import {HolidayAddComponent} from './holiday/holiday-add/holiday-add.component';
import {HolidayCitiesItemComponent} from './holiday/holiday-cities-list/holiday-cities-item/holiday-cities-item.component';
import {LoadingSpinnerComponent} from './shared/loading-spinner/loading-spinner.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {HolidayResolverService} from './holiday/holiday-resolver.service';
import {HeaderComponent} from './holiday/header/header.component';
import {AuthorizationService} from './authorization/authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    HolidayComponent,
    HeaderComponent,
    HolidayListComponent,
    HolidayItemComponent,
    HolidayCitiesListComponent,
    HolidayCitiesItemComponent,
    HolidayDetailsComponent,
    HolidayDetailsEditComponent,
    HolidayAddComponent,
    LoadingSpinnerComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HolidayService,DataStorageService,HolidayResolverService,AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
