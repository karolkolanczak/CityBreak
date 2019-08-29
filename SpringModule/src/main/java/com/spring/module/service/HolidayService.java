package com.spring.module.service;

import com.spring.module.model.Holiday;

import java.util.List;

public interface HolidayService {

    public List<Holiday> getHolidays();

    public void saveHoliday(Holiday holiday);

    public Holiday getHoliday(int holidayId);

//    public void deleteHoliday(int holidayId);
    public void deleteHoliday(int holidayId);
}
