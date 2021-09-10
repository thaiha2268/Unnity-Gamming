import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { MyServiceService } from '../service/my-service.service';
import { UserDataService } from '../service/UserData.service';

@Component({
  selector: 'app-screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.scss'],
})
export class ScreensaverComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserDataService,
    private renderer: Renderer2,
    private router: Router,
    private myService: MyServiceService,
  ) {}

  ngOnInit(): void {
    this.handleUsers();
  }

  async handleUsers(): Promise<any> {
    await this.getUsers();

    let cardActive = document
      .querySelectorAll('.card')[0]
      .classList.add('active');
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

  // checkBtns(): void {
  //   let pos = document.querySelector('.list_card')?.scrollLeft;
  //   let btnLeft = document.querySelector('.btn__left');
  //   let btnRight = document.querySelector('.btn__right');

  //   if (pos == 0) {
  //     // btnLeft?.hide();
  //   }
  // }

  $ = document.querySelector.bind(document);
  $$ = document.querySelectorAll.bind(document);

  @ViewChild('listCards') listCards!: ElementRef;

  public scrollRight(): void {
    let cardActive = this.$('.card.active');
    var dataAttribute = this.$('.card.active')?.getAttribute('id');
    console.log(dataAttribute);
  }

  public scrollLeft(): void {}

  navigateToSelectLanguage() {
    var id = this.$('.card.active')?.getAttribute('id');
    this.myService.userId = Number(id);
    this.router.navigateByUrl('/language');
 }
}
