import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Actions } from 'src/app/models/Actions';
import { ConvertMoneyServiceService } from 'src/app/service/convert-money-service.service';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-cashout-input',
  templateUrl: './cashout-input.component.html',
  styleUrls: ['./cashout-input.component.scss'],
})
export class CashoutInputComponent implements OnInit {
  cashoutMoney: number = 0;
  cashoutMoneyConver: String = '';

  constructor(
    private convertService: ConvertMoneyServiceService,
    private router: Router,
    private myService: MyServiceService
  ) {}

  a = {} as Actions;

  actions: Actions[] = [
    {
      actions1: 'a',
      actions2: 'a',
      actions3: 'a',
      actions4: 'a',
      actions5: 'a',
      actions6: 'a',
      actions7: 'Đồng ý',
      actions8: 'Huỷ bỏ',
    },
    {
      actions1: 'a',
      actions2: 'a',
      actions3: 'a',
      actions4: 'a',
      actions5: 'a',
      actions6: 'a',
      actions7: 'Confirm',
      actions8: 'Cancel',
    },
    {
      actions1: 'a',
      actions2: 'a',
      actions3: 'a',
      actions4: 'a',
      actions5: 'a',
      actions6: 'a',
      actions7: '同意',
      actions8: '取消',
    },
  ];

  ngOnInit() {
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
  }

  public convertMoney(money: String) {
    if (money == '') {
      this.cashoutMoneyConver = '';
    } else {
      this.cashoutMoneyConver = this.convertService.docso(Number(money));
    }
  }

  public checkInput() {
    console.log();
  }
  //   public isNumberKey(event: KeyboardEvent){
  //     console.log('aaaaa');
  // onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57) || (this.value.length >= 8))"
  //     return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))
  // }

  navigateToCashoutConfirm() {
    console.log(this.cashoutMoney);
    this.router.navigateByUrl(`/cashout-confirm?cashoutMoney=${this.cashoutMoney}`);
  }
  cancel() {
    this.router.navigateByUrl('/cashout-home');
  }
}
