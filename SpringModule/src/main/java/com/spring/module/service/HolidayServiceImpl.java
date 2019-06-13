package com.spring.module.service;

import com.spring.module.dao.HolidayDAO;
import com.spring.module.model.Holiday;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class HolidayServiceImpl implements HolidayService {


    @Autowired
    private HolidayDAO holidayDAO;

    @Override
    @Transactional
    public List<Holiday> getHolidays() {
        return holidayDAO.getHolidays();
    }

    @Override
    @Transactional
    public void saveHoliday(Holiday holiday) {
        holidayDAO.saveHoliday(holiday);
    }

    @Override
    @Transactional
    public Holiday getHoliday(int holidayId) {
        return holidayDAO.getHoliday(holidayId);
    }

    @Override
    @Transactional
    public void deleteHoliday(int holidayId) {
        holidayDAO.deleteHoliday(holidayId);
    }
}
