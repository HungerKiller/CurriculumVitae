import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PanelMenuModule } from 'primeng/panelmenu';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MenuItem } from 'primeng/api';
import { MenuModule, MenuItemContent } from 'primeng/menu';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CvComponent } from './cv/cv.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {InplaceModule} from 'primeng/inplace';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CvComponent,
    FooterComponent,
    HeaderComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    MessagesModule,
    MessageModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    RatingModule,
    FormsModule,
    NgZorroAntdModule,
    AccordionModule,
    TableModule,
    InplaceModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
