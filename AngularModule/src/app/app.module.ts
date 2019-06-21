import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HolidayComponent } from './holiday/holiday.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { HolidayListComponent } from './holiday/holiday-list/holiday-list.component';
import { HolidayTabItemComponent } from './holiday/holiday-list/holiday-tab-item/holiday-tab-item.component';
import { HolidayItemComponent } from './holiday/holiday-list/holiday-item/holiday-item.component';
import {HolidayService} from './holiday/holiday.service';
import {AppRoutingModule} from './app.routing.module';
import {HolidayCitiesListComponent} from './holiday/holiday-cities-list/holiday-cities-list.component';
import {HolidayCitiesItemComponent} from './holiday/holiday-cities-list/holiday-cities-item/holiday-cities-item.component';
import {HolidayCitiesTabItemComponent} from './holiday/holiday-cities-list/holiday-cities-tab-item/holiday-cities-tab-item.component';
import {HolidayDetailsComponent} from './holiday/holiday-details/holiday-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HolidayComponent,
    HeaderComponent,
    HolidayListComponent,
    HolidayTabItemComponent,
    HolidayItemComponent,
    HolidayCitiesListComponent,
    HolidayCitiesItemComponent,
    HolidayCitiesTabItemComponent,
    HolidayDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HolidayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
