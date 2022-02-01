import { Injectable } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private dashboardSrc : DashboardService) { }

  newCust = this.dashboardSrc.customers
  
}
