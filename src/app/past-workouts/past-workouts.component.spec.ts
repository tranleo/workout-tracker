import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastWorkoutsComponent } from './past-workouts.component';

describe('PastWorkoutsComponent', () => {
  let component: PastWorkoutsComponent;
  let fixture: ComponentFixture<PastWorkoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastWorkoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
