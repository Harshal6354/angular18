import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../class/customer';
import { Iuser } from '../interface/iUser';
@Component({
  selector: 'app-api',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
   divBgColor:string='bg-success';
   isPrimary:boolean = false;
   onclickBg(){
  this.divBgColor='bg-primary'
   }
   num1:string='';
   num2:string='';
onToggle(){
  this.isPrimary=!this.isPrimary;
  }
    userList:Iuser[]=[];
    customerList:Customer[]=[];
    constructor(private http:HttpClient){
  }
  inputtext(){
    this.num1=this.num2;
  }
    getALLuser(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((result:any)=>{
      this.userList=result;
    })
  }
  
  user:any[]=[{
    "newclass":"A",
    "Rollno":"B"
  }]
 }