// src/app/services/user.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const user = this.authService.getUser();
    if (user && user.role !== 'admin') {
      return true;
    }
    this.router.navigate(['/admin']); // если админ пытается зайти на user-страницу
    return false;
  }
}
