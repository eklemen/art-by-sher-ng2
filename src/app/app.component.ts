import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [],
  directives: [...ROUTER_DIRECTIVES, AlertComponent, DATEPICKER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  url = 'https://github.com/preboot/angular2-webpack';
  date: Date = new Date();
  constructor() {
  }

  ngOnInit(){
    console.info('Hello there, thanks for visiting!')
  }
}
