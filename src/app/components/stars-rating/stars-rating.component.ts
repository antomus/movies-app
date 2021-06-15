import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.sass']
})
export class StarsRatingComponent{
  @Input() rate: number = 0;
  isReadonly = true;
  max = 10;
}
