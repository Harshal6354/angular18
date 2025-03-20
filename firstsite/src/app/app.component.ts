import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PipeComponent } from "./pipe/pipe.component";
import { MaterialComponents } from './material-imports';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,MaterialComponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstsite';
}
