import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from 'src/app/models/Actions';
import { MyServiceService } from 'src/app/service/my-service.service';


@Component({
  selector: 'app-tranfer-confirm',
  templateUrl: './tranfer-confirm.component.html',
  styleUrls: ['./tranfer-confirm.component.scss'],
})
export class TranferConfirmComponent implements OnInit {
  balance: number = 0;
  cashoutMoney: number = 0;
  cost: number = 0;
  theRemainingBalance: number = 0;

  constructor(
    private myService: MyServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getMyInfo();
  }

  getMyInfo() {
    this.balance = Number(this.myService.myUser.money);
    this.cashoutMoney = this.myService.receiveMoney;

    this.theRemainingBalance = this.balance - this.cashoutMoney;
    this.myService.myUser.money = this.theRemainingBalance;
  }
}
