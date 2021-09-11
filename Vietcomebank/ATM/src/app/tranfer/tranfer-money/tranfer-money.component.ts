import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/service/my-service.service';
import { UserDataService } from 'src/app/service/UserData.service';

@Component({
  selector: 'app-tranfer-money',
  templateUrl: './tranfer-money.component.html',
  styleUrls: ['./tranfer-money.component.scss'],
})
export class TranferMoneyComponent implements OnInit {
  _tranferSTK = '';
  _tranferBalance = 0;
  _tranferName = '';
  _receiverSTK = '';
  _receiverName = '';
  _isValidMoney = false;

  _receiveMoney = '';
  _messError = 'Số tiền phải lớn hơn 50,000VND và nhỏ hơn số dư';
  _messSucces = 'Số tiền hợp lệ';

  constructor(
    private router: Router,
    private myService: MyServiceService,
    private userService: UserDataService
  ) {}

  async ngOnInit() {
    this.getMyInfo();
    // await this.getUsers();
  }

  getMyInfo() {
    this._tranferSTK = this.myService.myUser.number;
    this._tranferName = this.myService.myUser.name;
    this._tranferBalance = this.myService.myUser.money;

    this._receiverSTK = this.myService.receiverUser.number;
    this._receiverName = this.myService.receiverUser.name;
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
