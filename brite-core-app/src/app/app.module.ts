import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {RiskService} from './services/risk.service';
import { InsurersComponent } from './insurers/insurers.component';
import {AppRoutingModule} from "./app.route.module";
import {SubscribeComponent} from "./insurers/subscribe/subscribe.component";
import {RiskTypesComponent} from "./insurers/risk-types/risk-types.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {BsDatepickerModule} from "ngx-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    InsurersComponent,
    SubscribeComponent,
    RiskTypesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    })
  ],
  providers: [RiskService],
  bootstrap: [AppComponent]
})

export class AppModule { }
