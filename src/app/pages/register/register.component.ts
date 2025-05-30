import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatError } from '@angular/material/form-field';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatError
  ]
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(form: any) {
    if (form.invalid) {
      return;
    }

    const payload = { username: this.username, email: this.email, password: this.password };

    this.http.post(`${environment.apiUrl}/auth/register`, payload)
      .subscribe({
        next: () => {
          alert('Регистрация прошла успешно!');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          alert('Ошибка при регистрации');
        }
      });
  }
}
