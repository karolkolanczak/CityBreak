package com.spring.module;

import com.spring.module.model.Address;
import com.spring.module.model.Customer;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringModuleApplication {

	public static void main(String[] args) {

       ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("application-context.xml");
        //        Customer customer1=context.getBean("customer",Customer.class);
        //        customer1.setLastname("abba");
        //        System.out.println("-------------"+customer1.getLastname());
        context.close();


        Session session;
        SessionFactory factory=new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Customer.class)
                .addAnnotatedClass(Address.class)
                .buildSessionFactory();




        session = factory.getCurrentSession();
        Address addressTemp=new Address("pomorska 12","102-02","barcelona");
        Customer customer =new Customer ("aa","danka", "123@wp.pl","123456", addressTemp);
        session.beginTransaction();
        session.save(customer);

        session.getTransaction().commit();

        factory.close();


	}

}
