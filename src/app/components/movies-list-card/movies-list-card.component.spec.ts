import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListCardComponent } from './movies-list-card.component';

describe('MoviesListCardComponent', () => {
  let component: MoviesListCardComponent;
  let fixture: ComponentFixture<MoviesListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
