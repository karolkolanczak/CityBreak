package com.spring.module.controller;

import com.spring.module.model.Holiday;
import com.spring.module.service.HolidayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class HolidayRestContoller {

    @Autowired
    HolidayService holidayService;

    @GetMapping("/holidays")
    public List<Holiday> getListOfHolidays(){
        List<Holiday> listOfHolidays=new ArrayList<>();
        listOfHolidays=holidayService.getHolidays();
        return listOfHolidays;
    }
}
