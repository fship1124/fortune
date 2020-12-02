package com.tree.family.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class HomeController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/")
    public String index() {
        System.out.println("index");
        return "index";
    }

    @GetMapping("/page/**")
    public String page(HttpServletRequest request) {
        StringBuilder stringBuilder = new StringBuilder(request.getServletPath());

        logger.info("page : {}", stringBuilder.toString());

        String[] strArr = stringBuilder.toString().split("/");

        StringBuilder pathBuilder = new StringBuilder();
        pathBuilder.append("view").append("/");
        pathBuilder.append(strArr[2]).append("/");
        pathBuilder.append(strArr[3]);
        if (strArr.length >= 5) {
            pathBuilder.append("/");
            pathBuilder.append(strArr[4]);
        }
        String rtnPath = pathBuilder.toString();
        logger.info("path : {}", rtnPath);
        return rtnPath;
    }
}
