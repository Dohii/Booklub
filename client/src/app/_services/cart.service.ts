import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  itemsShow = [];

  constructor() {}
  addToCart(product) {
    var items = JSON.parse(localStorage.getItem('cart')) || [];
    var newItems = product;
    items.push(newItems);
    this.itemsShow.push(product);
    localStorage.setItem('cart', JSON.stringify(items));
  }

  getItems() {
    return this.itemsShow;
  }

  clearCart() {
    this.itemsShow = [];
    localStorage.removeItem('cart');
    return this.itemsShow;
  }
}
