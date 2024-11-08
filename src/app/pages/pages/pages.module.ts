import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  declarations: [
    PagesComponent,
    ProjectCardComponent,
    NavbarComponent,
    
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    NzProgressModule,
    NzTagModule
  ]
})
export class PagesModule { }
