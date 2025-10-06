import { FlowbiteService } from './../../../core/services/flowbite.service';
import {
  Component,
  computed,
  inject,
  Input,
  PLATFORM_ID,
  Signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../core/auth/services/auth.service';
import { CartService } from '../../../features/cart/services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly authService = inject(AuthService);
  private readonly cartService = inject(CartService);
  private readonly id = inject(PLATFORM_ID);

  count: Signal<number> = computed(() => this.cartService.countNumber());

  @Input({ required: true }) isLogin!: boolean;
  constructor(private FlowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.id) && this.isLogin) {
      this.getAllDataCart();
    }
    this.FlowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  getAllDataCart(): void {
    this.cartService.getLoggedUserCart().subscribe({
      next: (res) => {
        this.cartService.countNumber.set(res.numOfCartItems);
      },
    });
  }

  signOut(): void {
    this.authService.logOut();
  }
}
