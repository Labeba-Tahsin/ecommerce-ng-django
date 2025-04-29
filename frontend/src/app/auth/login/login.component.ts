import { Component } from '@angular/core';
import { commonImports } from '../../shared/common.imports';
@Component({
  selector: 'app-login',
  imports: [commonImports],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
