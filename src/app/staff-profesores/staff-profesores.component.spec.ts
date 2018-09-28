import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffProfesoresComponent } from './staff-profesores.component';

describe('StaffProfesoresComponent', () => {
  let component: StaffProfesoresComponent;
  let fixture: ComponentFixture<StaffProfesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffProfesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
