import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { ShopComponent } from './shop';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
