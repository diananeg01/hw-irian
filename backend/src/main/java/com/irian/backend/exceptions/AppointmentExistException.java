package com.irian.backend.exceptions;

public class AppointmentExistException extends RuntimeException{
    public AppointmentExistException(String message) {
        super(message);
    }
}
