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
    private el: ElementRef
  ) {}

  $ = document.querySelector.bind(document);
  $$ = document.querySelectorAll.bind(document);

  ngOnInit(): void {
    this.handleUsers();
  }

  async handleUsers(): Promise<any> {
    await this.getUsers();

    let cardActive = this.$('.card')?.classList.add('active');
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

  public scrollRight(): void {
    this.actionsScroll(1);
  }

  public scrollLeft(): void {
    this.actionsScroll(-1);
  }

  actionsScroll(n: number) {
    let numberCard = this.$$('.card').length;
    let currentIndex = Number(this.$('.card.active')?.getAttribute('index'));

    if (n == 1 && currentIndex < numberCard - 1) {
      let futureIndex = currentIndex + n;

      this.$$('.card')[currentIndex].classList.remove('active');
      this.$$('.card')[futureIndex].classList.add('active');

      this.el.nativeElement.querySelector('.active').scrollIntoView();
    } else if (n == -1 && currentIndex > 0) {
      let futureIndex = currentIndex + n;

      this.$$('.card')[currentIndex].classList.remove('active');
      this.$$('.card')[futureIndex].classList.add('active');

      this.el.nativeElement.querySelector('.active').scrollIntoView();
    }
  }

  navigateToSelectLanguage() {
    var id = this.$('.card.active')?.getAttribute('id');
    this.myService.userId = Number(id);
    this.router.navigateByUrl('/language');
  }
}
