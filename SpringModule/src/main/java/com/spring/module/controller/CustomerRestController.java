package com.spring.module.controller;

import com.spring.module.model.Customer;
import com.spring.module.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CustomerRestController {

    @Autowired
    CustomerService customerService;

//    @PostConstruct
//    public void loadData(){
//        listOfCustomers=new ArrayList<>();
//        listOfCustomers.add(new Customer(1,"Adam","kownacki","123@wp.pl"));
//        listOfCustomers.add(new Customer(2,"tmoasz","adamek","123@wp.pl"));
//        listOfCustomers.add(new Customer(3,"edyta","bartosiewicz","123@wp.pl"));
//    }

    @GetMapping("/customers/{customerId}")
    public Customer getCustomer(@PathVariable int customerId){
        Customer customer=customerService.getCustomer(customerId);
        return customer;
    }

    @GetMapping("/customers")
    public List<Customer> getListOfCustomers(){
        List<Customer> listOfCustomers=new ArrayList<>();
        listOfCustomers=customerService.getCustomers();
        return listOfCustomers;
    }

    @PostMapping("/customers")
    public Customer addCustomer(@RequestBody Customer customer){
        // below in order to create new id
        customer.setId(0);
        customerService.saveCustomer(customer);
        return customer;
    }

    @PutMapping("/customers")
    public Customer updateCustomer(@RequestBody Customer customer){
        customerService.saveCustomer(customer);
        return customer;
    }

    @DeleteMapping("/customers/{customerId}")
    public String deleteCustomer(@PathVariable int customerId) {
        customerService.deleteCustomer(customerId);
        return "Deleted customer id - " + customerId;
    }
}
