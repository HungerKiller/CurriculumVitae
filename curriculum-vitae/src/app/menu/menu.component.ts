import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    private items: MenuItem[];

    constructor() { }

    ngOnInit() {
        this.items = [{
            label: '简历',
            icon: 'fa fa-address-card',
            routerLink: 'cv'
        },
        {
            label: '项目',
            icon: 'fa fa-tasks',
            routerLink: 'project',
            items: [
                { label: '项目1', icon: 'fa fa-tasks' },
                { label: '项目2', icon: 'fa fa-tasks' }
            ]
        }];
    }
}
