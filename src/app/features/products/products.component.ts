import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { Product } from '../../core/models/product.interface';
import { ProductsService } from '../../core/services/products/products.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../../shared/pipes/search-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CardComponent, NgxPaginationModule, SearchPipe, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  private readonly productsService = inject(ProductsService);
  pageSize!: number;
  p!: number;
  total!: number;
  text: string = '';

  getAllProductsData(pageNumber: number = 1): void {
    this.productsService.getAllProducts(pageNumber).subscribe({
      next: (res) => {
        console.log(res.data);
        this.productList = res.data;
        this.pageSize = res.metadata.limit;
        this.p = res.metadata.currentPage;
        this.total = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getAllProductsData();
  }
}
