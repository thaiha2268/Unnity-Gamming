import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from 'src/app/models/Actions';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-cashout-confirm',
  templateUrl: './cashout-confirm.component.html',
  styleUrls: ['./cashout-confirm.component.scss'],
})
export class CashoutConfirmComponent implements OnInit {
  balance: number = 0;
  cashoutMoney: number = 0;
  cost: number = 0;
  theRemainingBalance: number = 0;

  constructor(
    private router: Router,
    private myService: MyServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    let language = this.myService.language;

    // switch (language) {
    //   case 'vn': {
    //     this.a = this.actions[0];
    //     break;
    //   }
    //   case 'en': {
    //     this.a = this.actions[1];

    //     break;
    //   }
    //   case 'cn': {
    //     this.a = this.actions[2];

    //     break;
    //   }
    // }

    this.getInfo();
  }

  getInfo() {
    this.balance = this.myService.myUser.money;
    this.cashoutMoney = this.myService.receiveMoney;
    this.theRemainingBalance = this.balance - this.cashoutMoney - this.cost;

    this.myService.myUser.money = this.theRemainingBalance;
  }
}
