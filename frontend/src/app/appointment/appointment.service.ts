import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAppointment, IServiceType} from "./appointment";

const BKE_API = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAppointmentsLarge() {
    return this.http.get<any>(BKE_API + `appointment/all`)
      .toPromise()
      .then(res => <IAppointment[]>res)
      .then(data => { return data; });
  }

  getAppointmentLarge(id: number) {
    return this.http.get<any>(BKE_API + `appointment?id=${id}`)
      .toPromise()
      .then(res => <IAppointment>res)
      .then(data => {
        console.log(data);
        return data;
      });
  }

  getServiceTypesLarge() {
    return this.http.get<any>(BKE_API + `service-type/all`)
      .toPromise()
      .then(res => <IServiceType[]>res)
      .then(data => { return data; });
  }

  addServiceType(serviceType: IServiceType){
    return this.http.post<any>(BKE_API + `add-service-type`, serviceType).toPromise();
  }

  addAppointment(appointment: IAppointment) {
    return this.http.post<any>(BKE_API + `appointment/add-appointment`, appointment).toPromise();
  }

  editAppointment(appointment: IAppointment){
    return this.http.put(BKE_API + `appointment/edit/${appointment.id}`, appointment).toPromise();
  }
}
