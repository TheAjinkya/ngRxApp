import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path : 'home', 
  loadChildren: () => import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {path : 'apptheme',
  loadChildren: () => import('src/app/app-theme/app-theme.module').then(m => m.AppThemeModule)
  },
  {path : 'product', component : ProductComponent, pathMatch : 'full'},
  {path : '', redirectTo : '/apptheme', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
