// guard2.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class guard2Guard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    console.log('Guard activated!');
    const isLoggedIn = !!localStorage.getItem('token');
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
