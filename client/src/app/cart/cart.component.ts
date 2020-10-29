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
  itemss;
  isFull = true;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.itemss = JSON.parse(localStorage.getItem('cart')) || [];
    if (this.items.length == 0) {
      this.isFull = false;
    }
    console.log(this.isFull);
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
    this.itemss = [];
  }
}
