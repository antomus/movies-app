import { Genre } from './../../models/genre';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.sass']
})
export class GenresListComponent implements OnInit {

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  activeGenre: number;

  ngOnInit(): void {
    this.loadGenres()
    this.route.queryParams.subscribe(params => {
      this.activeGenre = params['genreId'];
      this.loadGenres();
    });

  }

  getGenres(): Genre [] {
    return this.moviesService.genres;
  }

  loadGenres() {
    this.moviesService.fetchGenres().subscribe(() => {});
  }

}
