import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Service1Service } from '../SERVICES/service1.service';
import { ReuseComponent } from "../REUSEBALECOMP/reuse/reuse.component";
import { Department } from '../class/customer';
import { MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-api-post',
  standalone: true,
  imports: [FormsModule, CommonModule, ReuseComponent,FormsModule,MatButtonModule,MatSelectModule,MatFormFieldModule,MatInputModule],
  templateUrl: './api-post.component.html',
  styleUrl: './api-post.component.css'
})
export class ApiPostComponent  implements OnInit{
  depObj:Department=new Department();  
    deptList:any[]=[];
      http=inject(HttpClient);
      constructor(private deptSrv:Service1Service) {                                                      
      }
        ngOnInit(): void {
          this.getDepartMent();
        }
        onSave(){
          this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.depObj).subscribe((res:any)=>{
            if(res.result){
              alert("department created Suceess");
              this.getDepartMent();
            }
            else{
              alert(res.message);
            }
          })
        }
        onEdit(data:any){
          this.depObj=new Department();
          this.depObj=data;
        }
        onreset(){
          this.depObj={
          "departmentId": 0,
          "departmentName":"",
          "departmentLogo": ""
          }   
        }
        getDepartMent(){
          this.deptSrv.getAllDept().subscribe((res:any)=>{
            this.deptList=res.data;
          })
        }
        isContainer=true;
      userlist:any[]=[]
        getUser(){
          this.http.get("https://projectapi.gerasim.in/api/Complaint/getAllComplaints").subscribe((res:any)=>{
               this.userlist=res;
          })
        }       
        divBgColor = 'green'; 
     onclickBg() {
            this.divBgColor = 'red'; 
          }
          onclickbtn(obj:any){
            this.http.post("",obj)
          }
            
          
  }