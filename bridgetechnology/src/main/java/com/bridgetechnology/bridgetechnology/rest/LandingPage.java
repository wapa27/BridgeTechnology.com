package com.bridgetechnology.bridgetechnology.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LandingPage {

    @RequestMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    private String helloWorld() {
        return "Welcome to bridge!";
    }

}
