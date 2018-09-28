import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffProgramasComponent } from './staff-programas.component';

describe('StaffProgramasComponent', () => {
  let component: StaffProgramasComponent;
  let fixture: ComponentFixture<StaffProgramasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffProgramasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
