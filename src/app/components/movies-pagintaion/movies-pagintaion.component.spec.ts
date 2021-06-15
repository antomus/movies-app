import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPagintaionComponent } from './movies-pagintaion.component';

describe('MoviesPagintaionComponent', () => {
  let component: MoviesPagintaionComponent;
  let fixture: ComponentFixture<MoviesPagintaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesPagintaionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPagintaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
