import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormationComponent } from './list-formation.component';

describe('ListFormationComponent', () => {
  let component: ListFormationComponent;
  let fixture: ComponentFixture<ListFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
