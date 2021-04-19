import { Component } from '@angular/core';
import { Register } from '../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  testRegister = new Register(1, 'Luke', 'Zack', 'Skywalker', '', 'lwalker', 'bobo987');
  submitted = false;

  constructor() { }

  onSubmit(): void { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic(): string { return JSON.stringify(this.testRegister); }

}

