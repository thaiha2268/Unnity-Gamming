import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/service/my-service.service';
import { User } from './models/User';
import { UserDataService } from './service/UserData.service';
import { TranferHomeComponent } from './tranfer/tranfer-home/tranfer-home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private userService: UserDataService,
    private router: Router,
    private myService: MyServiceService,
    private renderer: Renderer2,
    private el: ElementRef // private tranferHome: TranferHomeComponent
  ) {}

  counter(i: number) {
    return new Array(i);
  }
  a = '';

  ngOnInit() {
    // this.hi('vn', 'bro');
  }

  hi(language: string, name: string) {
    switch (language) {
      case 'vn': {
        this.a = 'Xin chào ';
        break;
      }
      case 'en': {
        this.a = 'Welcome';

        break;
      }
      case 'cn': {
        this.a = '欢迎';

        break;
      }
    }
    this.a += ` : ${name}`;
    console.log(this.a);
  }

  cancelBtn() {
    let url = this.router.url.slice(1);
    let path = '';
    switch (url) {
      case 'language': {
        path = 'screensaver';
        break;
      }
      case 'pincode': {
        path = 'language';
        break;
      }
      case 'cashout-input': {
        path = 'cashout-home';
        break;
      }
      case 'cashout-confirm': {
        path = 'cashout-home';
        break;
      }
    }

    if (path != '') {
      this.router.navigateByUrl(`/${path}`);
    }
  }
  clearBtn() {
    let url = this.router.url.slice(1);
    switch (url) {
      case 'pincode': {
        break;
      }
      case 'cashout-input': {
        break;
      }
    }
  }
  enterBtn() {
    let url = this.router.url.slice(1);
    let path = '';
    switch (url) {
      case 'pincode': {
        path = 'home';
        break;
      }
      case 'tranfer-home': {
        if (this.myService.isExistSTK == true) {
          path = 'tranfer-money';
          this.myService.isExistSTK = false;
        }
        break;
      }
      case 'tranfer-money': {
        if (this.myService.validMoney == true) {
          path = 'tranfer-check';
          this.myService.validMoney = false;
        }
        break;
      }
      case 'tranfer-check': {
        path = 'tranfer-confirm';
        break;
      }
      case 'tranfer-confirm': {
        let money =
          this.myService.receiverUser.money + this.myService.receiveMoney;

        this.userService.users = this.userService.users.map(
          (value, index): User => {
            if (value.id == this.myService.receiverUser.id) {
              value.money = money;
            } else if (value.id == this.myService.myUser.id) {
              value = this.myService.myUser;
            }
            return value;
          }
        );

        path = 'home';
        break;
      }
      case 'cashout-input': {
        if (this.myService.validMoney == true) {
          path = 'cashout-confirm';
          this.myService.validMoney = false;
        }
        break;
      }
      case 'cashout-confirm': {
        this.userService.users = this.userService.users.map((value): User => {
          if (value.id == this.myService.myUser.id) {
            value = this.myService.myUser;
          }
          return value;
        });

        path = 'home';
        break;
      }
    }

    if (path != '') {
      if (url == 'cashout-confirm') {
        this.myService.drawalSuccess = true;
        this.myService.transferSuccess = false;
      } else if (url == 'tranfer-confirm') {
        this.myService.drawalSuccess = false;

        this.myService.transferSuccess = true;
      } else {
        this.myService.drawalSuccess = false;
        this.myService.transferSuccess = false;
      }
      this.router.navigateByUrl(`/${path}`);
    }
  }
}
