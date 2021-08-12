package com.bridgetechnology.bridgetechnology.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LandingPage {

    @GetMapping
    private String helloWorld() {
        return "Welcome to bridge!";
    }

}
