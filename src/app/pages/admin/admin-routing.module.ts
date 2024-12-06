import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path:'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path:'skills',
        loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule)
      },
      {
        path:'Services',
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
