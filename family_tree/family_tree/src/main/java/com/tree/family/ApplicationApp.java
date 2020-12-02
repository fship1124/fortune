package com.tree.family;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ApplicationApp extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(ApplicationApp.class, args);
        System.out.println("family tree started!!");
    }
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        // TODO Auto-generated method stub
        return builder.sources(ApplicationApp.class);
    }
}