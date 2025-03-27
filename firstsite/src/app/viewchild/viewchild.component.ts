import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ReuseComponent } from '../REUSEBALECOMP/reuse/reuse.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [ReuseComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css',
})
export class ViewchildComponent implements AfterViewInit {
  @ViewChild('txt') textBox?: ElementRef;
  @ViewChild(ReuseComponent) reusecomp?: ReuseComponent;
  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value;
    debugger;
    const alertMode = this.reusecomp?.message;
  }
}
