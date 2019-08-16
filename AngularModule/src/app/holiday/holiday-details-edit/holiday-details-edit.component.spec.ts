import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayDetailsEditComponent } from './holiday-details-edit.component';

describe('HolidayDetailsEditComponent', () => {
  let component: HolidayDetailsEditComponent;
  let fixture: ComponentFixture<HolidayDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
