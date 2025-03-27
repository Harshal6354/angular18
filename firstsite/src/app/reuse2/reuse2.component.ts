import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reuse2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reuse2.component.html',
  styleUrl: './reuse2.component.css',
})
export class Reuse2Component {
  @Input() message: string = '';
  @Input() new_alert: string = '';
  @Input() btnName: string = '';
  @Input() btnClass: string = '';
  @Input() mycolor: string = '';
  @Output() onBtnclick = new EventEmitter<any>();
  @Output() onBTNclick = new EventEmitter<string>();
  onclick() {
    this.onBtnclick.emit();
  }

  onBTnclick() {
    debugger;
    this.onBTNclick.emit();
  }
}
