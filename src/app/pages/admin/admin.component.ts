// src/app/pages/admin/admin.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService, Category } from '../../services/category.service';
import { UserService, User } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AdminComponent implements OnInit {
  // users: User[] = [];
  // products: any[] = [];
  // categories: Category[] = [];

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {

    // this.userService.getUsers().subscribe(res => this.users = res);
    // this.productService.getProducts().subscribe(res => this.products = res);
    // this.categoryService.getCategories().subscribe(res => this.categories = res);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
