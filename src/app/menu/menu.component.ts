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
            items: [
                { label: '概览', routerLink: 'project/overview', icon: 'fa fa-table' },
                { label: '统计', routerLink: 'project/statistics', icon: 'fa fa-pie-chart' },
                { label: '详情', routerLink: 'project/detail', icon: 'fa fa-list-ul' }
            ]
        }];
    }
}
