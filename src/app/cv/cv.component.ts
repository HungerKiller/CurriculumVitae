import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../services/json-reader.service'
import { MessageService } from '../services/message.service';
import { BasicInformation } from '../models/BasicInformation';
import { Education } from '../models/Education';
import { Career } from '../models/Career';
import { TechSkill, LangSkill } from '../models/Skill';
import { SelfEvaluation } from '../models/SelfEvaluation';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  basicInformation: BasicInformation;
  educations: Array<Education> = [];
  careers: Array<Career> = [];
  techSkill: TechSkill;
  langSkills: Array<LangSkill> = [];
  selfEvaluation: SelfEvaluation;
  hobbies: Array<string> = [];

  constructor(private jsonReaderService: JsonReaderService, private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.get().subscribe((msg) => {
      this.jsonReaderService.getJSON(`./assets/cv_${msg}.json`).subscribe(data => {
        // Basic information
        this.basicInformation = data['basicInformation'] as BasicInformation;
        // Educational experience
        this.educations = data['educationalExperience'] as Education[];
        // Career experience
        this.careers = data['careerExperience'] as Career[];
        // Technical skill
        this.techSkill = data['skills']['technology'] as TechSkill;
        // Language skill
        this.langSkills = data['skills']['language'] as LangSkill[];
        // Hobby
        this.hobbies = data['hobbies'] as string[];
        // Self evaluation
        this.selfEvaluation = data['selfEvaluation'] as SelfEvaluation;
      });
    });
    this.messageService.setSame();
  }
}