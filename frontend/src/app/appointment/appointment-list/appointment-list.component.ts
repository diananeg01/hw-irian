import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {IAppointment, Status} from "../appointment";
import {Table} from "primeng/table";
import {AppointmentService} from "../appointment.service";
import {PrimeNGConfig} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: Array<IAppointment> = [];
  selectedAppointments: Array<IAppointment> = [];
  statuses: Array<any> = [];
  loading: boolean = true;

  @ViewChild('dt')
  table: Table = [][0];

  constructor(
    private appointmentService: AppointmentService,
    private primengConfig: PrimeNGConfig,
    private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.appointmentService.getAppointmentsLarge().then(appointments => {
      this.appointments = appointments;
      this.loading = false;
      console.log(appointments);
    });

    this.statuses = [
      {label:"CREATED", value:"created"},
      {label:"CONFIRMED", value:"confirmed"},
      {label:"FINISHED", value:"finished"}
    ];

    this.primengConfig.ripple = true;
  }

  onDateSelect(value: any) {
    this.table.filter(this.formatDate(value), 'date', 'equals');
  }

  formatDate(date: any) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }

  onClick(appointment: IAppointment) {
    return this.appointmentService.getAppointmentLarge(appointment.id);
  }
}
