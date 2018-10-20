import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../../services/json-reader.service'
import { Project } from '../../models/Project';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  projects: Project[] = [];
  cols: any[];
  options: any;

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.getJSON("./assets/projects_cn.json").subscribe(data => {
      this.projects = data['projects'] as Project[];
    });

    this.cols = [
      { field: 'name', header: 'Name', width: '30%' },
      { field: 'organization', header: 'Organization', width: '20%' },
      { field: 'city', header: 'City', width: '20%' },
      { field: 'startDate', header: 'StartDate', width: '15%' },
      { field: 'endDate', header: 'EndDate', width: '15%' }
    ];
  }

}
