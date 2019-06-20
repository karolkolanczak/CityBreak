import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayCitiesListComponent } from './holiday-cities-list.component';

describe('HolidayCitiesListComponent', () => {
  let component: HolidayCitiesListComponent;
  let fixture: ComponentFixture<HolidayCitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayCitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayCitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
