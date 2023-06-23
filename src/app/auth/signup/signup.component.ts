import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
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

  signup() {
    console.log(this.email + " sign up")
  }
}
