import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IAppointment, IServiceType, Status} from "../appointment";
import {Form} from "@angular/forms";
import {AppointmentService} from "../appointment.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {ServiceType} from "./service-type";

@Component({
  selector: 'app-appointment-new',
  templateUrl: './appointment-new.component.html',
  styleUrls: ['./appointment-new.component.css'],
  providers: [DialogService, MessageService]
})
export class AppointmentNewComponent implements OnInit {
  @Input()
  appointment: IAppointment = {
    id: 0,
    status: Status.CREATED
  };

  invalidDates: Array<Date> = [];
  serviceTypes: Array<IServiceType> = [];

  minDate: Date;
  maxDate: Date;

  checked: boolean = false;

  @Output()
  newAppointment = new EventEmitter<IAppointment>();

  @ViewChild("df")
  form: Form = [][0];

  constructor(
    private appointmentService: AppointmentService,
    public dialogService: DialogService,
    public messageService: MessageService)
  {
    this.minDate = new Date();
    this.maxDate = new Date();
  }

  ref: DynamicDialogRef = [][0];

  ngOnInit(): void {
    this.appointmentService.getServiceTypesLarge().then(serviceTypes => {
        this.serviceTypes = serviceTypes;
      }
    );

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];
  }

  onSubmit() {
    this.newAppointment.emit(this.appointment);
    this.appointmentService.addAppointment(this.appointment);
    this.appointment = {
      id: 0,
      status: Status.CREATED
    };
  }

  onShow() {
    this.ref = this.dialogService.open(ServiceType, {
      header: 'New Service Type',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((serviceType: IServiceType) =>{
      if (serviceType) {
        this.appointmentService.addServiceType(serviceType);
        this.messageService.add({severity:'info', summary: 'Product Selected', detail: serviceType.name});
        this.serviceTypes.push(serviceType);
      }
    });
  }
}
