import {Component, Input, OnInit} from '@angular/core';
import {IAppointment, IServiceType, Status} from "../appointment";
import {AppointmentService} from "../appointment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  appointment: IAppointment = {} as IAppointment;

  serviceTypes: Array<IServiceType> = [];
  statuses: Array<Status> = [Status.CREATED, Status.CONFIRMED, Status.FINISHED];

  //selectedServiceTypes: {[checked: boolean]: IServiceType; } = {false: {}};

  constructor(
    private appointmentService: AppointmentService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.appointmentService.getAppointmentLarge(this.route.snapshot.params['id']);
    this.appointmentService.getServiceTypesLarge().then(servicesType => {
      this.serviceTypes = servicesType;
    });
  }

  onSubmit() {
    this.appointmentService.editAppointment(this.appointment);
  }
}
