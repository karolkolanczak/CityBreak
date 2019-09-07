package com.spring.module.dao;

import com.spring.module.model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDAOImpl implements UserDAO {

    @Autowired
    private SessionFactory sessionFactory;

    protected Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    @Override
    public List<User> getUsers() {
        Query<User> query=getSession().createSQLQuery("Select * FROM user").addEntity(User.class);
        // alternative
        // Query<User> query =getSession().createQuery("from User",User.class);
        List<User>listOfUsers=query.getResultList();
        return listOfUsers;
    }

    @Override
    public void saveUser(User user) {
        getSession().saveOrUpdate(user);
    }

    @Override
    public User getUser(int userId) {
//        User user=getSession().get(User.class,userId);
        Query <User>query=getSession().createSQLQuery("Select * FROM user where id=1").addEntity(User.class);
        List<User>listOfUsers= query.getResultList();
        User user=listOfUsers.get(0);
        return user;
    }

    @Override
    public void deleteUser(int userId) {
        User user=getUser(userId);
        getSession().delete(user);
    }
}
