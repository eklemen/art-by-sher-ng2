import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Hero } from './hero';
import { HEROES } from '../mock-etsy';
// private etsyUrl = 'app/something.json';  // URL to web api

@Injectable()
export class ApiService {
  title = 'Angular 2';
  names: any;
  // logError: any;
  constructor(private http: Http){
    
  }

  // getHeroes() {
  //   console.log(HEROES);
  //   return Promise.resolve(HEROES);
  // }
  getHeroes() {
    // return HEROES;
    return this.http.get('https://openapi.etsy.com/v2/public/shops/SherrysBeachArt/listings/active?api_key=pnclsngra8duf7qunhwsbfce')
    // this.http.get('../mock-etsy.ts')
      .map(res => res.json())
      // .subscribe(
      //   data => this.names = data,
      //   err => this.logError(err),
      //   () => console.log('Success!')
      // );
  }
  logError(err) {
    console.error('There was an error: ' + err);
  }
  

}
