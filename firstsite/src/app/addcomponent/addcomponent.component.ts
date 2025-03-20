import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addcomponent',
  standalone: true,
  imports: [FormsModule,JsonPipe,CommonModule],
  templateUrl: './addcomponent.component.html',
  styleUrl: './addcomponent.component.css'
})
export class AddcomponentComponent {
     stundentObj:any ={
      
      Email:'',
      Password:'',
      Address:'',
      Address2:'',
      City:'',
      State:'',
      Zip:'',
      isAccecptTerm:true

     }
     formsValue:any;
     onSubmit(){
     debugger;
     this.formsValue=this.stundentObj;
     }
     Reset(){
      this.stundentObj={
      Password:'',
      Address:'',
      Address2:'',
      City:'',
      State:'',
      Zip:'',
      isAccecptTerm:true

      }
     }
     obj1:any[]=[{
       customer:"rohan",
       consumer:"shrey",
       city:"surat",
       mobile:1293933
     },{ 
       customer:"rajesh",
       consumer:"MAhesh",
       city:"New york",
       mobile:20393
     }]
}
