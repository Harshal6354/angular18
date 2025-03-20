import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { ReuseComponent } from '../REUSEBALECOMP/reuse/reuse.component';

@Component({
  selector: 'app-rs-form',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe,ReuseComponent,CommonModule],
  templateUrl: './rs-form.component.html',
  styleUrl: './rs-form.component.css'
})
export class RsFormComponent {
      studentForm: FormGroup=new FormGroup({
      Email:new FormControl(""),
      Password:new FormControl(""),
      Address:new FormControl("",[Validators.required]),
      Address2:new FormControl(""),
      City:new FormControl(""),
      State:new FormControl(""),
      Zip:new FormControl(""),
      number:new FormControl(""),
      isAcceptTerms:new FormControl(""),
      })
    formsvalue:any;
    Submit(){
      this.formsvalue=this.studentForm.value;
    }
}
