import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'abs-shop',
  providers: [ApiService],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  heroes: Observable<Hero[]>;
  constructor(private api: ApiService) {
    // Do stuff
  }

  getHeroes() {
    this.api.getHeroes()
      .subscribe(heroes => {console.log(heroes); return this.heroes = heroes.results});
      
  }

  ngOnInit() {
    this.getHeroes();
  }

}
