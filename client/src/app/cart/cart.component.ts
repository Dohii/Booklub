import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
  }
  removeFromCart(idToRemove) {
    var itemArray = JSON.parse(localStorage.getItem('cart')) || [];
    var updatedArray = itemArray.filter((item) => item.id !== idToRemove);
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(updatedArray));
    location.reload();
  }
}
