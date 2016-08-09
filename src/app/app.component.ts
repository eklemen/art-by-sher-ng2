import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { Hero } from './shared/hero';

import { ApiService } from './shared';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES, AlertComponent, DATEPICKER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  heroes: Hero[];
  date: Date = new Date();
  names: any;
  ApiService: any;
  errorMessage: any;
  constructor(private api: ApiService) { }
  // this.ApiService.getNames()
  //   .subscribe(
  //     names => this.names = names,
  //     error =>  this.errorMessage = <any>error);
}
