import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SkillsComponent } from './skills/skills.component';
import { ServicesComponent } from './services/services.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [AdminComponent,  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzIconModule,
    FormsModule,
    NzToolTipModule 
  ]
})
export class AdminModule { }
