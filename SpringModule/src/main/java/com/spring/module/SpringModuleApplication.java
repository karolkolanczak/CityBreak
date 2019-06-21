package com.spring.module;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.module.dao.CustomerDAOImpl;
import com.spring.module.model.Address;
import com.spring.module.model.Customer;
import com.spring.module.model.Holiday;
import com.spring.module.model.HolidayDetails;
import com.spring.module.service.CustomerService;
import com.spring.module.service.CustomerServiceImpl;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.support.ClassPathXmlApplicationContext;


import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.Arrays;


@SpringBootApplication
public class SpringModuleApplication {


//    @Autowired
//    private static ApplicationContext context;
//    @Autowired
//    static CustomerService customerService ;

    public static void main(String[] args) {

        ApplicationContext context=SpringApplication.run(SpringModuleApplication.class, args);


//       ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("application-context.xml");
//        //        Customer customer1=context.getBean("customer",Customer.class);
//        //        customer1.setLastname("abba");
//        //        System.out.println("-------------"+customer1.getLastname());
//        context.close();

//        CustomerDAOImpl cCustomerDAOImpl=new CustomerDAOImpl();
//
//        cCustomerDAOImpl.getCustomers();

//
//        session = factory.getCurrentSession();
//        Address addressTemp=new Address("pomorska 12","102-02","barcelona");
//        Customer customer =new Customer ("aa","danka", "123@wp.pl","123456", addressTemp);
//        session.beginTransaction();
//        session.save(customer);
//
//        session.getTransaction().commit();
//
//        factory.close();

//
//        ObjectMapper mapper = new ObjectMapper();
//        HolidayDAO holiday = new HolidayDAO();
//        try {
//            holiday = mapper.readValue(new File("SpringModule/src/main/resources/holiday.json"), HolidayDAO.class);
//        } catch (IOException e) {
//            System.out.println("------------------ " + e);
//        }

//        displayAllBeans();
//  System.out.println(holiday.getId()+ " "+holiday.getCity()+" "+holiday.getCountry()+" "+holiday.getHolidayDetails().getDescription());
//
    }



}



