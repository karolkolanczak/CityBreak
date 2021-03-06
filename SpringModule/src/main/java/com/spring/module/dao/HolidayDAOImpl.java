package com.spring.module.dao;


import com.spring.module.model.Holiday;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
    public class HolidayDAOImpl implements HolidayDAO {

        @Autowired
        private SessionFactory sessionFactory;

    protected Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    @Override
    public List<Holiday> getHolidays() {
        // MYSQL
//           Query<Holiday> query =getSession().createQuery("from Holiday",Holiday.class);

        // POSTGRES
          Query<Holiday> query=getSession().createSQLQuery("Select * FROM holiday").addEntity(Holiday.class);

        // alternative
        // Query<Holiday> query =getSession().createQuery("from Holiday",Holiday.class);
        List <Holiday> listOfHolidays=query.getResultList();
        return listOfHolidays;
    }

    @Override
    public void saveHoliday(Holiday holiday) {
        getSession().saveOrUpdate(holiday);
    }

    @Override
    public Holiday getHoliday(int holidayId) {
        Holiday holiday=getSession().get(Holiday.class,holidayId);
        return holiday;
    }

    @Override
    public void deleteHoliday(int holidayId) {
        Holiday holiday=getHoliday(holidayId);
        getSession().delete(holiday);

//        below deletes only 'Holiday' not 'HolidayDetails'
//        Query theQuery =getSession().createQuery("delete from Holiday where id=:holidayId");
//        theQuery.setParameter("holidayId", holidayId);
//        theQuery.executeUpdate();
    }
}
