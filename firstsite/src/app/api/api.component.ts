import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../class/customer';
import { Iuser } from '../interface/iUser';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiComponent {
  Myhome: string = 'Home';
  divBgColor = 'bg-success';
  isPrimary = false;
  onclickBg() {
    this.divBgColor = 'bg-primary';
  }
  num1 = '';
  num2 = '';
  onToggle() {
    this.isPrimary = !this.isPrimary;
  }
  userList: Iuser[] = [];
  customerList: Customer[] = [];
  constructor(private http: HttpClient) {}
  inputtext() {
    this.num1 = this.num2;
  }
  getuserdata() {
    this.http
      .get<Iuser[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((result: Iuser[]) => {
        this.userList = result;
        this.Myhome = 'My town';
      });
  }
}
