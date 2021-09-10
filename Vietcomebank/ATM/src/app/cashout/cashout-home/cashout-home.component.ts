import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from 'src/app/models/Actions';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-cashout-home',
  templateUrl: './cashout-home.component.html',
  styleUrls: ['./cashout-home.component.scss', "../../home/home.component.scss"]
})
export class CashoutHomeComponent implements OnInit {

  a = {} as Actions;
  balance : number = 0;

  actions: Actions[] = [
    {
      actions1: 'a',
      actions2: 'a',
      actions3: 'a',
      actions4: 'a',
      actions5: 'a',
      actions6: 'a',
      actions7: 'Số tiền khác',
      actions8: 'Trả thẻ',
    },
    {
      actions1: 'a',
      actions2: 'a',
      actions3: 'a',
      actions4: 'a',
      actions5: 'a',
      actions6: 'a',
      actions7: 'Other amount',
      actions8: 'Remove card',
    },
    {
      actions1: 'a',
      actions2: 'a',
      actions3: 'a',
      actions4: 'a',
      actions5: 'a',
      actions6: 'a',
      actions7: '其他金额',
      actions8: '移除卡片',
    },
  ];

  constructor(private router: Router, private myService: MyServiceService) {}

  ngOnInit() {
    this.balance = this.myService.myUser.money;
    let language = this.myService.language;

    switch (language) {
      case 'vn':{
        this.a = this.actions[0];
        break;
      }
      case 'en':{
        this.a = this.actions[1];

        break;
      }
      case 'cn':{
        this.a = this.actions[2];

        break;
      }
    }
  }

  navigateToCashoutInput(){
    this.router.navigateByUrl('/cashout-input');
  }

  removeCard(){

  }
}
