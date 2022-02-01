import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { from, fromEvent, Observable, of, range } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Product } from 'src/app/product/product.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-reactive-page',
  templateUrl: './reactive-page.component.html',
  styleUrls: ['./reactive-page.component.scss']
})
export class ReactivePageComponent implements OnInit {

  products :Observable<Product[]>;

  constructor(private store:Store<AppState>, private dashboardService:DashboardService ) { 
    this.products = this.store.select(state => state.product)
  }

  naturalNumber = of(1,2,3,4,5,6)

  randomNumber = range(1,10)

  wholeNum = from([0,1,2,3])

  newCust = this.dashboardService.customers

  addNewCustomer(){
   this.dashboardService.customers.push('new Customer'); 
  }

  ngOnInit(): void {
  }

}
