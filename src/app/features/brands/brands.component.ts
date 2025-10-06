import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { BrandsService } from '../../core/services/brands/brands.service';
import { Brand } from '../../core/models/brand.interface';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-brands',
  imports: [NgxPaginationModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent implements OnInit {
  private readonly brandsService = inject(BrandsService);
  allBrands: WritableSignal<Brand[]> = signal([]);
  pageSize!: number;
  p!: number;
  total!: number;

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands(pageNumber: number = 1): void {
    this.brandsService.getAllBrands(pageNumber).subscribe({
      next: (res) => {
        console.log(res);
        this.allBrands.set(res.data);
        this.pageSize = res.metadata.limit;
        this.p = res.metadata.currentPage;
        this.total = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
