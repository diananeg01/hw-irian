package com.irian.backend.exceptions;

public class ServiceTypeExistsException extends RuntimeException{
    public ServiceTypeExistsException(String message) {
        super(message);
    }
}
