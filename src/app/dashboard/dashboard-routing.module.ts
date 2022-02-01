import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';

const routes: Routes = [
  {path : '', component : HomeComponent, 
  children:[{path:'observable', component: ReactivePageComponent}]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
