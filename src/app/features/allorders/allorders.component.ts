import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../cart/services/cart.service';
import { AuthService } from '../../core/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Order } from './models/order.interface';

@Component({
  selector: 'app-allorders',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.css',
})
export class AllordersComponent implements OnInit {
  private readonly cartService = inject(CartService);
  private readonly authService = inject(AuthService);
  private readonly cookieService = inject(CookieService);
  decodedtoken: any;
  id: string = '';
  orders: Order[] = [];
  ngOnInit(): void {
    this.decodedtoken = this.authService.deccodeToken();
    if (this.decodedtoken && this.decodedtoken.id) {
      this.id = this.decodedtoken.id;
      this.getAllUserOrders();
    }
  }

  getAllUserOrders(): void {
    this.cartService.getUserOrders(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.orders = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
