import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curriculum-vitae';

  constructor(public translate: TranslateService) {
    translate.addLangs(['cn', 'en', 'fr']);
    translate.setDefaultLang('cn');
  }

  ngOnInit() {
  }
}
