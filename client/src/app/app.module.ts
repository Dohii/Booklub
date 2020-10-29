import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SlideAdminPanelComponent } from './slide-admin-panel/slide-admin-panel.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { CartService } from './_services/cart.service';
import { BookCardComponent } from './book-card/book-card.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [			
    AppComponent,
    HomeComponent,
    SideBarComponent,
    SlideAdminPanelComponent,
    RegisterComponent,
    LoginComponent,
    BookDetailComponent,
      BookListComponent,
      BookCardComponent,
      CartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
