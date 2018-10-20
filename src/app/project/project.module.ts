import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectStatisticsComponent } from './project-statistics/project-statistics.component';

import {AccordionModule} from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    TableModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  declarations: [ProjectDetailComponent, ProjectOverviewComponent, ProjectStatisticsComponent]
})
export class ProjectModule { }
