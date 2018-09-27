import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../services/json-reader.service'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  cvData: object;

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.getJSON().subscribe(data => {
      this.cvData = data['basicInformation'];
      console.log(data);
      console.log(this.cvData['name']);
    });
  }
}