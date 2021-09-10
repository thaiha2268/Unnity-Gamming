import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashoutOptionComponent } from './cashout-option.component';

describe('CashoutOptionComponent', () => {
  let component: CashoutOptionComponent;
  let fixture: ComponentFixture<CashoutOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashoutOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashoutOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
