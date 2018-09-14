import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule, MenuItemContent} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';

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
      label: 'File',
      items: [
          {label: 'New', icon: 'fa fa-plus'},
          {label: 'Open', icon: 'fa fa-download'}
      ]
  },
  {
      label: 'Edit',
      items: [
          {label: 'Undo', icon: 'fa fa-refresh'},
          {label: 'Redo', icon: 'fa fa-repeat'}
      ]
  }];
  }

}
