package com.spring.module.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
public class Holiday {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String city;
    private String country;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="holiday_details_id")
    private HolidayDetails holidayDetails;

    public Holiday() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public HolidayDetails getHolidayDetails() {
        return holidayDetails;
    }

    public void setHolidayDetails(HolidayDetails holidayDetails) {
        this.holidayDetails = holidayDetails;
    }
}
