package com.irian.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.irian.backend.enums.Status;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "appointment")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Appointment {
    @Id
    @Column(name = "id")
    @SequenceGenerator(
            name = "appointment_id_generator",
            sequenceName = "appointment_id"
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "appointment_id_generator"
    )
    private Long id;
    @Column(name = "animalName")
    private String animalName;
    @Column(name = "doctorName")
    private String doctorName;
    @Column(name = "dateTime")
    private LocalDateTime dateTime;
    @Column(name = "status")
    private Status status;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "appointment_service",
            joinColumns = @JoinColumn(
                    name = "appointmentId",
                    referencedColumnName = "id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "serviceId",
                    referencedColumnName = "id"
            )
    )
    private List<ServiceType> serviceTypes;
    @Column(name = "diagnostic")
    private String diagnostic;
}
