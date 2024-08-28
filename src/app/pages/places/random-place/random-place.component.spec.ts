import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPlaceComponent } from './random-place.component';

describe('RandomPlaceComponent', () => {
  let component: RandomPlaceComponent;
  let fixture: ComponentFixture<RandomPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
