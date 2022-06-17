package com.irian.backend.service;

import com.irian.backend.entity.ServiceType;
import com.irian.backend.exceptions.ServiceTypeExistsException;
import com.irian.backend.repository.ServiceTypeRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ServiceTypeService {
    @Autowired
    private final ServiceTypeRepo serviceTypeRepo;


    public List<ServiceType> getAllServiceTypes() {
        List<ServiceType> allServiceTypes = new ArrayList<>();
        serviceTypeRepo.findAll().forEach(allServiceTypes::add);
        return allServiceTypes;
    }

    public ServiceType addServiceType(ServiceType serviceType) {
        List<ServiceType> allServiceTypes = getAllServiceTypes();

        for(ServiceType s : allServiceTypes){
            if(s.equals(serviceType)){
                throw new ServiceTypeExistsException(
                        "This type of service already exists!"
                );
            }
        }

        serviceTypeRepo.save(serviceType);
        return serviceType;
    }
}
