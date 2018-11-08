import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../../services/json-reader.service'
import { MessageService } from '../../services/message.service';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  projects: Project[] = [];

  constructor(private jsonReaderService: JsonReaderService, private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.get().subscribe((msg) => {
      this.jsonReaderService.getJSON(`./assets/json/projects_${msg}.json`).subscribe(data => {
        this.projects = data['projects'] as Project[];
      });
    });
    this.messageService.setSame();
  }
}