package com.spring.module.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
public class Holiday {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String city;
    private String country;
    private String capital;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name="holiday_details_id")
    // below 1st part of solution for "JSON infinite recursion" occuring while requesting "api/holidays" through Rest
    // second part in "HolidaysDetails"
    @JsonManagedReference
    private HolidayDetails holidayDetails;

    //    @Lob  (not working on production with postgresql, essential for mysql)
    @Lob
    private Byte[] image;
    @Transient
    private byte[] imagePrimitveBytes;

    private String imagePath;

    public Holiday() {
    }

    public Byte[] getImage() {
        return image;
    }

    public void setImage(Byte[] image) {
        this.image = image;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
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

    public String getCapital() {
        return capital;
    }

    public void setCapital(String capital) {
        this.capital = capital;
    }

    public byte[] getImagePrimitveBytes() {
        return imagePrimitveBytes;
    }

    public void setImagePrimitveBytes(byte[] imagePrimitveBytes) {
        this.imagePrimitveBytes = imagePrimitveBytes;
    }
}
