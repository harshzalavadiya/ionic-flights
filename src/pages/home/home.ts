import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpRequestProvider } from '../../providers/http-request/http-request';
import { SelectSearchableComponent } from 'ionic-select-searchable';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  airports: Array<object>;
  tripType: string;
  tripTypes: Array<string>;
  departDateMin: string;
  departDate: string;
  returnDate: string;
  airportFrom: object;
  airportTo: object;
  ports: Port[];
  port: Port;

  constructor(public navCtrl: NavController, private http: HttpRequestProvider) {
    this.airports = [];
    this.tripTypes = ['One Way', 'Round Trip'];
    this.tripType = this.tripTypes[0];
    this.departDateMin = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString();
  }

  ionViewDidLoad() {
    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' }
    ];
    this.http.get("airports.json").subscribe((data: object) => {
      this.airports = data["airports"];
    }, error => {
      console.log(error);
    });
  }

  portChange(event: { component: SelectSearchableComponent, value: any }) {
    console.log('port:', event.value);
  }

  updateDepartDate() {
    this.returnDate = this.departDate;
  }

  updateReturnDate() {

  }

}
