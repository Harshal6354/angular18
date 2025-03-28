import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReuseComponent } from '../REUSEBALECOMP/reuse/reuse.component';
import { Reuse2Component } from '../reuse2/reuse2.component';
import { Constant } from '../constant/constant';

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
  Validation: string = Constant.VALIDATION_MESSAGE.REUIRED;
  Validform: string = Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT;
  livemsg: string = '';
  click() {
    this.Validation = this.livemsg;
    alert('my device');
  }
}
