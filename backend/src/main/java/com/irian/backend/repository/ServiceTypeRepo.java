package com.irian.backend.repository;

import com.irian.backend.entity.ServiceType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceTypeRepo extends CrudRepository<ServiceType, Long> {
}
