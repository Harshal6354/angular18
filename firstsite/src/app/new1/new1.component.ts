import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReuseComponent } from "../REUSEBALECOMP/reuse/reuse.component";
import { Service1Service } from '../SERVICES/service1.service';
import { Router } from '@angular/router';
import { Reuse2Component } from "../reuse2/reuse2.component";
@Component({
  selector: 'app-new1',
  standalone: true,
  imports: [CommonModule, FormsModule, Reuse2Component],
  templateUrl: './new1.component.html',
  styleUrl: './new1.component.css'
})
export class New1Component {
//     str1:string="HARSHAL";
//     input:string="checkbox";

//     showMESSAGE(message:string){
//       alert(message)
//     }
//     showAlert(message:String){ 
//       alert(message)
//     }
//     cityArray:string[]=["pune","ahemadabad","surat"]
//     studentlist:any[]=[{nn:"ramesh",CLASS:"A"},{nn:"rohan",CLASS:"b"},{nn:"raj",CLASS:"c"}]
//     myarray:any=[12,23,4,5,2,3,22]
  
// isVisible:boolean=true;
// showBtn(){
//   this.isVisible=true
// }
// hideBtn(){
//   this.isVisible=false;
//}
// amount:any=0;
// router=inject(Router)
// @ViewChild('paymentRef') paymentRef:ElementRef | any
//  constructor(private payment:Service1Service){}
//  ngOnInit():void{
//   this.amount=this.payment.totalAmout;
//   window.paypal.Buttons().render(this.paymentRef?.nativeElement);
//  }
//  cancle(){
//   this.router.navigate(['/payment'])
//  }

user:String=""
constructor(private service1:Service1Service){
  this.service1.onRoleChange$.subscribe((role:String)=>{
         this.user=role
  })
}

}

