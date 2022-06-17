import {Component} from "@angular/core";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {IServiceType} from "../appointment";

@Component({
  template: `
    <h5>Name:</h5>
    <div class="p-field p-col-12 p-md-4">
    <span class="p-float-label">
      <input type="text" id="inputtext" pInputText [(ngModel)]="serviceType.name" />
      <label for="inputtext">Service's name</label>
    </span>
    </div>
    <h5>Price (in RON):</h5>
    <div class="p-field p-col-12 p-md-4">
    <span class="p-float-label">
      <input type="number" id="inputtext" pInputText [(ngModel)]="serviceType.price" />
      <label for="inputtext">Service's price</label>
    </span>
    </div>
    <button type="submit" pButton icon="pi pi-check" (click)="onAdd()" label="Add Service Type"></button>
    `
})
export class ServiceType {

  serviceType: IServiceType = {
    id:0
  };

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig) {
  }

  onAdd() {
    this.ref.close(this.serviceType);
  }
}
