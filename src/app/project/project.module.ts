import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectStatisticsComponent } from './project-statistics/project-statistics.component';

import {AccordionModule} from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { GalleriaModule } from 'primeng/galleria';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { NgxEchartsModule } from 'ngx-echarts';
import 'echarts-gl/dist/echarts-gl'; // Import echarts-gl for 3d

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    TableModule,
    GalleriaModule,
    NgZorroAntdModule,
    NgxEchartsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [ProjectDetailComponent, ProjectOverviewComponent, ProjectStatisticsComponent]
})
export class ProjectModule { }
