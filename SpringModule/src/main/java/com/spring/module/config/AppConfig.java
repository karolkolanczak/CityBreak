package com.spring.module.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
//@EnableWebMvc
//@ComponentScan
@ComponentScan(basePackages ="com.spring.module")
public class AppConfig {

}
