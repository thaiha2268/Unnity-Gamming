import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-selectlanguage',
  templateUrl: './selectlanguage.component.html',
  styleUrls: ['./selectlanguage.component.scss'],
})
export class SelectlanguageComponent implements OnInit {
  constructor(private router: Router, private myService: MyServiceService) {}

  ngOnInit(): void {}

  navigateToPinCode(language: string) {
    this.myService.language = language;

    this.router.navigateByUrl('/pincode');
  }
}
