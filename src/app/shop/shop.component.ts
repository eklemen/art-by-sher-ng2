import { Component, OnInit } from '@angular/core';
import { Listing, Item } from '../shared/listing';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { LISTINGS } from '../mock-etsy.ts'; // Remove for prod, dont forget to get rid of mock-etsy file as well

@Component({
  selector: 'abs-shop',
  providers: [ApiService],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  // public listings: Observable<Listing[]>; // Uncomment for prod
  public item : Item;
  public listings: any[]; // Remove for prod
  constructor(private api: ApiService, private router: Router) {
    // Do stuff
  }


  // Uncomment for prod
  // getListings() {
  //   this.api.getListings()
  //     .subscribe(listings => {console.log(listings); return this.listings = listings.results}); 
  // }

  // Remove getListings below in favor of the one above
  getListings(){
    this.listings = LISTINGS.results;
    return this.listings;
  }

  goToDetail(item: Item){
    let link = ['/shop', item.listing_id];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.getListings();
  }

}
