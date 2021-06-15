import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  totalPages: number;
  totalResults: number;
  page: number = 1;
  genreId:number;
  search:string;


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.genreId = params['genreId'];
      this.page = params['page'];
      this.search = params['search'];
      if(this.search) {
        this.moviesService.searchMovies(this.search, this.page).subscribe((data) => {
          this.totalPages = data.total_pages;
          this.totalResults = data.total_results;
        });
      }
      this.moviesService.fetchMovies(this.genreId, this.page).subscribe((data) => {
        this.totalPages = data.total_pages;
        this.totalResults = data.total_results;
      });
    });

  }

  getMovies(): Movie [] {
    return this.moviesService.movies;
  }

  pageChanged(page:number) {
    this.page = page;
    this.router.navigate([], {
      queryParams: {
        page: this.page
      },
      queryParamsHandling: 'merge',
    });
  }
}
