import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayTabItemComponent } from './holiday-tab-item.component';

describe('HolidayTabItemComponent', () => {
  let component: HolidayTabItemComponent;
  let fixture: ComponentFixture<HolidayTabItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayTabItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayTabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
