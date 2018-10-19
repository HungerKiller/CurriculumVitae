import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../services/json-reader.service'
import { Project } from '../models/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.getJSON("./assets/projects_cn.json").subscribe(data => {
      this.projects = data['projects'] as Project[];
    });
  }
}