import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  cartItemQuantity;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartItemQuantity = this.cartService.getItemsTotal();
  }
  updateCartNumber() {
    this.cartItemQuantity = this.cartService.getItemsTotal();
  }

}
