import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalChaudComponent } from './eval-chaud.component';

describe('EvalChaudComponent', () => {
  let component: EvalChaudComponent;
  let fixture: ComponentFixture<EvalChaudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalChaudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvalChaudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
