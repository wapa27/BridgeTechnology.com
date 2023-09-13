package com.bridgetechnology.bridgetechnology.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class EmailService {
    
    @Autowired
    private JavaMailSenderImpl javaMailSender;

    public void sendEmail(String clientName, String clientEmail, String clientPhoneNumber, String clientMessage) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo(clientEmail);
        helper.setText(clientMessage);
        helper.setSubject("Bridge Technology Inquiry");

        javaMailSender.send(message);
    }
}
