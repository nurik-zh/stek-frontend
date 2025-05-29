// src/app/pages/admin/goods/goods.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-goods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent {
  products: any[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(res => this.products = res);
  }

  deleteProduct(id: string) {
    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.products = this.products.filter(p => p._id !== id);
        },
        error: err => {
          console.error('Ошибка при удалении товара:', err);
          alert('Не удалось удалить товар.');
        }
      });
    }
  }

}
