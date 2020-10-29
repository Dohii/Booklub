import { Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'books',
        component: BookListComponent,
      },
      {
        path: 'books/:id',
        component: BookDetailComponent,
      },
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
