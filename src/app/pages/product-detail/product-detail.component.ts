import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: any;
  isLoggedIn = false;
  currentUser: any;
  showDropdown = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.currentUser = this.authService.getUser();
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get(`http://localhost:5000/api/products/${id}`).subscribe({
        next: (data) => this.product = data,
        error: (err) => console.error('Ошибка загрузки товара:', err)
      });
    }
    

  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  hideDropdown() {
    this.showDropdown = false;
  }

  logout() {
    console.log(this.currentUser)
    console.log(this.isLoggedIn)
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goBack() {
    this.location.back();
  }
}
