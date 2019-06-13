package com.spring.module.dao;

import com.spring.module.model.Customer;
import com.spring.module.model.Holiday;

import java.util.List;

public interface HolidayDAO {

    public List<Holiday> getHolidays();

    public void saveHoliday(Holiday holiday);

    public Holiday getHoliday(int holidayId);

    public void deleteHoliday(int holidayId);
}
