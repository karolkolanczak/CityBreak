import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayCitiesItemComponent } from './holiday-cities-item.component';

describe('HolidayCitiesItemComponent', () => {
  let component: HolidayCitiesItemComponent;
  let fixture: ComponentFixture<HolidayCitiesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayCitiesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayCitiesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
