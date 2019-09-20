package com.spring.module.model;

import javax.persistence.*;

@Entity
@Table(name="customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String lastname;
    private String email;
    private String phone;
    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="address_id")
    private Address address;


    public Customer() {
    }

    public Customer(int id,String name, String lastname, String email) {
        this.id=id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }

    public Customer(String name, String lastname, String email) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }

    public Customer(String name, String lastname, String email, String phone, Address address) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.address=address;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}

