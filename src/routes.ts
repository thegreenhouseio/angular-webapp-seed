import { HomeViewComponent } from './views/home/home.component';
import { PostsViewComponent } from './views/posts/posts.component';
import { PostDetailsViewComponent } from './views/posts/post-details.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', component: <any>HomeViewComponent, terminal: true },
  { path: 'posts', component: <any> PostsViewComponent },
  { path: 'posts/:id', component: <any> PostDetailsViewComponent },
  { path: 'home', component: <any> HomeViewComponent }
];