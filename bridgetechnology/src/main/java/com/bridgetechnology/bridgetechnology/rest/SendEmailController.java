package com.bridgetechnology.bridgetechnology.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bridgetechnology.bridgetechnology.model.SimpleEmail;
import com.bridgetechnology.bridgetechnology.service.EmailService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/email-service", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
public class SendEmailController {

    @Autowired
    EmailService emailService;

    // Endpoint for Email Request
    // Try to send email, throw exception if failed
    @PostMapping("/send-email")
    public ResponseEntity<Object> sendEmail(@RequestBody SimpleEmail simpleEmail) {
        try {
            emailService.sendEmail(simpleEmail);
            return ResponseEntity.ok("{\"message\": \"Email successfully sent\"}");
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("{\"message\": \"Failed to Send Email\"}");
        }
    }
}
