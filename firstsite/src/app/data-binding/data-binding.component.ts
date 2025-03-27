import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReuseComponent } from '../REUSEBALECOMP/reuse/reuse.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    FormsModule,
    ReuseComponent,
    ReuseComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  courseName = 'Ang.';
  inputType = 'radio';
  rollNo = 20;
  Myxclass = 'Mega';
  isIndian = false;
  currentDATE: Date = new Date();
  title = 'Data Binding Works!';
  div1BgColor = 'bg-primary'; // new class
  ObjArray: any[] = [
    { studentid: 1, name: 'aaa', city: 'pune', isActive: false },
    { studentid: 2, name: 'bbb', city: 'rajkot', isActive: true },
  ];
  cityArray: string[] = ['Pune', 'Ahmedabad', 'Surat'];
  constructor() {
    this.title = 'newtitle';
  }
  NewShow() {
    this.rollNo = 55;
  }
  showAlert(Message: string) {
    alert(Message);
  }
  ShowNew() {
    this.rollNo = 50;
    this.inputType = 'checkbox';
  }
}
