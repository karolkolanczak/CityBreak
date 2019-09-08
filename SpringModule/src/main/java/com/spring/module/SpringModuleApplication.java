package com.spring.module;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringModuleApplication {

    public static void main(String[] args) {
        ApplicationContext context=SpringApplication.run(SpringModuleApplication.class, args);
    }

}



