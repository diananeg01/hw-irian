import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { AppointmentDetailComponent } from './appointment/appointment-detail/appointment-detail.component';
import { AppointmentNewComponent } from './appointment/appointment-new/appointment-new.component';
import { DetailBarComponent } from './detail-bar/detail-bar.component';
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {ProgressBarModule} from "primeng/progressbar";
import {HttpClientModule} from "@angular/common/http";
import {MenubarModule} from "primeng/menubar";
import {CheckboxModule} from "primeng/checkbox";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ToastModule} from "primeng/toast";
import {ServiceType} from "./appointment/appointment-new/service-type";
import {RadioButtonModule} from "primeng/radiobutton";
import {RippleModule} from "primeng/ripple";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    AppointmentDetailComponent,
    AppointmentNewComponent,
    DetailBarComponent,
    ServiceType
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule,
    ProgressBarModule,
    MenubarModule,
    CheckboxModule,
    InputTextareaModule,
    ToastModule,
    RadioButtonModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
