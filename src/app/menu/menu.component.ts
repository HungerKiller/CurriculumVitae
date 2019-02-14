import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[];

    constructor(public translate: TranslateService) { }

    ngOnInit() {
        this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
            this.items = [{
                label: this.translate.instant('MENU.CV'),
                icon: 'fa fa-address-card',
                routerLink: 'cv'
            },
            {
                label: this.translate.instant('MENU.Projects'),
                icon: 'fa fa-tasks',
                items: [
                    { label: this.translate.instant('MENU.Overview'), routerLink: 'project/overview', icon: 'fa fa-table' },
                    { label: this.translate.instant('MENU.Detail'), routerLink: 'project/detail', icon: 'fa fa-list-ul' },
                    { label: this.translate.instant('MENU.Statistics'), routerLink: 'project/statistics', icon: 'fa fa-pie-chart' }
                ]
            }];
        });
        this.translate.use('en');
    }
}
