// src/app/pages/admin/categories/categories.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService, Category } from '../../../services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe(res => this.categories = res);
  }
  deleteCategory(id: string) {
    if (confirm('Вы уверены, что хотите удалить эту категорию?')) {
      this.categoryService.deleteCategory(id).subscribe({
        next: () => {
          this.categories = this.categories.filter(c => c._id !== id);
        },
        error: err => {
          console.error('Ошибка при удалении категории:', err);
          alert('Не удалось удалить категорию.');
        }
      });
    }
  }

}
