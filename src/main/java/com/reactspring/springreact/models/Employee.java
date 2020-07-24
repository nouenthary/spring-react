package com.reactspring.springreact.models;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "employee")
public class Employee {

    // TODO- Generate Getters and Setter of all the fields
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Pattern(regexp = "^[\\p{L} .'-]+$", message = "The name field may only contain letters")
    @Column(name = "name")
    private String name;

    @NotEmpty(message = "The email field is required")
    @Email(message = "The value '${validatedValue}' must be a valid email address")
    @Column(name = "email")
    private String email;

    @NotEmpty(message = "The address field is required")
    @Column(name = "address")
    private String address;

    @Digits(integer = 10,fraction = 0, message = "The phone field must be less than or equal to 10")
    @Column(name = "phone")
    private Long phone;

    public Employee() {
    }

    public Employee(Integer id, String name, String email, String address, Long phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", phone=" + phone +
                '}';
    }
}
