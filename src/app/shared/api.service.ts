import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Listing } from './listing';
// private etsyUrl = 'app/something.json';  // URL to web api

@Injectable()
export class ApiService {
  title = 'Angular 2';
  key : string = 'api_key=pnclsngra8duf7qunhwsbfce';
  publicUrl: string = 'https://openapi.etsy.com/v2/public';
  privateUrl: string = 'https://openapi.etsy.com/v2/private';
  listingId: number;
  constructor(private jsonp: Jsonp){
    
  }

  // getHeroes() {
  //   console.log(HEROES);
  //   return Promise.resolve(HEROES);
  // }
  getListings() {
    // return HEROES;
    return this.jsonp.request(`${this.publicUrl}/shops/SherrysBeachArt/listings/active.js?callback=JSONP_CALLBACK&${this.key}&includes=MainImage`, {method: 'Get'})
      .map(res => res.json());
  }

  getSingleItem(listingId){
    return this.jsonp.request(`${this.privateUrl}/listings/${listingId}.js?callback=JSONP_CALLBACK&${this.key}&includes=MainImage`, {method: 'Get'})
      .map(res => res.json());
  }
  logError(err) {
    console.error('There was an error: ' + err);
  }
  

}
