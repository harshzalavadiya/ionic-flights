import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HttpRequestProvider } from '../../providers/http-request/http-request';
import { SelectSearchableComponent } from 'ionic-select-searchable';

class Airport {
  public IATA_code: string;
  public ICAO_code: string;
  public airport_name: string;
  public city_name: string;
}

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tripType: string;
  tripTypes: Array<string>;
  departDateMin: string;
  departDate: string;
  returnDate: string;
  airportFrom: object;
  airportTo: object;
  airports: Airport[];
  departAp: Airport;
  returnAp: Airport;

  constructor(public navCtrl: NavController, private http: HttpRequestProvider) {
    this.tripTypes = ['One Way', 'Round Trip'];
    this.tripType = this.tripTypes[0];
    this.departDateMin = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString();
  }

  ionViewDidLoad() {
    this.http.get("airports.json").subscribe((data: object) => {
      this.airports = data["airports"];
      this.departAp = this.airports[1];
      this.returnAp = this.airports[26];
    }, error => {
      console.log(error);
    });
  }

  onUpdateDepartDate() {
    this.returnDate = this.departDate;
  }

  swapAirports(){
    let tmp: Airport = this.departAp;
    this.departAp = this.returnAp;
    this.returnAp = tmp;
  }

  searchFlights(){
    this.navCtrl.push('FlightListPage', {
      from: this.departAp,
      to: this.returnAp,
      tripType: this.tripType,
      departDate: this.departDate,
      returnDate: this.returnDate
    });
  }

}
