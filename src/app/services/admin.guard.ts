// src/app/services/admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const user = this.authService.getUser();
    if (user && user.role === 'admin') {
      return true;
    }
    if (user) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
    return false;
  }
}
