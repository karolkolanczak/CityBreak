package com.spring.module.dao;


import com.spring.module.model.Customer;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.hibernate.query.Query;
import java.util.ArrayList;
import java.util.List;

@Repository
public class CustomerDAOImpl implements CustomerDAO {


    @Autowired
    private SessionFactory sessionFactory;

    protected Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    @Override
    public List<Customer> getCustomers() {
        Query<Customer> query =getSession().createQuery("from Customer",Customer.class);
        List <Customer> listOfCustomers=new ArrayList<>();
        listOfCustomers = query.getResultList();
        return listOfCustomers;
    }

    @Override
    public void saveCustomer(Customer customer) {
        getSession().saveOrUpdate(customer);
    }

    @Override
    public Customer getCustomer(int customerId) {
        Customer customer=getSession().get(Customer.class,customerId);
        return customer;
    }

    @Override
    public void deleteCustomer(int customerId) {
        Query query =getSession().createNativeQuery("delete from Customer where id=:customId",Customer.class);
        query.setParameter("customId", customerId);
        query.executeUpdate();
    }
}
