import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit() {}
  addToCart(id, name, price) {
    this.cartService.addToCart({ id: id, name: name, price: price });
  }
}
