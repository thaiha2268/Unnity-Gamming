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
  
}
