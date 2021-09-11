import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { MyServiceService } from 'src/app/service/my-service.service';
import { UserDataService } from 'src/app/service/UserData.service';

@Component({
  selector: 'app-tranfer-home',
  templateUrl: './tranfer-home.component.html',
  styleUrls: ['./tranfer-home.component.scss'],
})
export class TranferHomeComponent implements OnInit {
  _tranferSTK = '';
  _tranferName = '';
  _receiverSTK: string = '';
  _isValidSTK = false;
  _messError = 'Số tài khoản không tồn tại';
  _messSucces = 'Số tài khoản hợp lệ';

  users: User[] = [];

  constructor(
    private router: Router,
    private myService: MyServiceService,
    private userService: UserDataService
  ) {}

  async ngOnInit() {
    this.getMyInfo();
    await this.getUsers();
  }

  async getUsers(): Promise<any> {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
        // console.log('this.users=' + this.users[0].name);
        // console.log('this.users.length=' + this.users.length);
      }, //Bind to view
      (err) => {
        // Log errors if any
        console.log(err);
      }
    );
  }

  getMyInfo() {
    this._tranferSTK = this.myService.myUser.number?.toString();
    this._tranferName = this.myService.myUser.name;
  }

  //
  checkExistSTK(STK: string) {
    if (STK.length != 6) {
      this._isValidSTK = false;

      if (this.myService.isExistSTK == true) {
        this.myService.receiverUser = {} as User;
        this.myService.isExistSTK = false;
      }
    } else {
      let receiverTemp = this.users.find((x) => {
        let temp = x.number.split(' ').join('');
        return temp === STK;
      });

      if (receiverTemp != undefined) {
        this._isValidSTK = true;

        this.myService.receiverUser = receiverTemp;
        this.myService.isExistSTK = true;
      } else {
        this.myService.receiverUser = {} as User;
        this.myService.isExistSTK = false;
      }
    }
  }
}
