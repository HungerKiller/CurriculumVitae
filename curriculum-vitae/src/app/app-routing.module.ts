import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CvComponent }  from './cv/cv.component';
import { ProjectComponent }  from './project/project.component';

const routes: Routes = [
  { path: '', redirectTo: '/cv', pathMatch: 'full' },
  { path: 'cv', component: CvComponent },
  { path: 'project', component: ProjectComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
