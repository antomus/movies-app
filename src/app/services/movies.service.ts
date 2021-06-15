
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Genre } from './../models/genre';
import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public movies: Movie [] = [];
  public genres: Genre [] = [];

  constructor(private http: HttpClient) { }

  fetchGenres(): Observable<any> {
    return this.http.get<any>("https://api.themoviedb.org/3/genre/movie/list")
    .pipe(tap((data) => { this.genres = data.genres }))
  }

  fetchMovies(genreId?: number, page?: number): Observable<any> {
    const url = "https://api.themoviedb.org/3/discover/movie";
    let params = new HttpParams();
    console.log('genereId', genreId)
    if(genreId) {
      params = params.set('with_genres', genreId);
    }
    if(page) {
      params = params.set('page', page);
    }
    return this.http.get<any>(url, {params}).pipe(tap((data) => { this.movies = data.results }))
  }

  fetchMovie(movieId:number): Observable<any> {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/"+movieId)
  }

  searchMovies(query:string, page?: number): Observable<any> {
    const url = "https://api.themoviedb.org/3/search/movie";
    let params = new HttpParams();
    params = params.set('query', query);
    if(page) {
      params = params.set('page', page);
    }
    return this.http.get<any>(url, {params}).pipe(tap((data) => { this.movies = data.results }))
  }
}
