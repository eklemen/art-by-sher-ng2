import { Component, OnInit, Input } from '@angular/core';
import { Listing, Item } from '../shared/listing';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'abs-item-detail',
  providers: [ApiService],
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  public item: Item;
  // private sub: Item;
  // public item: Item;
   constructor(private api: ApiService,
              private router: Router,
              private route: ActivatedRoute) {
    // Do stuff
  }

  // getItemDetail(){
  // }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.api.getSingleItem(id).subscribe(item => {console.log('item: ' + item); this.item = item.results[0]});
    });
    // this.api.getListings()
    //   .subscribe(listings => {console.log(listings); return this.listings = listings.results});
    // let id = this.routeParams.get('id')
  }

}
