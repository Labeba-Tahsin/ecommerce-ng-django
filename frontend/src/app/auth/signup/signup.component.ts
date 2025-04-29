import { Component } from '@angular/core';
import { commonImports } from '../../shared/common.imports';

@Component({
  selector: 'app-signup',
  imports: [commonImports],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  register() {
    console.log({
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
  }
}
