import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../shared/components/input/input.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart/services/cart.service';
import { error } from 'console';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);
  checkOutForm!: FormGroup;
  id: string | null = null;
  isLoading: boolean = false;
  initForm(): void {
    this.checkOutForm = this.fb.group({
      shippingAddress: this.fb.group({
        details: [null, Validators.required],
        phone: [
          null,
          [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
        ],
        city: [null, Validators.required],
      }),
      paymentMethod: ['cash'],
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.getCartId();
  }

  getCartId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (urlParams) => {
        this.id = urlParams.get('id');
      },
    });
  }

  onSubmit(): void {
    if (!this.checkOutForm.valid) {
      this.checkOutForm.markAllAsTouched();
      return;
    }

    const selectedPayment = this.checkOutForm.get('paymentMethod')?.value;
    if (selectedPayment === 'card') {
      this.cartService
        .checkOutSession(this.id, this.checkOutForm.value)
        .subscribe({
          next: (res) => {
            if (res.status === 'success') {
              window.open(res.session.url, '_self');
            }
          },
          error: (err) => {
            console.error(err);
          },
        });
    } else if (selectedPayment === 'cash') {
      this.cartService
        .creatCashOrder(this.id, this.checkOutForm.value)
        .subscribe({
          next: (res) => {
            console.log('Cash order created:', res);
            this.router.navigate(['/allorders']);
          },
          error: (err) => {
            console.error(err);
          },
        });
    }
  }
}
