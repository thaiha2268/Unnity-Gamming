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
  _tranferBalance = 0;
  _isValidMoney = false;

  _receiveMoney = '';
  _messError = 'Số tiền phải lớn hơn 50,000VND và nhỏ hơn số dư';
  _messSucces = 'Số tiền hợp lệ';

  constructor(
    private convertService: ConvertMoneyServiceService,
    private myService: MyServiceService
  ) {}

  // ngOnInit() {
  //   // let language = this.myService.language;

  //   // switch (language) {
  //   //   case 'vn': {
  //   //     this.a = this.actions[0];
  //   //     break;
  //   //   }
  //   //   case 'en': {
  //   //     this.a = this.actions[1];

  //   //     break;
  //   //   }
  //   //   case 'cn': {
  //   //     this.a = this.actions[2];

  //   //     break;
  //   //   }
  //   // }
  // }

  async ngOnInit() {
    this._tranferBalance = this.myService.myUser.money;
    // await this.getUsers();
  }

  checkValidMoney(value: string) {
    let money = Number(value);

    if (money >= 50000 && money <= this.myService.myUser.money) {
      this._isValidMoney = true;
      this.myService.receiveMoney = money;
      this.myService.validMoney = true;
    } else {
      this._isValidMoney = false;
      this.myService.receiveMoney = 0;
      this.myService.validMoney = false;
    }
  }
}
