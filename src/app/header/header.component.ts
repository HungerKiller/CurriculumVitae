import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  languages: Language[] = [];
  selectedLang: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.languages = [
      { label: 'Chinese', value: 'cn' },
      { label: 'English', value: 'en' },
      { label: 'French', value: 'fr' }
    ];
  }

  changeLanguage(lang: string) {
    this.messageService.set(this.selectedLang);
  }
}

class Language {
  label: string;
  value: string;
}