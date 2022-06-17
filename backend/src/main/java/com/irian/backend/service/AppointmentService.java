package com.irian.backend.service;

import com.irian.backend.entity.Appointment;
import com.irian.backend.entity.ServiceType;
import com.irian.backend.exceptions.AppointmentExistException;
import com.irian.backend.repository.AppointmentRepo;
import com.irian.backend.repository.ServiceTypeRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class AppointmentService {
    @Autowired
    private AppointmentRepo appointmentRepo;
    @Autowired
    private ServiceTypeRepo serviceTypeRepo;

    public List<Appointment> getAllAppointments() {
        List<Appointment> allAppointments = new ArrayList<>();
        appointmentRepo.findAll().forEach(allAppointments::add);
        return allAppointments;
    }

    public Appointment addAppointment(Appointment appointment) {
        List<Appointment> allAppointments = getAllAppointments();

        for(Appointment a : allAppointments){
            if(a.equals(appointment)){
                throw new AppointmentExistException(
                        "This appointment already exists!"
                );
            }
        }

        appointmentRepo.save(appointment);

        return appointment;
    }

    public List<Appointment> getAllAppointmentsByDoctorName(String doctorName) {
        List<Appointment> allAppointments = getAllAppointments();
        List<Appointment> doctor = new ArrayList<>();

        for(Appointment a : allAppointments){
            if (a.getDoctorName().equals(doctorName)){
                doctor.add(a);
            }
        }

        return doctor;
    }

    public Appointment editAppointment(Long id) {
        Appointment a = this.appointmentRepo.findById(id).get();
        appointmentRepo.save(a);
        return a;
    }

    public Appointment addServiceTypes(List<ServiceType> serviceTypes, Long id) {
        Appointment a = this.appointmentRepo.findById(id).get();
        for(ServiceType s : serviceTypes){
            a.getServiceTypes().add(s);
            serviceTypeRepo.save(s);
        }
        appointmentRepo.save(a);
        return a;
    }

    public Appointment getAppointment(Long id) {
        Appointment a = this.appointmentRepo.findById(id).get();
        return a;
    }
}
