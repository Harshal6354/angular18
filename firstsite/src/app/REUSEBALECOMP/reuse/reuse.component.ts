import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reuse',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reuse.component.html',
  styleUrl: './reuse.component.css',
})
export class ReuseComponent {
  @Input() message: string = '';
  @Input() btnClass: string = '';
  @Input() btntext: string = '';

  alertMode: string = 'demo mode';
  onclick() {
    this.message = 'new message';
    this.btntext = 'new text';
  }

  @Input() myclassNAME: string = '';
}
