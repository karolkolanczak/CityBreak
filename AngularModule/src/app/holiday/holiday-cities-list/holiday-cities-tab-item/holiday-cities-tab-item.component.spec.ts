import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayCitiesTabItemComponent } from './holiday-cities-tab-item.component';

describe('HolidayCitiesTabItemComponent', () => {
  let component: HolidayCitiesTabItemComponent;
  let fixture: ComponentFixture<HolidayCitiesTabItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayCitiesTabItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayCitiesTabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
