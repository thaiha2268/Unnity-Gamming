import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashoutConfirmComponent } from './cashout-confirm.component';

describe('CashoutConfirmComponent', () => {
  let component: CashoutConfirmComponent;
  let fixture: ComponentFixture<CashoutConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashoutConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashoutConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
