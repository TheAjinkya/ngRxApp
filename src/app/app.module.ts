import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppThemeModule } from './app-theme/app-theme.module';
import { ProductComponent } from './product/product.component';

import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './reducers/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DashboardModule,
    AppThemeModule,
    StoreModule.forRoot({product:addProductReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
