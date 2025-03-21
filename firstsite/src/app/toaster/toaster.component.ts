import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css'
})
export class ToasterComponent {
    constructor(private toaster:ToastrService){}

    onclick(){
      this.toaster.success("Success","this is success",{closeButton:true,timeOut:500})
    }
    error(){
      this.toaster.error("error","this is error",{closeButton:true,positionClass:'toast-top-left',timeOut:5000,toastClass:'toast1'})

    }
}
