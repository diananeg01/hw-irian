export interface IServiceType {
  id: number;
  name?: string;
  price?: number;
}

export enum Status{
  CREATED = 'CREATED',
  CONFIRMED = 'CONFIRMED',
  FINISHED = 'FINISHED'
}

export interface IAppointment {
  id: number;
  animalName?: string;
  doctorName?: string;
  status?: Status;
  diagnostic?: string;
  serviceTypes?: Array<IServiceType>;
  dateTime?: Date;
}
