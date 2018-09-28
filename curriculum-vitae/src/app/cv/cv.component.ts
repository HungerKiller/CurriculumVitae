import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../services/json-reader.service'
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

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.getJSON("./assets/cv.json").subscribe(data => {
      // Basic information
      this.basicInformation = new BasicInformation(data['basicInformation']); 
      // Educational experience
      this.educations.push(new Education(data['educationalExperience']['tours']));
      this.educations.push(new Education(data['educationalExperience']['dalian']));
      // Career experience
      this.careers.push(new Career(data['careerExperience']['xian']));
      this.careers.push(new Career(data['careerExperience']['nantes']));
      this.careers.push(new Career(data['careerExperience']['tours2014']));
      this.careers.push(new Career(data['careerExperience']['tours2013']));
      // Technical skill
      this.techSkill =new TechSkill(data['skills']['technology']);
      // Language skill
      this.langSkills.push(new LangSkill(data['skills']['language']['chinese']));
      this.langSkills.push(new LangSkill(data['skills']['language']['french']));
      this.langSkills.push(new LangSkill(data['skills']['language']['english']));
      this.langSkills.push(new LangSkill(data['skills']['language']['japanese']));
      // Self evaluation
      this.selfEvaluation =new SelfEvaluation(data['selfEvaluation']);
    });
  }
}