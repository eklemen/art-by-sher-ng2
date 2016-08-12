import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Hero } from './hero';
import { HEROES } from '../mock-etsy';
// private etsyUrl = 'app/something.json';  // URL to web api

@Injectable()
export class ApiService {
  title = 'Angular 2';
  names: any;
  key : string = 'api_key=pnclsngra8duf7qunhwsbfce';
  baseUrl: string = 'https://openapi.etsy.com/v2/public';
  constructor(private jsonp: Jsonp){
    
  }

  // getHeroes() {
  //   console.log(HEROES);
  //   return Promise.resolve(HEROES);
  // }
  getHeroes() {
    // return HEROES;
    return this.jsonp.request(`${this.baseUrl}/shops/SherrysBeachArt/listings/active.js?callback=JSONP_CALLBACK&${this.key}`, {method: 'Get'})
      .map(res => res.json());
  }
  logError(err) {
    console.error('There was an error: ' + err);
  }
  

}
