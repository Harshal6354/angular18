import { CommonModule } from '@angular/common';
import { Component, input, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reuse',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './reuse.component.html',
  styleUrl: './reuse.component.css'
})
export class ReuseComponent implements OnChanges {
    @Input() message:string='';
    @Input() btnClass:string='';
    @Input() btntext:string='';
    ngOnChanges(changes: SimpleChanges): void {
      console.log("onchanges")
    }
    alertMode:string="demo mode"
    onclick(){
      this.message="new message";
      this.btntext="new text"
    }
}
