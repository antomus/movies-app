import { MoviesService } from './../../services/movies.service';
import { Movie } from 'src/app/models/movie';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;

  constructor(private service: MoviesService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.service.fetchMovie(params.id).subscribe(
        value => this.movie = value
      )
    })
   }



  ngOnInit(): void {
  }

}
