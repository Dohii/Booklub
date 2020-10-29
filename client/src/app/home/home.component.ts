import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cartItemQuantity;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItemQuantity = this.cartService.getItemsTotal();
  }
  updateCartNumber() {
    this.cartItemQuantity = this.cartService.getItemsTotal();
  }
}
