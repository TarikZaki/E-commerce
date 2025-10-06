import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';

import { CategoriesService } from '../../core/services/categories/categories.service';
import { Category } from '../../core/models/category.interface';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  private readonly categoriesService = inject(CategoriesService);
  allCategories: WritableSignal<Category[]> = signal([]);

  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (res) => {
        console.log(res);
        this.allCategories.set(res.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
