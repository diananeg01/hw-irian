import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppointmentListComponent} from "./appointment/appointment-list/appointment-list.component";
import {AppointmentDetailComponent} from "./appointment/appointment-detail/appointment-detail.component";
import {AppointmentNewComponent} from "./appointment/appointment-new/appointment-new.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: AppointmentListComponent
  },{
    path: 'home/:id', component: AppointmentDetailComponent
  },{
    path: "new-appointment", component: AppointmentNewComponent
  },{
    path: "**", redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
