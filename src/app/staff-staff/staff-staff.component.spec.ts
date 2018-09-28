import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffStaffComponent } from './staff-staff.component';

describe('StaffStaffComponent', () => {
  let component: StaffStaffComponent;
  let fixture: ComponentFixture<StaffStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
