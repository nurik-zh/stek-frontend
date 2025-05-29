// product.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  searchProducts(query: string): Observable<any[]> {
    const url = query.trim()
      ? `${this.apiUrl}?search=${encodeURIComponent(query)}`
      : this.apiUrl;
    return this.http.get<any[]>(url);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product, {
      headers: this.getAuthHeaders()
    });
  }

  updateProduct(id: string, product: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/${id}`, product, { headers });
  }



  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}
