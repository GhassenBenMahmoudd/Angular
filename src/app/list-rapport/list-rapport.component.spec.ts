import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRapportComponent } from './list-rapport.component';

describe('ListRapportComponent', () => {
  let component: ListRapportComponent;
  let fixture: ComponentFixture<ListRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRapportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
