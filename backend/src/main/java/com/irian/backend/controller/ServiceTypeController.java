package com.irian.backend.controller;

import com.irian.backend.entity.ServiceType;
import com.irian.backend.service.ServiceTypeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(path = "/service-type")
public class ServiceTypeController {
    @Autowired
    private final ServiceTypeService serviceTypeService;

    @GetMapping(path = "/all")
    public ResponseEntity<List<ServiceType>> getAllServiceTypes(){
        return new ResponseEntity<>(serviceTypeService.getAllServiceTypes(), HttpStatus.OK);
    }

    @PostMapping(path = "/add-service-type")
    public ResponseEntity<ServiceType> addServiceType(@RequestBody ServiceType serviceType){
        return new ResponseEntity<>(serviceTypeService.addServiceType(serviceType), HttpStatus.CREATED);
    }
}
