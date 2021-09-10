import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  counter(i: number) {
    return new Array(i);
  }

  constructor(private router: Router, private myService: MyServiceService) {}

  a = '';

  ngOnInit() {
    this.hi('vn', 'bro');
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
      case 'cashout-input': {
        path = 'cashout-confirm';
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
}
