import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../services/json-reader.service'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.getJSON().subscribe(data => {
      console.log(data)
    });
  }
}