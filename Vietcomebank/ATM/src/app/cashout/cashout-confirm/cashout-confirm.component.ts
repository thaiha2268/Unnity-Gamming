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
  a = {} as Actions;
  balance: number = 0;
  cashoutMoney: number = 0;
  cost: number = 0;
  theRemainingBalance: number = 0;

  actions: Actions[] = [
    {
      actions1: 'a',
      actions2: 'a',
      actions3: 'a',
      actions4: 'a',
      actions5: 'a',
      actions6: 'Đồng ý',
      actions7: 'Không',
      actions8: 'Huỷ Giao Dịch',
    },
    {
      actions1: 'a',
      actions2: 'a',
      actions3: 'a',
      actions4: 'a',
      actions5: 'a',
      actions6: 'Yes',
      actions7: 'No',
      actions8: 'Cancel',
    },
    {
      actions1: 'a',
      actions2: 'a',
      actions3: 'a',
      actions4: 'a',
      actions5: 'a',
      actions6: '是的',
      actions7: '不',
      actions8: '取消交易',
    },
  ];

  constructor(
    private router: Router,
    private myService: MyServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    let language = this.myService.language;

    switch (language) {
      case 'vn': {
        this.a = this.actions[0];
        break;
      }
      case 'en': {
        this.a = this.actions[1];

        break;
      }
      case 'cn': {
        this.a = this.actions[2];

        break;
      }
    }

    await this.getCashoutMoney();
    await this.getCashoutDetail();
  }

  async getCashoutMoney() {
    this.activatedRoute.queryParams.subscribe(async (params) => {
      let cashoutMoneyTemp = await params['cashoutMoney'];
      this.cashoutMoney = cashoutMoneyTemp;
    });
  }
  async getCashoutDetail() {
    this.balance = this.myService.myUser.money;
    this.theRemainingBalance = this.balance - this.cashoutMoney - this.cost;
  }

  confirm() {
    this.router.navigateByUrl('/home');
  }
  no() {
    this.router.navigateByUrl('/home');
  }

  cancel() {
    this.router.navigateByUrl('/cashout-home');
  }
}
