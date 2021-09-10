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
      number: '8793 6921 9611 8385',
      money: 14556747,
      pincode: 222222,
    },
    {
      id: 2,
      name: 'Ben Wehner',
      number: '5626 0767 1667 5164',
      money: 54912166,
      pincode: 744753,
    },
    {
      id: 3,
      name: 'Geraldine Borer III',
      number: '1438 8290 2437 9834',
      money: 67010861,
      pincode: 860502,
    },
    {
      id: 4,
      name: 'Ollie Howe',
      number: '5818 8285 7357 9332',
      money: 46821418,
      pincode: 398621,
    },
    {
      id: 5,
      name: 'Lana Murazik',
      number: '1101 6362 3586 2915',
      money: 37153334,
      pincode: 559965,
    },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
}
