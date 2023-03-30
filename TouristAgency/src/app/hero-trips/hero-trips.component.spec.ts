import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTripsComponent } from './hero-trips.component';

describe('HeroTripsComponent', () => {
  let component: HeroTripsComponent;
  let fixture: ComponentFixture<HeroTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
