package com.spring.module;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
    public class SpringModuleApplication extends SpringBootServletInitializer{

    public static void main(String[] args) {
        ApplicationContext context=SpringApplication.run(SpringModuleApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(SpringModuleApplication.class);
    }
}



