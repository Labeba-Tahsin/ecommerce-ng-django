import { Component } from '@angular/core';
import { commonImports } from '../../shared/common.imports';

@Component({
  selector: 'app-not-found',
  imports: [commonImports],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  goHome() {
    window.location.href = '/auth/login'; // or navigate with router if needed
  }
}
