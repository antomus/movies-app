import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreBadgeComponent } from './genre-badge.component';

describe('GenreBadgeComponent', () => {
  let component: GenreBadgeComponent;
  let fixture: ComponentFixture<GenreBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
