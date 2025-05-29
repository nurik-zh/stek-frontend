import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { UsersComponent } from './pages/admin/users/users.component'; 
import { GoodsComponent } from './pages/admin/goods/goods.component'; 
import { CategoriesComponent } from './pages/admin/categories/categories.component'; 

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [UserGuard] },
  { path: 'product/:id', component: ProductDetailComponent, canActivate: [UserGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard],
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'goods', component: GoodsComponent },
      { path: 'categories', component: CategoriesComponent },
    ]
  }
];
