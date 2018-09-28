import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMateriasComponent } from './staff-materias.component';

describe('StaffMateriasComponent', () => {
  let component: StaffMateriasComponent;
  let fixture: ComponentFixture<StaffMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
