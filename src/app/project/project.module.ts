import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectStatisticsComponent } from './project-statistics/project-statistics.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectDetailComponent, ProjectOverviewComponent, ProjectStatisticsComponent]
})
export class ProjectModule { }
