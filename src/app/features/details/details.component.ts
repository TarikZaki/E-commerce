import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from './services/product-details.service';
import { Product } from '../../core/models/product.interface';
import { CartService } from '../cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  imports: [CarouselModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  detailsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 3,
    nav: true,
  };
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productDetailsService = inject(ProductDetailsService);
  private readonly cartService = inject(CartService);
  private readonly toastrService = inject(ToastrService);

  addProductItemToCart(id: string): void {
    this.cartService.addProductToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status === 'success') {
          this.toastrService.success(res.message, 'Fresh Cart');
          this.cartService.countNumber.set(res.numOfCartItems);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  id: string | null = null;
  productDetails: Product = {} as Product;

  getProductId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (urlParams) => {
        console.log(urlParams.get('id'));
        this.id = urlParams.get('id');
      },
    });

    // this.id = this.activatedRoute.snapshot.paramMap.get('id')
  }

  getProductDetailsData(): void {
    this.productDetailsService.getProductDetails(this.id).subscribe({
      next: (res) => {
        console.log(res.data);
        this.productDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getProductId();
    this.getProductDetailsData();
  }
}
