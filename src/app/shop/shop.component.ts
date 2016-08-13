import { Component, OnInit } from '@angular/core';
import { Listing } from '../shared/listing';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'abs-shop',
  providers: [ApiService],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  listings: Observable<Listing[]>;
  constructor(private api: ApiService) {
    // Do stuff
  }

  getListings() {
    this.api.getListings()
      .subscribe(listings => {console.log(listings); return this.listings = listings.results});
      
  }

  ngOnInit() {
    this.getListings();
  }

}
