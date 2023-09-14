package com.bridgetechnology.bridgetechnology.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.bridgetechnology.bridgetechnology.model.SimpleEmail;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSenderImpl javaMailSender;

    public void sendEmail(SimpleEmail simpleEmail) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        // Build Email Message
        StringBuilder sbMessage = new StringBuilder();
        sbMessage.append("Email sent from ");
        sbMessage.append(simpleEmail.name);
        sbMessage.append(",\n\n");
        sbMessage.append("Phone Number: ");
        sbMessage.append(simpleEmail.phoneNumber);
        sbMessage.append(",\n\n");
        sbMessage.append(simpleEmail.message);

        helper.setTo(simpleEmail.email);
        helper.setText(sbMessage.toString());
        helper.setSubject("Bridge Technology Inquiry");

        javaMailSender.send(message);
    }
}
