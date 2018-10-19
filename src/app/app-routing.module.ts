import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CvComponent } from './cv/cv.component';
import { ProjectComponent } from './project/project.component';

import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectOverviewComponent } from './project/project-overview/project-overview.component';
import { ProjectStatisticsComponent } from './project/project-statistics/project-statistics.component';

const routes: Routes = [
  { path: '', redirectTo: '/cv', pathMatch: 'full' },
  { path: 'cv', component: CvComponent },
  {
    path: 'project',
    component: ProjectComponent,
    children: [
      { path: 'detail', component: ProjectDetailComponent },
      { path: 'overview', component: ProjectOverviewComponent },
      { path: 'statistics', component: ProjectStatisticsComponent }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
