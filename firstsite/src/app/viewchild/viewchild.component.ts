import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReuseComponent } from '../REUSEBALECOMP/reuse/reuse.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [ReuseComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css',
})
export class ViewchildComponent {
  @ViewChild('txt') textBox?: ElementRef;
  @ViewChild(ReuseComponent) reusecomp?: ReuseComponent;
}
