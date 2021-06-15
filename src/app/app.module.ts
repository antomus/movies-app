import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HeaderComponent } from './components/header/header.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListCardComponent } from './components/movies-list-card/movies-list-card.component';
import { PosterPreviewComponent } from './components/poster-preview/poster-preview.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { GenreBadgeComponent } from './components/genre-badge/genre-badge.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

import { RatingModule } from 'ngx-bootstrap/rating';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MoviesPagintaionComponent } from './components/movies-pagintaion/movies-pagintaion.component';


const appRoutes: Routes = [
  { path: '',   redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MoviesListCardComponent,
    PosterPreviewComponent,
    StarsRatingComponent,
    MovieInfoComponent,
    GenreBadgeComponent,
    UserInfoComponent,
    GenresListComponent,
    PageNotFoundComponent,
    MovieDetailsComponent,
    MoviesPagintaionComponent,

  ],
  imports: [
    TooltipModule.forRoot(),
    RatingModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
