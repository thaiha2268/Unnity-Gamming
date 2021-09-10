import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashoutHomeComponent } from './cashout-home.component';

describe('CashoutHomeComponent', () => {
  let component: CashoutHomeComponent;
  let fixture: ComponentFixture<CashoutHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashoutHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashoutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
