import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { ShopComponent } from './shop';
import { ItemDetailComponent } from './item-detail';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'shop/:id', component: ItemDetailComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
