import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteDescriptionComponent } from './favorite-description.component';

describe('FavoriteDescriptionComponent', () => {
  let component: FavoriteDescriptionComponent;
  let fixture: ComponentFixture<FavoriteDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
