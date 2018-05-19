import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpRequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpRequestProvider {

  endpoint: string;

  constructor(public http: HttpClient) {
    this.endpoint = '../../assets/data/'
  }

  get(url: string) {
    return this.http.get(this.endpoint + url).map(data => data);
  }

}
