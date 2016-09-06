import { HomeViewComponent } from './views/home/home.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', component: <any>HomeViewComponent, terminal: true },
  { path: 'home', component: <any> HomeViewComponent }
];