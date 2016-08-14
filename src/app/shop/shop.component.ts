import { Component, OnInit } from '@angular/core';
import { Listing, Item } from '../shared/listing';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'abs-shop',
  providers: [ApiService],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public listings: Observable<Listing[]>;
  public item : Item;
  // router: Router;
  constructor(private api: ApiService, private router: Router) {
    // Do stuff
  }

  getListings() {
    this.api.getListings()
      .subscribe(listings => {console.log(listings); return this.listings = listings.results});
      
  }

  goToDetail(item: Item){
    let link = ['/shop', item.listing_id];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.getListings();
  }

}
