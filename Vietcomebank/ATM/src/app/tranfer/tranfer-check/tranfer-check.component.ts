import { Component, OnInit } from '@angular/core';
import { ConvertMoneyServiceService } from 'src/app/service/convert-money-service.service';
import { MyServiceService } from 'src/app/service/my-service.service';
import { UserDataService } from 'src/app/service/UserData.service';

@Component({
  selector: 'app-tranfer-check',
  templateUrl: './tranfer-check.component.html',
  styleUrls: ['./tranfer-check.component.scss'],
})
export class TranferCheckComponent implements OnInit {
  _tranferSTK = '';
  _tranferName = '';
  _receiverSTK = '';
  _receiverName = '';

  _receiveMoney = 0;
  _mess = '';

  constructor(
    private myService: MyServiceService,
    private userService: UserDataService,
    private convertService: ConvertMoneyServiceService,
  ) {}

  ngOnInit() {
    this.getMyInfo();
  }

  getMyInfo() {
    this._tranferSTK = this.myService.myUser.number;
    this._tranferName = this.myService.myUser.name;

    this._receiverSTK = this.myService.receiverUser.number;
    this._receiverName = this.myService.receiverUser.name;

    this._receiveMoney = this.myService.receiveMoney;
    this._mess = this.convertService.docso(this._receiveMoney).toString();
  }


}
