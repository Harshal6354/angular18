import { Component ,inject,Input,input,NgModule} from '@angular/core';
import { Reuse2Component } from '../reuse2/reuse2.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Constant } from '../constant/constant';

@Component({
  selector: 'app-for-reuse',
  standalone: true,
  imports: [Reuse2Component,CommonModule,FormsModule],
  templateUrl: './for-reuse.component.html',
  styleUrl: './for-reuse.component.css'
})

export class ForReuseComponent {
 isContainer:boolean=true;
 userlist:any[]=[];
 http=inject(HttpClient);
 isApi:boolean=false;
 Validation_message:any=Constant.VALIDATION_MESSAGE;
 getuser(){
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
    this.userlist=res; 
  })
 }
 
}
