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
  _mess = "";
  public drawalSuccess = false;
  public transferSuccess = false;

  actions: Actions[] = [
    {
      actions1: "Rút tiền",
      actions2: "Xem số Dư",
      actions3: "Đổi PIN",
      actions4: "DV Bảo Hiểm",
      actions5: "Chuyển khoản",
      actions6: "Sao kê",
      actions7: "T.T Phí Dịch vụ",
      actions8: "DV Tài Chính",
    },
    {
      actions1: "Withdraw cash",
      actions2: "Account Balance",
      actions3: "Change PIN",
      actions4: "Insurance services",
      actions5: "Transfer money",
      actions6: "Receive a statement",
      actions7: "Service Cost",
      actions8: "Financial services",
    },
    {
      actions1: "提取现金",
      actions2: "账户余额",
      actions3: "更改密码",
      actions4: "保险服务",
      actions5: "划款",
      actions6: "收到声明",
      actions7: "成本",
      actions8: "金融服务",
    },
  ];

  constructor(private router: Router, private myService: MyServiceService) {}

  ngOnInit() {
    this.drawalSuccess = this.myService.drawalSuccess;
    this.transferSuccess = this.myService.transferSuccess;
    
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

  navigate(url:string){
    this.router.navigateByUrl(`/${url}`);
  }

}
