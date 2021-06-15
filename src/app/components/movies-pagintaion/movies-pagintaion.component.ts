import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-pagintaion',
  templateUrl: './movies-pagintaion.component.html',
  styleUrls: ['./movies-pagintaion.component.sass']
})
export class MoviesPagintaionComponent implements OnInit {

  constructor() { }

  @Input() totalResults: number = 200;

  ngOnInit(): void {
    console.log('totalResults',this.totalResults)
  }

}
