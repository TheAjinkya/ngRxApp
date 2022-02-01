import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { AppThemeModule } from '../app-theme/app-theme.module';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    ReactivePageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // AppThemeModule
  ]
})
export class DashboardModule { }
