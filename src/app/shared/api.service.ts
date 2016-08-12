import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Hero } from './hero';
import { HEROES } from '../mock-etsy';
// private etsyUrl = 'app/something.json';  // URL to web api

@Injectable()
export class ApiService {
  title = 'Angular 2';
  names: any;
  key : string = 'api_key=pnclsngra8duf7qunhwsbfce';
  constructor(private jsonp: Jsonp){
    
  }

  // getHeroes() {
  //   console.log(HEROES);
  //   return Promise.resolve(HEROES);
  // }
  getHeroes() {
    // return HEROES;
    return this.jsonp.request(`https://openapi.etsy.com/v2/public/shops/SherrysBeachArt/listings/active.js?callback=JSONP_CALLBACK&${this.key}`)
    // return this.http.get(`https://openapi.etsy.com/v2/public/shops/SherrysBeachArt/listings/active.js?${this.key}`)
      .map(res => res.json())
  }
  logError(err) {
    console.error('There was an error: ' + err);
  }
  

}
