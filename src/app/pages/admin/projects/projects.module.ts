import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    NzTableModule,
    NzPageHeaderModule,
    NzButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NzGridModule,
    NzModalModule,
    NzSelectModule,
    NzFormModule,
    NzInputModule,
    NzNotificationModule,
    NzTimePickerModule,
    NzDatePickerModule,
    NzBadgeModule,
    NzIconModule,
    NzTagModule,
  ]
})
export class ProjectsModule { }
