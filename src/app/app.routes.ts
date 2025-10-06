import { HomeComponent } from './features/home/home.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { Routes } from '@angular/router';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { CartComponent } from './features/cart/cart.component';
import { BrandsComponent } from './features/brands/brands.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { DetailsComponent } from './features/details/details.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { authGuard } from './core/guards/auth-guard';
import { isLoggedGuard } from './core/guards/is-logged-guard';
import { AllordersComponent } from './features/allorders/allorders.component';
import { ForgotPasswordComponent } from './core/auth/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [isLoggedGuard],
    children: [
      { path: 'login', component: LoginComponent, title: 'login page' },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'register page',
      },
      {
        path: 'forgot',
        component: ForgotPasswordComponent,
        title: 'Forgot Password page',
      },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: HomeComponent, title: 'home page' },
      { path: 'cart', component: CartComponent, title: 'cart page' },
      {
        path: 'products',
        loadComponent: () =>
          import('./features/products/products.component').then(
            (c) => c.ProductsComponent
          ),
        title: 'products page',
      },
      { path: 'brands', component: BrandsComponent, title: 'brands page' },
      {
        path: 'categories',
        component: CategoriesComponent,
        title: 'categories page',
      },
      {
        path: 'allorders',
        component: AllordersComponent,
        title: 'allorders page',
      },
      {
        path: 'details/:slug/:id',
        component: DetailsComponent,
        title: 'details page',
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'details page',
      },
      {
        path: 'checkout/:id',
        component: CheckoutComponent,
        title: 'checkout page',
      },
    ],
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: 'Not found page',
  },
];
