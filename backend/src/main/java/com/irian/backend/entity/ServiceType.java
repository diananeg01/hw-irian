package com.irian.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "serviceType")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class ServiceType {
    @Id
    @SequenceGenerator(
            name = "service_id_generator",
            sequenceName = "service_id"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "service_id_generator"
    )
    private Long id;
    private String name;
    private Double price;
}
