import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule, MenuItemContent} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    // MenuModule,
    // PanelMenuModule,
   ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
