import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectDetailComponent }  from './project-detail/project-detail.component';
import { ProjectOverviewComponent }  from './project-overview/project-overview.component';
import { ProjectStatisticsComponent }  from './project-statistics/project-statistics.component';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      { path: 'detail', component: ProjectDetailComponent },
      { path: 'overview', component: ProjectOverviewComponent },
      { path: 'statistics', component: ProjectStatisticsComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProjectRoutingModule { }
