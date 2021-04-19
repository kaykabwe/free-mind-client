import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  testUser = new Login(1, 'kaunda', 'pass123');
  submitted = false;

  constructor() { }

  onSubmit(): void { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic(): string { return JSON.stringify(this.testUser); }

  // TODO: Remote after. We tracking form controls
  showFormControls(form: any): boolean {
    // console.log('Is login form valid', form.form.valid ? 'yes' : 'no');
    return form && form.controls.username &&
    form.controls.username.value; // Dr. IQ
  }
}
