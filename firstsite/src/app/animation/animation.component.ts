import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCardSmImage } from '@angular/material/card';
import { ReuseComponent } from '../REUSEBALECOMP/reuse/reuse.component';
import { Reuse2Component } from '../reuse2/reuse2.component';

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    ReuseComponent,
    Reuse2Component,
  ],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
})
export class AnimationComponent {
  click() {
    debugger;
    alert('my device');
  }
}
