import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]= [
    new User(1, 'soula bou', 'js', '12345'),
    new User(2, 'tttt cccc', 'jdf', '12345'),
    new User(3, 'ffff vvvv', 'cs', '12345'),
    new User(4, 'dddd bbbb', 'jgg', '12345'),
  ]
  constructor() { }
}
