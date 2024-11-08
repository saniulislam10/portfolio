import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from '../../components/navbar/navbar.component';



@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent

  ],
  imports: [
    PagesRoutingModule,
    CommonModule
  ]
})
export class PagesModule { }
