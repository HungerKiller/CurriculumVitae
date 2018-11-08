import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  languages: Language[] = [];
  selectedLang: string;

  constructor(private messageService: MessageService, public translate: TranslateService) { }

  ngOnInit() {
    this.languages = [
      { label: `HOME.Chinese`, value: 'cn' },
      { label: `HOME.English`, value: 'en' },
      { label: `HOME.French`, value: 'fr' }
    ];
  }

  changeLanguage(lang: string) {
    this.messageService.set(this.selectedLang);
    this.translate.use(this.selectedLang);
  }
}

class Language {
  label: string;
  value: string;
}