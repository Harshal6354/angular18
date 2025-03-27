import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Pipe1Pipe } from '../pipes/pipe1.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../constant/constant';
import { Customer } from '../class/customer';
import { Service1Service } from '../SERVICES/service1.service';
import { ReuseComponent } from '../REUSEBALECOMP/reuse/reuse.component';
@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    CurrencyPipe,
    Pipe1Pipe,
    CommonModule,
    FormsModule,
    ReuseComponent,
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  customerlist: Customer[] = [];
  firstName = 'this is a demo';
  SecondNAme = 'BIG DATA';
  currentDate: Date = new Date();
  Mycurrency = 1000;
  STATE = '';
  fontcolor = 'blue';
  fontsize = 30;
  data: any;
  error = '';
  http = inject(HttpClient);
  colorful() {
    this.fontcolor = "bg-primary text-white img='public/favicon.ico'";
    this.fontsize = 40;
    alert('new class');
  }
  userFirst = '';
  userclass = '';
  userId = 0;
  validation_Message: any = Constant.ValidationForm;

  currentValue: String = '';
  currentValue2: String = '';

  constructor(private service1: Service1Service) {
    //first change of rjx
    this.service1.onRoleChange$.subscribe((role: String) => {
      this.currentValue = role;
    });
    //Second change of rjx
    this.service1.role$.subscribe((role: String) => {
      this.currentValue2 = role;
    });
  }
}
