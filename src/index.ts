import './polyfills';
import { APP_ROUTES } from './routes';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HomeViewComponent } from './views/home/home.component';
import { HttpModule } from '@angular/http';
import { enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PostsService } from './services/posts.service';
import { RouterModule } from '@angular/router';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsViewComponent } from './views/posts/posts.component'
import { PostDetailsViewComponent } from './views/posts/post-details.component';

@NgModule({
  imports: [ //modules
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [ //component and directives, order matters!! )for now)
    PostsListComponent,
    FooterComponent,
    HeaderComponent,
    HomeViewComponent,
    PostsViewComponent,
    PostDetailsViewComponent,
    BootstrapComponent
  ],
  bootstrap: [ BootstrapComponent ],  //root component
  providers: [ //services (eg. @injectables)
    PostsService
  ]
})

class AppModule { }

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);