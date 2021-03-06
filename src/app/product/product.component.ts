import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products = this.store.select((state) => state.product);
  }

  addProduct(name: string, price: string) {
    console.log(name, price);
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product>{
        name: name,
        price: price,
      },
    });
  }

  deleteProduct(name: string, price: string, i:number) {
    console.log(name, price, i);
    this.store.dispatch({
      type: 'DELETE_PRODUCT',
      payload: {
        name: name,
        price: price,
        index:i
      },
    });
  }

  ngOnInit(): void {}
}
