import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { commonImports } from './shared/common.imports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, commonImports],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
