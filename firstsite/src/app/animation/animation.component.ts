import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css'
})
export class AnimationComponent {
  
  
}
