import { Component } from '@angular/core';
import { commonImports } from '../../shared/common.imports';

@Component({
  selector: 'app-forgot-password',
  imports: [commonImports],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  email = '';

  submit() {
    console.log('Password reset requested for:', this.email);
  }
}
