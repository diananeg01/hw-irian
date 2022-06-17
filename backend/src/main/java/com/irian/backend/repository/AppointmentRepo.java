package com.irian.backend.repository;

import com.irian.backend.entity.Appointment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepo extends CrudRepository<Appointment, Long> {

}
