import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  users: User[] = [
    {
      id: 1,
      name: 'Jackie Goldner',
      number: '111 111',
      money: 14556747,
      pincode: 11,
    },
    {
      id: 2,
      name: 'Ben Wehner',
      number: '222 222',
      money: 54912166,
      pincode: 22,
    },
    {
      id: 3,
      name: 'Geraldine Borer III',
      number: '333 333',
      money: 67010861,
      pincode: 33,
    },
    {
      id: 4,
      name: 'Ollie Howe',
      number: '444 444',
      money: 46821418,
      pincode: 44,
    },
    {
      id: 5,
      name: 'Lana Murazik',
      number: '555 555',
      money: 37153334,
      pincode: 55,
    },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
}
