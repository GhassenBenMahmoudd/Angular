import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreEmployeeComponent } from './registre-employee.component';

describe('RegistreEmployeeComponent', () => {
  let component: RegistreEmployeeComponent;
  let fixture: ComponentFixture<RegistreEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistreEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
