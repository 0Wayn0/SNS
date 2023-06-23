import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  type: string = '';

  types: string[];

  constructor() {
    this.types = [
      'company',
      'user'
    ]
  }

  login() {
    console.log(this.username + " logged in");
  }
}
