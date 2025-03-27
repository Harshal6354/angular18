import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Service1Service } from '../SERVICES/service1.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  constructor(private service1: Service1Service) {}
  Rajesh: any = {
    Ste: 'string1',
    Ste2: 'string1',
    Ste3: 'string1',
    Ste4: 'string1',
  };
  selectedRole = '';
  public onRoleChange(role: string) {
    this.service1.onRoleChange$.next(role);
  }
  public onchange2(role: string) {
    this.service1.role$.next(role);
  }
}
