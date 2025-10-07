import { FlowbiteService } from './../../../core/services/flowbite.service';
import {
  Component,
  ElementRef,
  computed,
  HostListener,
  inject,
  Input,
  PLATFORM_ID,
  Signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../core/auth/services/auth.service';
import { CartService } from '../../../features/cart/services/cart.service';
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
  private readonly elementRef = inject(ElementRef);
  private readonly id = inject(PLATFORM_ID);
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

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
    this.closeMenu();
  }
}
