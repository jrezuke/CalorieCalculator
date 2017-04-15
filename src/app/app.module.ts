import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TooltipModule } from 'ngx-bootstrap/Tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppConfig } from "app/app.config";
import { SitesComponent } from './sites/sites.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ConfirmModalComponent } from "./shared/modals/confirm-modal.component";
import { InformModalComponent } from "./shared/modals/inform-modal.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SitesComponent,
    NotFoundComponent,
    ConfirmModalComponent,
    InformModalComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [AppConfig,
  {provide: 'someThing', useValue: 'some value'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
