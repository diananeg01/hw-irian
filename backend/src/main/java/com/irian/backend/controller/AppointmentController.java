package com.irian.backend.controller;

import com.irian.backend.entity.Appointment;
import com.irian.backend.entity.ServiceType;
import com.irian.backend.service.AppointmentService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(path = "/appointment")
public class AppointmentController {
    @Autowired
    private final AppointmentService appointmentService;

    @GetMapping(path = "/all")
    public ResponseEntity<List<Appointment>> getAllAppointments(){
        return new ResponseEntity<>(appointmentService.getAllAppointments(), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<Appointment> getAppointmentById(@RequestParam Long id){
        return new ResponseEntity<>(appointmentService.getAppointment(id), HttpStatus.OK);
    }

    @GetMapping(path = "/doctors")
    public ResponseEntity<List<Appointment>> getAllAppointmentsByDoctorName(@RequestParam(name = "name") String doctorName){
        return new ResponseEntity<>(appointmentService.getAllAppointmentsByDoctorName(doctorName), HttpStatus.OK);
    }

    @PostMapping(path = "/add-appointment")
    public ResponseEntity<Appointment> addAppointment(@RequestBody Appointment appointment){
        return new ResponseEntity<>(appointmentService.addAppointment(appointment), HttpStatus.CREATED);
    }

    @PutMapping(path = "add-service-type")
    public ResponseEntity<Appointment> addServiceType(@RequestBody List<ServiceType> serviceTypes, @RequestParam Long id){
        return new ResponseEntity<>(appointmentService.addServiceTypes(serviceTypes, id), HttpStatus.OK);
    }

    @PutMapping(path = "/edit/{id}")
    public ResponseEntity<Appointment> editAppointment(@PathVariable Long id){
        return new ResponseEntity<>(appointmentService.editAppointment(id), HttpStatus.OK);
    }
}
