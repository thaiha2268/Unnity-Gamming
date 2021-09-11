import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor() {}
  public language = 'vn';
  public userId = -1;

  public myUser = {} as User;

  public receiverUser = {} as User;
  public isExistSTK = false;

  public receiveMoney = 0;
  public validMoney = false;

  public drawalSuccess = false;
  public transferSuccess = false;
}
