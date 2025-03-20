import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../class/customer';


@Component({
  selector: 'app-data2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './data2.component.html',
  styleUrl: './data2.component.css'
})
export class Data2Component {
  courseName:string="worksfromhome";
  inputType="radio";

  cityName:string="Goa";
  
  firstname=signal("Harshal");

  showAlert(message:string){
       alert(message)
  }

  changrCourseNAme(){
   this.courseName="New js course"; 
   this.firstname.set("Sachin");
  }
   isDiv1Visible:boolean=true;
   isDiv2Visible:boolean=false;
   num1:string='';
   num2:string='';
  StudentofCL: any[] = [
    { studentid: 1, name: 'aaa', city: 'Pune', isActive: false },
    { studentid: 2, name: 'bbb', city: 'Rajkot', isActive: true }
  ];
  //  cityArray:string[]=['Pune','Ahmedabad','Surat'];
  //  showDiv1(){
  //   this.isDiv1Visible=true;
  //  }
  // hideDiv1(){
  //   this.isDiv1Visible=false;
  // }
  // toggleDiv(){
  //   this.isDiv1Visible=!this.isDiv2Visible;
  // }
  //    div1Bgcolor:string='bg-primary';
  //    isdivActive:boolean=false;
  
  //    addRedClass(){
  //     this.div1Bgcolor="bg-danger"
  //    }
  //    addBlueClass(){
  //     this.div1Bgcolor="bg-primary";
  //    }

  dayNumber:string='';
 

  objwork:any[]=[
    {
      "name":"rohan",
      "class":"A3",
      "city":"surat",
     
  }
]
newdata2: Customer=new Customer();
 
}