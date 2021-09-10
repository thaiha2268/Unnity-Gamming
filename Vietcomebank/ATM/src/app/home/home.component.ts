import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from '../models/Actions';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  a = {} as Actions;

  actions: Actions[] = [
    {
      actions1: "Rút tiền",
      actions2: "Xem số Dư",
      actions3: "Đổi PIN",
      actions4: "DV Bảo Hiểm",
      actions5: "DV Tài Chính",
      actions6: "Chuyển khoản",
      actions7: "T.T Phí Dịch vụ",
      actions8: "Sao kê",
    },
    {
      actions1: "Withdraw cash",
      actions2: "Account Balance",
      actions3: "Change PIN",
      actions4: "Insurance services",
      actions5: "Financial services",
      actions6: "Transfer money",
      actions7: "Cost",
      actions8: "Receive a statement",
    },
    {
      actions1: "提取现金",
      actions2: "账户余额",
      actions3: "更改密码",
      actions4: "保险服务",
      actions5: "金融服务",
      actions6: "划款",
      actions7: "成本",
      actions8: "收到声明",
    },
  ];

  constructor(private router: Router, private myService: MyServiceService) {}

  ngOnInit() {
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

  navigateToCashoutHome(){
    this.router.navigateByUrl('/cashout-home');
  }

}
