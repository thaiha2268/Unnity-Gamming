import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Actions } from '../models/Actions';
import { User } from '../models/User';
import { MyServiceService } from '../service/my-service.service';
import { UserDataService } from '../service/UserData.service';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.scss'],
})
export class PincodeComponent implements OnInit {
  users: User[] = [];
  myUser = {} as User;
  PINTemp: string = '';

  constructor(
    private router: Router,
    private myService: MyServiceService,
    private userService: UserDataService
  ) {}

  async navigateToHome() {
    if (this.isValidPIN()) {
      this.myService.myUser = this.myUser;

      // let parentC = new AppComponent();
      // parentC.hi(this.myService.language, this.myUser.name);

      this.router.navigateByUrl('/home');
    }
  }

  exit() {
    this.router.navigateByUrl('/screensaver');
  }

  isValidPIN(): boolean {
    if (this.PINTemp == this.myUser.pincode.toString()) {
      return true;
    }
    return false;
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

  async getUser(id: number): Promise<any> {
    return this.users.find((user) => {
      return user.id == id;
    });
  }

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

  async ngOnInit() {
    let userID = this.myService.userId;
    await this.getUsers();
    this.myUser = await this.getUser(userID);

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
}
