import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashoutInputComponent } from './cashout-input.component';

describe('CashoutInputComponent', () => {
  let component: CashoutInputComponent;
  let fixture: ComponentFixture<CashoutInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashoutInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashoutInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
