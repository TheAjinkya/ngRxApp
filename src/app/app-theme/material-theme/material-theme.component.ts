import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-material-theme',
  templateUrl: './material-theme.component.html',
  styleUrls: ['./material-theme.component.scss']
})
export class MaterialThemeComponent implements OnInit {

  constructor(private matSrc : ThemeService) { }

  newlyCust = this.matSrc.newCust

  ngOnInit(): void {
  }

}
