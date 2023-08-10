import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepAddDepComponent } from './deparment.component';

describe('DepAddDepComponent', () => {
  let component: DepAddDepComponent;
  let fixture: ComponentFixture<DepAddDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepAddDepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
