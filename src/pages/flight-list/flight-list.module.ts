import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightListPage } from './flight-list';

@NgModule({
  declarations: [
    FlightListPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightListPage),
  ],
})
export class FlightListPageModule {}
