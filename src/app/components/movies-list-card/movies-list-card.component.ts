import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.sass']
})
export class MoviesListCardComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
