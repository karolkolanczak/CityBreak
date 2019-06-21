package com.spring.module.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
public class HolidayDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String description;
    private double priceForAdult;
    private double priceForChild;
    @OneToOne(mappedBy = "holidayDetails" ,cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    // below 2nd part of solution for "JSON infinite recursion" occuring while requesting "api/holidays" through Rest
    // first part in "Holidays"
    @JsonBackReference
    private Holiday holiday;

    public HolidayDetails() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPriceForAdult() {
        return priceForAdult;
    }

    public void setPriceForAdult(double priceForAdult) {
        this.priceForAdult = priceForAdult;
    }

    public double getPriceForChild() {
        return priceForChild;
    }

    public void setPriceForChild(double priceForChild) {
        this.priceForChild = priceForChild;
    }

    public Holiday getHoliday() {
        return holiday;
    }

    public void setHoliday(Holiday holiday) {
        this.holiday = holiday;
    }
}
