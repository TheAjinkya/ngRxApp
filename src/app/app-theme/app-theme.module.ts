import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppThemeRoutingModule } from './app-theme-routing.module';
import {MatCardModule} from '@angular/material/card';
import { MaterialThemeComponent } from './material-theme/material-theme.component';


@NgModule({
  declarations: [
  
    MaterialThemeComponent
  ],
  imports: [
    CommonModule,
    AppThemeRoutingModule,
    MatCardModule
  ],
  exports:[
    MatCardModule
  ]
})
export class AppThemeModule { }
