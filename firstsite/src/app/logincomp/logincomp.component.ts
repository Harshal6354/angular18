import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-logincomp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './logincomp.component.html',
  styleUrl: './logincomp.component.css'
})
export class LogincompComponent {
  userObj: any = {
    username: '',
    password: ''
  };
  router = inject(Router);
  onLogin() {
    if (this.userObj.username ==='Harshal' && this.userObj.password === '1234') {
      alert(' Login successful');
      localStorage.setItem('auth', JSON.stringify(true));
      console.log(" Stored auth value:", localStorage.getItem("auth"));
      this.router.navigateByUrl('add-data2');
    } else {
      alert('Wrong Credentials');
    }
  }
}
