import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffEstudiantesComponent } from './staff-estudiantes.component';

describe('StaffEstudiantesComponent', () => {
  let component: StaffEstudiantesComponent;
  let fixture: ComponentFixture<StaffEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
